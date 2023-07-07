import { API_URL } from "./config";

export default async function getProduct(id) {
    const urlApi = `${API_URL}/product/${id}`

    try {
        const response = await fetch(urlApi);
        if (!response.ok) {
            throw new Error('Error al consumir el api');
        }
        const res = await response.json();
        const { product } = res;
        return product;
    } catch (error) {
        return error;
    }
}