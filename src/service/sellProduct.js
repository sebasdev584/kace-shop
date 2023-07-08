import { API_URL } from "./config";
export default async function sellProduct(id, cant) {
    const apiUrl = `${API_URL}/sell/${id}/${cant}`
    const res = await fetch(apiUrl, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!res.ok) {
        throw new Error('Error al realizar la venta');
    }
    return await res.json();
}