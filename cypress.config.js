const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Aqui você pode implementar event listeners personalizados
    },
    specPattern: 'cypress/e2e/**/*.js', // Padrão para encontrar os arquivos de teste
    baseUrl: 'https://www.saucedemo.com/', // URL base para os testes
    viewportWidth: 1280, // Largura da tela para os testes
    viewportHeight: 720, // Altura da tela para os testes
    chromeWebSecurity: false, // Desativar a segurança do navegador para testes com vários domínios
  },
});

