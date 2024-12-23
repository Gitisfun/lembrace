<template>
  <div class="lembrace-website-nav-item">
    <NuxtLink :to="href">{{ title }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { title, href } = defineProps<{
  title: string;
  href: string;
}>();
</script>

<style scoped>
.lembrace-website-nav-item {
}
</style>
