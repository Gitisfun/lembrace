<template>
  <BoxCenter v-if="store.shouldShowMoreButton">
    <IconButton class="lembrace-website-product-more" @click="fetchProducts" label="Toon meer" />
  </BoxCenter>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../../stores/global';
const store = useGlobalStore();
const { find } = useStrapi();

async function fetchProducts() {
  if (store.getLimit < store.getTotal) {
    const limit = store.getLimit ?? 4;
    const nextLimit = limit + 4;
    const response = await find('products', {
      populate: ['image'],
      filters: {
        name: { $containsi: store.searchQuery },
        category: { label: { $in: store.filteredCategoriesSelection } },
        materials: { label: { $in: store.filteredMaterialsSelection } },
        discount: store.getDiscountFilter,
      },
      pagination: {
        limit: nextLimit,
      },
    });
    store.setPagination(response.meta?.pagination);
    store.setProducts(response);
  }
}
</script>

<style scoped>
.lembrace-website-product-more {
  display: block;
}

@media (min-width: 600px) {
  .lembrace-website-product-more {
    display: none;
  }
}
</style>
