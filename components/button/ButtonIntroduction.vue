<template>
  <div class="lembrace-website-button-container">
    <NuxtLink class="lembrace-website-button" to="/products"><slot></slot></NuxtLink>
  </div>
</template>

<style scoped>
.lembrace-website-button {
  border: 0.125rem solid black;
  background-color: black;
  font-weight: 500;
  font-size: large;
  color: white;
  transition: background-color 0.5s ease-in-out;
}

.lembrace-website-button:hover {
  background-color: white;
  color: black;
}

.lembrace-website-button-container {
  display: flex;
  justify-content: center;
}

@media (min-width: 768px) {
  .lembrace-website-button-container {
    justify-content: start;
  }
}
</style>
