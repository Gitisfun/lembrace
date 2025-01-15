import { DELIVERY_COST } from './../logic/constants';
import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    isMenuOpen: false,
    shoppingCart: [],
    filterCategoriesList: [],
    filterMaterialsList: [],
    filterOthers: [],
    products: [],
    pagination: null,
    isMoreButtonVisible: true,
    searchQuery: '',
  }),
  getters: {
    getProducts: (state) => state.products.data,
    getShoppingCart: (state) => state.shoppingCart,
    // TODO: Total must be calculated by multiplying the quantity of each item by its price --- Doesn't work
    getShoppingCartSubtotal: (state) => state.shoppingCart.reduce((acc, item) => acc + item.price * item.amount, 0),
    //getShoppingCartTotal: (state) => state.shoppingCart.reduce((acc, item) => acc + item.price, 0),
    getShoppingCartCount: (state) => state.shoppingCart.length,
    isAlreadyInCart: (state) => (product) => state.shoppingCart.some((item) => item.documentId === product.documentId),
    getShoppingCartItem: (state) => (documentId) => state.shoppingCart.find((item) => item.documentId === documentId),
    getShoppingCartTotal: (state) => state.getShoppingCartSubtotal + DELIVERY_COST,
    getCurrentPage: (state) => state.pagination?.page,
    getTotalPages: (state) => state.pagination?.pageCount,
    getLimit: (state) => state.pagination?.limit ?? 4,
    getTotal: (state) => state.pagination?.total,
  },
  actions: {
    setSearchQuery(value) {
      this.searchQuery = value;
    },
    setVisibiltyMoreButton(value) {
      this.isMoreButtonVisible = value;
    },
    setPagination(value) {
      this.pagination = value;
    },
    setProducts(list) {
      this.products = list;
    },
    openMenu() {
      this.isMenuOpen = true;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
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

      if (item) {
        item.amount += 1;
      }
    },
    decrementQuantity(id) {
      const item = this.getShoppingCartItem(id);

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
