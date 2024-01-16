<script lang="ts">
export default defineComponent({
  setup() {
    const { modKey } = useDevice()
    const { store } = useVuex()
    const isActive = computed(() => store.state.keybindings.listening)

    return {
      isActive,
      modKey,
    }
  },
})
</script>

<template>
  <div class="hidden md:flex items-center">
    <Key :class="{ 'text-layer-muted': isActive }">{{ modKey }}</Key>
    <Key :class="{ 'text-layer-muted': isActive }" class="ml-1">K</Key>
  </div>
</template>
