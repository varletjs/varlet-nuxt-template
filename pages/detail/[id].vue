<script setup lang="ts">
definePageMeta({
  layout: 'none'
})

const isRefresh = ref(false)
const activeHeart = ref(false)

function handleRefresh() {
  isRefresh.value = false
}

function toggleHeart() {
  activeHeart.value = !activeHeart.value
}
</script>

<template>
  <div>
    <app-header :title="$t('Card Title')">
      <template #left>
        <app-back />
      </template>
      <template #right>
        <var-menu close-on-click-reference placement="bottom-end" offset-y="2vmin">
          <var-button text round>
            <var-icon text-6 name="dots-vertical" />
          </var-button>

          <template #menu>
            <var-cell icon="heart" ripple> {{ $t('ACTION') }} </var-cell>
            <var-cell icon="star" ripple> {{ $t('ACTION') }} </var-cell>
            <var-cell icon="delete" ripple> {{ $t('ACTION') }} </var-cell>
          </template>
        </var-menu>
      </template>
    </app-header>

    <var-pull-refresh v-model="isRefresh" @refresh="handleRefresh">
      <div relative>
        <var-swipe>
          <var-swipe-item>
            <var-image fit="cover" height="54vmin" src="@/assets/images/material-2.png" />
          </var-swipe-item>
          <var-swipe-item>
            <var-image fit="cover" height="54vmin" src="@/assets/images/material-2.png" />
          </var-swipe-item>
          <var-swipe-item>
            <var-image fit="cover" height="54vmin" src="@/assets/images/material-2.png" />
          </var-swipe-item>
        </var-swipe>
        <var-fab :fixed="false" :teleport="false" bottom="-6vmin">
          <template #trigger>
            <var-button important-p-4 size="large" type="primary" color="#EC407A" round @click="toggleHeart">
              <var-icon :name="activeHeart ? 'heart' : 'heart-outline'" animation-class="detail-fade-animation"
                :transition="300" size="6vmin" />
            </var-button>
          </template>
        </var-fab>
      </div>

      <div p-y-1px>
        <div max-w-80 text-size="[var(--card-title-font-size)]" p="[var(--card-title-padding)]"
          m="[var(--card-title-margin)]" c="[var(--card-title-color)]">{{ $t('Card Title') }}</div>
        <div text="[var(--card-subtitle-font-size)]" p="[var(--card-subtitle-padding)]" m="[var(--card-subtitle-margin)]"
          c="[var(--card-subtitle-color)]">{{ $t('Card Subtitle') }}</div>
        <div text="[var(--card-description-font-size)]" p="[var(--card-description-padding)]"
          m="[var(--card-description-margin)]" c="[var(--card-description-color)]" line-height-normal>
          {{ $t('Card Description') }}
        </div>
      </div>

      <var-divider margin="7vmin 0" />

      <div class="detail-comment">
        <div class="detail-comment-subtitle">{{ $t('Comment Information Area') }}</div>
        <div class="detail-comment-chips">
          <var-space :size="['5vmin', '4vmin']">
            <var-chip v-for="i in 8" :key="i">
              <template #left>
                <var-avatar class="detail-comment-avatar" src="@/assets/images/avatar.jpg" />
              </template>
              <var-ellipsis style="max-width: 26vmin" :tooltip="{ sameWidth: false }">
                {{ $t('This is a comment') }}
              </var-ellipsis>
            </var-chip>
          </var-space>
        </div>

        <div class="detail-comment-footer">
          <var-rate class="detail-comment-rate" size="6vmin" half empty-color="#FFC107" color="#FFC107" readonly :gap="2"
            :model-value="3.5" />

          <div class="detail-comment-total">{{ $t('A total of {count} comments', { count: 100 }) }}</div>
        </div>
      </div>
      <div class="detail-comment">
        <div class="detail-comment-subtitle">{{ $t('Comment Information Area') }}</div>
        <div class="detail-comment-chips">
          <var-space :size="['5vmin', '4vmin']">
            <var-chip v-for="i in 8" :key="i">
              <template #left>
                <var-avatar class="detail-comment-avatar" src="@/assets/images/avatar.jpg" />
              </template>
              <var-ellipsis style="max-width: 26vmin" :tooltip="{ sameWidth: false }">
                {{ $t('This is a comment') }}
              </var-ellipsis>
            </var-chip>
          </var-space>
        </div>

        <div class="detail-comment-footer">
          <var-rate class="detail-comment-rate" size="6vmin" half empty-color="#FFC107" color="#FFC107" readonly :gap="2"
            :model-value="3.5" />

          <div class="detail-comment-total">{{ $t('A total of {count} comments', { count: 100 }) }}</div>
        </div>
      </div>

      <div class="detail-actions">
        <var-button class="detail-action" block type="primary">
          <var-icon name="star" />
          <span class="detail-action-text">
            {{ $t('ACTION BUTTON') }}
          </span>
          <var-icon name="star" />
        </var-button>
      </div>
    </var-pull-refresh>
  </div>
</template>

<style scoped>
.detail-fade-animation {
  transition-property: opacity, transform;
  transform: rotate(45deg);
  opacity: 0;
}
</style>
