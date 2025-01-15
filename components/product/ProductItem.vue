<template>
  <NuxtLink :to="href" class="lembrace-website-product-item">
    <ImageDynamic size="P" :src="img" alt="product" />
    <TextDescription :hasMargin="false" :description="props.title" class="lembrace-website-product-item-text" />
    <div class="lembrace-website-product-item-prices">
      <TextDescription :hasMargin="false" :description="formattedPrice" size="L" class="lembrace-website-product-item-text" />
      <span v-if="props.discount" class="lembrace-website-product-item-discount lembrace-website-product-item-text">-{{ props.discount }}%</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { formatPrice } from '../../logic/utils';

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
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lembrace-website-product-item-text {
  margin-top: 0.25rem;
}

.lembrace-website-product-item-prices {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}

.lembrace-website-product-item-discount {
  color: red;
}
</style>
