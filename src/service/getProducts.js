import { API_URL } from "./config";

export default async function getProducts() {
    const urlApi = `${API_URL}/products`

    try {
        const response = await fetch(urlApi);
        if (!response.ok) {
            throw new Error('Error al consumir el api');
        }
        const res = await response.json();
        const { products } = res;
        return products;
    } catch (error) {
        return error;
    }
}