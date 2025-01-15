<template>
  <div class="lembrace-website-page-product-page">
    <BoxContainer class="lembrace-website-page-product-page-content">
      <ProductFilter class="lembrace-website-page-product-left" />
      <div>
        <div class="lembrace-website-products-filtering">
          <FieldInput v-model="name" placeholder="Zoek een product" style="flex-grow: 1" />
          <IconButton class="lembrace-website-products-filter-btn-mobile" @click="toggleFiltering" name="mdi-filter-outline" />
        </div>
        <transition name="filter-menu">
          <div v-if="isFiltering">
            <ProductFilter />
            <BoxCenter class="lembrace-website-products-search-mobile">
              <IconButton @click="search" name="mdi-search" label="Zoek" />
            </BoxCenter>
          </div>
        </transition>
        <transition name="product-list">
          <ProductList v-if="!isFiltering" />
        </transition>
      </div>
    </BoxContainer>
  </div>
</template>

<script setup lang="ts">
const name = ref('');
const isFiltering = ref(false);
function toggleFiltering() {
  console.log(isFiltering.value);

  isFiltering.value = !isFiltering.value;
}
function search() {}
</script>
<style scoped>
/* Filter menu open and close transition */
.filter-menu-enter-active,
.filter-menu-leave-active {
  transition: all 0.3s ease;
}

.filter-menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.filter-menu-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.filter-menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.filter-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Product list transition */
.product-list-enter-active,
.product-list-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.product-list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.product-list-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.product-list-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.product-list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Other styles */

.lembrace-website-products-filtering {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.lembrace-website-filtering-mobile-open {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.lembrace-website-page-product-left {
  display: none;
}

.lembrace-website-products-search-mobile {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.lembrace-website-products-filter-btn-mobile {
  display: block;
}
.lembrace-website-page-product-page {
  display: flex;
  justify-content: center;
}
.lembrace-website-page-product-page-content {
  max-width: 1200px;
}

/* Extra Small Devices, Phones */
@media (min-width: 480px) {
}

/* Small Devices, Tablets */
@media (min-width: 768px) {
  .lembrace-website-page-product-left {
    display: block;
    padding-right: 2rem;
    border-right: 1px solid lightgray;
  }
  .lembrace-website-page-product-page-content {
    display: flex;
    gap: 2rem;
  }
  .lembrace-website-products-filter-btn-mobile {
    display: none;
  }
}

/* Medium Devices, Desktops */
@media (min-width: 992px) {
}

/* Large Devices, Wide Screens */
@media (min-width: 1200px) {
}
</style>
