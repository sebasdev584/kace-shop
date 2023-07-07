import { API_URL } from "./config";

export default async function deleteProduct(id) {
    const apiUrl = `${API_URL}/delete/${id}`
    const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!res.ok) {
        throw new Error('Error al guardar el registro');
    }
    return true;
}