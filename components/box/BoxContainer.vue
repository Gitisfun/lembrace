<template>
  <div class="lembrace-website-box-container"><slot></slot></div>
</template>

<style scoped>
.lembrace-website-box-container {
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
}

@media (min-width: 768px) {
  .lembrace-website-box-container {
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
  }
}
</style>
