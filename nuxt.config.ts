// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: { port: 8888 },
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@vueuse/nuxt', 'dayjs-nuxt', '@varlet/nuxt', "@nuxtjs/i18n"],
  imports: {
    dirs: [
      './composables/useMobile',
    ],
    injectAtEnd: true,
  },
  css: [
    '~/styles/global.css',
  ],
  i18n: {
    vueI18n: './i18n'
  }
})
