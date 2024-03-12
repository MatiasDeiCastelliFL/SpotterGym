import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium, firefox, Page, webkit} from 'playwright';
import { Elements } from '../../../features/pages/objectModel';
import { ApiRequestTest } from '../../../utils/api_request';

let browser;
let page: Page
let elements: Elements
let apiRequest: ApiRequestTest
let segundos = 2000
const browserName = 'firefox'

let userData: any

Before( async () => {
    browser = await firefox.launch({ headless: true });
    page = await browser.newPage();
    // const context = await browser.newContext();
    elements = new Elements(page)
    apiRequest = new ApiRequestTest(page)
});

Given('se ingresa en la ruta instructores', async function ()  {

});

// Obtener todos los instructores
When('se reliza una solicitud GET {string}', async function (URL: string)  {
    apiRequest.solicitudGET(URL)
});


Then('se deberia ver una una estado de respuesta 200', async () => {

});

Then('se muestra una lista de instructores', async () => {

});

// Crean un isntructor
Given('que los siguientes datos del instructor están listos para ser enviados', async () => {
    // Crear datos del instructor
    userData = {
        firstName: 'NombreZ',
        lastName: 'AplledioZ',
        email: 'userZ@mail.com',
        password: 'wxyz1234',
        description: 'Instructor del gimnasio',
        phone: '3416123456' // Asegúrate de proporcionar un número de teléfono válido aquí
    };

});

When('se realiza una solicitud POST a {string} con los datos del instructor', async function (url: string) {
    await page.waitForTimeout(segundos)
    apiRequest.crearInstructor(url,userData)

});

Then('debería recibir una respuesta con el estado 201', async () => {
    // Verificar que el estado de la respuesta coincida con el estado esperado
    // expect(responseStatus).to.equal(expectedStatus);
});

Then('debería ver al instructor creado en la lista de instructores', async () => {
    // Aquí podrías implementar la lógica para verificar que el instructor se ha creado correctamente en la lista de instructores.
    // Esto podría implicar realizar otra solicitud GET a la lista de instructores y buscar al instructor recién creado.
    // La implementación exacta dependerá de cómo esté estructurada tu API y cómo se almacenen los datos.
    // Por ahora, supondrémos que esto se hace de forma correcta y se omite la implementación detallada.
});

After( async () => {
    await page.waitForTimeout(segundos)
});
