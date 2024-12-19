<template>
  <div id="lembrace-default-layout-container">
    <WebsiteHeader />
    <div id="lembrace-default-layout-content">
      <slot />
    </div>
    <WebsiteFooter />
  </div>
</template>

<style scoped>
#lembrace-default-layout-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

#lembrace-default-layout-content {
  flex-grow: 1;
  overflow: auto;
}
</style>
