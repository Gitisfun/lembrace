<template>
  <button class="lembrace-website-icon-button" :class="`size-${size}`">
    <IconGeneric :name="props.name" :size="iconSize" />
    <span v-if="props.label">{{ props.label }}</span>
  </button>
</template>

<script setup lang="ts">
import { THEME_ICON_BUTTON_SIZE_SMALL, THEME_ICON_BUTTON_SIZE_MEDIUM, THEME_ICON_BUTTON_SIZE_LARGE } from '../../logic/constants';

const props = defineProps<{
  name: string;
  size?: 'S' | 'M' | 'L';
  label?: string;
}>();

const size = props.size || 'M';

const iconSizeMap: Record<'S' | 'M' | 'L', string> = {
  S: THEME_ICON_BUTTON_SIZE_SMALL,
  M: THEME_ICON_BUTTON_SIZE_MEDIUM,
  L: THEME_ICON_BUTTON_SIZE_LARGE,
};

const iconSize = computed(() => iconSizeMap[size]);
</script>

<style scoped>
.lembrace-website-icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* Space between icon and label */
  background-color: #fff; /* White background */
  color: #000; /* Black text */
  border: none;
  border-radius: 8px; /* Rounded corners */
  font-weight: 600; /* Bold text */
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.2s ease; /* Smooth transitions */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Light shadow */
}

.lembrace-website-icon-button:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15); /* Stronger shadow on hover */
  transform: translateY(-2px); /* Slight lift effect */
}

.lembrace-website-icon-button:active {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow when pressed */
  transform: translateY(0); /* Reset lift effect */
}

.lembrace-website-icon-button:focus {
  outline-offset: 2px; /* Space between button and outline */
}

.lembrace-website-icon-button:disabled {
  background-color: #f0f0f0; /* Light grey background */
  color: #a0a0a0; /* Grey text */
  cursor: not-allowed; /* Not-allowed cursor */
  box-shadow: none; /* Remove shadow */
  transform: none; /* No lift effect */
}

/* Size Variants */
.size-S {
  padding: 0.25rem 0.5rem; /* Small padding */
  font-size: 0.875rem; /* Small text size */
}

.size-M {
  padding: 0.5rem 1rem; /* Medium padding */
  font-size: 1rem; /* Default text size */
}

.size-L {
  padding: 0.75rem 1.5rem; /* Large padding */
  font-size: 1.125rem; /* Larger text size */
}
</style>
