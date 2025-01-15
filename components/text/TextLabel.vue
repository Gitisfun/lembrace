<template>
  <TextDescription :hasMargin="props.hasMargin" :class="getClasses" :description="label" />
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

const getClasses = [`size-${props.size}`, `lembrace-website-text-label`];
</script>

<style scoped>
.lembrace-website-text-label {
  font-weight: 500;
  background-color: white;
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
