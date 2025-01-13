<template>
  <div class="lembrace-website-product-list">
    <ProductItem v-for="product in products" :id="product.documentId" :title="product.name" :price="product.price" :img="product.image.url" />
  </div>
</template>

<script setup lang="ts">
const { find } = useStrapi();

const products = ref([]);

const response = await find('products', {
  populate: ['image'],
  filters: {
    category: {
      label: {
        $containsi: [],
      },
    },
    material: {
      label: {
        $containsi: [],
      },
    },
    discount: {
      $gt: 0,
    },
  },
});

console.log('response');
console.log(response);

products.value = response.data;
</script>

<style scoped>
.lembrace-website-product-list {
  /*
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center; 
  justify-items: center; 
  */
}
</style>
