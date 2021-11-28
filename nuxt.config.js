export default {
  target: 'static',
  head: {
    title: 'Фин моделирование',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Шпоргалка-калькулятор для финансового моделирования' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ["~/assets/global.scss"],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    "@nuxtjs/composition-api/module",
    "nuxt-compress",
    ["nuxt-storm", { nested: true, alias: true }],
  ],
  modules: [],
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
  },
  build: {},
  generate: {
    interval: 1000,
  },
}
