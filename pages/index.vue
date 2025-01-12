<template>
  <BoxContainer v-if="!isLoading">
    <section class="lembrace-website-section-top">
      <div>
        <ImageDynamic size="XL" :src="response?.data?.introduction?.image?.url" alt="Handgemaakte sieraden en accessoires" />
      </div>
      <div class="lembrace-website-section-top-right">
        <TextHeader size="L">{{ response?.data?.introduction?.header }}</TextHeader>
        <p>{{ response?.data?.introduction?.description }}</p>
        <div>
          <NuxtLink class="lembrace-website-button" to="/products">{{ response?.data?.introduction?.buttonLabel }}</NuxtLink>
        </div>
      </div>
    </section>
    <section class="lembrace-website-section-bottom">
      <h2>{{ response?.data?.collection?.subtitle }}</h2>
      <div v-if="sortedCollection.length > 0" class="lembrace-website-page-home-teaser">
        <ImageDynamic v-for="item in sortedCollection" size="M" :src="item?.src?.url" alt="hangertje" />
      </div>
    </section>
  </BoxContainer>
</template>

<script setup lang="ts">
const isLoading = ref(true);
const sortedCollection = ref([]);
const { find } = useStrapi();
const response = await find('homepage', {
  populate: {
    introduction: {
      populate: ['image'],
    },
    collection: {
      populate: {
        images: {
          populate: '*',
        },
      },
    },
  },
});
sortedCollection.value = response?.data?.collection?.images?.sort((a, b) => a.order - b.order);
console.log('sortedCollection.value');
console.log(sortedCollection.value);

console.log(sortedCollection);

isLoading.value = false;

console.log('response');
console.log(response);
</script>

<style scoped>
h1 {
  font-size: 40px;
  margin-bottom: 30px;
}
h2 {
  font-size: 30px;
  margin-bottom: 30px;
}

p {
  font-size: 18px;
  margin-bottom: 30px;
  font-family: Montserrat;
}

.lembrace-website-section-top {
  display: flex;
  gap: 30px;
}

.lembrace-website-section-top-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.lembrace-website-section-bottom {
  margin-top: 45px;
}

.lembrace-website-button {
  border: 2px solid black;
  background-color: black;
  font-weight: 500;
  font-size: large;
  color: white;
}

.lembrace-website-button:hover {
  background-color: white;
  color: black;
}

.lembrace-website-page-home-teaser {
  display: flex;
  justify-content: space-between;
}
</style>
