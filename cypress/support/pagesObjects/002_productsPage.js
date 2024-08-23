// cypress/e2e/productsNavigation.spec.js

describe('Navegação entre Produtos', () => {
  beforeEach(() => {
    // Dado que o usuário está logado na aplicação
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    // Verifica se a URL inclui "/inventory.html"
    cy.url().should('include', '/inventory.html');
  });

  it('deve navegar para a página de detalhes de um produto e retornar à lista de produtos', () => {
    // Quando o usuário clicar em um produto na lista
    cy.get('.inventory_item').first().find('.inventory_item_name').click();

    // Então a página de detalhes do produto deve ser exibida
    cy.url().should('include', '/inventory-item.html');
    cy.get('.inventory_details_name').should('be.visible');

    // Quando o usuário clicar no botão "Voltar"
    cy.get('.inventory_details_back_button').click();

    // Então a lista de produtos deve ser exibida novamente
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_item').should('have.length', 6); // Ajuste conforme o número real de produtos
  });
});
