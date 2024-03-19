import { By, WebDriver, WebElement } from 'selenium-webdriver';
import accessGoogleSheet from '../../utils/googleSheetAcces';
import { expect } from 'chai';

export class Elements {
    public readonly nameInputLocator: By = By.id('firstName');
    public readonly lastNameInputLocator: By = By.id('lastName');
    public readonly phoneInputLocator: By = By.id('phone');
    public readonly descriptionInputLocator: By = By.id('description');
    public readonly emailInputLocator: By = By.id('email');
    public readonly passwordInputLocator: By = By.id('pass');
    public readonly repeatPassInputLocator: By = By.id('input[type="password"]');
    public readonly SubmitButtonLogin: By = By.xpath('//button[text()="Inicia sesion"]');
    public readonly SubmitButtonRegister: By = By.xpath('//button[text()="Registrarse"]');
    public readonly confirmButtonRegister: By = By.xpath('//button[text()="Confirmar"]');
    public readonly text1: By = By.xpath('/html/body/div/div[1]/div/p')
    public readonly driver: WebDriver;

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    public async enterName(username: string): Promise<void> {
        const usernameInput: WebElement = await this.driver.findElement(this.nameInputLocator);
        await usernameInput.sendKeys(username);
        console.log(`Email Ingresado: ${username}`);
    }

    public async enterPassword(password: string): Promise<void> {
        const passwordInput: WebElement = await this.driver.findElement(this.passwordInputLocator);
        await passwordInput.sendKeys(password);
        console.log(`Contraseña Ingresada: ${password}`);
    }

    public async clickSubmitLogin(): Promise<void> {
        const submitButton: WebElement = await this.driver.findElement(this.SubmitButtonLogin);
        await submitButton.click();
        console.log('click sumbit Login');
    }

    public async clickSubmitRegister(): Promise<void> {
        const submitButton: WebElement = await this.driver.findElement(this.SubmitButtonRegister);
        await submitButton.click();
        console.log('click sumbit Register');
    }

    public async clickSubmitConfirm(): Promise<void> {
        const submitButton: WebElement = await this.driver.findElement(this.confirmButtonRegister);
        await submitButton.click();
        console.log('click sumbit Confirm');
    }

    public async checkCookies(): Promise<void> {
        const cookies = await this.driver.manage().getCookies();
        console.log('Cookies:', cookies);
    }

    public async verifyURL(expectedUrl: string): Promise<void> {
        const currentUrl: string = await this.driver.getCurrentUrl();
        console.log('URL:', currentUrl);
        expect(currentUrl).to.equal(expectedUrl);
    }

    public async verifyText(){
        const textBox = this.driver.findElement(this.text1);
        const textoDelElemento = await textBox.getText();
        console.log(textoDelElemento)
    }

    public async textButtons() {
        const buttons = [];
        const buttonElements = await this.driver.findElements(By.css('button'));
        for (const buttonElement of buttonElements) {
            const buttonText = await buttonElement.getText();
            buttons.push({ text: buttonText });
        }
        console.log(buttons)
        return buttons;
    }

    public async registerSheets(fila: number){
        let sheetName = 'Datos Parametrizados para Registro '
        const spreadsheetId = '1r32jKngM6Jw_gcJPxGlLL5ZANTZZQ5qWdl6VkUtg6ek';
        const apiKey = 'AIzaSyBeuLvEvy5QXAiJnq-7YGa1TWTqYsBdJlU';
        const range = `${sheetName}!A1:M38`;
            let userId = {
                id: await accessGoogleSheet(spreadsheetId, apiKey, range, fila, 0) ?? '',
                nombre: await accessGoogleSheet(spreadsheetId, apiKey, range, fila, 1) ?? '',
                apellido: await accessGoogleSheet(spreadsheetId, apiKey, range, fila, 2) ?? '',
                telefono: await accessGoogleSheet(spreadsheetId, apiKey, range, fila, 3) ?? '',
                descripcion: await accessGoogleSheet(spreadsheetId, apiKey, range, fila, 4) ?? '',
                email: await accessGoogleSheet(spreadsheetId, apiKey, range, fila, 5) ?? '',
                password: await accessGoogleSheet(spreadsheetId, apiKey, range, fila, 6) ?? '',
                repeatPassword: await accessGoogleSheet(spreadsheetId, apiKey, range, fila, 7) ?? '',
                resultadoEsperado: await accessGoogleSheet(spreadsheetId, apiKey, range, fila, 9) ?? '',
                status: await accessGoogleSheet(spreadsheetId, apiKey, range, fila, 10) ?? '',
            }
        return {userId, sheetName}
    }
    // Funcion para acceder a cualquier numero de fila en una hoja de google sheet contenedora con datos de casos de prueba por 'ID'
    public async datosParametrizadosRegistro(tc: number){
        let id = await this.registerSheets(tc)
        return id
    }

