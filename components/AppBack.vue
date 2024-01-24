<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <var-button color="transparent" text-color="#fff" round text @click="router.back">
    <var-icon text-5 name="chevron-left" />
  </var-button>
</template>
