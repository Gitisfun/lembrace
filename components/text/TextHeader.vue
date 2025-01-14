<template>
  <h1 class="lembrace-website-text-header" :class="getClasses">
    <slot></slot>
  </h1>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: 'M',
    validator: (value: string) => ['S', 'M', 'L'].includes(value),
  },
  hasMargin: {
    type: Boolean,
    default: true,
  },
});

const getClasses = props.hasMargin ? [`size-${props.size}`, `margin-${props.size}`] : [`size-${props.size}`];
</script>

<style scoped>
.lembrace-website-text-header {
  font-weight: 600;
}

.margin-S {
  margin-bottom: 1rem;
}

.margin-M {
  margin-bottom: 1.5rem;
}

.margin-L {
  margin-bottom: 2rem;
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
