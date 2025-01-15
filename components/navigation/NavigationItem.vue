<template>
  <NuxtLink class="lembrace-website-nav-item" :to="href">{{ title }}</NuxtLink>
</template>

<script setup lang="ts">
const { title, href } = defineProps<{
  title: string;
  href: string;
}>();
</script>

<style scoped>
a {
  padding: 0.375rem 1rem;
}
.router-link-active {
  background-color: black;
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 0.375rem 1rem;
  border-radius: 0.5rem;
  transition: color 1s ease;
}

.router-link-active:hover {
  transition: color 1s ease;
  color: #fff;
}
</style>
