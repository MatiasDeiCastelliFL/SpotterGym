import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { WebDriver, Builder, Browser, By } from 'selenium-webdriver';
import { Elements } from '../../../features/pages/POM-selenium';

let driver: WebDriver;
let elements: Elements

Before(async function () {
    // Configuración del WebDriver antes de ejecutar los steps
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    elements = new Elements(driver)
    let title = await driver.getTitle();
    console.log(title)
});

Given('estoy en la pagina inicio el usuario {string} ingresa sus credenciales {string} en la webApp {string}', async (username: string, password: string, url: string) => {
    driver.get(url);
    console.log(username)
    console.log(password)

    let title = await driver.getTitle();
    console.log(title)
});

When('el usuario es redirigido a la pagina principal', async () => {
    // Implementar la lógica para verificar la redirección a la página principal después del inicio de sesión
    elements.verifyText()
    elements.textButtons()
    driver.manage().setTimeouts({implicit: 1500});
    elements.clickSubmitRegister()

});

When('las credenciales ingresadas corresponden al Rol', async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    // Implementar la lógica para verificar que las credenciales ingresadas corresponden al rol del usuario
    elements.datosParametrizadosRegistro(3)
});

When('se verifica que las credenciales otorgadas correspondan al rol', async () => {
    // Implementar la lógica para verificar que las credenciales otorgadas corresponden al rol del usuario
});

Then('se muestra la página de gestion con todas las funcionalidades disponibles segun rol', async () => {
    // Implementar la lógica para verificar que se muestra la página de gestión con todas las funcionalidades disponibles según el rol del usuario
    
});

After(async function () {
    // Agregar un tiempo de espera de 5 segundos antes de cerrar el navegador
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Cerrar el navegador después de ejecutar los steps
    if (driver) {
        await driver.quit();
    }
});
