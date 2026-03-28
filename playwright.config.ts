import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 1,
  fullyParallel: true,
  reporter: [
    ['list'],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  use: {
    baseURL: 'https://blog.agibank.com.br',
    // Governança Visual Ativada:
    screenshot: 'on',          // Tira print de todo teste que finalizar
    video: 'on',               // Grava vídeo de toda a execução
    trace: 'on',               // Gera o Trace (passo a passo técnico)
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
  ],
});