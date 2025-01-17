<template>
  <div class="lembrace-website-home-page">
    <BoxContainer v-if="!isLoading" class="lembrace-website-home-content">
      <section class="lembrace-website-section-top">
        <div>
          <ImageDynamic size="XL" :src="response?.data?.introduction?.image?.url" alt="Handgemaakte sieraden en accessoires" />
        </div>
        <div class="lembrace-website-section-top-right">
          <TextHeader size="M">{{ response?.data?.introduction?.header }}</TextHeader>
          <TextDescription size="L" :description="response?.data?.introduction?.description" />
          <ButtonIntroduction>{{ response?.data?.introduction?.buttonLabel }}</ButtonIntroduction>
        </div>
      </section>
      <section class="lembrace-website-section-bottom">
        <TextSubtitle size="M">{{ response?.data?.collection?.subtitle }}</TextSubtitle>
        <div v-if="sortedCollection.length > 0" class="lembrace-website-page-home-teaser">
          <ImageDynamic v-for="item in sortedCollection" size="M" :src="item?.src?.url" alt="hangertje" />
        </div>
      </section>
    </BoxContainer>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../stores/global';

const store = useGlobalStore();
const { find } = useStrapi();

const isLoading = ref(true);
const sortedCollection = ref([]);

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
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.lembrace-website-section-bottom {
  display: none;
}

.lembrace-website-section-top-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.lembrace-website-page-home-teaser {
  display: flex;
  justify-content: space-between;
}

/* Small devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .lembrace-website-section-top {
    gap: 2rem;
    flex-direction: row;
  }
  .lembrace-website-section-bottom {
    margin-top: 2rem;
    display: block;
  }
}

/* Medium devices (desktops, 992px and up) */
@media (min-width: 900px) {
  .lembrace-website-home-page {
    display: flex;
    justify-content: center;
  }
  .lembrace-website-home-content {
    max-width: 850px;
  }
}
@media (min-width: 992px) {
}

/* Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>
