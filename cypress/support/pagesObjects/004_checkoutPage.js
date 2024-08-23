// cypress/support/pagesObjects/checkoutPage.js

class CheckoutPage {
  // Preenche o campo do nome
  fillFirstName(name) {
    cy.get('input[name="firstName"]').type(name);
  }

  // Preenche o campo do sobrenome
  fillLastName(lastName) {
    cy.get('input[name="lastName"]').type(lastName);
  }

  // Preenche o campo do código postal
  fillPostalCode(postalCode) {
    cy.get('input[name="postalCode"]').type(postalCode);
  }

  // Clica no botão de continuar
  clickContinue() {
    cy.get('.btn_primary.cart_button').click();
  }

  // Clica no botão de finalizar compra
  clickFinish() {
    cy.get('.btn_action.cart_button').click();
  }

  // Verifica se a página de resumo do pedido foi carregada
  verifyOrderSummaryPage() {
    cy.url().should('include', '/checkout-step-two.html');
    cy.get('.summary_title').should('contain.text', 'Overview');
  }

  // Verifica se a página de confirmação de pedido foi carregada
  verifyOrderConfirmationPage() {
    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('contain.text', 'THANK YOU FOR YOUR ORDER');
  }
}

export default CheckoutPage;

  