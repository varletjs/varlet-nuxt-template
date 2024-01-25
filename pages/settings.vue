<script setup lang="ts">
definePageMeta({
  layout: 'none'
})

const value = ref(false)
const sliderValue = ref(0)
</script>

<template>
  <div class="settings">
    <app-header :title="$t('Settings')">
      <template #left>
        <app-back />
      </template>
    </app-header>

    <div p-y-2.5>
      <var-cell :title="$t('Setting Name')">
        <template #icon>
          <var-icon m-r-5 m-l-2 size="6vmin" name="image" />
        </template>
        <template #extra>
          <var-switch m-r-1 size="5.2vmin" v-model="value" />
        </template>
      </var-cell>
      <var-cell :title="$t('Setting Name')">
        <template #icon>
          <var-icon m-r-5 m-l-2 size="6vmin" name="image" />
        </template>
        <template #extra>
          <var-switch m-r-1 size="5.2vmin" v-model="value" />
        </template>
      </var-cell>
      <var-cell :title="$t('Setting Name')" :description="$t('Setting Description')">
        <template #icon>
          <var-icon m-r-5 m-l-2 size="6vmin" name="image" />
        </template>
        <template #extra>
          <var-switch m-r-1 size="5.2vmin" v-model="value" />
        </template>
      </var-cell>
      <var-cell :title="$t('Setting Name')" :description="$t('Setting Description')">
        <template #icon>
          <var-icon m-r-5 m-l-2 size="6vmin" name="image" />
        </template>
        <template #extra>
          <var-switch m-r-1 size="5.2vmin" v-model="value" />
        </template>
      </var-cell>
      <var-cell :title="$t('Setting Name')">
        <template #icon>
          <var-icon m-r-5 m-l-2 m-b-2.5 size="6vmin" name="image" />
        </template>
        <template #description>
          <var-slider v-model="sliderValue" />
        </template>
      </var-cell>
      <var-cell :title="$t('Setting Name')">
        <template #icon>
          <var-icon m-r-5 m-l-2 m-b-2.5 size="6vmin" name="image" />
        </template>
        <template #description>
          <var-slider v-model="sliderValue" />
        </template>
      </var-cell>
    </div>
  </div>
</template>

<style scoped>
.settings {
  --cell-padding: 16px 12px;
}
</style>
