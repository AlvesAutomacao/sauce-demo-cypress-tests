class CartPage {
    // Navega para a página do carrinho de compras
    goToCart() {
      // Clica no link do carrinho de compras
      cy.get('a.shopping_cart_link').click();
    }
  
    // Verifica se o carrinho está vazio
    verifyCartEmpty() {
      // Verifica se a lista de itens do carrinho está vazia
      cy.get('.cart_list').should('be.empty');
    }
  
    // Verifica se o carrinho não está vazio
    verifyCartNotEmpty() {
      // Verifica se a lista de itens do carrinho não está vazia
      cy.get('.cart_list').should('not.be.empty');
    }
  }
  
  export default CartPage;
  