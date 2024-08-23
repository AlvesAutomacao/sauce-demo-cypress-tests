class LoginPage {
  // Método para visitar a página de login
  visit() {
    cy.visit('https://www.saucedemo.com');
  }

  // Método para preencher o formulário de login
  fillLoginForm(username, password) {
    cy.get('input[data-test="username"]').type(username); // Corrige o seletor do nome de usuário
    cy.get('input[data-test="password"]').type(password); // Corrige o seletor da senha
  }

  // Método para submeter o formulário de login
  submit() {
    cy.get('#login-button').click(); // Seleciona o botão de login pelo ID
  }
}

export default LoginPage;


