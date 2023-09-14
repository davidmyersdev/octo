<script lang="ts">
const layers = {
  0: 'bg-layer-0',
  1: 'bg-layer-1',
  2: 'bg-layer-2',
  3: 'bg-layer-3',
  4: 'bg-layer-4',
}

export default defineComponent({
  props: {
    description: {
      type: String,
    },
    label: {
      type: String,
    },
    layer: {
      default: 2,
      type: Number as PropType<keyof typeof layers>,
    },
    lines: {
      default: 1,
      type: Number,
    },
    modelValue: {
      type: String,
    },
    multiline: {
      default: false,
      type: Boolean,
    },
    placeholder: {
      default: '',
      type: String,
    },
    private: {
      default: false,
      type: Boolean,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const classes = computed(() => layers[props.layer])
    const text = computed({
      get: () => props.modelValue ?? textFallback.value,
      set: (value) => {
        let filtered = value

        if (!props.multiline) {
          filtered = filtered.replace(/(?:\s+)?\n(?:\s+)?/g, ' ')
        }

        if (typeof props.modelValue === 'undefined') {
          textFallback.value = filtered
        }

        emit('update:modelValue', filtered)
      },
    })
    const textFallback = ref('')
    const textElement = ref<HTMLElement>()
    const height = ref('auto')

    const handleEnter = (event: KeyboardEvent) => {
      if (!props.multiline) {
        event.preventDefault()
        event.stopPropagation()
      }
    }

    const updateHeight = () => {
      if (textElement.value && typeof window !== 'undefined') {
        const computedStyles = window.getComputedStyle(textElement.value)
        const lineHeight = computedStyles.getPropertyValue('line-height')
        const paddingTop = computedStyles.getPropertyValue('padding-top')
        const paddingBottom = computedStyles.getPropertyValue('padding-bottom')
        const borderTop = computedStyles.getPropertyValue('border-top-width')
        const borderBottom = computedStyles.getPropertyValue('border-bottom-width')
        const textLines = text.value.split('\n').length

        height.value = `calc((${lineHeight} * ${textLines}) + ${borderTop} + ${borderBottom} + ${paddingTop} + ${paddingBottom})`
      }
    }

    watch(text, () => {
      if (props.multiline) {
        updateHeight()
      }
    })

    onMounted(() => {
      updateHeight()
    })

    return {
      classes,
      handleEnter,
      height,
      text,
      textElement,
    }
  },
})
</script>

<template>
  <div class="flex flex-col gap-1">
    <label class="cursor-pointer flex flex-col gap-1 group focus-within:cursor-text">
      <small>{{ label }}</small>
      <div class="flex -m-1 p-1 rounded group-focus-within:ring">
        <div class="flex flex-col flex-grow overflow-hidden p-1 relative rounded" :class="classes">
          <span v-if="private" class="absolute flex inset-0 items-center justify-center z-10 group-focus-within:opacity-0 group-focus-within:-z-10" :class="classes">
            <span class="flex gap-2 items-center">
              <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Tap to view</span>
            </span>
          </span>
          <textarea
            ref="textElement"
            v-model="text"
            :placeholder="placeholder"
            :rows="lines"
            :spellcheck="false"
            :style="{ height }"
            class="unset-all cursor-text block min-h-0 overflow-hidden resize-none"
            :class="{ 'whitespace-nowrap': !multiline }"
            @keypress.enter="handleEnter"
          />
        </div>
      </div>
    </label>
    <small v-if="description" class="text-gray-500">{{ description }}</small>
  </div>
</template>
