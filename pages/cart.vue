<template>
  <BoxContainer>
    <TextHeader>Mijn bestelling</TextHeader>
    <div v-if="store.shoppingCart.length === 0">Je hebt nog geen producten in je winkelmandje</div>
    <div v-else>
      <CartItem v-for="item in store.shoppingCart" :key="item.documentId" :item="item" />
      <CartResultLine label="Subtotaal" :price="store.getShoppingCartSubtotal" />
      <CartResultLine label="Vezendinskosten" :price="DELIVERY_COST" />
      <CartResultLine label="Subtotaal" :price="store.getShoppingCartTotal" />
    </div>
  </BoxContainer>
</template>

<script setup lang="ts">
import { DELIVERY_COST } from '../logic/constants';
import { useGlobalStore } from '../stores/global';
const store = useGlobalStore();
</script>
