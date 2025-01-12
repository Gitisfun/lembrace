import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    shoppingCart: [],
    filterCategoriesList: [],
    filterMaterialsList: [],
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
    addToFilterCategoriesList(category) {
      this.filterCategoriesList.push(category);
    },
    removeFromFilterCategoriesList(category) {
      this.filterCategoriesList = this.filterCategoriesList.filter((item) => item !== category);
    },
    addToFilterMaterialsList(material) {
      this.filterMaterialsList.push(material);
    },
    removeFromFilterMaterialsList(material) {
      this.filterMaterialsList = this.filterMaterialsList.filter((item) => item !== material);
    },
    removeFromCart(product) {
      this.shoppingCart = this.shoppingCart.filter((item) => item.documentId !== product.documentId);
    },
    resetCart() {
      this.shoppingCart = [];
    },
    incrementQuantity(id) {
      const item = this.getShoppingCartItem(id);
      console.log('item.amount');
      console.log(item.amount);

      if (item) {
        item.amount += 1;
      }
    },
    decrementQuantity(id) {
      const item = this.getShoppingCartItem(id);
      console.log('item.amount');
      console.log(item.amount);
      if (item) {
        item.amount -= 1;
        if (item.amount <= 0) {
          this.removeFromCart({ documentId: id });
        }
      }
    },
  },
  persist: {
    enabled: true,
  },
});
