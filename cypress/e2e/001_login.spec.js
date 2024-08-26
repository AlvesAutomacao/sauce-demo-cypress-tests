// cypress/e2e/login.spec.js

import LoginPage from '../support/pagesObjects/001_loginPage'; // Atualizado para o nome de arquivo sem números

describe('Funcionalidade de Login', () => {
  beforeEach(() => {
    // Dado que o usuário está na página de login
    const loginPage = new LoginPage();
    loginPage.visit(); // Usa o método visit da classe LoginPage
  });

  it('deve permitir o login com credenciais válidas', () => {
    // Quando o usuário realiza login com credenciais válidas
    cy.login('standard_user', 'secret_sauce');

    // Então a página principal de produtos é exibida
    cy.url().should('include', '/inventory.html'); // Verifica se a URL inclui "/inventory.html"
    cy.get('.title').should('contain', 'Products'); // Verifica se o título da página contém 'Products'
  });

  it('Não deve permitir login com credenciais inválidas e valida mensagem de erro', () => {
    // Quando o usuário realiza login com credenciais inválidas
    cy.login('invalid_user', 'wrong_password');

    // Então a mensagem de erro é exibida
    cy.get('.error-message-container').should('be.visible'); // Verifica se a mensagem de erro está visível
    cy.get('.error-message-container').should('contain', 'Username and password do not match any user in this service');
  });
});



