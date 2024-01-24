import { darkTheme } from '~/styles/dark'
import { lightTheme } from '~/styles/light'

export const useTheme = () => {
  const isDark = useDark({
    selector: 'body',
    attribute: 'color-scheme',
    valueDark: 'dark',
    valueLight: 'light',
    onChanged(dark) {
      StyleProvider(dark ? darkTheme : lightTheme)
    },
  })
  const toggleDark = useToggle(isDark)

  return { isDark, toggleDark }
}
