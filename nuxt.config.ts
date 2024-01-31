// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
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
    vueI18n: './i18n',
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls: {
          img: ['src'],
          video: ['src'],
          audio: ['src'],
          'var-image': ['src'],
          'var-avatar': ['src'],
          'var-card': ['src'],
          'var-app-bar': ['image']
        }
      }
    }
  },
  postcss: {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: 375,
        viewportUnit: 'vmin',
        fontViewportUnit: 'vmin',
        unitPrecision: 6,
        unitToConvert: 'px',
        propList: ['*'],
        selectorBlackList: ['var-elevation']
      },
    }
  }
})
