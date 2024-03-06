<script setup lang="ts">
import { Themes } from '@varlet/ui';

const show = ref(false)
const { t } = useI18n()

const themeList = [
  {
    label: ` Md2 ${t('Theme Light')}`,
    value: 'lightTheme'
  },
  {
    label: ` Md2 ${t('Theme Dark')}`,
    value: Themes.dark
  },
  {
    label: ` Md3 ${t('Theme Light')}`,
    value: Themes.md3Light
  },
  {
    label: ` Md3 ${t('Theme Dark')}`,
    value: Themes.md3Dark
  }
]

</script>

<template>
  <var-menu close-on-click-reference placement="bottom" offset-y="2vmin" v-model:show="show">
    <var-button size="small" text>
      <var-icon text-6 name="palette" />
      <var-icon text-6 name="chevron-down" />
    </var-button>

    <template #menu>
      <var-cell v-for="item in themeList" :key="item.value" text-nowrap ripple @click="() => StyleProvider(item.value)">{{ item.label }}</var-cell>
    </template>
  </var-menu>
</template>
