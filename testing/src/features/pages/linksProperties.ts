// login-page.ts
import { Page, chromium, ElectronApplication } from 'playwright';
import { expect } from 'chai';


export class Links {
    public static readonly UsernameInput = '[data-test="username"]';
    public static readonly PasswordInput = '[data-test="password"]';
    public static readonly SubmitButton = 'input[type="submit"]';

    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async verificarRedireccion(nombrePagina: string) {
        expect(this.page.url()).contain(nombrePagina, `El enlace "${nombrePagina}" no redirige correctamente`);
    }
    
    public async verificarEstadoHTTP() {
        const respuesta = await fetch(this.page.url());
        expect(respuesta.status).to.equal(200, `El enlace no devuelve un estado 200`);
        const pageTitle = await this.page.evaluate(() => {
            return document.title;
        });
        console.log(pageTitle)
        console.log(respuesta)
    }
    
    public async verificarAccesibilidadYCargaCorrecta() {
        // Código para verificar accesibilidad y carga correcta
    }
    
    public async verificarProtocolo() {
        const protocolo = new URL(this.page.url()).protocol;
        expect(protocolo).to.match(/https?:/, `El enlace no utiliza un protocolo HTTP o HTTPS`);
        
    }

    public async buscarEnlacesDom (){
          // Utilizamos el método $$eval para evaluar una función en el contexto del navegador
    const enlaces = await this.page.$$eval('img', (links) => {
        // Mapear los elementos para obtener el valor del atributo 'href' de cada enlace
        return links.map((link) => link.getAttribute('href') || '');
    });

    console.log(enlaces) 
    }

    public async encontrarEnlacesEnDOM() {
        const enlaces: string[] = [];
        let srcEncontrados = 0;
        let hrefEncontrados = 0;
        let aEncontrados = 0

        // Buscar elementos <a> con href
        const aElements = await this.page.$$('a[href]');
        aEncontrados += aElements.length;
        for (const element of aElements) {
            const href = await element.getAttribute('href');
            if (href) {
                enlaces.push(href);
            }
        }
    
        // Buscar elementos con src
        const elementosConSrc = await this.page.$$('[src]');
        srcEncontrados += elementosConSrc.length;
        for (const element of elementosConSrc) {
            const src = await element.getAttribute('src');
            if (src) {
                enlaces.push(src);
            }
        }
    
        // Buscar elementos con href (otros que no sean <a>)
        const elementosConHref = await this.page.$$('[href]:not(a)');
        hrefEncontrados += elementosConHref.length;
        for (const element of elementosConHref) {
            const href = await element.getAttribute('href');
            if (href) {
                enlaces.push(href);
            }
        }
        // console.log('lista de enlances encontrados: ' + enlaces)
        return { src: srcEncontrados, href: hrefEncontrados, a:aEncontrados };
        
    }

    public async verificarEstadosDeHttps() {
        let totalHttpEncontrados = 0;

        // Obtener todos los elementos que contienen enlaces HTTPS
        const httpsElementos = await this.page.$$eval('[href^="https://"], [src^="https://"]', elementos => elementos.map(elemento => {
            if ('href' in elemento && elemento.tagName === 'LINK' && (elemento as HTMLLinkElement).rel === 'stylesheet') {
                // Excluir recursos CSS
                return '';
            } else if ('src' in elemento && elemento.tagName === 'SCRIPT') {
                // Excluir recursos JavaScript
                return '';
            } else if ('href' in elemento) {
                return (elemento as HTMLAnchorElement).href;
            } else if ('src' in elemento) {
                return (elemento as HTMLImageElement).src;
            }
            return '';
        }));
    
    // Iterar sobre los elementos con enlaces HTTPS
    for (const httpsElemento of httpsElementos) {
        if (httpsElemento !== '') {
            try {
                // Acceder a la URL especificada en el enlace HTTPS
                await this.page.goto(httpsElemento, { waitUntil: 'networkidle' });

                // Obtener el estado de la respuesta
                const status = await this.page.evaluate(() => {
                    return fetch(window.location.href).then(response => response.status);
                });

                console.log(`status de ${httpsElemento}: ${status} ok`);

                if (status !== 200) {
                    totalHttpEncontrados++;
                }
            } catch (error) {
                console.error(`Error al acceder a ${httpsElemento}: ${error}`);
            }
        }
    }

    console.log(`Total de enlaces HTTP encontrados: ${totalHttpEncontrados}`);
    }

