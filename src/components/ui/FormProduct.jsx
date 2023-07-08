import { Formik, Form, Field, ErrorMessage } from "formik"
import { useLocation } from "wouter"
import { object } from "yup"
import { INITIAL_VALUES, VALIDATIONS_FORM } from "../../utils"
import useProducts from "../../hooks/useProducts"
import { useEffect, useState } from "react"

const FormProduct = ({ id = '' }) => {
    const { addProduct, getDataProduct, update, loading, product, message, error } = useProducts()
    const [initialValues, setInitialValues] = useState({})
    const [isUpdate, setIsUpdate] = useState(false)
    const [_, navigate] = useLocation()

    const handleSubmit = (values, { resetForm }) => {
        if (!isUpdate) {
            addProduct(values)
            !error && resetForm()
        } else {
            update(id, values)
            navigate("/detalle")
        }
    }

    useEffect(() => {
        if (!id) {
            setInitialValues(INITIAL_VALUES)
            setIsUpdate(false)
            return
        }
        getDataProduct(id)
        setIsUpdate(true)
    }, [getDataProduct, id])

    useEffect(() => {
        if (isUpdate) {
            setInitialValues({
                product_name: product.product_name,
                product_reference: product.product_reference,
                product_price: product.product_price,
                product_weight: product.product_weight,
                product_category: product.product_category,
                product_stock: product.product_stock,
            })
        }
    }, [product, isUpdate])

    return (
        <>
            <h1 className='max-w-xs text-3xl'>{isUpdate ? 'Actualizar' : 'Crear'} producto</h1>
            {!loading &&
                <Formik
                    enableReinitialize={true}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={object(VALIDATIONS_FORM)}
                >
                    {({ isSubmitting, touched }) => (
                        <Form className="flex flex-col mt-3 gap-2">
                            <label className="text-lg mt-2" htmlFor="product_name">Nombre del producto:</label>
                            <Field
                                type='text'
                                name="product_name"
                                className="border border-gray-400 outline-none text-lg rounded-lg p-2"
                            />
                            {touched.product_name && <ErrorMessage name="product_name" component="div" className="text-lg text-red-500" />}

                            <label className="text-lg mt-2" htmlFor="product_reference">Referencia del producto:</label>
                            <Field
                                type='text'
                                name="product_reference"
                                className="border border-gray-400 outline-none text-lg rounded-lg p-2"
                            />
                            {touched.product_reference && <ErrorMessage name="product_reference" component="div" className="text-lg text-red-500" />}

                            <label className="text-lg mt-2" htmlFor="product_price">Precio del producto:</label>
                            <Field
                                type='number'
                                name="product_price"
                                className="border border-gray-400 outline-none text-lg rounded-lg p-2"
                            />
                            {touched.product_price && <ErrorMessage name="product_price" component="div" className="text-lg text-red-500" />}

                            <label className="text-lg mt-2" htmlFor="product_weight">Peso del producto:</label>
                            <Field
                                type='number'
                                name="product_weight"
                                className="border border-gray-400 outline-none text-lg rounded-lg p-2"
                            />
                            {touched.product_weight && <ErrorMessage name="product_weight" component="div" className="text-lg text-red-500" />}

                            <label className="text-lg mt-2" htmlFor="product_category">Categoria del producto:</label>
                            <Field
                                type='text'
                                name="product_category"
                                className="border border-gray-400 outline-none text-lg rounded-lg p-2"
                            />
                            {touched.product_category && <ErrorMessage name="product_category" component="div" className="text-lg text-red-500" />}

                            <label className="text-lg mt-2" htmlFor="product_stock">Stock del producto:</label>
                            <Field
                                type='number'
                                name="product_stock"
                                className="border border-gray-400 outline-none text-lg rounded-lg p-2"
                            />
                            {touched.product_stock && <ErrorMessage name="product_stock" component="div" className="text-lg text-red-500" />}

                            {error && <div>{error.message}</div>}
                            {message && <div className="bg-green-500 p-4 rounded-lg text-white">{message}</div>
                            }

                            <button type="submit" disabled={isSubmitting} className="mt-4 p-4 text-xl text-white bg-orange-400 rounded-xl">Enviar</button>
                        </Form>
                    )}
                </Formik >
            }
        </>
    )
}

export default FormProduct