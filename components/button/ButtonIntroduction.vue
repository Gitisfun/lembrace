<template>
  <div>
    <NuxtLink class="lembrace-website-button" to="/products"><slot></slot></NuxtLink>
  </div>
</template>

<style scoped>
.lembrace-website-button {
  border: 2px solid black;
  background-color: black;
  font-weight: 500;
  font-size: large;
  color: white;
}

.lembrace-website-button:hover {
  background-color: white;
  color: black;
}
</style>
