// cypress/e2e/login.spec.js

// Funções auxiliares para reutilização de código

// Dado que o usuário está na página de login
// Esta função acessa a URL da página de login para preparar o teste
function dadoQueOUsuarioEstaNaPaginaDeLogin() {
  cy.visit('https://www.saucedemo.com'); // Navega para a página de login
}

// Quando o usuário preenche o campo de usuário
// Esta função preenche o campo de nome de usuário com o valor fornecido
function quandoOUsuarioPreencheOCampoUsuario(username) {
  cy.get('#user-name').type(username); // Preenche o campo de nome de usuário
}

// Quando o usuário preenche o campo de senha
// Esta função preenche o campo de senha com o valor fornecido
function quandoOUsuarioPreencheOCampoSenha(password) {
  cy.get('#password').type(password); // Preenche o campo de senha
}

// Quando o usuário clica no botão de login
// Esta função clica no botão de login para submeter o formulário
function quandoOUsuarioClicaNoBotaoDeLogin() {
  cy.get('#login-button').click(); // Clica no botão de login
}

// Então a página principal de produtos é exibida
// Esta função verifica se a URL e o título da página estão corretos após o login
function entaoAPaginaPrincipalDeProdutosEhExibida() {
  cy.url().should('include', '/inventory.html'); // Verifica se a URL inclui "/inventory.html"
  cy.get('.title').should('contain', 'Products'); // Verifica se o título da página contém 'Products'
}

// Então a mensagem de erro deve ser exibida
// Esta função verifica se a mensagem de erro esperada é exibida
function entaoAMensagemDeErroDeveSerExibida(mensagem) {
  cy.get('.error-message-container').should('be.visible'); // Verifica se a mensagem de erro está visível
  cy.get('.error-message-container').should('contain', mensagem); // Verifica se a mensagem de erro contém o texto esperado
}

// Então os campos de login devem estar vazios
// Esta função verifica se os campos de login estão vazios após o logout
function entaoOsCamposDeLoginDevemEstarVazios() {
  cy.get('#user-name').should('have.value', ''); // Verifica se o campo de nome de usuário está vazio
  cy.get('#password').should('have.value', ''); // Verifica se o campo de senha está vazio
}

// Bloco de testes no formato BDD
describe('Funcionalidade de Login', () => {
  beforeEach(() => {
      // Dado que o usuário está na página de login
      dadoQueOUsuarioEstaNaPaginaDeLogin();
  });

  it('deve permitir o login com credenciais válidas', () => {
      // Quando o usuário preenche o campo de usuário com "standard_user"
      quandoOUsuarioPreencheOCampoUsuario('standard_user');

      // E preenche o campo de senha com "secret_sauce"
      quandoOUsuarioPreencheOCampoSenha('secret_sauce');

      // E clica no botão de login
      quandoOUsuarioClicaNoBotaoDeLogin();

      // Então a página principal de produtos é exibida
      entaoAPaginaPrincipalDeProdutosEhExibida();
  });

  it('deve mostrar uma mensagem de erro ao tentar login com credenciais inválidas', () => {
      // Quando o usuário preenche o campo de usuário com "invalid_user"
      quandoOUsuarioPreencheOCampoUsuario('invalid_user');

      // E preenche o campo de senha com "wrong_password"
      quandoOUsuarioPreencheOCampoSenha('wrong_password');

      // E clica no botão de login
      quandoOUsuarioClicaNoBotaoDeLogin();

      // Então a mensagem de erro é exibida
      entaoAMensagemDeErroDeveSerExibida('Username and password do not match any user in this service');
  });

  it('deve manter os campos de login limpos após o login', () => {
      // Quando o usuário preenche o campo de usuário com "standard_user"
      quandoOUsuarioPreencheOCampoUsuario('standard_user');

      // E preenche o campo de senha com "secret_sauce"
      quandoOUsuarioPreencheOCampoSenha('secret_sauce');

      // E clica no botão de login
      quandoOUsuarioClicaNoBotaoDeLogin();

      // Faz logout para voltar à página de login
      cy.get('#react-burger-menu-btn').click(); // Abre o menu lateral
      cy.get('#logout_sidebar_link').click(); // Clica no link de logout

      // Então os campos de login devem estar vazios
      entaoOsCamposDeLoginDevemEstarVazios();
  });
});
