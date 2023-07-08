import { ErrorMessage, Field, Form, Formik } from 'formik'
import { INITIAL_VALUES_SELL, VALIDATIONS_FORM_SELL } from '../../utils'
import { object } from 'yup'
import { useEffect, useState } from 'react'
import useProducts from '../../hooks/useProducts'
import { useLocation } from 'wouter'

export default function VentaProducto() {
    const { getProductsStock, productSell, error, products } = useProducts()
    const [errorSell, setErrorSell] = useState('')
    const [_, navigate] = useLocation()


    const handleSubmit = ({ product_id, product_stock }) => {
        const product = products.find(product => product._id === product_id)

        if (product_stock > product.product_stock) {
            setErrorSell('Cantidad excede stock')
            return
        }
        productSell(product_id, product_stock)
        setErrorSell('')
        alert("Producto vendido correctamente!!")
        navigate('/detalle')
    }

    useEffect(() => {
        getProductsStock()
    }, [getProductsStock])

    return (
        <div className="bg-white p-10 rounded-md text-black h-screen mt-4 min-w-[50%]">
            <h1 className='max-w-xs text-3xl'>Vender producto</h1>
            {errorSell && <p className="text-lg bg-red-500 p-2 rounded-sm">{errorSell}</p>}
            {products.length === 0 && <p className="text-lg bg-red-500 p-2 rounded-sm">No hay productos con stock</p>}
            {!error &&
                <Formik
                    initialValues={INITIAL_VALUES_SELL}
                    onSubmit={handleSubmit}
                    validationSchema={object(VALIDATIONS_FORM_SELL)}
                >
                    {() => (
                        <Form className="flex flex-col gap-2">
                            <label className="text-xl mt-2" htmlFor="product_id">Seleccione el producto</label>
                            <Field
                                component="select"
                                name="product_id"
                                className="outline-none border border-gray-400 p-2 rounded-md"
                            >
                                <option value="">...Seleccione</option>
                                {
                                    products.map(({ _id, product_name }) => <option key={_id} value={_id}>{product_name}</option>)
                                }
                            </Field>
                            <ErrorMessage name='product_id' component='div' className='text-lg text-red-500' />

                            <label htmlFor="product_stock">Cantidad a comprar</label>
                            <Field
                                type="number"
                                name="product_stock"
                                className="outline-none border border-gray-400 p-2 rounded-md"
                            />
                            <ErrorMessage name='product_stock' component='div' className='text-lg text-red-500' />

                            <button type="submit" className="mt-4 p-4 text-xl text-white bg-orange-400 rounded-xl">Comprar</button>
                        </Form>
                    )
                    }
                </Formik >
            }
        </div >
    )
}