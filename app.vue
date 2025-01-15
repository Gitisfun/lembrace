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
/*
body {
  background: linear-gradient(135deg, #fff8e1, #f6e6cd, #d9a874);
  background-attachment: fixed;
  background-size: cover;
  color: #3e2c20; Darker text for contrast 
}
*/

body {
  background: linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb);
  background-attachment: fixed;
  background-size: cover;
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
