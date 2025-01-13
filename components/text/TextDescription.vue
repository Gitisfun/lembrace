<template>
  <p class="lembrace-website-text-description" :class="`size-${size}`">
    {{ description }}
  </p>
</template>

<script setup lang="ts">
const props = defineProps({
  description: {
    type: [String, Number],
    required: true,
  },
  size: {
    type: String,
    default: 'M',
    validator: (value: string) => ['S', 'M', 'L'].includes(value),
  },
});
</script>

<style scoped>
.lembrace-website-text-description {
  font-family: Montserrat;
}

.size-S {
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.size-M {
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.size-L {
  font-size: 1.125rem;
  margin-bottom: 2rem;
}
</style>
