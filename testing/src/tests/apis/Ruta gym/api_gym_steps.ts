import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium, firefox, Page, webkit} from 'playwright';
import { Elements } from '../../../features/pages/objectModel';
import { ApiRequestTest } from '../../../utils/api_request';
import { expect } from 'chai';
import { url } from 'webdriverio/build/commands/browser';

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

Given('ingresamos en la ruta gimnasios {string}', async (url: string) => {
    URL = url
});

// Solicitud get en api gyms
When('se realiza una solicitud GET en la ruta gyms', async () => {
    let responseGYM = await apiRequest.solicitudGET(URL)
    console.log(responseGYM.message)

});


Then('se deberia ver una respuesta {int} ok', async (status: number) => {
    let responseGYM = await apiRequest.solicitudGET(URL)
    console.log(responseGYM.status)
    // expect(responseGYM).to.equal(status)
    
});

Then('se muestra una lista con los gimansios creados', async () => {
    let responseGYM = await apiRequest.solicitudGET(URL)
    console.log(responseGYM.gyms)
});

// solicitud POST en api gyms
When('se envía una solicitud POST a la ruta de creación de gimnasios', async () => {


});

When('se incluyen los siguientes datos en la solicitud', async () => {
userData = {
    name: 'a',
    address: '1'
}

});

Then('la respuesta debería incluir un código de estado {int}', async (status: number) => {
    let responsePOST = await apiRequest.solicitudPOST(URL, userData)
    console.log(responsePOST.status)
    console.log(status)

});

Then('el gimnasio creado debería estar disponible en la lista del servidor', async () => {

});

After( async () => {
    await page.waitForTimeout(segundos)
});
