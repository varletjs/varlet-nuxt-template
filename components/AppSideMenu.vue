<script setup lang="ts">
import Avatar from '~/assets/images/avatar.jpg'
const show = ref(false)
</script>

<template>
  <var-button text round @click="show = !show" v-bind="$attrs">
    <var-icon name="menu" />
  </var-button>

  <var-popup position="left" v-model:show="show">
    <div w-76>
      <div flex flex-col justify-center items-center p-x-5 h-44 class="profile">
        <var-avatar :src="Avatar" size="large" />
        <div text-white>
          <div text-center m-t-4 font-bold text-5>{{ $t('Your Name') }}</div>
          <div m-t-2>{{ $t('Your Email Address') }}</div>
        </div>
      </div>

      <div of-hidden p-x-1 p-y-2 h="[calc(var(--app-height)-170px)]">
        <var-space direction="column">
          <var-cell rd-1 :title="$t('Sign In')" @click="$router.push(`/sign-in`)">
            <template #icon>
              <var-icon m-r-5 name="image" />
            </template>
          </var-cell>
          <var-cell rd-1 :title="$t('Sign Up')" @click="$router.push(`/sign-up`)">
            <template #icon>
              <var-icon m-r-5 name="image" />
            </template>
          </var-cell>
          <var-cell rd-1 :title="$t('Settings')" @click="$router.push(`/settings`)">
            <template #icon>
              <var-icon m-r-5 name="cog" />
            </template>
          </var-cell>

          <var-divider />

          <var-cell rd-1 :title="$t('Close')" @click="show = false">
            <template #icon>
              <var-icon m-r-5 name="window-close" />
            </template>
          </var-cell>
        </var-space>
      </div>
    </div>
  </var-popup>
</template>

<style scoped>
.profile {
  background: url('~/assets/images/material.jpg');
  background-size: cover;
}
</style>