    public async tc02(){
        let statusExpected = 'PASS'
        let rowData = 3
        let dataTC01 = await this.registerSheets(rowData)
        const usernameInput: WebElement = await this.driver.findElement(this.nameInputLocator);
        const userLastName: WebElement = await this.driver.findElement(this.lastNameInputLocator);
        const userPhone: WebElement = await this.driver.findElement(this.phoneInputLocator);
        const userDescription: WebElement = await this.driver.findElement(this.descriptionInputLocator);
        const userEmail: WebElement = await this.driver.findElement(this.emailInputLocator);
        const userPass: WebElement = await this.driver.findElement(this.passwordInputLocator);

        await usernameInput.sendKeys(dataTC01.userId.nombre);
        await userLastName.sendKeys(dataTC01.userId.apellido);
        await userPhone.sendKeys(dataTC01.userId.telefono);
        await userDescription.sendKeys(dataTC01.userId.descripcion);
        await userEmail.sendKeys(dataTC01.userId.email);
        await userPass.sendKeys(dataTC01.userId.password);

        // Funcion para verificar que el string "PASS" sea el resultado espereado
        try {
            let status = await this.registerSheets(rowData)
            console.log('Status: ' + status.userId.status)
            expect(statusExpected).to.equal(status.userId.status)
        }catch(error){
            throw new Error(`status to be"${error}"`);
        }

        console.log(dataTC01)
    }

    public async tc04(){
        let statusExpected = 'PASS'
        let rowData = 5
        let dataTC01 = await this.registerSheets(rowData)
        const usernameInput: WebElement = await this.driver.findElement(this.nameInputLocator);
        const userLastName: WebElement = await this.driver.findElement(this.lastNameInputLocator);
        const userPhone: WebElement = await this.driver.findElement(this.phoneInputLocator);
        const userDescription: WebElement = await this.driver.findElement(this.descriptionInputLocator);
        const userEmail: WebElement = await this.driver.findElement(this.emailInputLocator);
        const userPass: WebElement = await this.driver.findElement(this.passwordInputLocator);

        await usernameInput.sendKeys(dataTC01.userId.nombre);
        await userLastName.sendKeys(dataTC01.userId.apellido);
        await userPhone.sendKeys(dataTC01.userId.telefono);
        await userDescription.sendKeys(dataTC01.userId.descripcion);
        await userEmail.sendKeys(dataTC01.userId.email);
        await userPass.sendKeys(dataTC01.userId.password);

        // Funcion para verificar que el string "PASS" sea el resultado espereado
        try {
            let status = await this.registerSheets(rowData)
            console.log('Status: ' + status.userId.status)
            expect(statusExpected).to.equal(status.userId.status)
        }catch(error){
            throw new Error(`status to be"${error}"`);
        }
        console.log(dataTC01)
    }

    public async tc05(){
        let statusExpected = 'PASS'
        let rowData = 6
        let dataTC01 = await this.registerSheets(rowData)
        const usernameInput: WebElement = await this.driver.findElement(this.nameInputLocator);
        const userLastName: WebElement = await this.driver.findElement(this.lastNameInputLocator);
        const userPhone: WebElement = await this.driver.findElement(this.phoneInputLocator);
        const userDescription: WebElement = await this.driver.findElement(this.descriptionInputLocator);
        const userEmail: WebElement = await this.driver.findElement(this.emailInputLocator);
        const userPass: WebElement = await this.driver.findElement(this.passwordInputLocator);

        await usernameInput.sendKeys(dataTC01.userId.nombre);
        await userLastName.sendKeys(dataTC01.userId.apellido);
        await userPhone.sendKeys(dataTC01.userId.telefono);
        await userDescription.sendKeys(dataTC01.userId.descripcion);
        await userEmail.sendKeys(dataTC01.userId.email);
        await userPass.sendKeys(dataTC01.userId.password);

        // Funcion para verificar que el string "PASS" sea el resultado espereado
        try {
            let status = await this.registerSheets(rowData)
            console.log('Status: ' + status.userId.status)
            expect(statusExpected).to.equal(status.userId.status)
        }catch(error){
            throw new Error(`status to be"${error}"`);
        }
        console.log(dataTC01)
    }

    // Aquí puedes agregar más métodos según tus necesidades
}
