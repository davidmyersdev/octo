import { useStore } from 'vuex'

export const useVuex = () => {
  const store = useStore()

  return {
    store,
  }
}
