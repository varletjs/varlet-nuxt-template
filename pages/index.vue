<script setup lang="ts">

const router = useRouter()
const active = ref('card')
const isRefresh = ref(false)

function handleClick() {
  router.push('/layout/home/detail')
}

async function handleRefresh() {
  const value = { cards: [], current: 1, error: false, finished: false }
}
</script>

<template>
  <app-header>
    <template #left>
      <app-side-menu />
    </template>
    <template #right>
      <app-locale-switch />
      <client-only>
        <app-theme-switch />
      </client-only>
    </template>
    <template #content>
      <var-tabs color="transparent" active-color="#fff" inactive-color="#ddd" v-model:active="active">
        <var-tab name="card">{{ $t('Card List') }}</var-tab>
        <var-tab name="rowCard">{{ $t('Card List') }}</var-tab>
        <var-tab name="plainCard">{{ $t('Card List') }}</var-tab>
      </var-tabs>
    </template>
  </app-header>
  <div p-t="[var(--tabs-item-horizontal-height)]">
    <var-pull-refresh v-model="isRefresh" @refresh="handleRefresh">
      <var-tabs-items v-model:active="active">
        <var-tab-item min-h="[calc(var(--app-height)-var(--tabs-item-horizontal-height)-var(--app-bar-height))]" name="card">

        </var-tab-item>
        <var-tab-item min-h="[calc(var(--app-height)-var(--tabs-item-horizontal-height)-var(--app-bar-height))]" name="rowCard">

        </var-tab-item>
        <var-tab-item min-h="[calc(var(--app-height)-var(--tabs-item-horizontal-height)-var(--app-bar-height))]" name="plainCard">

        </var-tab-item>
      </var-tabs-items>
    </var-pull-refresh>
  </div>
</template>
