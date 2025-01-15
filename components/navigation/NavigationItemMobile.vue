<template>
  <NuxtLink @click="closeMenu" class="lembrace-website-nav-item-mobile" :to="href">{{ title }}</NuxtLink>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../../stores/global';
const store = useGlobalStore();

const { title, href } = defineProps<{
  title: string;
  href: string;
}>();

const closeMenu = () => store.closeMenu();
</script>

<style scoped>
.lembrace-website-nav-item-mobile {
  font-size: 1.25rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: block;
  margin-left: 1rem;
}

.router-link-active {
  color: goldenrod;
}
</style>
