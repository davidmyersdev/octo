export const useToast = ({ clearIn = 1500 } = {}) => {
  const isShowing = ref(false)
  const hideEventually = useDebounceFn(() => {
    isShowing.value = false
  }, clearIn)

  const show = () => {
    isShowing.value = true

    hideEventually()
  }

  const hide = () => {
    isShowing.value = false
  }

  return {
    isShowing,
    show,
    hide,
  }
}
