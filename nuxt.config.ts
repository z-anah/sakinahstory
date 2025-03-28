// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/sakinahstory.github.io/',
    buildAssetsDir: 'assets',
    cdnURL: 'https://z-anah.github.io/sakinahstory.github.io' // Add CDN URL configuration
  },

  // Configure public assets directory
  dir: {
    public: 'public'
  },

  routeRules: {
    '/**': { prerender: true }, // Ensures static generation
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Cormorant+Garamond': true,
      'Lavishly+Yours': true,
      'Roboto+Flex': true
    },
    display: 'swap', // Ensures better loading performance
    prefetch: true,  // Improves loading speed
    preconnect: true,
  }
})