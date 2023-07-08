import { useCallback, useState } from "react";
import saveProduct from "../service/saveProduct";
import getProducts from "../service/getProducts";
import getProduct from "../service/getProduct";
import updateProduct from "../service/updateProduct";
import deleteProduct from "../service/deleteProduct";
import sellProduct from "../service/sellProduct";
import getProductsByStock from "../service/getProductsByStock";


export default function useProducts() {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState([])
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const addProduct = useCallback((payload) => {
        setLoading(true)
        saveProduct(payload)
            .then(res => setMessage(res.message))
            .catch(setError)
            .finally(() => setLoading(false))
    }, [setMessage])

    const update = useCallback((id, payload) => {
        setLoading(true)
        updateProduct(id, payload)
            .then(res => setMessage(res.message))
            .catch(setError)
            .finally(() => setLoading(false))
    }, [setMessage])

    const productDelete = (id) => {
        setLoading(true)
        deleteProduct(id)
            .then(setMessage)
            .catch(setError)
            .finally(() => setLoading(false))
    }

    const productSell = useCallback((id, cant) => {
        setLoading(true)
        sellProduct(id, cant)
            .then(setMessage)
            .catch(setError)
            .finally(() => setLoading(false))

    }, [setMessage])

    const getAllProducts = useCallback(() => {
        setLoading(true)
        getProducts()
            .then(setProducts)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [setProducts])

    const getProductsStock = useCallback(() => {
        setLoading(true)
        getProductsByStock()
            .then(setProducts)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [setProducts])

    const getDataProduct = useCallback((id) => {
        setLoading(true)
        getProduct(id)
            .then(setProduct)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [setProduct])

    return {
        products,
        message,
        error,
        loading,
        product,
        getAllProducts,
        getProductsStock,
        getDataProduct,
        addProduct,
        update,
        productDelete,
        productSell
    }

}