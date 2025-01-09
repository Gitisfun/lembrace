<template>
  <div class="lembrace-website-product-list">
    <ProductItem v-for="product in products" :id="product.documentId" :title="product.name" :price="product.price" :img="product.image.url" />
    <!--
      <ProductItem title="Gouden armbandje" price="12.50" img="/uploads/two_4919e20f06.jpg" />
      <ProductItem title="Gouden armbandje" price="12.50" img="/uploads/two_4919e20f06.jpg" />
      <ProductItem title="Gouden armbandje" price="12.50" discount="25" img="/uploads/two_4919e20f06.jpg" />
      <ProductItem title="Gouden armbandje" price="12.50" discount="25" img="/uploads/two_4919e20f06.jpg" />
      <ProductItem title="Gouden armbandje" price="12.50" discount="25" img="/uploads/two_4919e20f06.jpg" />
      <ProductItem title="Gouden armbandje" price="12.50" img="/uploads/two_4919e20f06.jpg" />
      <ProductItem title="Gouden armbandje" price="12.50" img="/uploads/two_4919e20f06.jpg" />
      -->
  </div>
</template>

<script setup lang="ts">
const { find } = useStrapi();

const products = ref([]);

const response = await find('products', { populate: ['image'] });

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
