import { Page, chromium} from 'playwright';
import { expect } from 'chai';
import { promises } from 'fs';

export class ApiRequestTest {

    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async solicitudGET(url: string){
        try {
            const response = await fetch(url);
    
            if (!response.ok) {
                throw new Error(`Error al realizar la solicitud: ${response.status} ${response.statusText}`);
            }
    
            const data = await response.json();
            // console.log('Respuesta de la API:', data);
            return data
        } catch (error) {
            console.error('Se produjo un error al obtener los datos:', error);
        }
    }

    public async solicitudPOST(url: string, userData: any) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
    
            if (!response.ok) {
                throw new Error(`Error al realizar la solicitud: ${response.status} ${response.statusText}`);
            }
    
            const responseData = await response.json();
            console.log('Respuesta de la API:', responseData);
            return responseData
        } catch (error) {
            console.error('Se produjo un error al obtener los datos:', error);
        }
    }
    
}


