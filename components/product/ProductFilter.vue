<template>
  <div>
    <h2>Categories</h2>
    <div class="lembrace-website-checkboxes">
      <FieldCheckBox id="option1" label="Armbanden" :value="'option1'" v-model="selectedOptions" />
      <FieldCheckBox id="option2" label="Kettingen" :value="'option2'" v-model="selectedOptions" />
      <FieldCheckBox id="option3" label="Hangertjes" :value="'option3'" v-model="selectedOptions" />
      <FieldCheckBox id="option3" label="Ringen" :value="'option3'" v-model="selectedOptions" />
      <FieldCheckBox id="option3" label="Oorbellen" :value="'option3'" v-model="selectedOptions" />
    </div>
    <h2 style="margin-top: 45px">Materiaal</h2>
    <div class="lembrace-website-checkboxes">
      <FieldCheckBox id="option1" label="Goud" :value="'option1'" v-model="selectedOptions" />
      <FieldCheckBox id="option2" label="Zilver" :value="'option2'" v-model="selectedOptions" />
      <FieldCheckBox id="option3" label="Brons" :value="'option3'" v-model="selectedOptions" />
    </div>
    <h2 style="margin-top: 45px">Andere</h2>
    <div class="lembrace-website-checkboxes">
      <FieldCheckBox id="option1" label="Korting" :value="'option1'" v-model="selectedOptions" />
    </div>
  </div>
</template>

<script setup lang="ts">
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
