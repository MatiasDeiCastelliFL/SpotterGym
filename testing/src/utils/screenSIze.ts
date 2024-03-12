// login-page.ts
import { Page, chromium } from 'playwright';
import { expect } from 'chai';

export class ScreenSize {

    public page: Page;

    constructor(page: Page) {
        this.page = page;
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
