<template>
  <header>
    <NavigationMenu />
    <WebsiteLogo />
    <HeaderIcons />
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  padding-left: 2rem;
  padding-right: 2rem;
  align-items: center;
  height: 75px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Light shadow below */
}
</style>
