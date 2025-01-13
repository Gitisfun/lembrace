<template>
  <div class="lembrace-website-icon-cart">
    <IconGeneric name="iconamoon:shopping-bag" size="2rem" />
    <span v-if="store.getShoppingCartCount > 0" class="lembrace-website-icon-cart-counter">{{ store.getShoppingCartCount }}</span>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../stores/global';
const store = useGlobalStore();
</script>

<style scoped>
.lembrace-website-icon-cart {
  position: relative; /* Necessary for counter positioning */
  display: flex; /* Center the icon */
  justify-content: center; /* Horizontally center the icon */
  align-items: center; /* Vertically center the icon */
  width: 3.75rem; /* Set the width of the container */
  height: 3.75rem; /* Set the height of the container */
  border-radius: 0.5rem; /* Optional for rounded edges of the container */
  overflow: hidden; /* Ensures the counter doesn't overflow outside */
}

.lembrace-website-icon-cart-counter {
  position: absolute; /* Position relative to the container */
  top: 0.5rem; /* Adjust as needed to move it downward */
  right: 0.5rem; /* Adjust as needed to move it inward */
  background-color: red; /* Counter background color */
  color: white; /* Text color */
  border-radius: 50%; /* Make it circular */
  width: 1.125rem; /* Fixed width for the counter */
  height: 1.125rem; /* Fixed height for the counter */
  font-size: 0.75rem; /* Adjust text size */
  font-weight: bold; /* Emphasize the number */
  display: flex; /* Align the number inside the counter */
  justify-content: center; /* Center the number horizontally */
  align-items: center; /* Center the number vertically */
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1); /* Optional shadow for style */
}
</style>