    public async contarElementosEnPaginaActual(): Promise<{ enlaces: number, imagenes: number, enlacesExternos: number }> {
        // Contar los elementos directamente en el contexto de la página sin usar page.evaluate()
        const enlaces = await this.page.$$eval('a', (enlaces) => enlaces.length);
        const imagenes = await this.page.$$eval('img', (imagenes) => imagenes.length);
        const enlacesExternos = await this.page.$$eval('[href^="http"], [src^="http"]', (elementos) => elementos.length);
    
        console.log('Total enlaces a: ' + enlaces)
        console.log('Total enlaces imagenes: ' + imagenes)
        console.log('Total enlaces externos: ' + enlacesExternos)
        return { enlaces, imagenes, enlacesExternos };
    }

    public async contarElementosHTTP(){
        // Esperar a que la página cargue completamente
        await this.page.waitForLoadState('networkidle');
        // Obtener todos los elementos del DOM
        const elementos = await this.page.$$('body *');
        let conteoHTTP = 0;
        // Contar los elementos HTTP
        for (const elemento of elementos) {
            const urlElemento = await elemento.evaluate(node => node.getAttribute('src') || node.getAttribute('href'));
            if (urlElemento && (urlElemento.startsWith('http://') || urlElemento.startsWith('https://'))) {
                conteoHTTP++;
            }
        }
        console.log('Total elementos https: '+ conteoHTTP)
        // return conteoHTTP;
    }

    public async buscarElementosHttp(){
            // Definir una función para extraer elementos con atributos HTTP
        const extractHttpElements = async () => {
            // Buscar todos los elementos que contienen atributos HTTP específicos
            const httpElements = await this.page.$$('[href], [src]');
            // Crear un array para almacenar los valores de los atributos HTTP
            const httpAttributes: string[] = [];
            // Iterar sobre los elementos encontrados
            for (const element of httpElements) {
                // Obtener el valor del atributo 'href' y 'src'
                const hrefAttribute = await element.getAttribute('href');
                const srcAttribute = await element.getAttribute('src');

                // Si el valor del atributo 'href' es válido, agregarlo al array
                if (hrefAttribute) httpAttributes.push(hrefAttribute);

                // Si el valor del atributo 'src' es válido, agregarlo al array
                if (srcAttribute) httpAttributes.push(srcAttribute);
            }
            // Retornar el array de atributos HTTP
            // return httpAttributes;
            console.log('Cantidad de elementos Https:// = ' + httpAttributes.length)
        };
        await extractHttpElements()
    }

    public async contarElementosSrc(){
        // Esperar a que la página cargue completamente
        await this.page.waitForLoadState('networkidle');
        // Obtener todos los elementos del DOM que tengan el atributo src
        const elementos = await this.page.$$('body *[src]');
        const conteo = elementos.length;
        console.log('Total elementos SRC(links internos): '+ conteo)
        // return conteo;
    }

    public async contarElementosA(){
        // Obtener todos los elementos del DOM que sean enlaces
        const elementos = await this.page.$$('body a');
        const conteo = elementos.length;
        console.log('Total elementos a: ' + conteo)
        // return conteo;
    }

    public async contarElementosHref() {
        // Esperar a que la página cargue completamente
        await this.page.waitForLoadState('networkidle');
        // Obtener todos los elementos del DOM que tengan el atributo href
        const elementos = await this.page.$$('body *[href]');
        const conteo = elementos.length;
        console.log('Total elementos HREF: ' + conteo);
        // return conteo;
    }

    public async checkLinksOnPage() {
    let count200 = 0; // Contador para enlaces con status 200
    let count404 = 0; // Contador para enlaces con status 404
        try {
            const links = await this.page.$$('a');
            const baseUrl = this.page.url();
            
            for (const link of links) {
                const href = await link.getAttribute('href');
                if (href && href.startsWith('http')) {
                    try {
                        const response = await fetch(href, { method: 'HEAD' });
                        console.log(`Link: ${href} has status code: ${response.status}`);
                        if (response.status === 200) {
                            count200++;
                        } else if (response.status === 404) {
                            count404++;
                        }
                    } catch (error: any) { // Especificar el tipo de error
                        console.error(`Error fetching ${href}: ${error.message}`);
                    }
                }
            }
            console.log(`Total links with status 200: ${count200}`);
            console.log(`Total links with status 404: ${count404}`);
        } catch (error: any) { // Especificar el tipo de error
            console.error('Error:', error);
        } 
    }
}
