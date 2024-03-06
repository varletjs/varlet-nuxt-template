<script setup lang="ts">
import '@varlet/touch-emulator'
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.layout-enter-active,
.layout-leave-active,
.page-enter-active,
.page-leave-active {
  transition: filter 0.4s;
}

.layout-enter-from,
.layout-leave-to,
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
