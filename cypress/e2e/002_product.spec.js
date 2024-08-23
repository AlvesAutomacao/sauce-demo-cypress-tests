// cypress/e2e/productsNavigation.spec.js

// Funções auxiliares para reutilização de código

// Dado que o usuário está logado na aplicação
// Esta função configura o estado inicial necessário para os testes
function dadoQueOUsuarioEstaLogado() {
    cy.visit('https://www.saucedemo.com'); // Acessa a página de login
    cy.get('#user-name').type('standard_user'); // Preenche o campo de nome de usuário
    cy.get('#password').type('secret_sauce'); // Preenche o campo de senha
    cy.get('#login-button').click(); // Clica no botão de login
    cy.url().should('include', '/inventory.html'); // Verifica se a URL contém "/inventory.html" após o login
}

// Quando o usuário clica em um produto na lista
// Esta função realiza a ação de clicar no primeiro produto da lista
function quandoOUsuarioClicaEmUmProduto() {
    cy.get('.inventory_item').first().find('.inventory_item_name').click(); // Clica no nome do primeiro item da lista de produtos
}

// Então a página de detalhes do produto deve ser exibida
// Esta função verifica se a página de detalhes do produto está sendo exibida corretamente
function entaoAPaginaDeDetalhesDoProdutoDeveSerExibida() {
    cy.url().should('include', '/inventory-item.html'); // Verifica se a URL contém "/inventory-item.html"
    cy.get('.inventory_details_name').should('be.visible'); // Verifica se o nome do produto está visível na página de detalhes
}

// Quando o usuário clica no botão "Voltar"
// Esta função realiza a ação de clicar no botão de voltar para retornar à lista de produtos
function quandoOUsuarioClicaNoBotaoVoltar() {
    cy.get('.inventory_details_back_button').click(); // Clica no botão de voltar na página de detalhes do produto
}

// Então a lista de produtos deve ser exibida novamente
// Esta função verifica se a lista de produtos é exibida corretamente após o retorno
function entaoAListaDeProdutosDeveSerExibida() {
    cy.url().should('include', '/inventory.html'); // Verifica se a URL contém "/inventory.html" após retornar da página de detalhes
    cy.get('.inventory_item').should('have.length', 6); // Verifica se a lista de produtos exibe o número correto de itens (ajustar conforme o número real de produtos)
}

// Bloco de testes no formato BDD
describe('Navegação entre Produtos', () => {
    beforeEach(() => {
        // Dado que o usuário está logado na aplicação
        dadoQueOUsuarioEstaLogado();
    });

    it('deve navegar para a página de detalhes de um produto e retornar à lista de produtos', () => {
        // Quando o usuário clica em um produto na lista
        quandoOUsuarioClicaEmUmProduto();

        // Então a página de detalhes do produto deve ser exibida
        entaoAPaginaDeDetalhesDoProdutoDeveSerExibida();

        // Quando o usuário clica no botão "Voltar"
        quandoOUsuarioClicaNoBotaoVoltar();

        // Então a lista de produtos deve ser exibida novamente
        entaoAListaDeProdutosDeveSerExibida();
    });
});
