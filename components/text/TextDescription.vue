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
    default: 'M', // Default to 'M'
    validator: (value: string) => ['S', 'M', 'L'].includes(value),
  },
});
</script>

<style scoped>
.lembrace-website-text-description {
  font-family: Montserrat;
  margin-bottom: 30px;
}

.size-S {
  font-size: 12px;
}

.size-M {
  font-size: 16px; /* Default size */
}

.size-L {
  font-size: 20px;
}
</style>
