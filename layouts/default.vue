<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const active = ref()

const tabs = ref([
  {
    label: 'HOME',
    icon: 'home',
    name: '/'
  },
  {
    label: 'TOPIC',
    icon: 'heart',
    name: '/topic'
  },
  {
    label: 'MESSAGE',
    icon: 'bell',
    name: '/message'
  },
  {
    label: 'PROFILE',
    icon: 'account-circle',
    name: '/profile'
  }
])

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
  <div of-y-auto p-t="[var(--app-bar-height)]" p-b="[var(--bottom-navigation-height)]" h="[var(--app-height)]">
    <slot />

    <var-bottom-navigation border safe-area fixed v-model:active="active">
      <var-bottom-navigation-item v-for="item in tabs" :key="item.label" :label="$t(item.label)" :icon="item.icon"
        :name="item.name" @click="() => to(item.name)" />
    </var-bottom-navigation>
  </div>
</template>
