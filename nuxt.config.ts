// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxtjs/google-fonts', '@nuxtjs/strapi'],
  strapi: {
    url: 'http://localhost:1337', // Same Strapi URL
  },
  image: {
    providers: {
      strapi: {
        provider: 'strapi',
        options: {
          baseURL: 'http://localhost:1337',
        },
      },
    },
  },
  googleFonts: {
    families: {
      Lora: [300, 400, 500, 600, 700, 800], // Choose font weights
    },
    display: 'swap', // Improves loading behavior
  },
});
