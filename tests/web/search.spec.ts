import { test, expect } from '@playwright/test';
import { SearchPage } from '../../pages/SearchPage';

test.describe('Domínio de Busca - Blog Agibank', () => {

    test('CT001 - Pesquisa por Ativo Financeiro (Investimento)', async ({ page }) => {
        const searchPage = new SearchPage(page);
        await searchPage.navigate();
        await searchPage.performSearch('Investimento');

        // Validamos a URL primeiro, que é o ponto mais forte da sua estratégia
        await expect(page).toHaveURL(/.*s=Investimento/i, { timeout: 15000 });
        
        // Verificação visual opcional com maior tolerância
        await expect(page.locator('article, .post').first()).toBeVisible({ timeout: 15000 });
    });

    test('CT002 - Pesquisa por Termo de Exceção', async ({ page }) => {
        const searchPage = new SearchPage(page);
        await searchPage.navigate();
        await searchPage.performSearch('TermoInexistente2026XYZ');

        await expect(page.locator('body')).toContainText(/nada foi encontrado|Lamentamos/i, { timeout: 15000 });
    });
});