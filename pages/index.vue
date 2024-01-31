<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const router = useRouter()
const active = ref('card')
const isRefresh = ref(false)

const cardPage = ref(1)
const isFinish = ref(false)

const { data: cardList, pending: isCardsLoading, refresh: handleCardRefresh } = await useFetch('/api/card', {
  query: {
    currentPage: cardPage
  },
  default: () => [],
  transform: (res) => {
    return res.data
  },
  onResponse: () => {
    isFinish.value = true
  }
})

const onLoadCards = async () => {
  cardPage.value++
}

function handleClick(id: number) {
  router.push(`/detail/${id}`)
}

async function handleRefresh() {
  cardPage.value = 1
  await handleCardRefresh()
  isFinish.value = false
  isRefresh.value = false
}
</script>

<template>
  <div>
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
    <div p-x p-t="[calc(var(--tabs-item-horizontal-height)+1rem)]">
      <var-pull-refresh v-model="isRefresh" @refresh="handleRefresh">
        <var-tabs-items v-model:active="active">
          <var-tab-item name="card">
            <var-list @load="onLoadCards" :finished="isFinish" v-model:loading="isCardsLoading">
              <var-space direction="column" size="large">
                <var-card :title="$t('Card Title')" :subtitle="$t('Card Subtitle')" src="~/assets/images/material-2.png"
                  ripple v-for="i in cardList" :key="i" @click="handleClick(i.id)">
                  <template #description>
                    <var-ellipsis class="var-card__description" :line-clamp="6" :tooltip="false">
                      {{ $t('Card Description') }}
                    </var-ellipsis>
                  </template>
                  <template #extra>
                    <var-space>
                      <var-button text type="primary" @touchstart.stop @click.stop>{{ $t('ACTION') }}</var-button>
                      <var-button text type="primary" @touchstart.stop @click.stop>{{ $t('ACTION') }}</var-button>
                    </var-space>
                  </template>
                </var-card>
              </var-space>
            </var-list>
          </var-tab-item>
          <var-tab-item min-h="[calc(var(--app-height)-var(--tabs-item-horizontal-height)-var(--app-bar-height))]"
            name="rowCard">
            <var-result type="empty" :title="$t('Null')" :description="$t('Null Description')">
              <template #footer>
                <var-button color="var(--result-empty-color)" text-color="#fff">
                  {{ $t('I Know') }}
                </var-button>
              </template>
            </var-result>
          </var-tab-item>
          <var-tab-item min-h="[calc(var(--app-height)-var(--tabs-item-horizontal-height)-var(--app-bar-height))]"
            name="plainCard">

          </var-tab-item>
        </var-tabs-items>
      </var-pull-refresh>
    </div>
  </div>
</template>
