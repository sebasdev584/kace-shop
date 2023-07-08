import { useEffect, useState } from "react"
import useProducts from "../../hooks/useProducts"
import { Link } from "wouter"

const DetalleProducto = () => {
    const { getAllProducts, productDelete, loading, products, error } = useProducts()
    const [deleted, setDeleted] = useState(false)

    const deleteProduct = (id, nameProduct) => {
        let deleteProduct = confirm(`Deseas eliminar el producto: ${nameProduct}?`)
        if (deleteProduct) {
            productDelete(id)
            setDeleted(true)
            getAllProducts()
        }
        setDeleted(false)
    }

    useEffect(() => {
        getAllProducts()
    }, [getAllProducts])

    { if (error) return (<div className="bg-red-500 text-white">{error}</div>) }
    return (
        <div className="bg-black flex flex-col items-center h-screen">
            <div className="text-white">
                {deleted && <div className="bg-green text-white text-xl">Producto eliminado correctamente</div>}
                {!loading && products &&
                    <table className="bg-slate-400 mt-10 rounded-md text-center">
                        <thead>
                            <tr>
                                <th className="p-5">Nombre</th>
                                <th className="p-5">Precio</th>
                                <th className="p-5">Categoría</th>
                                <th className="p-5">Stock</th>
                                <th className="p-5">Eliminar</th>
                                <th className="p-5">Actualizar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => {
                                return (
                                    <tr key={product._id}>
                                        <td className="p-5 pt-0">{product.product_name}</td>
                                        <td className="p-5 pt-0">{product.product_price}</td>
                                        <td className="p-5 pt-0">{product.product_category}</td>
                                        <td className="p-5 pt-0">{product.product_stock}</td>
                                        <td className="p-5 pt-0"><button onClick={() => deleteProduct(product._id, product.product_name)}>❌</button></td>
                                        <td className="p-5 pt-0">
                                            <Link to={`/product/${product._id}`}>
                                                📝
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    )
}

export default DetalleProducto