import { ref } from 'vue'

export const useToggle = ({ state = ref(true) } = {}) => {
  const toggle = () => {
    state.value = !state.value
  }

  return {
    state,
    toggle,
  }
}
