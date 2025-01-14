<template>
  <div class="lembrace-website-cart-item">
    <div>
      <ImageDynamic size="XS" :src="item.image" :alt="item.name" />
    </div>
    <div class="lembrace-website-cart-item-details">
      <div class="lembrace-website-cart-item-row">
        <TextSubtitle :hasMargin="false">{{ item.name }}</TextSubtitle>
        <TextPrice :hasMargin="false" :label="item?.price" />
      </div>
      <div class="lembrace-website-cart-item-row">
        <FieldCounterCartItem :id="item.documentId" :amount="item.amount" :maxAmount="item.maxAmount" />
        <IconButton @click="removeFromCart" name="mdi-cart-arrow-up" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../../stores/global';
const store = useGlobalStore();

const { item } = defineProps<{
  item: {
    documentId: string;
    name: string;
    price: number;
    amount: number;
    image: string;
  };
}>();

function removeFromCart() {
  store.removeFromCart(item);
}
</script>

<style scoped>
.lembrace-website-cart-item {
  display: flex;
  align-content: center;
  gap: 30px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 2px solid #bbb;
}
.lembrace-website-cart-item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.lembrace-website-cart-item-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
</style>
