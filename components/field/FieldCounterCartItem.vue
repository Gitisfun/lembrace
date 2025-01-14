<template>
  <div v-if="props.maxAmount !== 0" class="lembrace-website-field-counter">
    <div class="lembrace-website-field-counter-inner">
      <IconButton name="mdi:minus" @click="subtract" :disabled="1 === props.amount" />
      <p>{{ amount }}</p>
      <IconButton name="mdi:plus" @click="add" :disabled="props.maxAmount === props.amount" />
    </div>
    <!--
    TODO: Uitverkocht component maken
        <p class="lembrace-website-field-description">Er zijn nog {{ maxAmount }} in stock.</p>
    -->
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../stores/global';

const store = useGlobalStore();

// Props
const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
  amount: {
    type: Number,
    default: 1,
  },
  maxAmount: {
    type: Number,
    required: true,
  },
});

function subtract() {
  if (props.amount > 1) {
    store.decrementQuantity(props.id);
  }
}

function add() {
  if (props.amount < props.maxAmount) {
    store.incrementQuantity(props.id);
  }
}
</script>

<style scoped>
.lembrace-website-field-counter-inner {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
p {
  font-size: 1.375rem;
}
</style>
