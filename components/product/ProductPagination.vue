<template>
  <div v-if="store.getTotalPages > 1" class="lembrace-website-product-pagination">
    <IconButton @click="previousPage" name="mdi-keyboard-arrow-left" :disabled="store.getCurrentPage === 1" />
    <TextLabel :hasMargin="false" :label="formattedLabel" />
    <IconButton @click="nextPage" name="mdi-keyboard-arrow-right" :disabled="store.getCurrentPage === store.getTotalPages" />
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../../stores/global';
const store = useGlobalStore();
const { find } = useStrapi();

const formattedLabel = computed(() => {
  return `Pagina ${store.getCurrentPage} van ${store.getTotalPages}`;
});

async function previousPage() {
  if (store.getCurrentPage > 1) {
    const nextPage = store.getCurrentPage - 1;
    await store.fetchProducts(nextPage);
  }
}

async function nextPage() {
  if (store.getCurrentPage < store.getTotalPages) {
    const nextPage = store.getCurrentPage + 1;
    await store.fetchProducts(nextPage);
  }
}
</script>

<style scoped>
.lembrace-website-product-pagination {
  display: none;
}

@media (min-width: 600px) {
  .lembrace-website-product-pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-top: 3rem;
  }
}
</style>
