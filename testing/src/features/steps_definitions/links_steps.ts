import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium, firefox, Page, webkit} from 'playwright';
import { Elements } from '../pages/objectModel';
import { Links } from '../pages/linksProperties'; 
import { ScreenSize } from '../../utils/screenSIze';

let browser;
let screenSIze: ScreenSize
let page: Page
let elements: Elements
let links: Links
let segundos = 2100
const browserName = 'firefox'
const escenario1 = '@agregar-producto'
const escenario2 = '@eliminar-producto'

Before( async () => {
    browser = await firefox.launch({ headless: false });
    page = await browser.newPage();
    // const context = await browser.newContext();
    elements = new Elements(page)
    links = new Links(page)
    screenSIze = new ScreenSize(page)
});

Given('ingreso en la url {string}', async function (URL: string)  {
    await page.goto(URL)
    await page.waitForTimeout(segundos)
    screenSIze.screenMobileSizeIphone12(390,844)
});

When('ingreso usuario {string} y contraseña {string}', async function (user: string, pass: string)  {
    elements.enterUsername(user)
    await page.waitForTimeout(segundos)
    elements.enterPassword(pass)
    await page.getByRole('button', { name: 'Confirmar' }).click();

});

// Nav | TS 01
Given('que se realiza clic en {string}', async (button: string) => {
    await page.getByRole('button', { name: button }).click();

});

When('accedo en la pagina {string}', async (path: string) => {
    await page.waitForTimeout(segundos)
    elements.verifyURL(path)

});

When('se realiza clic en todos los enlaces buscados', async () => {

});

Then('se muestra el total de enlaces encontrados', async () => {
    await page.waitForTimeout(segundos)
    const enlaces = await links.encontrarEnlacesEnDOM()
    console.log('Enlaces con a encontrados: ' + enlaces.a)
    console.log("Enlaces con src encontrados: ", enlaces.src);
    console.log("Enlaces con href encontrados: ", enlaces.href);
    links.buscarElementosHttp()
    
});

Then('deben redirigir corretamente a la url de destino', async () => {
    await page.waitForTimeout(segundos)
    
});

Then('deben devolver un codigo de estado HTTP 200 OK', async () => {
    await page.waitForTimeout(segundos)
    links.checkLinksOnPage()
});

Then('deben ser accesible y cargar correctamente', async () => {
    await page.waitForTimeout(segundos)

});

Then('los enlaces debe utilizar el protocolo correcto \\(HTTP o HTTPS)', async () => {
    await page.waitForTimeout(segundos)
    
});

After( async () => {
    await page.waitForTimeout(segundos)
});
