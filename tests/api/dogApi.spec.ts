import { test, expect } from '@playwright/test';
import { allure } from "allure-playwright";

test.describe('Dog API - Auditoria de Contratos', () => {

    test('CT003 - Validar Listagem de Raças (GET)', async ({ request }) => {
        const response = await request.get('https://dog.ceo/api/breeds/list/all');
        const body = await response.json();

        // Injeta o JSON como anexo no Allure para evidência imediata
        await allure.attachment("Response Body - Listagem", JSON.stringify(body, null, 2), "application/json");

        expect(response.status()).toBe(200);
        expect(body).toHaveProperty('status', 'success');
    });

    test('CT004 - Validar Imagem Aleatória (GET)', async ({ request }) => {
        const response = await request.get('https://dog.ceo/api/breed/hound/images/random');
        const body = await response.json();

        // Evidência de Resposta em JSON
        await allure.attachment("Response Body - Imagem", JSON.stringify(body, null, 2), "application/json");

        expect(response.ok()).toBeTruthy();
        expect(body.message).toContain('hound');
    });
});