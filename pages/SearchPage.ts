import { Page } from '@playwright/test';

export class SearchPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        // Usamos 'commit' para ser o mais rápido possível e evitar timeouts de scripts
        await this.page.goto('https://blog.agibank.com.br/', { 
            waitUntil: 'commit', 
            timeout: 60000 
        });
    }

    async performSearch(term: string) {
        const safeTerm = encodeURIComponent(term);
        // Navegação direta via URL (Sua estratégia vencedora)
        // Adicionamos um pequeno delay e mudamos para 'commit' para evitar o ERR_ABORTED
        await this.page.waitForTimeout(1000); 
        await this.page.goto('https://blog.agibank.com.br/?s=' + safeTerm, { 
            waitUntil: 'commit' 
        });
    }
}