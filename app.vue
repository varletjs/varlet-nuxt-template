<script setup lang="ts">
import '@varlet/touch-emulator'

const nuxi = useNuxtApp()
nuxi.hooks.hook('app:mounted', () => {
  useTheme()
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
