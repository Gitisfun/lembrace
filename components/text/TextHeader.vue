<template>
  <h1 class="lembrace-website-text-header" :class="`size-${props.size}`">
    <slot></slot>
  </h1>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: 'M',
    validator: (value: string) => ['L', 'M', 'S'].includes(value),
  },
});
</script>

<style scoped>
.lembrace-website-text-header {
  font-weight: 600;
  margin-bottom: 30px;
}

.size-S {
  font-size: 1.5rem;
}

.size-M {
  font-size: 2rem;
}

.size-L {
  font-size: 2.5rem;
}
</style>
