# 🚀 Cypress - Testes Automatizados no OrangeHRM

![Status: Concluído](https://img.shields.io/badge/status-concluído-brightgreen)
![Framework: Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E?logo=cypress)
![Linguagem: JavaScript](https://img.shields.io/badge/language-JavaScript-F7DF1E?logo=javascript)

## 📌 Descrição do Projeto

Este repositório contém um projeto de automação de testes E2E (end-to-end) para a plataforma de demonstração **OrangeHRM Live**, um sistema de gestão de Recursos Humanos.

O objetivo principal é aplicar e demonstrar **boas práticas de automação e arquitetura de testes**, incluindo o padrão de design **Page Object Model (POM)** e o uso de **dados de teste dinâmicos**.

## 🧪 Cenários de Teste Cobertos

O projeto cobre os seguintes fluxos principais da aplicação:

#### 1. Autenticação
* ✅ **Login com sucesso:** Valida o login com credenciais válidas e verifica o redirecionamento para o Dashboard.
* ❌ **Login com falha:** Valida a exibição da mensagem de erro ao usar credenciais inválidas.

#### 2. Gestão de Informações Pessoais (My Info)
* ✅ **Atualização de dados:** Acessa a página "My Info" do usuário logado, preenche o formulário de detalhes pessoais (com dados dinâmicos) e salva as alterações, validando a mensagem de sucesso.

## ✨ Features Principais da Arquitetura

Este projeto não é apenas sobre *o que* testar, mas sobre *como* testar de forma escalável.

* **Page Object Model (POM):** Toda a complexidade de seletores e métodos de interação está abstraída em classes (`LoginPage`, `DashboardPage`, `MyInfoPage`, etc.) dentro da pasta `cypress/pages`. Isso torna os testes (`specs`) limpos, legíveis e fáceis de manter.
* **Dados Dinâmicos (Chance.js):** Os testes de formulário utilizam a biblioteca `Chance.js` para gerar dados aleatórios (como nomes e sobrenomes) a cada execução. Isso ajuda a descobrir bugs que dados estáticos ("mockados") não encontrariam.
* **Fixtures (Massa de Dados):** As credenciais de login e outros dados estáticos são gerenciados externamente em `cypress/fixtures/userData.json`, separando os dados da lógica de teste.
* **Suítes de Teste Separadas:** Os testes são organizados por contexto em arquivos de `spec` distintos (ex: `loginTests.spec.js`, `myInfoTests.spec.js`), permitindo execuções focadas.

## 🛠️ Tecnologias Utilizadas

* **Cypress:** Framework de testes E2E.
* **JavaScript (ES6+):** Linguagem de programação dos testes e Page Objects.
* **Node.js:** Ambiente de execução.
* **Chance.js:** Biblioteca para geração de dados aleatórios.

## 🚀 Como Executar o Projeto

### Pré-requisitos

* [Node.js](https://nodejs.org/en/) (v16 ou superior)
* [Git](https://git-scm.com/)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone [URL-DO-SEU-REPOSITORIO]
    ```

2.  Navegue até o diretório do projeto:
    ```bash
    cd [NOME-DO-SEU-REPOSITORIO]
    ```

3.  Instale as dependências:
    ```bash
    npm install
    ```

### Execução dos Testes

Você pode executar os testes de duas formas:

**1. Modo Interativo (Test Runner):**
(Recomendado para desenvolver e depurar)
```bash
npx cypress open
```

**2. Modo Headless (Terminal):**
(Recomendado para execução completa/CI)
```bash
npx cypress run
```

---
