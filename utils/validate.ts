export function validateNotEmpty(text = useNuxtApp().$i18n.t('Value cannot be empty')) {
  return (v: any) => !!v || text
}

export function validateEmail(text = useNuxtApp().$i18n.t('Email format error')) {
  return (v: any) => /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(v) || text
}

export function validateLength(length: number, text?: string) {
  text = text ?? useNuxtApp().$i18n.t('Length must be {length}', { length })

  return (v: any) => v.length === length || text
}
