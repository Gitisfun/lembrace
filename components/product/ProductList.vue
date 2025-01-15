<template>
  <div class="lembrace-website-product-items">
    <ProductItem v-for="product in store.getProducts" :id="product.documentId" :title="product.name" :price="product.price" :img="product.image.url" :discount="product.discount" />
  </div>
  <div class="lembrace-website-product-items-mobile">
    <ProductItemMobile v-for="product in store.getProducts" :id="product.documentId" :title="product.name" :price="product.price" :img="product.image.url" :discount="product.discount" />
  </div>
  <ProductPagination />
  <div v-if="store.getTotalPages === 0">We konden helaas niks vinden...</div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../../stores/global';

const store = useGlobalStore();
const { find } = useStrapi();

const response = await find('products', {
  populate: ['image'],
  pagination: {
    pageSize: 4,
  },
});

store.setPagination(response.meta?.pagination);
store.setProducts(response);
</script>

<style scoped>
.lembrace-website-product-items {
  display: none;
}

.lembrace-website-product-items-mobile {
  display: block;
}

@media (min-width: 480px) {
  .lembrace-website-product-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  .lembrace-website-product-items-mobile {
    display: none;
  }
}

@media (min-width: 600px) {
  .lembrace-website-product-items {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1200px) {
  .lembrace-website-product-items {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
