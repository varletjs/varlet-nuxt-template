<script setup lang="ts">
import type { AppBarProps } from '@varlet/ui'

defineProps({
  title: {
    type: String as PropType<AppBarProps['title']>
  },
  titlePosition: {
    type: String as PropType<AppBarProps['titlePosition']>,
    default: 'center'
  }
})
</script>

<template>
  <header w-full fixed top-0 left-0 z-100 p-r-2>
    <var-app-bar safe-area-top :title="title" :title-position="titlePosition">
      <template #left>
        <slot name="left" />
      </template>

      <template #right>
        <var-space class="app-header-right" :size="[0, '1.4vmin']">
          <slot name="right" />
        </var-space>
      </template>

      <template #content>
        <slot name="content" />
      </template>
    </var-app-bar>
  </header>
</template>
