<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const active = ref('module')
const isRefresh = ref(false)

function handleRefresh() {
  isRefresh.value = false
}
</script>

<template>
  <div class="profile" p-t="$profile-header-height">
    <app-header>
      <template #left>
        <app-side-menu />
      </template>
      <template #right>
        <client-only>
          <app-theme-switch />
        </client-only>
        <app-locale-switch />
      </template>
      <template #content>
        <div>
          <div flex items-center p-x-5 h-28>
            <var-avatar flex-shrink-0 src="@/assets/images/avatar.jpg" size="22vmin" bordered />
            <div m-l-4>
              <div text-size-6>{{ $t('Your Name') }}</div>
              <var-space p-t-2.5 text-color="#ccc" text-size="3.5" items-baseline :size="[0, '1.6vmin']">
                <span>{{ $t('Male') }}</span>
                <span>/</span>
                <span>100 {{ $t('Followers') }}</span>
                <span>/</span>
                <span>49 {{ $t('Likes') }}</span>
              </var-space>
            </div>
          </div>
          <var-tabs color="transparent" active-color="#fff" inactive-color="#ddd" v-model:active="active">
            <var-tab name="module">{{ $t('Modules') }}</var-tab>
            <var-tab name="profile">{{ $t('Profile') }}</var-tab>
          </var-tabs>
        </div>
      </template>
    </app-header>
    <var-pull-refresh v-model="isRefresh" @refresh="handleRefresh">
      <var-tabs-items v-model:active="active">
        <var-tab-item name="module">
          <var-space p-b-8 p-x-3.5 direction="column" :size="['1.8vmin', 0]">
            <var-space translate-x="1.75vmin" :size="['2.6vmin', '2.6vmin']">
              <div p-2.5 v-for="i in 9" :key="i">
                <var-paper ripple flex flex-col items-center justify-center width="22vmin" height="22vmin" :radius="10"
                  :elevation="1">
                  <var-icon name="card-account-details" color="var(--color-primary)" size="11vmin" />
                  <span text-color="$app-title-color" text-size-3.5 m-t-1>{{ $t('Module') }}</span>
                </var-paper>
              </div>
            </var-space>

            <var-divider />

            <var-space p-b-8 p-x-3.5 direction="column" :size="['7vmin', 0]">
              <var-paper ripple p-y p-x-7 flex items-center justify-center :radius="10" :elevation="1" v-for="i in 6" :key="i">
                <var-icon name="fire" color="var(--color-primary)" size="11vmin" />
                <div w="50vmin" m-l-6>
                  <div text-color="$app-title-color" m-t-0.5>{{ $t('Module') }}</div>
                  <div text-color="$app-subtitle-color" text-size-3.5 m-t-0.5>
                    <var-ellipsis style="max-width: 100%" :tooltip="false">{{
                      $t('Module introductory text')
                    }}</var-ellipsis>
                  </div>
                </div>
              </var-paper>
            </var-space>
          </var-space>
        </var-tab-item>

        <var-tab-item name="profile">
          <var-space class="profile-detail" p-b-7.5 m-t-1 direction="column" :size="['6vmin', 0]">
            <div m-t-2.5>
              <div text-color="$app-subtitle-color" text-size-3.5 m-b-3.5 p-x-6>{{ $t('About Me') }}</div>
              <div text-size-3.5 lh-7 p-x-6>{{ $t('Section Text') }}</div>
            </div>

            <div m-t-2.5>
              <div text-color="$app-subtitle-color" text-size-3.5 m-b-3.5 p-x-6>{{ $t('Section') }}</div>
              <var-cell border ripple :title="$t('Section title')" :description="$t('Section subtitle')"
                :border-offset="0" v-for="i in 4" :key="i">
                <template #icon>
                  <var-icon m-r-6 name="account-circle" size="10vmin" />
                </template>
              </var-cell>
            </div>

            <div m-t-2.5>
              <div text-color="$app-subtitle-color" text-size-3.5 m-b-3.5 p-x-6>{{ $t('Section') }}</div>
              <var-cell border ripple :title="$t('Section title')" :description="$t('Section subtitle')"
                :border-offset="0" v-for="i in 4" :key="i">
                <template #icon>
                  <var-icon m-r-6 name="shopping" size="10vmin" />
                </template>
              </var-cell>
            </div>

            <div m-t-2.5>
              <div text-color="$app-subtitle-color" text-size-3.5 m-b-3.5 p-x-6>{{ $t('Followers') }} (10086)</div>
              <var-avatar-group m-t-3 p-x-5 offset="-2vmin">
                <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="12vmin" v-for="i in 7" :key="i" />
                <var-avatar size="13vmin">+10086</var-avatar>
              </var-avatar-group>
            </div>

            <var-divider />

            <div m-t-2.5>
              <div text-color="$app-subtitle-color" text-size-3.5 m-b-3.5 p-x-6>{{ $t('Following') }} (10086)</div>
              <var-avatar-group m-t-3 p-x-5 offset="-2vmin">
                <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="12vmin" v-for="i in 7" :key="i" />
                <var-avatar size="13vmin">+10086</var-avatar>
              </var-avatar-group>
            </div>
          </var-space>
        </var-tab-item>
      </var-tabs-items>
    </var-pull-refresh>

    <var-fab type="primary" right="5vmin" bottom="20vmin"
      :drag="{ boundary: { left: '2vmin', right: '2vmin', top: '55vmin', bottom: '15vmin' } }">
      <var-button type="primary" round>
        <var-icon name="phone" />
      </var-button>
      <var-button type="primary" round>
        <var-icon name="star" />
      </var-button>
      <var-button type="primary" round>
        <var-icon name="heart" />
      </var-button>
    </var-fab>
  </div>
</template>

<style scoped>
.profile {
  --profile-header-height: 172px;
  --avatar-border: 3px solid #fff;
}

.profile-detail {
  --cell-padding: 16px 20px;
}
</style>
