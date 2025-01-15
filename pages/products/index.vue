<template>
  <BoxContainer>
    <div class="lembrace-website-page-products">
      <ProductFilter class="lembrace-website-page-left" />
    </div>
  </BoxContainer>
</template>

<style scoped>
/*
.lembrace-website-page-products {
  display: flex;
}

.lembrace-website-page-left {
  width: 20%;
}

.lembrace-website-page-right {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
  */

@media (max-width: 768px) {
  .lembrace-website-page-left {
    display: none;
  }

  .lembrace-website-page-right {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .lembrace-website-page-right {
    grid-template-columns: 1fr;
  }
}
</style>
