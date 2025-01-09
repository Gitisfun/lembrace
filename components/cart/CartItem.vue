<template>
  <div class="lembrace-website-cart-item">
    <div>
      <NuxtImg :src="item?.image" :alt="item.name" provider="strapi" width="180" height="180" />
    </div>
    <div class="lembrace-website-cart-item-details">
      <div class="lembrace-website-cart-item-row">
        <h2>{{ item.name }}</h2>
        <TextPrice style="margin: 0px" :label="item?.price" />
      </div>
      <div class="lembrace-website-cart-item-row">
        <div>{{ item.amount }}</div>
        <IconButton @click="removeFromCart" name="mdi-cart-arrow-up" size="1.5rem" backgroundColor="red" />
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
  console.log('item.documentId');
  console.log(item.documentId);

  store.removeFromCart(item);
}

console.log('item');
console.log(item);
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
