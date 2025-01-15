<template>
  <div v-if="props.maxAmount !== 0" class="lembrace-website-field-counter">
    <TextSubtitle size="M">Aantal</TextSubtitle>
    <div class="lembrace-website-field-counter-inner">
      <IconButton name="mdi:minus" @click="subtract" :disabled="store.isAlreadyInCart(product) || 1 === props.amount" />
      <p class="lembrace-website-field-counter-label">{{ currentAmount }}</p>
      <IconButton name="mdi:plus" @click="add" :disabled="store.isAlreadyInCart(product) || props.maxAmount === props.amount" />
    </div>
    <TextDescription size="S" :description="`Er zijn nog ${props.maxAmount} in stock.`" />
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../stores/global';

const store = useGlobalStore();

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

const emit = defineEmits(['update:amount']);

const currentAmount = ref(props.amount);

watch(
  () => props.amount,
  (newVal) => {
    currentAmount.value = newVal;
  }
);

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
  margin-bottom: 2rem;
}
.lembrace-website-field-counter-inner {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.25rem;
}
.lembrace-website-field-counter-label {
  font-size: 1.25rem;
  font-weight: 600;
  font-family: Montserrat;
}
</style>
