<template>
  <NuxtImg class="lembrace-website-image" :class="sizeClass" :src="src" :alt="alt" provider="strapi" />
</template>

<script setup lang="ts">
const { src, alt, size } = defineProps<{
  src: string;
  alt: string;
  size?: 'XS' | 'S' | 'M' | 'L' | 'XL';
}>();

const sizeClass = computed(() => {
  switch (size) {
    case 'XS':
      return 'size-xs';
    case 'S':
      return 'size-s';
    case 'M':
      return 'size-m';
    case 'L':
      return 'size-l';
    case 'XL':
      return 'size-xl';
    default:
      return 'size-m';
  }
});
</script>

<style scoped>
.lembrace-website-image {
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.size-xs {
  width: 150px;
  height: 150px;
}

.size-s {
  width: 200px;
  height: 200px;
}

.size-m {
  width: 250px;
  height: 250px;
}

.size-l {
  width: 300px;
  height: 300px;
}
.size-xl {
  width: 400px;
  height: 400px;
}
</style>
