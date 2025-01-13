<template>
  <button class="lembrace-website-icon-button">
    <IconGeneric :name="props.name" :size="props.size" />
    <span v-if="props.label">{{ props.label }}</span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  size: string;
  label?: string;
}>();
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
  padding: 0.5rem 1rem; /* Button padding */
  font-size: 1rem; /* Text size */
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
</style>
