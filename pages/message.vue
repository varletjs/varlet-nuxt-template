<script setup lang="ts">
const isRefresh = ref(false)

function handleRefresh() {
  isRefresh.value = false
}
</script>

<template>
  <div p-t="$calc(var(--app-bar-height)+1px)">
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
      <div p-y-3>
        <div relative flex p-t-5 v-for="i in 20" :key="i">
          <var-avatar flex-shrink-0 m-x src="~/assets/images/avatar.jpg" size="12vmin" />
          <div w="76vmin" b-b-thin b-b="solid $divider-color" p-b-5>
            <div flex justify-between items-center>
              <div text-color="$app-title-color">
                <var-ellipsis style="max-width: 100%" :tooltip="false">{{ $t('Section title') }}</var-ellipsis>
              </div>
              <div text-color="$app-subtitle-color" text-3 m-b-1>2023-07-27</div>
            </div>
            <div text-color="$app-subtitle-color" text-3.9 m-t-2>
              <var-ellipsis :line-clamp="2" :tooltip="false">{{ $t('Section Text') }}</var-ellipsis>
            </div>
          </div>
        </div>
      </div>
    </var-pull-refresh>
  </div>
</template>
