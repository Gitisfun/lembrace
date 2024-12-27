<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
  font-family: 'Lora', sans-serif;
}

:root {
  --primary-color: white;
  --secondary-color: white;
  --tertairy-color: white;
  --font-size: 16px;
}

a {
  text-decoration: none;
  color: black;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 10px;
}

img {
  border-radius: 5px;
}
</style>
