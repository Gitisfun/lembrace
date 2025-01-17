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
const filteredCategories = ref(store.filteredCategoriesSelection);
const materials = ref([]);
const filteredMaterials = ref(store.filteredMaterialsSelection);
const filterOthers = ref(store.hasDiscoundFilter ? ['korting'] : []);
const responseCategories = await find('categories');
const responseMaterials = await find('materials');

categories.value = responseCategories.data;
materials.value = responseMaterials.data;

const debouncedFetch = debounce(store.fetchProducts, 300);

watch(filteredCategories, (value) => {
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
