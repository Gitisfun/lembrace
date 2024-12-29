<template>
  <Icon class="lembrace-website-icon" :name="name" :size="size" />
</template>

<script setup lang="ts">
const { name, size } = defineProps<{
  name: string;
  size: string;
}>();
</script>

<style lang="css">
.lembrace-website-icon {
  color: black;
}
.lembrace-website-icon:hover {
  color: gold;
  cursor: pointer;
}
</style>
