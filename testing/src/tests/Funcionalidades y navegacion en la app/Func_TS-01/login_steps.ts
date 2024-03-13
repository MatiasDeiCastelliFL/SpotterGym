import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { expect } from 'chai';
import { chromium, firefox, Page, webkit} from 'playwright';
import { Elements } from '../../../features/pages/objectModel';
import { Links } from '../../../features/pages/linksProperties'; 

let browser;
let page: Page
let elements: Elements
let links: Links
let segundos = 1000
const browserName = 'firefox'
const escenario1 = '@agregar-producto'
const escenario2 = '@eliminar-producto'

Before( async () => {
    browser = await firefox.launch({ headless: false });
    page = await browser.newPage();
    elements = new Elements(page)
    links = new Links(page)
});

Given('estoy en la pagina de login en spotter {string}', async function (URL: string)  {
    await page.goto(URL)
    await page.waitForTimeout(segundos)
    const currentUrl = page.url();
    console.log(currentUrl)
});

// TS-01 | TC-05 | Campo de email vacio
When('no se ingresa ningun caracter en campo de email', async () => {
// se obtiene email y password de google sheet S13-07-n-node-react
    let TC05 = await elements.datosParametrizadosLogin(6)
    let password = TC05.userId.password
    let email = TC05.userId.email
    await page.waitForTimeout(segundos)
    elements.enterUsername(email)
    await page.waitForTimeout(segundos)
    elements.enterPassword(password)
    await page.getByRole('button', { name: 'Confirmar' }).click();
});

Then('debria ver un mensaje de email es requerido', async () => {
    await page.waitForTimeout(segundos)
    let TC05 = await elements.datosParametrizadosLogin(6)
    let mensaje = TC05.userId.resultadoEsperado
    const textoerrorEmailObtenido = await page.$('//html/body/div/div/div/form/div[2]/div[1]');
    const textoElemento = await textoerrorEmailObtenido!.innerText();
    expect(mensaje).to.contain(textoElemento)

    console.log(`Mensaje mostrado: ${textoElemento}`)
});

// TS-01 | TC-04 | Campo de contraseña vacio
When('no se ingresa ningun caracter en campo de contraseña', async () => {
// se obtiene email y password de google sheet S13-07-n-node-react
    let TC04 = await elements.datosParametrizadosLogin(5)
    let password = TC04.userId.password
    let email = TC04.userId.email
    await page.waitForTimeout(segundos)
    elements.enterUsername(email)
    await page.waitForTimeout(segundos)
    elements.enterPassword(password)
    await page.getByRole('button', { name: 'Confirmar' }).click();
});

Then('debria ver un mensaje de contraseña es requerida', async () => {
    await page.waitForTimeout(segundos)
    let TC04 = await elements.datosParametrizadosLogin(5)
    let mensaje = TC04.userId.resultadoEsperado
    const textoerrorPassObtenido = await page.$('//html/body/div/div/div/form/div[3]');
    const textoElemento = await textoerrorPassObtenido!.innerText();
    expect(mensaje).to.contain(textoElemento)

    console.log(`Mensaje mostrado: ${textoElemento}`)
});

// TS-01 | TC-09 | Longitud minima de contraseña
When('ingreso una contraseña de 7 caracteres', async () => {
// se obtiene email y password de google sheet S13-07-n-node-react
    let TC09 = await elements.datosParametrizadosLogin(10)
    let password = TC09.userId.password
    let email = TC09.userId.email
    await page.waitForTimeout(segundos)
    elements.enterUsername(email)
    await page.waitForTimeout(segundos)
    elements.enterPassword(password)
    await page.getByRole('button', { name: 'Confirmar' }).click();
});

Then('deberia ver un mensaje indicando la contraseña debe ser mayor a 8 caracteres', async () => {
    await page.waitForTimeout(segundos)
    let TC09 = await elements.datosParametrizadosLogin(10)
    let mensaje = TC09.userId.resultadoEsperado
    const textoerrorPassObtenido = await page.$('//html/body/div/div/div/form/div[3]');
    const textoElemento = await textoerrorPassObtenido!.innerText();
    expect(mensaje).to.contain(textoElemento)

    console.log(`Mensaje mostrado: ${textoElemento}`)
});

// TS-01 | TC-10 | Longitud maxima de contraseña
When('ingreso una contraseña de 13 caracteres', async () => {
// se obtiene email y password de google sheet S13-07-n-node-react
    let TC10 = await elements.datosParametrizadosLogin(11)
    let password = TC10.userId.password
    let email = TC10.userId.email
    await page.waitForTimeout(segundos)
    elements.enterUsername(email)
    await page.waitForTimeout(segundos)
    elements.enterPassword(password)
    await page.getByRole('button', { name: 'Confirmar' }).click();
});

Then('deberia ver un mensaje indicando que la contraseña debe ser menor a 12 caracteres', async () => {
    await page.waitForTimeout(segundos)
    let TC10 = await elements.datosParametrizadosLogin(11)
    let mensaje = TC10.userId.resultadoEsperado
    const textoerrorPassObtenido = await page.$('//html/body/div/div/div/form/div[3]');
    const textoElemento = await textoerrorPassObtenido!.innerText();
    expect(mensaje).to.contain(textoElemento)

    console.log(`Mensaje mostrado: ${textoElemento}`)
});

After( async () => {
    await page.waitForTimeout(segundos)
});


