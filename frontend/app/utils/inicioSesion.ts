import { urlAPi } from "./urlBase";

interface LoginData {
    email: string;
    pass: string;
}
//esta funcion usa el metodo post.
export async function login(data: LoginData){
    const urlToFetch = `${urlAPi}/user/login`;
    try {
        const response = await fetch(urlToFetch, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
}