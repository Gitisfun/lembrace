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
  margin-bottom: 30px;
}

.size-S {
  font-size: 1.2rem;
}

.size-M {
  font-size: 1.5rem;
}

.size-L {
  font-size: 2rem;
}
</style>
