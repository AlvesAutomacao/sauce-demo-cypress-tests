// cypress/e2e/checkout.spec.js

// Funções auxiliares para reutilização de código
function dadoQueOUsuarioEstejaLogado() {
    cy.visit('https://www.saucedemo.com'); // Navega para a página de login
    cy.get('#user-name').type('standard_user'); // Preenche o campo de nome de usuário
    cy.get('#password').type('secret_sauce'); // Preenche o campo de senha
    cy.get('#login-button').click(); // Clica no botão de login
    cy.url().should('include', '/inventory.html'); // Verifica se a URL inclui "/inventory.html"
}

function adicionarProdutoAoCarrinho(index) {
    cy.get('.inventory_item').eq(index).find('.btn_primary').click(); // Adiciona o produto ao carrinho
}

function navegarParaOCarrinho() {
    cy.get('.shopping_cart_link').click(); // Navega para a página do carrinho
}

function removerProdutoDoCarrinho(index) {
    cy.get('.cart_item').eq(index).find('.btn_secondary').click(); // Remove o produto do carrinho
}

function quandoOUsuarioPreencheFormularioDeCheckout() {
    cy.get('input[name="firstName"]').type('Amanda'); // Preenche o campo de nome
    cy.get('input[name="lastName"]').type('Alves'); // Preenche o campo de sobrenome
    cy.get('input[name="postalCode"]').type('11740000'); // Preenche o campo de código postal
}

function entaoAPaginaDeConfirmacaoDePedidoDeveSerExibida() {
    cy.url().should('include', '/checkout-complete.html'); // Verifica se a URL inclui "/checkout-complete.html"
}

// Bloco de testes no formato BDD
describe('Checkout', () => {
    beforeEach(() => {
        // Dado que o usuário está logado na aplicação e adicionou um produto ao carrinho
        dadoQueOUsuarioEstejaLogado();
        adicionarProdutoAoCarrinho(0); // Adiciona o primeiro produto ao carrinho
        navegarParaOCarrinho();
        removerProdutoDoCarrinho(0); // Remove o primeiro produto
        cy.get('.btn_action.checkout_button').click(); // Clica no botão de finalizar compra
    });

    it('deve preencher o formulário de checkout e finalizar o pedido', () => {
        // Quando o usuário preenche o formulário de checkout com informações válidas
        quandoOUsuarioPreencheFormularioDeCheckout();

        // E clica no botão de continuar para a página de resumo do pedido
        cy.get('.btn_primary.cart_button').click();

        // E clica no botão de finalizar compra
        cy.get('.btn_action.cart_button').click();

        // Então a página de confirmação de pedido deve ser exibida
        entaoAPaginaDeConfirmacaoDePedidoDeveSerExibida();
    });
});
