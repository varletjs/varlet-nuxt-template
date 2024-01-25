import { defineConfig, presetUno, presetAttributify } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetPxTovw from 'unocss-preset-px-to-viewport'

export default defineConfig({
  content: {
    filesystem: [
      '**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}',
    ],
  },
  presets: [
    presetUno(),
    presetRemToPx(),
    presetAttributify(),
    // presetPxTovw({
    //   viewportWidth: 375,
    //   viewportUnit: 'vmin',
    //   unitPrecision: 6,
    // })
  ],
})
