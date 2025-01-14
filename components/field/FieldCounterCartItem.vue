<template>
  <div v-if="props.maxAmount !== 0" class="lembrace-website-field-counter">
    <div class="lembrace-website-field-counter-inner">
      <IconButton name="mdi:minus" :size="THEME_ICON_BUTTON_SIZE" @click="subtract" :disabled="1 === props.amount" />
      <p>{{ amount }}</p>
      <IconButton name="mdi:plus" :size="THEME_ICON_BUTTON_SIZE" @click="add" :disabled="props.maxAmount === props.amount" />
    </div>
    <!--
    TODO: Uitverkocht component maken
        <p class="lembrace-website-field-description">Er zijn nog {{ maxAmount }} in stock.</p>
    -->
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../stores/global';
import { THEME_ICON_BUTTON_SIZE } from '../../logic/constants';

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

console.log('props.id');
console.log(props.id);

// Handlers
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
  gap: 25px;
}
p {
  font-size: 24px;
}
button {
  all: unset;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
.lembrace-website-field-description {
  margin-top: 15px;
  font-family: Montserrat;
  font-size: 14px;
}
</style>
