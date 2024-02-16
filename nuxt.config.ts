// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  nitro: {
    // preset: "aws-lambda",
    inlineDynamicImports: true,
    preset: 'node-server'
  },
  runtimeConfig: {
    SOCKET: process.env.SOCKET,
    public: {
        SOCKET: process.env.SOCKET,
    }
  },
  modules: ['@nuxtjs/device', '@pinia/nuxt', 'nuxt-icon'],
  device: {
    refreshOnResize: true
  },
  pinia: {
    autoImports: [
        'defineStore', 
    ],
  },
  css: ["bootstrap/dist/css/bootstrap.min.css", "primevue/resources/themes/lara-light-teal/theme.css"],
  build: {
    transpile: ['primevue']
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'initial-scale=1',
      title: 'SOAT - Seguro Obligatorio',
      meta: [
        { name: 'description', content: 'Seguro Obligatorio de Accidentes de Tránsito en territorio colombiano.'}
      ],
    script: [
      {
        // src: "https://kit.fontawesome.com/a076d05399.js",
        src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
        integrity:"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM", crossorigin:"anonymous"
      },
      {
        // src: "https://kit.fontawesome.com/a076d05399.js",
        src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
      }
    ],
    link:[
        // {
        //     rel: "stylesheet",
        //     href:
        //         "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
        // },
      ]
    },
  },
})
