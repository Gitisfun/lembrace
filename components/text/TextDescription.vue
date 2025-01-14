<template>
  <p class="lembrace-website-text-description" :class="getClasses">
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
  hasMargin: {
    type: Boolean,
    default: true,
  },
});

const getClasses = props.hasMargin ? [`size-${props.size}`, `margin-${props.size}`] : [`size-${props.size}`];
</script>

<style scoped>
.lembrace-website-text-description {
  font-family: Montserrat;
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
  font-size: 0.875rem;
}

.size-M {
  font-size: 1rem;
}

.size-L {
  font-size: 1.125rem;
}
</style>
