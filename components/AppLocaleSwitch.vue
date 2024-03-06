<script setup lang="ts">
import { setLocale, type Locale } from '~/i18n'

const show = ref(false)

function getActiveStyles(locale: Locale) {
  const isActive = useNuxtApp().$i18n.locale.value === locale

  return isActive ? {
    color: 'var(--color-primary)',
    backgroundColor: 'var(--app-cell-active-background)'
  } : {}
}

function handleCellClick(locale: Locale) {
  setLocale(locale)
  show.value = false
}
</script>

<template>
  <var-menu close-on-click-reference placement="bottom" offset-y="2vmin" v-model:show="show">
    <var-button size="small" text>
      <var-icon text-6 name="translate" />
      <var-icon text-6 name="chevron-down" />
    </var-button>

    <template #menu>
      <var-cell ripple :style="getActiveStyles('zh-CN')" @click="() => handleCellClick('zh-CN')"> 中文 </var-cell>
      <var-cell ripple :style="getActiveStyles('en-US')" @click="() => handleCellClick('en-US')"> English </var-cell>
    </template>
  </var-menu>
</template>
