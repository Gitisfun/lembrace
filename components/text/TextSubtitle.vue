<template>
  <h2 class="lembrace-website-text-subtitle" :class="getClasses">
    <slot></slot>
  </h2>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {
    type: [String, Number],
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
.lembrace-website-text-subtitle {
  font-weight: 600;
}

.margin-S {
  margin-bottom: 1rem;
}

.margin-M {
  margin-bottom: 1.25rem;
}

.margin-L {
  margin-bottom: 1.5rem;
}

.size-S {
  font-size: 1.25rem;
}

.size-M {
  font-size: 1.5rem;
}

.size-L {
  font-size: 2rem;
}
</style>
