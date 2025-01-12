<template>
  <NuxtLink :to="href" class="lembrace-website-product-item">
    <ImageDynamic :src="img" alt="product" />
    <p>{{ props.title }}</p>
    <div class="lembrace-website-product-item-prices">
      <span>{{ formattedPrice }}</span>
      <span v-if="props.discount" class="lembrace-website-product-item-discount">-{{ props.discount }}%</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { formatPrice } from '../../logic/utils';

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
const formattedPrice = formatPrice(props.price);
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
