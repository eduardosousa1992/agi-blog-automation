import { test, expect } from '@playwright/test';
import { SearchPage } from '../../pages/SearchPage'; 
import { allure } from "allure-playwright";

test.describe('Funcionalidade: Busca de Conteúdo', () => {
    
    test('CT001 - Pesquisa por Termo de Investimento', async ({ page }) => {
        // Metadados para popular as abas "Características / Behaviors"
        await allure.feature("Mecanismo de Busca");
        await allure.story("Pesquisa de Ativos Financeiros");
        await allure.owner("Eduardo Lima de Sousa");
        await allure.severity("critical");
        await allure.link("https://www.linkedin.com/in/eduardolsousa", "LinkedIn do Autor");

        const searchPage = new SearchPage(page);
        
        await allure.step("Acessar o Blog Agibank", async () => {
            await searchPage.navigate();
        });

        await allure.step("Realizar busca pelo termo 'CDB'", async () => {
            await searchPage.performSearch('CDB');
        });

        await allure.step("Validar resultados da busca", async () => {
            /**
             * ESTRATÉGIA DE RESILIÊNCIA: Seletores compostos.
             * O .first() evita conflitos e o ignoreCase garante o match independente do servidor.
             */
            const titleLocator = page.locator('h1.entry-title, h1.archive-title, h1').first();
            
            await expect(titleLocator).toBeVisible({ timeout: 15000 });
            await expect(titleLocator).toContainText('CDB', { ignoreCase: true });
        });
    });
});