<template>
  <header>
    <IconMobileMenu class="lembrace-website-hamburger-menu" @click="toggleMenu" />
    <HeaderLogo />
    <HeaderIcons />
  </header>
  <transition name="fade">
    <div v-if="store.isMenuOpen" class="lembrace-website-hamburger-menu-items">
      <NavigationItemMobile v-for="item in navigationItems" :key="item.id" :title="item.title" :href="item.href" />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../../stores/global';
const store = useGlobalStore();

const navigationItems = [
  { id: 1, title: 'Products', href: '/products' },
  { id: 2, title: 'About', href: '/about' },
  { id: 3, title: 'Contact', href: '/contact' },
];

const toggleMenu = () => {
  if (store.isMenuOpen) store.closeMenu();
  else store.openMenu();
};
</script>

<style scoped>
header {
  align-items: center;
  height: 4.25rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
}

.lembrace-website-hamburger-menu {
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  height: 4.25rem;
}

.lembrace-website-hamburger-menu-items {
  margin-top: 0.5rem;
  display: block;
  border-bottom: 1px solid lightgray;
  padding-bottom: 0.5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (min-width: 900px) {
  header {
    display: none;
  }
  .lembrace-website-hamburger-menu-items {
    display: none;
  }
}
</style>
