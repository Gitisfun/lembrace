<template>
  <header>
    <NavigationMenu />
    <HeaderLogo />
    <HeaderIcons />
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  padding-left: 2rem;
  padding-right: 2rem;
  align-items: center;
  height: 4.25rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
}
</style>
