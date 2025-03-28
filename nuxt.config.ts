// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/sakinahstory/', // Must match the GitHub repo name
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
  devtools: { enabled: true }
})
