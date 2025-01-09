<template>
  <BoxContainer>
    <section class="lembrace-website-section-top">
      <div>
        <NuxtImg src="/uploads/intro_88bdff23b7.jpg" provider="strapi" width="400" height="400" />
      </div>
      <div class="lembrace-website-section-top-right">
        <h1>Handgemaakte sieraden en accessoires</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div>
          <NuxtLink class="lembrace-website-button" to="/products">Ga naar de collectie</NuxtLink>
        </div>
      </div>
    </section>
    <section class="lembrace-website-section-bottom">
      <h2>Nieuwe collectie</h2>
      <div class="lembrace-website-page-home-teaser">
        <NuxtImg src="/uploads/two_4919e20f06.jpg" provider="strapi" width="300" height="300" />
        <NuxtImg src="/uploads/twentyfive_58553ed8f4.jpg" provider="strapi" width="300" height="300" />
        <NuxtImg src="/uploads/nine_624c64654c.jpg" provider="strapi" width="300" height="300" />
      </div>
    </section>
  </BoxContainer>
</template>

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
