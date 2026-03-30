import { Page } from '@playwright/test';

export class SearchPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        // Navegação inicial com estratégia de velocidade
        await this.page.goto('https://blog.agibank.com.br/', { 
            waitUntil: 'commit', 
            timeout: 60000 
        });
    }

    async performSearch(term: string) {
        const safeTerm = encodeURIComponent(term);
        /**
         * ESTRATÉGIA SÊNIOR: Para evitar o ERR_ABORTED (especialmente em Mobile),
         * usamos 'load' na busca para garantir a estabilidade da conexão.
         */
        await this.page.goto(`https://blog.agibank.com.br/?s=${safeTerm}`, { 
            waitUntil: 'load',
            timeout: 30000
        });
    }
}