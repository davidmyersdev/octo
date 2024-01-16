import { onMounted, ref } from 'vue'

export const useVue = () => {
  const isMounted = ref(false)

  onMounted(() => {
    isMounted.value = true
  })

  return {
    isMounted,
  }
}
