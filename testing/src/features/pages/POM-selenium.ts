import { By, WebDriver, WebElement } from 'selenium-webdriver';
import { expect } from 'chai';

export class Elements {
    public readonly UsernameInputLocator: By = By.css('input[type="email"]');
    public readonly PasswordInputLocator: By = By.css('input[type="password"]');
    public readonly SubmitButtonLogin: By = By.xpath('//button[text()="Inicia sesion"]');
    public readonly SubmitButtonRegister: By = By.xpath('//button[text()="Registrarse"]');
    public readonly text1: By = By.xpath('/html/body/div/div[1]/div/p')
    public readonly driver: WebDriver;

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    public async enterUsername(username: string): Promise<void> {
        const usernameInput: WebElement = await this.driver.findElement(this.UsernameInputLocator);
        await usernameInput.sendKeys(username);
        console.log(`Email Ingresado: ${username}`);
    }

    public async enterPassword(password: string): Promise<void> {
        const passwordInput: WebElement = await this.driver.findElement(this.PasswordInputLocator);
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


    // Aquí puedes agregar más métodos según tus necesidades
}
