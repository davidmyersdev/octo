export const useIsNuxt = () => {
  // @ts-ignore
  const isNuxt = typeof useNuxtApp !== 'undefined'

  return {
    isNuxt,
  }
}
