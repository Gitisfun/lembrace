<template>
  <div>
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
</style>
