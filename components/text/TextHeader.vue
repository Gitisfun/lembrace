<template>
  <h1 class="lembrace-website-text-header" :class="sizeClass">
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

// Compute class based on size prop
const sizeClass = computed(() => {
  switch (props.size) {
    case 'L':
      return 'lembrace-website-text-header--large';
    case 'S':
      return 'lembrace-website-text-header--small';
    default:
      return 'lembrace-website-text-header--medium';
  }
});
</script>

<style scoped>
.lembrace-website-text-header {
  font-weight: 600;
  margin-bottom: 30px;
}

.lembrace-website-text-header--large {
  font-size: 2.5rem;
}

.lembrace-website-text-header--medium {
  font-size: 2rem;
}

.lembrace-website-text-header--small {
  font-size: 1.5rem;
}
</style>
