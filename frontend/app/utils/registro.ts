import { urlAPi } from "./urlBase";

interface registerData {
    email: string;
    pass: string;
    firstName: string;
    lastName: string;
    phone: string;
    role_id: string;
    description: string;
}


//esta funcion usa el metodo post.
export async function registro(data: registerData){
    const urlToFetch = `${urlAPi}/user`;
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