<script lang="ts">
import { type Options } from 'ink-mde'
import Ink from 'ink-mde/vue'
import { type BaseAppearance } from '#root/composables/useAppearance'

type LayerIndex = 0 | 1 | 2 | 3 | 4

export default defineComponent({
  components: {
    Ink,
  },
  props: {
    appearance: {
      type: String as PropType<BaseAppearance>,
    },
    layer: {
      default: 1,
      type: Number as PropType<LayerIndex>,
    },
    modelValue: {
      default: '',
      type: String,
    },
    options: {
      type: Object as PropType<Options>,
    },
  },
  emits: ['update:modelValue'],
  setup(props) {
    const { baseAppearance } = useAppearance()
    const layerBg = computed(() => `rgb(var(--layer-${props.layer}-bg))`)
    const editorElement = ref()
    const editorAppearance = computed(() => (props.appearance ?? props.options?.interface?.appearance ?? baseAppearance.value))
    const editorOptions = computed(() => {
      return {
        ...props.options,
        interface: {
          ...props.options?.interface,
          appearance: editorAppearance.value,
        },
      }
    })

    const focus = () => {
      editorElement.value?.instance?.focus()
    }

    return {
      editorElement,
      editorOptions,
      focus,
      layerBg,
    }
  },
})
</script>

<template>
  <Ink
    ref="editorElement"
    :model-value="modelValue"
    :options="editorOptions"
    @update:model-value="$emit('update:modelValue', $event)"
    class="core-editor flex flex-col flex-grow flex-shrink"
  />
</template>

<style scoped>
.core-editor {
  --ink-font-family: 'Inter', helvetica, sans-serif;
  --ink-code-font-family: 'Fira Code', monospace;
  --ink-block-background-color: v-bind('layerBg');
}

:deep(.ink-mde) {
  border: none;
  border-radius: 0;
}

:deep(.ink-mde .cm-editor),
:deep(.ink-mde .cm-scroller) {
  flex-grow: 1;
  flex-shrink: 1;
  min-height: 0;
}

:deep(.core-editor .ink-mde-widget svg) {
  margin: auto;
}

.core-editor :deep(.cm-editor.cm-focused) {
  outline: none;
}
</style>
