<template>
  <NuxtLink :to="href" class="lembrace-website-product-item">
    <NuxtImg :src="img" provider="strapi" width="240" height="240" />
    <p>{{ title }}</p>
    <div class="lembrace-website-product-item-prices">
      <span>€ {{ price }}</span>
      <span v-if="discount" class="lembrace-website-product-item-discount">-{{ discount }}%</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
// Define props
const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  price: {
    type: [String, Number],
    required: true,
  },
  discount: {
    type: [String, Number],
  },
  img: {
    type: String,
    required: true,
  },
});

const href = computed(() => `/products/${props.id}`);
</script>

<style scoped>
.lembrace-website-product-item {
  width: 100%;
  height: auto;
}
.lembrace-website-product-item-prices {
  display: flex;
  justify-content: space-between;
}
.lembrace-website-product-item-discount {
  color: red;
}
p {
  font-size: 20px;
}
span {
  font-size: 22px;
}
</style>
