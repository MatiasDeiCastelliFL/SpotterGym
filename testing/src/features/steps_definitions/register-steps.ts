import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { WebDriver, Builder, Browser, By } from 'selenium-webdriver';
import { Elements } from '../pages/POM-selenium';
import { expect } from 'chai';

let driver: WebDriver;
let elements: Elements

Before(async function () {
    // Configuración del WebDriver antes de ejecutar los steps
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    elements = new Elements(driver)
    let title = await driver.getTitle();
    console.log(title)
});

Given('estoy en la pagina de registro {string}', async (url: string) => {
    driver.get(url);
    let title = await driver.getTitle();
    console.log(title)
    await new Promise(resolve => setTimeout(resolve, 500));
});

// Verificar que se muestre mensaje de notificacion al dejar campos vacios
When('ingreso datos incorrectos en campos requeridos del formulario \\(Nombre, Apellido, Telefono, Descripcion, Email, Contraseña y Rep. Contraseña)', async () => {
    elements.clickSubmitRegister()
    await new Promise(resolve => setTimeout(resolve, 500));
    elements.tc02()
});

When('confirmo los datos ingresados', async () => {
    await new Promise(resolve => setTimeout(resolve, 3500));
    elements.clickSubmitConfirm()
});

Then('se muestran mensajes del formato requerido en cada campo', async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));

});

//Scenario: Formato invalido en contraseña   
When('ingreso una constraseña de formato invalido', async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    elements.clickSubmitRegister()
    elements.tc04()
    await new Promise(resolve => setTimeout(resolve, 3500));

});

Then('deberia ver un error indicando {string}', async (mensaje: string) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    elements.clickSubmitConfirm()
    console.log(mensaje)
});

// Verificar coincidencia de las contraseñas
When('ingreso una contraseña distinta en repetir contraseña', async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    elements.clickSubmitRegister()
    elements.tc05()
    await new Promise(resolve => setTimeout(resolve, 3500));
});

Then('deberia ver un mensaje de error adecuado {string}', async (mensaje: string) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    elements.clickSubmitConfirm()
    console.log(mensaje)
});

After(async function () {
    // Agregar un tiempo de espera de 5 segundos antes de cerrar el navegador
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Cerrar el navegador después de ejecutar los steps
    if (driver) {
        await driver.quit();
    }
});
