import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    shoppingCart: [],
  }),
  getters: {
    getShoppingCart: (state) => state.shoppingCart,
    // TODO: Total must be calculated by multiplying the quantity of each item by its price --- Doesn't work
    getShoppingCartTotal: (state) => state.shoppingCart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    //getShoppingCartTotal: (state) => state.shoppingCart.reduce((acc, item) => acc + item.price, 0),
    getShoppingCartCount: (state) => state.shoppingCart.length,
    isAlreadyInCart: (state) => (product) => state.shoppingCart.some((item) => item.documentId === product.documentId),
    getShoppingCartItem: (state) => (documentId) => state.shoppingCart.find((item) => item.documentId === documentId),
  },
  actions: {
    addToCart(product) {
      const exists = this.shoppingCart.some((item) => item.documentId === product.documentId);
      if (!exists) {
        this.shoppingCart.push(product);
      }
    },
    removeFromCart(product) {
      this.shoppingCart = this.shoppingCart.filter((item) => item.documentId !== product.documentId);
    },
    resetCart() {
      this.shoppingCart = [];
    },
  },
  persist: {
    enabled: true,
  },
});
