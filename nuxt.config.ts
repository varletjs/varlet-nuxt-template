// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: { port: 8888 },
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@vueuse/nuxt', 'dayjs-nuxt', '@varlet/nuxt'],
  imports: {
    dirs: [
      './composables/useMobile',
    ],
    injectAtEnd: true,
  },
  unocss: {
    attributify: true
  },
  css: [
    '~/styles/global.css',
  ],
})
