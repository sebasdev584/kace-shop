import { API_URL } from "./config";

export default async function updateProduct(id, payload) {
    const apiUrl = `${API_URL}/update/${id}`
    const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    if (!res.ok) {
        throw new Error('Error al guardar el registro');
    }
    return await res.json();
}