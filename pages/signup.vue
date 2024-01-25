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
  password: '',
  confirmPassword: '',
  email: '',
  verifyCode: ''
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
    <app-header :title="$t('Sign Up')">
      <template #left>
        <app-back />
      </template>
    </app-header>

    <var-form ref="form" w="70" m-t-2.5>
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

        <var-input variant="outlined" :placeholder="$t('Please input {field}', { field: $t('confirm password') })"
          :rules="[validateNotEmpty(), (v) => v === account.password || $t('Not match the password')]"
          :type="isViewPassword ? 'text' : 'password'" v-model="account.confirmPassword">
          <template #prepend-icon>
            <var-icon m-r-2.5 text-size-6 name="lock" />
          </template>
          <template #append-icon>
            <var-icon m-r-2.5 text-size-6 :name="isViewPassword ? 'view' : 'view-outline'"
              @click="isViewPassword = !isViewPassword" />
          </template>
        </var-input>

        <var-input variant="outlined" :placeholder="$t('Please input {field}', { field: $t('email') })"
          :rules="[validateEmail()]" v-model="account.email">
          <template #prepend-icon>
            <var-icon m-r-2.5 text-size-6 name="email" />
          </template>
        </var-input>

        <var-input variant="outlined" :placeholder="$t('Please input {field}', { field: $t('verify code') })"
          :rules="[validateLength(6)]" v-model="account.verifyCode">
          <template #prepend-icon>
            <var-icon m-r-2.5 text-size-6 name="card-account-details" />
          </template>
        </var-input>

        <var-button type="primary" block size="large" auto-loading @click="submit">{{ $t('Sign Up') }}</var-button>
      </var-space>
    </var-form>
  </div>
</template>
