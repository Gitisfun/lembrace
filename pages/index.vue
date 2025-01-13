<template>
  <BoxContainer v-if="!isLoading">
    <section class="lembrace-website-section-top">
      <div>
        <ImageDynamic size="XL" :src="response?.data?.introduction?.image?.url" alt="Handgemaakte sieraden en accessoires" />
      </div>
      <div class="lembrace-website-section-top-right">
        <TextHeader size="L">{{ response?.data?.introduction?.header }}</TextHeader>
        <TextDescription size="L" :description="response?.data?.introduction?.description" />
        <ButtonIntroduction>{{ response?.data?.introduction?.buttonLabel }}</ButtonIntroduction>
      </div>
    </section>
    <section class="lembrace-website-section-bottom">
      <TextSubtitle size="L">{{ response?.data?.collection?.subtitle }}</TextSubtitle>
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
isLoading.value = false;
</script>

<style scoped>
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

.lembrace-website-page-home-teaser {
  display: flex;
  justify-content: space-between;
}
</style>
