<template>
  <NuxtLink :to="href" class="lembrace-website-product-item">
    <ImageDynamic size="P" :src="img" alt="product" />
    <div class="lembrace-website-product-item-info">
      <TextDescription :hasMargin="false" :description="props.title" />
      <div class="lembrace-website-product-item-prices">
        <TextDescription :hasMargin="false" :description="formattedPrice" />
        <span v-if="props.discount" class="lembrace-website-product-item-discount">-{{ props.discount }}%</span>
      </div>
    </div>
  </NuxtLink>
  <div class="horizontal-divider"></div>
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
.horizontal-divider {
  border-bottom: 1px solid #ddd;
  margin: 1rem 0;
}
.lembrace-website-product-item {
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.lembrace-website-product-item-info {
  display: flex;
  gap: 0.25rem;
  flex-direction: column;
  flex-grow: 1;
}

.lembrace-website-product-item-prices {
  display: flex;
  justify-content: space-between;
}

.lembrace-website-product-item-discount {
  color: red;
}
</style>
