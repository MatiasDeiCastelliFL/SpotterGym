import { Page, chromium, ElectronApplication } from 'playwright';
import { expect } from 'chai';

export class View {

    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async screenDesktopSize(width: number, height: number) {
        await this.page.setViewportSize({ width: width, height: height });
        const actualViewportSize = this.page.viewportSize();
        // Verificar si las dimensiones coinciden con las configuradas
        if (actualViewportSize!.width === 1920 && actualViewportSize!.height === 1000) {
            console.log(`Test Desktop Screen: width: ${actualViewportSize!.width}px y height: ${actualViewportSize!.height}px correctos.`);
        } else {
            throw new Error(`¡Error! El tamaño actual width: ${actualViewportSize!.width}px y height: ${actualViewportSize!.height}px del viewport/screen no coincide con versión desktop 1920px 1000px.`);
        }
    }

    public async screenMobileSizeIphone12(width: number, height:number) {
        await this.page.setViewportSize({ width: width, height: height });
        const actualViewportSize = this.page.viewportSize();
          // Verificar si las dimensiones coinciden con las configuradas
        if (actualViewportSize!.width === 390 && actualViewportSize!.height === 844) {
            console.log(`Test Iphone12 pro: width: ${actualViewportSize!.width}px y height: ${actualViewportSize!.height}px son correctos.`);
        } else {
            throw new Error(`¡Error! El tamaño actual del width: ${actualViewportSize!.width}px y height: ${actualViewportSize!.height}px del viewport no coincide con la configuración Iphone12 pro: 390px y 844px`);
        }
    }
}


