<template>
  <BoxContainer>
    <div class="lembrace-website-page-products">
      <ProductFilter class="lembrace-website-page-product-left" />
      <div>
        <div class="lembrace-website-products-filtering">
          <FieldInput v-model="name" placeholder="Zoek een product" style="flex-grow: 1" />
          <IconButton class="lembrace-website-products-filter-btn-mobile" @click="toggleFiltering" name="mdi-filter-outline" />
        </div>
        <div v-if="isFiltering">
          <ProductFilter />
          <BoxCenter class="lembrace-website-products-search-mobile">
            <IconButton @click="search" name="mdi-search" label="Zoek" />
          </BoxCenter>
        </div>
        <ProductList v-else />
      </div>
    </div>
  </BoxContainer>
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
.lembrace-website-page-products {
}

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

/* Mobile components */
.lembrace-website-products-search-mobile {
  margin-top: 2rem;
}

.lembrace-website-products-filter-btn-mobile {
  display: block;
}

/*

.lembrace-website-page-left {
  width: 20%;
}

.lembrace-website-page-right {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
  */
</style>
