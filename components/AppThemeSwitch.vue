<script setup lang="ts">
import { darkTheme } from '~/styles/dark'
import { lightTheme } from '~/styles/light'

const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
  onChanged(dark) {
    StyleProvider(dark ? darkTheme : lightTheme)
  },
})
const toggleDark = useToggle(isDark)

</script>

<template>
  <var-button text round @click="toggleDark()">
    <var-icon name="weather-night" v-if="isDark" />
    <var-icon name="white-balance-sunny" v-else />
  </var-button>
</template>
