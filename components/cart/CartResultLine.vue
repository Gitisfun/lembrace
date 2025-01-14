<template>
  <div class="lembrace-website-cart-total">
    <TextDescription size="L" :description="props.label" />
    <TextDescription size="L" :description="formattedPrice" />
  </div>
</template>

<script setup lang="ts">
import { formatPrice } from '../../logic/utils';

const props = defineProps<{
  label: string;
  price: string | number;
}>();

const formattedPrice = computed(() => formatPrice(props.price));
</script>

<style scoped>
.lembrace-website-cart-total {
  display: flex;
  justify-content: space-between;
}
</style>
