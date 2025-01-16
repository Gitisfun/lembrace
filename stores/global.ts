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
    filteredCategoriesSelection: [],
    filteredMaterialsSelection: [],
    hasDiscoundFilter: false,
  }),
  getters: {
    getProducts: (state) => state.products.data,
    getShoppingCart: (state) => state.shoppingCart,
    getShoppingCartSubtotal: (state) => state.shoppingCart.reduce((acc, item) => acc + item.price * item.amount, 0),
    getShoppingCartCount: (state) => state.shoppingCart.length,
    isAlreadyInCart: (state) => (product) => state.shoppingCart.some((item) => item.documentId === product.documentId),
    getShoppingCartItem: (state) => (documentId) => state.shoppingCart.find((item) => item.documentId === documentId),
    getShoppingCartTotal: (state) => state.getShoppingCartSubtotal + DELIVERY_COST,
    getCurrentPage: (state) => state.pagination?.page,
    getTotalPages: (state) => state.pagination?.pageCount,
    getLimit: (state) => state.pagination?.limit ?? 4,
    getTotal: (state) => state.pagination?.total,
    getDiscountFilter: (state) => (state.hasDiscoundFilter ? { $gt: 0.01 } : undefined),
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
    setFilteredCategoriesSelection(value) {
      this.filteredCategoriesSelection = value;
    },
    setFilteredMaterialsSelection(value) {
      this.filteredMaterialsSelection = value;
    },
    setDiscoundFilter(value) {
      this.hasDiscoundFilter = value;
    },
    async fetchProducts(nextPage = 1) {
      try {
        const { find } = useStrapi();
        const response = await find('products', {
          populate: ['image'],
          filters: {
            name: { $containsi: this.searchQuery },
            category: { label: { $in: this.filteredCategoriesSelection } },
            materials: { label: { $in: this.filteredMaterialsSelection } },
            discount: this.getDiscountFilter,
          },
          pagination: { pageSize: 4, page: nextPage },
        });

        this.setPagination(response.meta?.pagination);
        this.setProducts(response);
        this.setVisibiltyMoreButton(true);
      } catch (error) {
        this.setProducts([]);
        console.error('Failed to fetch products:', error);
      }
    },
  },
  persist: {
    enabled: true,
  },
});
