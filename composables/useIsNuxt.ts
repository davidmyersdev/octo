export const useIsNuxt = () => {
  // @ts-ignore
  const { isNuxt } = globalThis

  return {
    isNuxt,
  }
}
