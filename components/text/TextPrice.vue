<template>
  <TextDescription :hasMargin="props.hasMargin" :class="getClasses" :description="formattedPrice" />
</template>

<script setup lang="ts">
import { formatPrice } from '../../logic/utils';

const props = defineProps({
  label: {
    type: [String, Number],
    required: true,
  },
  size: {
    type: String,
    default: 'M',
    validator: (value: string) => ['S', 'M', 'L'].includes(value),
  },
});

const formattedPrice = formatPrice(props.label);

const getClasses = [`size-${props.size}`, `lembrace-website-text-price`];
</script>

<style scoped>
.lembrace-website-text-price {
  font-weight: 700;
  background-color: white;
  background: linear-gradient(#c7ecee, #dff9fb);
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
}

.size-S {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.size-M {
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
}

.size-L {
  padding: 1rem 1.5rem;
  font-size: 1.125rem;
}
</style>
