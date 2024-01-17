<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const active = ref()

watch(
  () => route.path,
  (newValue) => {
    active.value = newValue
  },
  { immediate: true }
)

function to(path: string) {
  router.push(path)
}
</script>

<template>
  <app-header>
    <template #left>
      <app-side-menu />
    </template>
    <template #right>
      <!-- <app-locale-switch />
      <app-theme-switch /> -->
    </template>
    <template #content>
      <var-tabs color="transparent" active-color="#fff" inactive-color="#ddd" v-model:active="active">
        <var-tab name="card">{{ ('Card List') }}</var-tab>
        <var-tab name="rowCard">{{ ('Card List') }}</var-tab>
        <var-tab name="plainCard">{{ ('Card List') }}</var-tab>
      </var-tabs>
    </template>
  </app-header>

  <slot />
  <var-bottom-navigation border safe-area fixed v-model:active="active">
    <var-bottom-navigation-item :label="('HOME')" icon="home" name="/layout/home" @click="() => to('/layout/home')" />
    <var-bottom-navigation-item :label="('TOPIC')" icon="heart" name="/layout/topic"
      @click="() => to('/layout/topic')" />
    <var-bottom-navigation-item :label="('MESSAGE')" icon="bell" name="/layout/message"
      @click="() => to('/layout/message')" />
    <var-bottom-navigation-item :label="('PROFILE')" icon="account-circle" name="/layout/profile"
      @click="() => to('/layout/profile')" />
  </var-bottom-navigation>
</template>
