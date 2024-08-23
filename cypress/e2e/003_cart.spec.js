// cypress/e2e/cart.spec.js

// Funções auxiliares para reutilização de código

// Dado que o usuário está logado na aplicação
// Esta função acessa a URL da aplicação, realiza login e verifica se está na página de inventário
function dadoQueOUsuarioEstejaLogado() {
    cy.visit('https://www.saucedemo.com'); // Navega para a página de login
    cy.get('#user-name').type('standard_user'); // Preenche o campo de nome de usuário
    cy.get('#password').type('secret_sauce'); // Preenche o campo de senha
    cy.get('#login-button').click(); // Clica no botão de login
    cy.url().should('include', '/inventory.html'); // Verifica se a URL inclui "/inventory.html"
}

// Quando o usuário adicionar um produto ao carrinho
// Esta função adiciona um produto ao carrinho com base no índice fornecido
function quandoOUsuarioAdicionarProdutoAoCarrinho(index) {
    cy.get('.inventory_item').eq(index).find('.btn_primary').click(); // Clica no botão de adicionar ao carrinho
}

// Então o número de itens no carrinho deve ser o esperado
// Esta função verifica se o número de itens no ícone do carrinho é o esperado
function entaoONumeroDeItensNoCarrinhoDeveSer(expectedCount) {
    cy.get('.shopping_cart_badge').should('contain.text', expectedCount); // Verifica se o ícone do carrinho contém o texto esperado
}

// Quando o usuário navegar para o carrinho
// Esta função clica no ícone do carrinho para navegar até a página do carrinho
function quandoONavegarParaOCarrinho() {
    cy.get('.shopping_cart_link').click(); // Clica no ícone do carrinho
    cy.wait(1000); // Espera 1 segundo para garantir que a navegação seja concluída
}

// Então o número de produtos no carrinho deve ser o esperado
// Esta função verifica se o número de produtos na página do carrinho é o esperado
function entaoONumeroDeProdutosNoCarrinhoDeveSer(expectedCount) {
    cy.get('.cart_item').should('have.length', expectedCount); // Verifica se o número de itens no carrinho é o esperado
}

// Bloco de testes no formato BDD
describe('Gerenciamento de Carrinho', () => {
    beforeEach(() => {
        // Dado que o usuário está logado na aplicação
        dadoQueOUsuarioEstejaLogado();
    });

    it('deve adicionar dois produtos ao carrinho', () => {
        // Quando o usuário adicionar dois produtos ao carrinho
        quandoOUsuarioAdicionarProdutoAoCarrinho(0); // Adiciona o primeiro produto
        quandoOUsuarioAdicionarProdutoAoCarrinho(1); // Adiciona o segundo produto

        // Então o número de itens no carrinho deve ser 2
        entaoONumeroDeItensNoCarrinhoDeveSer('2');

        // E quando o usuário navegar para o carrinho
        quandoONavegarParaOCarrinho();

        // Então o número de produtos no carrinho deve ser 2
        entaoONumeroDeProdutosNoCarrinhoDeveSer(2);
    });

    it('deve remover um produto do carrinho', () => {
        // Quando o usuário adicionar dois produtos ao carrinho
        quandoOUsuarioAdicionarProdutoAoCarrinho(0); // Adiciona o primeiro produto
        quandoOUsuarioAdicionarProdutoAoCarrinho(1); // Adiciona o segundo produto

        // Então o número de itens no carrinho deve ser 2
        entaoONumeroDeItensNoCarrinhoDeveSer('2');

        // E quando o usuário navegar para o carrinho
        quandoONavegarParaOCarrinho();

        // Quando o usuário remover o primeiro produto do carrinho
        cy.get('.cart_item').first().find('.btn_secondary').click(); // Remove o primeiro produto
        cy.wait(1000); // Espera 1 segundo para garantir que a remoção seja concluída

        // Então o número de produtos no carrinho deve ser 1
        entaoONumeroDeProdutosNoCarrinhoDeveSer(1);
    });
});
