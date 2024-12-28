<template>
  <div id="lembrace-default-layout-container">
    <WebsiteHeader />
    <main>
      <div class="lembrace-default-layout-content">
        <slot />
        <WebsiteFooter />
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
  width: 1200px;

  overflow: auto;
  flex-grow: 1;
}

main {
  align-self: center;
}
</style>
