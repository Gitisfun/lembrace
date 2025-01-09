<template>
  <p class="lembrace-website-text-description">{{ description }}</p>
</template>

<script setup lang="ts">
const props = defineProps({
  description: {
    type: [String, Number],
    required: true,
  },
});
</script>

<style scoped>
.lembrace-website-text-description {
  font-family: Montserrat;
  font-size: 16px;
  margin-bottom: 30px;
}
</style>
