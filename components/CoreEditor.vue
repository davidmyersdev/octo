<script lang="ts">
import { type Options } from 'ink-mde'
import Ink from 'ink-mde/vue'
import { type SystemAppearance } from '#composables/useAppearance'

type LayerIndex = 0 | 1 | 2 | 3 | 4

export default defineComponent({
  components: {
    Ink,
  },
  props: {
    appearance: {
      type: String as PropType<SystemAppearance>,
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
    const { layer: layerIndex } = toRefs(props)
    const { system } = useAppearance()
    const editorElement = ref<InstanceType<typeof Ink>>()
    const editorAppearance = computed(() => (props.appearance ?? props.options?.interface?.appearance ?? system.value))
    const { layer: currentLayer, nextLayer } = useLayers(layerIndex)
    const editorOptions = computed(() => {
      return {
        ...props.options,
        interface: {
          ...props.options?.interface,
          appearance: editorAppearance.value,
        },
      }
    })

    const focus = ({ at }: { at?: 'start' | 'end' } = {}) => {
      editorElement.value?.instance?.focus()
      editorElement.value?.instance?.select({ at })
    }

    return {
      currentLayer,
      editorElement,
      editorOptions,
      focus,
      nextLayer,
    }
  },
})
</script>

<template>
  <Ink
    ref="editorElement"
    :model-value="modelValue"
    :options="editorOptions"
    :class="currentLayer.bg"
    class="core-editor flex flex-col flex-grow flex-shrink rounded"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>

<style scoped>
.core-editor {
  --ink-font-family: 'Inter', helvetica, sans-serif;
  --ink-code-font-family: 'Fira Code', monospace;
  --ink-block-background-color: v-bind('nextLayer.bg');
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
