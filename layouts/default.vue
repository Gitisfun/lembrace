<template>
  <div id="lembrace-default-layout-container">
    <HeaderBar />
    <main>
      <div class="lembrace-default-layout-content">
        <slot />
        <FooterBar />
      </div>
    </main>
  </div>
</template>

<style scoped>
#lembrace-default-layout-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.lembrace-default-layout-content {
  margin-right: 300px;
  margin-left: 300px;
  overflow: auto;
  flex-grow: 1;
}

main {
  align-self: center;
}
</style>
