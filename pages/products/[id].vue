<template>
  <BoxContainer class="lembrace-website-product">
    <div>
      <NuxtImg :src="product?.image?.url" provider="strapi" width="420" height="420" />
    </div>
    <div class="lembrace-website-product-details">
      <TextHeader>{{ product?.name }}</TextHeader>
      <div class="lembrace-website-product-price">
        <TextDescription description="Prijs:" />
        <TextPrice :label="product?.price" />
      </div>
      <TextDescription :description="product?.description" />
      <FieldSelect v-if="dropdownOptions.length > 0" :options="dropdownOptions" :defaultValue="defaultSelectedValue" @changeValue="handleSelectionChange" :disabled="store.isAlreadyInCart(product)" />
      <FieldCounter :product="product" v-model:amount="amount" :maxAmount="product?.amount" />
      <div v-if="product?.amount > 0" class="lembrace-website-product-buttons">
        <IconButton @click="addToCart" name="mdi:cart-plus" size="1.5rem" label="Toevoegen aan winkelwagen" :disabled="store.isAlreadyInCart(product)" />
        <IconButton v-if="store.isAlreadyInCart(product)" @click="removeFromCart" name="mdi-cart-arrow-up" size="1.5rem" :disabled="!store.isAlreadyInCart(product)" backgroundColor="red" />
      </div>
      <!-- TODO: Uitverkocht component maken -->
      <div v-if="product?.amount <= 0">Product is uitverkocht</div>
    </div>
  </BoxContainer>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../stores/global';
const store = useGlobalStore();

const route = useRoute();
const { findOne } = useStrapi();

const product = ref(null);
const dropdownOptions = ref([]);

const response = await findOne('products', route.params.id, { populate: ['image', 'categories'] });
const cartItem = store.getShoppingCartItem(response?.data?.documentId);
const defaultAmount = cartItem?.amount || 1;

const defaultSelectedValue = response?.data?.categories[0]?.documentId;
const selectedValue = ref(defaultSelectedValue);

const amount = ref(defaultAmount);

dropdownOptions.value = response?.data?.categories;

product.value = response?.data;

function handleSelectionChange(value) {
  selectedValue.value = value;
}

function addToCart() {
  console.log('selectedValue.value');
  console.log(selectedValue.value);

  const categoryId = selectedValue.value;
  const categoryLabel = dropdownOptions.value.find((option) => option.documentId === categoryId)?.label;
  console.log('categoryLabel');
  console.log(categoryLabel);

  store.addToCart({
    documentId: product.value?.documentId,
    name: product.value?.name,
    price: product.value?.price,
    amount: amount.value,
    image: product.value?.image?.url,
    discout: product.value?.discount,
    categoryId,
    categoryLabel,
  });
}
function removeFromCart() {
  store.removeFromCart(product.value);
}
</script>

<style scoped>
.lembrace-website-product {
  display: flex;
  gap: 30px;
}

.lembrace-website-product-details {
  flex: 1;
}

.lembrace-website-product-title {
  display: flex;
}
.lembrace-website-product-price {
  display: flex;

  justify-content: space-between;
  align-items: center;
}
.lembrace-website-product-price-label {
  background-color: aliceblue;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding-right: 25px;
  padding-left: 25px;
  padding-top: 15px;
  padding-bottom: 15px;
}
.lembrace-website-product-buttons {
  display: flex;
  gap: 15px;
}
</style>
