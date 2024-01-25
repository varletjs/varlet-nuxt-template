<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const isRefresh = ref(false)
const active = ref<number[]>([])

function handleRefresh() {
  isRefresh.value = false
}
</script>

<template>
  <div class="topic" p-t="$calc(var(--app-bar-height)+1px)">
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
    </app-header>
    <var-pull-refresh v-model="isRefresh" @refresh="handleRefresh">
      <var-collapse v-model="active" :elevation="0" :offset="false">
        <var-collapse-item v-for="i in 20" :key="i">
          <template #title>
            <div flex items-center :class="{ 'topic-item-active': active.includes(i - 1) }">
              <div flex items-center justify-center w-13 h-13 m-r-4>
                <var-icon name="heart" size="6vmin" />
              </div>
              <span>{{ $t('Topic') }} {{ i }}</span>
            </div>
          </template>

          <div p-x-2>
            <div flex items-center v-for="j in 5" :key="j">
              <div flex items-center justify-center w-13 h-13 m-r-4>
                <var-icon name="star" size="6vmin" />
              </div>
              <span>{{ $t('Child topic') }} {{ i }} - {{ j }}</span>
            </div>
          </div>
        </var-collapse-item>
      </var-collapse>
    </var-pull-refresh>
  </div>
</template>

<style scoped>
.topic {
  --collapse-header-padding: 0 20px;
}

.topic-item-active {
  color: var(--color-primary);
}
</style>
