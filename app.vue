<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
* {
  margin: 0rem;
  padding: 0rem;
  font-family: 'Itim', sans-serif;
}

:root {
  --primary-color: white;
  --secondary-color: white;
  --tertairy-color: white;
  --font-size: 1rem;
}

a {
  color: black;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: color 1s ease;
}
</style>
