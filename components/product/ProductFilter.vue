<template>
  <div>
    <h2>Categories</h2>
    <div class="lembrace-website-checkboxes">
      <FieldCheckBox v-for="item in categories" :id="item.id" :label="item.label" :value="item.documentId" v-model="store.filterCategoriesList" />
    </div>
    <h2 style="margin-top: 45px">Materiaal</h2>
    <div class="lembrace-website-checkboxes">
      <FieldCheckBox v-for="item in materials" :id="item.id" :label="item.label" :value="item.documentId" v-model="selectedOptions" />
    </div>
    <h2 style="margin-top: 45px">Andere</h2>
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
h2 {
  margin-bottom: 25px;
}
.lembrace-website-checkboxes {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
