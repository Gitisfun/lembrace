<template>
  <NuxtImg class="lembrace-website-image" :class="sizeClass" :src="src" :alt="alt" provider="strapi" />
</template>

<script setup lang="ts">
const { src, alt, size } = defineProps<{
  src: string;
  alt: string;
  size?: 'XS' | 'S' | 'P' | 'M' | 'L' | 'XL';
}>();

const sizeClass = computed(() => {
  switch (size) {
    case 'XS':
      return 'size-xs';
    case 'S':
      return 'size-s';
    case 'P':
      return 'size-p';
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
  border-radius: 0.3125rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0rem 0.5rem 1.5rem;
}

.size-xs {
  width: 10rem;
  height: 10rem;
}

.size-s {
  width: 13rem;
  height: 13rem;
}

.size-p {
  width: 6rem;
  height: auto;
}

.size-m {
  width: 16rem;
  height: 16rem;
}

.size-l {
  width: 16rem;
  height: 16rem;
}

.size-xl {
  width: 100%;
  height: auto;
}

@media (min-width: 480px) {
  .size-xs {
    width: 10rem;
    height: 10rem;
  }

  .size-s {
    width: 13rem;
    height: 13rem;
  }

  .size-p {
    width: 100%;
    height: auto;
  }

  .size-m {
    width: 16rem;
    height: 16rem;
  }

  .size-l {
    width: 20rem;
    height: 20rem;
  }

  .size-xl {
    width: 25rem;
    height: 25rem;
  }
}
</style>
