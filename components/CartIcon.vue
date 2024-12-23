<template>
  <div class="lembrace-website-icon-cart">
    <GenericIcon name="iconamoon:shopping-bag" size="2rem" />
    <span class="lembrace-website-icon-cart-counter">10</span>
  </div>
</template>
<style scoped>
.lembrace-website-icon-cart {
  position: relative; /* Necessary for counter positioning */
  display: flex; /* Center the icon */
  justify-content: center; /* Horizontally center the icon */
  align-items: center; /* Vertically center the icon */
  width: 60px; /* Set the width of the container */
  height: 60px; /* Set the height of the container */
  border-radius: 8px; /* Optional for rounded edges of the container */
  overflow: hidden; /* Ensures the counter doesn't overflow outside */
}

.lembrace-website-icon-cart-counter {
  position: absolute; /* Position relative to the container */
  top: 8px; /* Adjust as needed to move it downward */
  right: 8px; /* Adjust as needed to move it inward */
  background-color: red; /* Counter background color */
  color: white; /* Text color */
  border-radius: 50%; /* Make it circular */
  width: 18px; /* Fixed width for the counter */
  height: 18px; /* Fixed height for the counter */
  font-size: 0.75rem; /* Adjust text size */
  font-weight: bold; /* Emphasize the number */
  display: flex; /* Align the number inside the counter */
  justify-content: center; /* Center the number horizontally */
  align-items: center; /* Center the number vertically */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional shadow for style */
}
</style>
