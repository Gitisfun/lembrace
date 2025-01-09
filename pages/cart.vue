<template>
  <BoxContainer>
    <TextHeader>Mijn bestelling</TextHeader>
    <div v-if="store.shoppingCart.length === 0">Je hebt nog geen producten in je winkelmandje</div>
    <div v-else>
      <CartItem v-for="item in store.shoppingCart" :key="item.documentId" :item="item" />
      <div class="lembrace-website-cart-total">
        <TextDescription description="Subtotaal" />
        <TextDescription :description="store.getShoppingCartTotal" />
      </div>
      <div class="lembrace-website-cart-total">
        <TextDescription description="Verzendingskosten" />
        <TextDescription description="2,50" />
      </div>
      <div class="lembrace-website-cart-total">
        <TextDescription description="Totaal" />
        <TextDescription description="15,50" />
      </div>
    </div>
  </BoxContainer>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../stores/global';
const store = useGlobalStore();
console.log(store.shoppingCart);
</script>

<style scoped>
.lembrace-website-cart-total {
  display: flex;
  justify-content: space-between;
}
</style>
