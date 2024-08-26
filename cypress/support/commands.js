// cypress/support/commands.js

import LoginPage from '../support/pagesObjects/001_loginPage'; // Atualizado para o nome de arquivo sem números

Cypress.Commands.add('login', (username, password) => {
  const loginPage = new LoginPage();
  loginPage.visit(); // Visita a página de login
  loginPage.fillLoginForm(username, password); // Preenche o formulário de login
  loginPage.submit(); // Submete o formulário de login
});
