<template>
  <ProductItem v-for="product in products" :id="product.documentId" :title="product.name" :price="product.price" :img="product.image.url" :discount="product.discount" />
</template>

<script setup lang="ts">
const { find } = useStrapi();

const products = ref([]);

/*
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
*/
const response = await find('products', {
  populate: ['image'],
});

products.value = response.data;
</script>
