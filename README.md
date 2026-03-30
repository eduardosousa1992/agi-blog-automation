# Unified Quality Framework (UQF) 🚀

> **Este projeto não é apenas uma suíte de automação. É um ecossistema de Engenharia de Qualidade projetado para fornecer garantia de software escalável, observável e orientada a dados (data-driven).**

---

## 🎯 Problemas de Negócio que o UQF Resolve

Diferente de scripts isolados, o **UQF** atua como uma ponte entre o desenvolvimento e a operação, eliminando:

* **Falta de Observabilidade:** Transforma logs brutos em insights acionáveis para tomada de decisão em tempo real.
* **Silos de Testes:** Unifica a validação funcional e a medição de performance em um único pipeline de execução.
* **Incerteza de Escalabilidade:** Garante a confiabilidade do sistema sob carga antes mesmo de chegar em produção (*Shift-left*).

---

## 🏗️ Arquitetura de Decisão e Fluxo de Dados

O diferencial do UQF não está nas ferramentas isoladas, mas em como elas funcionam como um **sistema integrado**:

1.  **Playwright** gera eventos de interação e captura o comportamento do usuário.
2.  **K6** mede a performance e latência em tempo real sob carga.
3.  **Dados são agregados** e correlacionados entre falhas funcionais e gargalos de infraestrutura.
4.  **Allure Framework** centraliza esses insights em um dashboard de governança executiva.

---

## 💎 Diferenciais Estratégicos (Seu Ouro 💰)

* **Observabilidade de Qualidade:** Rastreamento de latência sob carga (P95) diretamente integrado ao reporte funcional.
* **QA Orientado a Dados:** Validação de contratos de API que transforma a execução de testes em visibilidade de confiabilidade E2E.
* **Integração de Performance:** Conectamos o "funciona?" com o "aguenta?", reduzindo o risco de incidentes em produção.

---

## 📊 Evidências de Valor (Insights em Ação)

![Dashboard Allure Report](./allure-dashboard.png)
*Legenda Estratégica:*
* **Rastreamento de Latência:** Monitoramento P95 em 228,55 ms para garantir o SLA.
* **Validação de Confiabilidade:** 100% de taxa de sucesso em ambientes Web e Mobile.
* **Visibilidade E2E:** Identificação imediata de bugs de negócio vs. falhas de infraestrutura.

---

## 💻 Stack Tecnológica (Pipeline de Qualidade)

* **Linguagem:** TypeScript (Tipagem forte para escalabilidade)
* **Engine E2E:** Playwright (Resiliência e Paralelismo)
* **Performance:** K6 (Observabilidade de Carga)
* **Governança:** Allure Framework (Centralizador de Insights)

---

## 🚀 Quick Start (Zero Fricção)

Copie, cole e execute. Simples assim.

```bash
# 1. Clone o repositório e instale as dependências
git clone [https://github.com/eduardosousa1992/agi-blog-automation.git](https://github.com/eduardosousa1992/agi-blog-automation.git) && cd agi-blog-automation && npm install

# 2. Execute o framework completo (Web + API + Performance + Report)
npm run report:full
