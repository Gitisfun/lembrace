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
  gap: 0.5rem;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
}

.lembrace-website-icon-button:hover {
  box-shadow: 0 0.375rem 0.625rem rgba(0, 0, 0, 0.15);
  transform: translateY(-0.125rem);
}

.lembrace-website-icon-button:active {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  transform: translateY(0);
}

.lembrace-website-icon-button:focus {
  outline-offset: 0.125rem;
}

.lembrace-website-icon-button:disabled {
  background-color: #f0f0f0;
  color: #a0a0a0;
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}

.size-S {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

.size-M {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

.size-L {
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
}
</style>
