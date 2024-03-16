// login-page.ts
import { Page, chromium } from 'playwright';
// import fetch from 'node-fetch';
import { expect } from 'chai';
import accessGoogleSheet from '../../utils/googleSheetAcces';
// import accessExcelSheet from '../../utils/excelSheets';

export class Elements {
    public static readonly UsernameInput = 'input[type="email"]';
    public static readonly PasswordInput = 'input[type="pass"]';
    public static readonly SubmitButton = 'input[type="submit"]';

    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async enterUsername(username: string): Promise<void> {
        await this.page.fill(Elements.UsernameInput, username);
        console.log(`Entering username: ${username}`);
    }

    public async enterPassword(password: string): Promise<void> {
        await this.page.fill(Elements.PasswordInput, password);
        console.log(`Entering password: ${password}`);
    }

    public async clickSubmit(): Promise<void> {
        await this.page.waitForSelector(Elements.SubmitButton);
        await this.page.click(Elements.SubmitButton);
        console.log('Clicking submit button');
    }

    public async checkCookies(){
        const cookies = await this.page.evaluate(() => document.cookie);
        console.log('Cookies:', cookies);
    }

    public async verifyURL(path: string){
        const currentUrl = this.page.url();
        console.log(currentUrl)
        expect(currentUrl).to.equal(`https://s13-07-n-node-react-git-front-end-merge-spotterapp.vercel.app/${path}`);
    }

    public async loginSheets(fila: number){
        let sheetName = 'Datos Parametrizados en Login'
        const spreadsheetId = '1r32jKngM6Jw_gcJPxGlLL5ZANTZZQ5qWdl6VkUtg6ek';
        const apiKey = 'AIzaSyBeuLvEvy5QXAiJnq-7YGa1TWTqYsBdJlU';
        const range = `${sheetName}!A1:J38`;
            let userId = {
                id: await accessGoogleSheet(spreadsheetId, apiKey, range, fila, 0) ?? '',
                title: await accessGoogleSheet(spreadsheetId, apiKey, range, fila, 3) ?? '',
                email: await accessGoogleSheet(spreadsheetId, apiKey, range, fila, 1) ?? '',
                password: await accessGoogleSheet(spreadsheetId, apiKey, range, fila, 2) ?? '',
                status: await accessGoogleSheet(spreadsheetId, apiKey, range, fila, 5) ?? '',
                resultadoEsperado: await accessGoogleSheet(spreadsheetId, apiKey, range, fila, 4) ?? ''
            }
        return {userId, sheetName}
    }
    // Funcion para acceder a cualquier numero de fila en una hoja de google sheet contenedora con datos de casos de prueba por 'ID'
    public async datosParametrizadosLogin(num: number){
        let filaUser = await this.loginSheets(num)
        // console.log(filaUser)
        return filaUser
    }

    async verificarContraseña(password: string){
        const passwordTest = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+|~`\-])(?=.*[a-z]).{9,12}$/.test(password);
        if (passwordTest) {
            console.log('La contraseña respeta los requisitos mínimos');
        } else {
            throw new Error(`La contraseña "${password}" no cumple los requisitos mínimos`);
        }
    }
}
