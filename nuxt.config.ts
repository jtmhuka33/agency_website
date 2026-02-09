// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/a11y", "@nuxt/image"],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": {prerender: true},
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: false,
    },
  },
  runtimeConfig:{
    resendApiKey: process.env.RESEND_API_KEY,
    contactEmail: process.env.CONTACT_EMAIL
  }
});
