
export const useMobile = (() => {
  const ua = useRequestHeader('User-Agent')
  console.log('ua', ua);
  if (!ua) {
    return false
  }

  const isWindowsPhone = /(?:Windows Phone)/.test(ua),
    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
    isAndroid = /(?:Android)/.test(ua),
    isTablet =
      /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)),
    isPhone = /(?:iPhone)/.test(ua) && !isTablet

  return isPhone || isAndroid || isSymbian
})
