<template>
  <div>
    <TextSubtitle>Categories</TextSubtitle>
    <div class="lembrace-website-checkboxes">
      <FieldCheckBox v-for="item in categories" :key="item.id" :id="item.id" :label="item.label" :value="item.label" v-model="filteredCategories" />
    </div>
    <TextSubtitle>Materiaal</TextSubtitle>
    <div class="lembrace-website-checkboxes">
      <FieldCheckBox v-for="item in materials" :key="item.id" :id="item.id" :label="item.label" :value="item.label" v-model="filteredMaterials" />
    </div>
    <TextSubtitle>Andere</TextSubtitle>
    <div class="lembrace-website-checkboxes">
      <FieldCheckBox id="korting" label="Korting" :value="'korting'" v-model="filterOthers" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../../stores/global';
import { debounce } from 'lodash';

const store = useGlobalStore();
const { find } = useStrapi();

const categories = ref([]);
const filteredCategories = ref([]);
const materials = ref([]);
const filteredMaterials = ref([]);
const filterOthers = ref([]);
const responseCategories = await find('categories');
const responseMaterials = await find('materials');

categories.value = responseCategories.data;
materials.value = responseMaterials.data;

async function fetchProducts() {
  try {
    const response = await find('products', {
      populate: ['image'],
      filters: {
        name: { $containsi: store.searchQuery },
        category: { label: { $in: store.filteredCategoriesSelection } },
        materials: { label: { $in: store.filteredMaterialsSelection } },
        discount: store.getDiscountFilter,
      },
      pagination: { pageSize: 4, page: 1 },
    });

    store.setPagination(response.meta?.pagination);
    store.setProducts(response);
    store.setVisibiltyMoreButton(true);
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
}

const debouncedFetch = debounce(fetchProducts, 300);

watch(filteredCategories, (value) => {
  console.log(value);

  store.setFilteredCategoriesSelection(value);
  debouncedFetch();
});

watch(filteredMaterials, (value) => {
  store.setFilteredMaterialsSelection(value);
  debouncedFetch();
});

watch(filterOthers, (value) => {
  const isIncluded = value.length > 0;
  store.setDiscoundFilter(isIncluded);
  debouncedFetch();
});
</script>

<style scoped>
.lembrace-website-checkboxes {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid lightgray;
}

.lembrace-website-checkboxes:not(:last-child) {
  margin-bottom: 2rem;
}
</style>
