<script lang="ts">
import { ExclamationCircleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/vue/24/outline'
import { type PropType, defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    ExclamationCircleIcon,
    InformationCircleIcon,
    XCircleIcon,
  },
  props: {
    type: {
      default: 'notice',
      type: String as PropType<'danger' | 'notice' | 'warning'>,
    },
  },
  setup(props) {
    const isDanger = ref(props.type === 'danger')
    const isNotice = ref(props.type === 'notice')
    const isWarning = ref(props.type === 'warning')

    return {
      isDanger,
      isNotice,
      isWarning,
    }
  },
})
</script>

<template>
  <section
    :class="{ 'text-red-200': isDanger, 'text-blue-200': isNotice, 'text-yellow-200': isWarning }"
    class="flex gap-3 rounded p-2 border border-current shadow"
    role="alert"
  >
    <span class="flex items-start">
      <slot name="icon">
        <XCircleIcon v-if="isDanger" class="h-6" />
        <ExclamationCircleIcon v-else-if="isWarning" class="h-6" />
        <InformationCircleIcon v-else class="h-6" />
      </slot>
    </span>
    <slot />
  </section>
</template>
