<template>
  <BoxContainer class="lembrace-website-product">
    <div>
      <ImageDynamic :src="product?.image?.url" :alt="product?.name" size="XL" />
    </div>
    <div class="lembrace-website-product-details">
      <div class="lembrace-website-product-price">
        <TextHeader>{{ product?.name }}</TextHeader>
        <TextPrice :label="product?.price" />
      </div>
      <TextDescription :description="product?.description" />
      <FieldSelect v-if="dropdownOptions.length > 0" :options="dropdownOptions" :defaultValue="defaultSelectedValue" @changeValue="handleSelectionChange" :disabled="store.isAlreadyInCart(product)" />
      <FieldCounter :product="product" v-model:amount="amount" :maxAmount="product?.amount" />
      <div v-if="product?.amount > 0" class="lembrace-website-product-buttons">
        <IconButton @click="addToCart" name="mdi:cart-plus" :size="THEME_ICON_BUTTON_SIZE" label="Toevoegen aan winkelwagen" :disabled="store.isAlreadyInCart(product)" />
        <IconButton v-if="store.isAlreadyInCart(product)" @click="removeFromCart" name="mdi-cart-arrow-up" :size="THEME_ICON_BUTTON_SIZE" :disabled="!store.isAlreadyInCart(product)" backgroundColor="red" />
      </div>
      <!-- TODO: Uitverkocht component maken -->
      <div v-if="product?.amount <= 0" class="lembrace-website-sold-out">
        <IconGeneric name="mdi:alert-circle" size="2rem" />
        <TextDescription :hasMargin="false" :description="`Dit product is helaas uitverkocht.`" />
      </div>
    </div>
  </BoxContainer>
</template>

<script setup lang="ts">
import { THEME_ICON_BUTTON_SIZE } from '../../logic/constants';
import { useGlobalStore } from '../stores/global';

const store = useGlobalStore();

const route = useRoute();
const { findOne } = useStrapi();

const product = ref(null);
const dropdownOptions = ref([]);

const response = await findOne('products', route.params.id, { populate: ['image', 'materials', 'category'] });
const cartItem = store.getShoppingCartItem(response?.data?.documentId);

const defaultAmount = cartItem?.amount || 1;

const selectedMaterialId = response?.data?.materials ? response?.data?.materials[0]?.documentId : null;
const defaultSelectedValue = cartItem?.materialId || selectedMaterialId;
const selectedValue = ref(defaultSelectedValue);

const amount = ref(defaultAmount);

dropdownOptions.value = response?.data?.materials ? response?.data?.materials : [];

product.value = response?.data;

function handleSelectionChange(value) {
  selectedValue.value = value;
}

function addToCart() {
  const materialId = selectedValue.value;
  const materialLabel = dropdownOptions.value.find((option) => option.documentId === materialId)?.label;

  store.addToCart({
    documentId: product.value?.documentId,
    name: product.value?.name,
    price: product.value?.price,
    amount: amount.value,
    maxAmount: product.value?.amount,
    image: product.value?.image?.url,
    discout: product.value?.discount,
    materialId,
    materialLabel,
  });
}
function removeFromCart() {
  store.removeFromCart(product.value);
}
</script>

<style scoped>
.lembrace-website-product {
  display: flex;
  gap: 2rem;
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

.lembrace-website-product-buttons {
  display: flex;
  gap: 15px;
}

.lembrace-website-sold-out {
  padding: 1rem;
  background-color: #f8d7da;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 0.25rem;
  font-weight: 600;
}
</style>
