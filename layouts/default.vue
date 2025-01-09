<template>
  <div id="lembrace-default-layout-container">
    <HeaderBar />
    <main>
      <!--
      <main style="background-color: #e9e4d8">
      -->
      <div class="lembrace-default-layout-content">
        <slot />
      </div>
    </main>
    <FooterBar />
  </div>
</template>

<style scoped>
/*
#lembrace-default-layout-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.lembrace-default-layout-content {
  display: flex;
  width: 100%;
}

main {
  align-self: center;
}
  */
</style>
