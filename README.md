# Unified Quality Framework (UQF) 🚀

> **Este projeto não é apenas uma suíte de automação de testes.**
> 
> Ele é um **Unified Quality Framework (UQF)**: uma solução de engenharia de ponta a ponta que integra testes funcionais, auditoria de contratos e observabilidade de performance em uma única camada de governança.

---

## 🎯 Problemas que esta solução resolve

Em ambientes corporativos de alta criticidade, como o setor financeiro, automações isoladas falham em entregar valor real. O **UQF** foi desenhado para eliminar:

* **Falta de visibilidade de qualidade:** Dashboard centralizado com resultados técnicos e de negócio.
* **Ausência de métricas integradas:** Latência e throughput avaliados simultaneamente à funcionalidade.
* **Testes isolados sem contexto:** Rastreabilidade total desde o comportamento (BDD) até o impacto na infraestrutura.

---

## 🛠️ Pilares Estratégicos (Diferenciais)

### 1. Unified Quality Framework (UQF)
Arquitetura baseada em **Page Object Model (POM)** e **Shift-left**, garantindo que a qualidade seja validada no estágio mais precoce possível do ciclo de desenvolvimento.

### 2. Camada de Testes Baseada em Dados (Data-Driven)
Validação de contratos de API (REST/JSON) com foco em resiliência, garantindo que mudanças no backend não quebrem a experiência do usuário final.

### 3. Integração de Observabilidade de Performance
Diferente de suítes comuns, o UQF integra o **k6** para monitorar SLAs de performance. Não validamos apenas se o sistema "funciona", mas se ele "aguenta o tráfego".

---

## 📊 Governança e Métricas (Observabilidade)

A transparência é o nosso principal KPI. O framework gera relatórios automáticos via **Allure Report**, fornecendo:

* **Visibilidade por Funcionalidade:** Aba de *Behaviors* organizada por Features e Stories.
* **Métricas de Performance Reais:** Injeção de P95, Throughput e status de SLA diretamente no dashboard.
* **Categorização Inteligente:** Classificação automática de falhas (Bugs de Negócio vs. Falhas de Infraestrutura).

> **[INSIRA AQUI O PRINT DO SEU ALLURE (image_fba16d.png)]**
> *Exemplo de Dashboard: Latência P95: 228,55 ms | Sucesso: 100%*

---

## 💻 Stack Tecnológica

* **Linguagem:** TypeScript
* **Engine E2E:** Playwright (Web & Mobile)
* **Performance:** k6
* **Reporte:** Allure Framework
* **CI/CD Ready:** Configurado para execução em esteiras automatizadas.

---

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
