<template>
  <div id="lembrace-default-layout-container">
    <WebsiteHeader />
    <main>
      <slot />
    </main>
    <WebsiteFooter />
  </div>
</template>

<style scoped>
#lembrace-default-layout-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

main {
  flex-grow: 1;
  overflow: auto;
  width: 1200px;
  align-self: center;
  padding: 30px;
}
</style>
