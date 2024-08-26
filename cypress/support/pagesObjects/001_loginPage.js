// cypress/support/pageObjects/LoginPage.js

class LoginPage {
  // Método para visitar a página de login
  visit() {
    cy.visit('https://www.saucedemo.com');
  }

  // Método para preencher o formulário de login
  fillLoginForm(username, password) {
    cy.get('input[data-test="username"]').type(username); // Preenche o campo de nome de usuário
    cy.get('input[data-test="password"]').type(password); // Preenche o campo de senha
  }

  // Método para submeter o formulário de login
  submit() {
    cy.get('#login-button').click(); // Clica no botão de login
  }
}

export default LoginPage;



