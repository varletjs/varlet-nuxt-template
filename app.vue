<script setup lang="ts">
import '@varlet/touch-emulator'

if (process.client) {
  useTheme()
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
