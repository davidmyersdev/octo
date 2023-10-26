<script lang="ts">
import type { LayoutKey } from '#build/types/layouts'
import Dashboard from '#root/layouts/dashboard.vue'

export default defineComponent({
  components: {
    Dashboard,
  },
  props: {
    name: {
      type: String as PropType<LayoutKey>,
    },
  },
  setup() {
    const { isNuxt } = useIsNuxt()
    const router = useRouter()
    const isDashboard = computed(() => router.currentRoute.value.name !== 'home')

    return {
      isDashboard,
      isNuxt,
    }
  },
})
</script>

<template>
  <NuxtLayout v-if="isNuxt" :name="name">
    <slot />
  </NuxtLayout>
  <Dashboard v-else-if="isDashboard">
    <slot />
  </Dashboard>
  <slot v-else />
</template>
