<template>
  <div class="lembrace-website-page-product-page">
    <BoxContainer class="lembrace-website-page-product-page-content">
      <ProductFilter class="lembrace-website-page-product-left" />
      <div class="lembrace-website-products-container">
        <div class="lembrace-website-products-filtering">
          <FieldInput v-model="searchQuery" placeholder="Zoek een product" class="lembrace-search-input" />
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
import { useGlobalStore } from '../../stores/global';
import { debounce } from 'lodash';

const store = useGlobalStore();
const { find } = useStrapi();
const searchQuery = ref('');
const isFiltering = ref(false);

function toggleFiltering() {
  isFiltering.value = !isFiltering.value;
}

async function fetchProducts(query = '') {
  try {
    const response = await find('products', {
      populate: ['image'],
      filters: { name: { $containsi: query } },
      pagination: { pageSize: 4, page: 1 },
    });
    store.setPagination(response.meta?.pagination);
    store.setProducts(response);
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
}

// Debounce the API call to prevent excessive fetching
const debouncedFetch = debounce(fetchProducts, 300);

// Watch searchQuery for changes
watch(searchQuery, (newQuery) => {
  debouncedFetch(newQuery);
});
</script>

<style scoped>
/* Transitions for filter menu */
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

/* Transitions for product list */
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

/* Layout and Styling */
.lembrace-website-products-container {
  flex-grow: 1;
}

.lembrace-website-products-filtering {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.lembrace-search-input {
  flex-grow: 1;
}

.lembrace-website-page-product-left {
  display: none;
}

.lembrace-website-products-search-mobile {
  margin: 2rem 0;
}

.lembrace-website-products-filter-btn-mobile {
  display: block;
}

.lembrace-website-page-product-page {
  display: flex;
  justify-content: center;
  margin: 0px;
}

.lembrace-website-page-product-page-content {
  max-width: 1200px;
  display: flex;

  flex-direction: column;
}

/* Responsive Design */
@media (min-width: 768px) {
  .lembrace-website-page-product-left {
    display: block;
    padding-right: 2rem;
    border-right: 1px solid lightgray;
  }
  .lembrace-website-page-product-page-content {
    flex-direction: row;
    gap: 2rem;
  }
  .lembrace-website-products-filter-btn-mobile {
    display: none;
  }
}
</style>
