import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium, firefox, Page, webkit} from 'playwright';
import { Elements } from '../../../features/pages/objectModel';
import { ApiRequestTest } from '../../../utils/api_request';
import { expect } from 'chai';


let browser;
let page: Page
let elements: Elements
let apiRequest: ApiRequestTest
let segundos = 2000
const browserName = 'firefox'
let URL: any
let userData: any

Before( async () => {
    browser = await firefox.launch({ headless: true });
    page = await browser.newPage();
    elements = new Elements(page)
    apiRequest = new ApiRequestTest(page)
});

Given('ingresar en la ruta gimnasios {string}', async (url: string) => {
    URL = url
});

// Solicitud get en api activities
When('se realiza una solicitud GET en la ruta activities obteniendo status {int}', async (status: number) => {
    let responseActivities = await apiRequest.solicitudGET(URL)
    console.log(status)
    console.log(responseActivities.message)
    console.log(responseActivities.status)

});


Then('se muestra una lista con las actividades creados', async () => {
    let responseActivities = await apiRequest.solicitudGET(URL)
    console.log(responseActivities.activities)
});

// Solicitud POST en api activities
When('se realiza una solicitud POST en la ruta activities', async () => {


});

When('se envian datos de solicitud en el body', async () => {
    userData = {
        // _id: 'uno',
        name: 'Hipertrofia y entrenamiento',
        description: 'ejercicios de musculacion y aerobicos',
        // start_time: '16/02/2024',
        // finish_time: '17/03/2024',
        price: '150',
        __v: '1',
    }

});

Then('la actividad se crear correctamente indicando status {int}', async (status: number) => {
    let responsePOSTactivities = await apiRequest.solicitudPOST(URL, userData)
    console.log(responsePOSTactivities.status)
});


After( async () => {
    await page.waitForTimeout(segundos)
});
