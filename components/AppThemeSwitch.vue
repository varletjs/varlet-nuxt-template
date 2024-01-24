<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { isDark, toggleDark } = useTheme()
</script>

<template>
  <var-button text round @click="toggleDark()">
    <var-icon name="weather-night" v-if="isDark" />
    <var-icon name="white-balance-sunny" v-else />
  </var-button>
</template>
