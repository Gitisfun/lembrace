<template>
  <nav class="lembrace-website-nav-menu">
    <NavigationItem v-for="item in navigationItems" :key="item.id" :title="item.title" :href="item.href" />
  </nav>
</template>

<script setup lang="ts">
const navigationItems = [
  { id: 1, title: 'Products', href: '/products' },
  { id: 2, title: 'About', href: '/about' },
  { id: 3, title: 'Contact', href: '/contact' },
];
</script>

<style scoped>
.lembrace-website-nav-menu {
  display: flex;
  gap: 1rem;
  height: 4.25rem;
  align-items: center;
}
</style>
