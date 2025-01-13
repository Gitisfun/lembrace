<template>
  <div>
    <TextSubtitle>Categories</TextSubtitle>
    <div class="lembrace-website-checkboxes">
      <FieldCheckBox v-for="item in categories" :id="item.id" :label="item.label" :value="item.documentId" v-model="store.filterCategoriesList" />
    </div>
    <TextSubtitle>Materiaal</TextSubtitle>
    <div class="lembrace-website-checkboxes">
      <FieldCheckBox v-for="item in materials" :id="item.id" :label="item.label" :value="item.documentId" v-model="selectedOptions" />
    </div>
    <TextSubtitle>Andere</TextSubtitle>
    <div class="lembrace-website-checkboxes">
      <FieldCheckBox id="korting" label="Korting" :value="'korting'" v-model="selectedOptions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../../stores/global';
const store = useGlobalStore();
const { find } = useStrapi();

const categories = ref([]);
const materials = ref([]);
const responseCategories = await find('categories');
const responseMaterials = await find('materials');

categories.value = responseCategories.data;
materials.value = responseMaterials.data;

const selectedOptions = ref([]);
</script>

<style scoped>
.lembrace-website-checkboxes {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.lembrace-website-checkboxes:not(:last-child) {
  margin-bottom: 2rem;
}
</style>
