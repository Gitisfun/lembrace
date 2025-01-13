<template>
  <h2 class="lembrace-website-text-subtitle" :class="`size-${props.size}`">
    <slot></slot>
  </h2>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: 'M',
    validator: (value: string) => ['S', 'M', 'L'].includes(value),
  },
});
</script>

<style scoped>
.lembrace-website-text-subtitle {
  font-weight: 600;
}

.size-S {
  font-size: 1.2rem;
  /* Add margin-bottom */
}

.size-M {
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
}

.size-L {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
</style>
