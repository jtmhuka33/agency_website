// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

  site:{
    url: 'https://mhuka-consulting.com',
    name: 'Mhuka Consulting'
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/logoNew.png' }]
    }
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/a11y",
    "@nuxt/image",
    "@nuxtjs/seo"
  ],

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Mhuka Consulting',
      description: 'Software and AI consulting for businesses in Europe',
      url: 'https://mhuka-consulting.com',
      logo: '/MhukaLogo.png',
      address: {
        streetAddress: 'Ottostraße 10',
        addressLocality: 'Stadtbergen',
        addressRegion: 'Bavaria',
        postalCode: '86391',
        addressCountry: 'DE'
      },
      email: 'contact@mhuka-consulting.com',
    }
  },

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": {prerender: true},
    "/contact": {prerender: true},
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
