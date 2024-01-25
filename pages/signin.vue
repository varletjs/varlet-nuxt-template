<script setup lang="ts">
import { Form } from '@varlet/ui'

definePageMeta({
  layout: 'none'
})

const { t } = useI18n()
const form = ref<Form>()
const isViewPassword = ref(false)
const account = reactive({
  username: '',
  password: ''
})

async function submit() {
  const valid = await form.value?.validate()

  if (valid) {
    return new Promise((resolve) => {
      setTimeout(() => {
        Snackbar.success(t('Submit Success'))
        resolve(undefined)
      }, 1000)
    })
  }
}
</script>

<template>
  <div flex flex-col justify-center items-center p-t="$app-bar-height" p-b-15>
    <app-header :title="$t('Sign In')">
      <template #left>
        <app-back />
      </template>
    </app-header>

    <var-image src="@/assets/images/logo.svg" width="24vmin" height="24vmin" />

    <var-form ref="form" w="70" m-t-12.5>
      <var-space direction="column" :size="['8vmin', 0]">
        <var-input variant="outlined" :placeholder="$t('Please input {field}', { field: $t('username') })"
          :rules="[validateNotEmpty()]" v-model="account.username">
          <template #prepend-icon>
            <var-icon m-r-2.5 text-size-6 name="account-circle" />
          </template>
        </var-input>
        <var-input variant="outlined" :placeholder="$t('Please input {field}', { field: $t('password') })"
          :rules="[validateNotEmpty()]" :type="isViewPassword ? 'text' : 'password'" v-model="account.password">
          <template #prepend-icon>
            <var-icon m-r-2.5 text-size-6 name="lock" />
          </template>
          <template #append-icon>
            <var-icon m-r-2.5 text-size-6 :name="isViewPassword ? 'view' : 'view-outline'"
              @click="isViewPassword = !isViewPassword" />
          </template>
        </var-input>

        <var-space text-size-3.5 color="$color-primary" justify="space-between" align="center">
          <var-checkbox>{{ $t('Remember Me') }}</var-checkbox>
          <span @click="$router.push(`${$route.path}/forgot-password`)">{{ $t('Forgot Password') }}?</span>
        </var-space>
        <var-button type="primary" block size="large" auto-loading @click="submit">{{ $t('Sign In') }}</var-button>
        <var-space text-size-3.5 color="$color-primary" justify="center" @click="$router.push(`${$route.path}/sign-up`)">
          {{ $t('Click to sign up') }}
        </var-space>
      </var-space>
    </var-form>
  </div>
</template>
