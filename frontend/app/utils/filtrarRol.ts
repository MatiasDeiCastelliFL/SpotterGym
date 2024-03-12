import { urlAPi } from "./urlBase";

export async function filtrarRol(){
    const urlToFetch = `${urlAPi}/rol`;
    try {
        const response = await fetch(urlToFetch);
        return await response.json();
    } catch (error) {
        console.error('Error con la solicitud:', error);
        throw error;
    }
}