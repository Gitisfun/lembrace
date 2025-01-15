<template>
  <BoxContainer>
    <TextHeader>Mijn bestelling</TextHeader>
    <div v-if="store.shoppingCart.length === 0">Je hebt nog geen producten in je winkelmandje</div>
    <div v-else>
      <CartItem v-for="item in store.shoppingCart" :key="item.documentId" :item="item" />
      <div class="lembrace-website-cart-lines">
        <TextSubtitle>Overzicht</TextSubtitle>
        <CartResultLine label="Subtotaal" :price="store.getShoppingCartSubtotal" />
        <CartResultLine label="Vezendinskosten" :price="DELIVERY_COST" />
        <CartResultLine label="Totaal" :price="store.getShoppingCartTotal" />
      </div>
      <BoxCenter>
        <IconButton size="L" @click="pay" name="mdi-wallet-bifold-outline" label="Verder naar betalen" />
      </BoxCenter>
    </div>
  </BoxContainer>
</template>

<script setup lang="ts">
import { DELIVERY_COST } from '../logic/constants';
import { useGlobalStore } from '../stores/global';

const store = useGlobalStore();

const pay = () => null;
</script>

<style scoped>
.lembrace-website-cart-lines {
  margin-top: 3rem;
}
</style>
