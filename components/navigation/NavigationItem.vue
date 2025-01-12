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
.router-link-active {
  background-color: black;
  color: white;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 10px;
}

.router-link-active:hover {
  color: #fff; /* Ensure hover states are consistent */
}
</style>
