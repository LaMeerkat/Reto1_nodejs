class CarManager {
  constructor() {
    this.carts = [];
    this.idCounter = 1;
  }

  createCart() {
    const cart = {
      id: this.idCounter++,
      products: []
    };
    this.carts.push(cart);
    return cart;
  }

  getCartById(id) {
    return this.carts.find(cart => cart.id === id);
  }

  addProductToCart(cartId, product) {
    const cart = this.getCartById(cartId);
    if (cart) {
      cart.products.push(product);
      return true;
    }
    return false;
  }

  removeProductFromCart(cartId, productId) {
    const cart = this.getCartById(cartId);
    if (cart) {
      const index = cart.products.findIndex(product => product.id === productId);
      if (index !== -1) {
        cart.products.splice(index, 1);
        return true;
      }
    }
    return false;
  }
}

module.exports = CarManager;
