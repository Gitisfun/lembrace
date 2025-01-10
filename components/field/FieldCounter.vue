<template>
  <div v-if="props.maxAmount !== 0" class="lembrace-website-field-counter">
    <p style="margin-bottom: 10px">Aantal</p>
    <div class="lembrace-website-field-counter-inner">
      <IconButton name="mdi:minus" size="1.5rem" @click="subtract" :disabled="store.isAlreadyInCart(product) || 1 === props.amount" />
      <p>{{ currentAmount }}</p>
      <IconButton name="mdi:plus" size="1.5rem" @click="add" :disabled="store.isAlreadyInCart(product) || props.maxAmount === props.amount" />
    </div>
    <p class="lembrace-website-field-description">Er zijn nog {{ props.maxAmount }} in stock.</p>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../stores/global';
const store = useGlobalStore();

// Props
const props = defineProps({
  product: {
    type: Object,
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

// Emit for parent communication
const emit = defineEmits(['update:amount']);

// Local state for amount
const currentAmount = ref(props.amount);

// Watch for parent updates to `amount` prop
watch(
  () => props.amount,
  (newVal) => {
    currentAmount.value = newVal;
  }
);

// Handlers
function subtract() {
  if (currentAmount.value > 1) {
    currentAmount.value--;
    emit('update:amount', currentAmount.value);
  }
}

function add() {
  if (currentAmount.value < props.maxAmount) {
    currentAmount.value++;
    emit('update:amount', currentAmount.value);
  }
}
</script>

<style scoped>
.lembrace-website-field-counter {
  margin-bottom: 30px;
}
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
