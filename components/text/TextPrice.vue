<template>
  <TextDescription class="lembrace-website-text-price" :description="formattedPrice" />
</template>

<script setup lang="ts">
import { formatPrice } from '../../logic/utils';

const props = defineProps({
  label: {
    type: [String, Number],
    required: true,
  },
});

const formattedPrice = formatPrice(props.label);
</script>

<style scoped>
.lembrace-website-text-price {
  font-weight: 700;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding-right: 25px;
  padding-left: 25px;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
