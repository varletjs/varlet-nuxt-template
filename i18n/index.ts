import { Locale as ComponentsLocale } from '@varlet/ui'

ComponentsLocale.add('en-US', ComponentsLocale.enUS)
ComponentsLocale.use('zh-CN')

export type Locale = 'zh-CN' | 'en-US'

export const loadMessages = () => {
  const modules: Record<string, any> = import.meta.glob('./messages/*.ts', {
    eager: true
  })

  return Object.keys(modules).reduce((messages, path) => {
    const locale = path.replace(/(\.\/messages\/|\.ts)/g, '')
    messages[locale] = modules[path].default
    return messages
  }, {} as Record<string, any>)
}

export function setLocale(locale: Locale) {
  useNuxtApp().$i18n.locale.value = locale
  ComponentsLocale.use(locale)
}

export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: 'zh-CN',
    fallbackLocale: 'en-US',
    messages: loadMessages(),
  }
})
