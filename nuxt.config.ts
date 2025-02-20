// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxtjs/google-fonts', '@nuxtjs/strapi', '@pinia/nuxt', 'pinia-plugin-persistedstate'],
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
      Itim: [300, 400, 500, 600, 700, 800], // Choose font weights
      'Alex+Brush': true, // Include Figma Hand font
    },
    display: 'swap', // Improves loading behavior
  },
});
