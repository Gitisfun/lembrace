<template>
  <TextDescription class="lembrace-website-text-price" :description="formattedPrice" />
</template>

<script setup lang="ts">
import { formatPrice } from '../../logic/utils';

const props = defineProps({
  label: {
    type: [String, Number],
    required: true,
  },
});

const formattedPrice = formatPrice(props.label);
</script>

<style scoped>
.lembrace-website-text-price {
  font-weight: 700;
  background-color: white;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
