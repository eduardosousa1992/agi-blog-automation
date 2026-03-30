# Unified Quality Framework (UQF) - Agibank Blog Automation

![Playwright](https://img.shields.io/badge/Playwright-31C653?style=for-the-badge&logo=Playwright&logoColor=white)
![K6](https://img.shields.io/badge/K6-7D64FF?style=for-the-badge&logo=k6&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Allure](https://img.shields.io/badge/Allure_Report-ff69b4?style=for-the-badge&logo=allure)

## 1. Contexto e Proposta (O "Porquê")
O Agibank demanda uma qualidade confiável e, acima de tudo, mensurável. O **UQF (Unified Quality Framework)** foi desenvolvido para garantir que o ecossistema do Blog do Agibank possua uma validação técnica de alto nível, transformando testes em uma solução de negócio escalável, auditável e resiliente. 

Este projeto não apenas identifica bugs; ele fornece dados para tomadas de decisão estratégicas.

---

## 2. Arquitetura e Stack (O "Como")
A stack foi selecionada para maximizar o ROI (Retorno sobre Investimento) da automação:

* **Playwright (E2E & API):** Garante testes robustos, multiplataforma (Desktop e Mobile) e execução paralela nativa, reduzindo o tempo de feedback para o time de desenvolvimento.
* **K6 (Performance):** Implementado para fornecer métricas de latência P95 e throughput de forma automática, permitindo antecipar gargalos de infraestrutura.
* **Allure Report (Visibilidade):** Centraliza a observabilidade dos testes para stakeholders, transformando logs técnicos em dashboards executivos claros.

---

## 3. Diferenciais Técnicos (O "Uau")
* **Governança de Métricas Automática:** O framework extrai KPIs reais do K6 (como a latência P95) e os injeta dinamicamente no relatório Allure através de um motor de pós-processamento via PowerShell/Regex.
* **Socio-Technical Insight:** Projetado com foco em *Shift-Left*, permitindo que o time de desenvolvimento execute e audite a qualidade em segundos.
* **Modularidade de Alta Performance:** Arquitetura plugável que permite adicionar novos domínios de teste e métricas sem necessidade de refatoração do core.

---

## 4. Guia de Execução (Developer Experience - DX)

### 🛠️ Pré-requisitos
* [Node.js](https://nodejs.org/) (v18+)
* [Java JDK](https://www.oracle.com/java/technologies/downloads/) (Necessário para renderizar o Allure)
* [K6](https://k6.io/docs/getting-started/installation/)

### 🚀 Instalação e Configuração
```bash
# Clone o repositório
git clone [https://github.com/eduardosousa1992/agi-blog-automation.git](https://github.com/eduardosousa1992/agi-blog-automation.git)

# Instale as dependências
npm install

# Instale os binários dos browsers
npx playwright install