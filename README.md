# Documentação dos Testes Automatizados

## Visão Geral

Este projeto contém testes automatizados para a aplicação Sauce Demo, utilizando Cypress. Os testes cobrem funcionalidades de login, navegação entre produtos, gerenciamento de carrinho e checkout.

## Configuração do Ambiente

1. **Clone o Repositório:**

   ```bash
   git clone <URL_DO_REPOSITORIO>

# Instale as Dependências:

Navegue até o diretório do projeto e instale as dependências:

cd <NOME_DO_DIRETORIO>
npm install

# Configuração do Cypress:

Certifique-se de que o Cypress está instalado e configurado. O Cypress será instalado automaticamente com as dependências do projeto.

Estrutura do Projeto
cypress/e2e/: Contém os arquivos de teste.

login.spec.js: Testes relacionados ao login.
productsNavigation.spec.js: Testes para navegação entre produtos.
cart.spec.js: Testes para gerenciamento do carrinho.
checkout.spec.js: Testes para o processo de checkout.
cypress/support/pagesObjects/: Contém as classes para representar páginas.

loginPage.js: Página de login.
productsPage.js: Página de produtos.
cartPage.js: Página do carrinho.
checkoutPage.js: Página de checkout.
Executando os Testes
Abrir o Cypress:

Para iniciar a interface gráfica do Cypress e executar os testes, use:

npx cypress open

Isso abrirá o Cypress Test Runner. Você pode selecionar os arquivos de teste e executá-los.

## Executar os Testes em Modo Headless:

Para executar todos os testes em modo headless (sem interface gráfica), use:

npx cypress run

npx cypress run --spec cypress/e2e/login.spec.js

Descrição dos Testes
Login
login.spec.js: Testa a funcionalidade de login, incluindo login com credenciais válidas e inválidas, e verificação dos campos de login após logout.
Navegação entre Produtos
productsNavigation.spec.js: Testa a navegação entre a lista de produtos e a página de detalhes do produto, e a capacidade de retornar à lista de produtos.
Gerenciamento de Carrinho
cart.spec.js: Testa a adição e remoção de produtos do carrinho e a verificação do número de itens no carrinho.
Checkout
checkout.spec.js: Testa o processo de checkout, incluindo o preenchimento do formulário de checkout e a confirmação do pedido.

