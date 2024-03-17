<script lang="ts">
import { type Options } from 'ink-mde'
import Ink from 'ink-mde/vue'
import { OverlayScrollbars } from 'overlayscrollbars'
import { type SystemAppearance } from '#composables/useAppearance'

export default defineComponent({
  components: {
    Ink,
  },
  props: {
    appearance: {
      type: String as PropType<SystemAppearance>,
    },
    maxWidthInChars: {
      default: 100,
      type: Number,
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
    const { appearance, maxWidthInChars, options } = toRefs(props)

    const { system } = useAppearance()
    const ink = ref<InstanceType<typeof Ink>>()
    const editorAppearance = computed(() => (appearance.value ?? options.value?.interface?.appearance ?? system.value))
    const { layer: currentLayer, nextLayer } = useLayers()
    const nextIndex = computed(() => nextLayer.value.index)
    const { nextLayer: twoLayersAbove } = useLayers(nextIndex)
    const cssMaxWidth = computed(() => `${maxWidthInChars.value}ch`)
    const instance = computed(() => ink.value?.instance)

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
      instance.value?.focus()
      instance.value?.select({ at })
    }

    onMounted(() => {
      const editorContent = ink.value?.$el.querySelector('.ink-mde-editor')
      const editorToolbar = ink.value?.$el.querySelector('.ink-mde-toolbar')

      if (editorContent) {
        OverlayScrollbars(editorContent, {
          scrollbars: {
            autoHide: 'leave',
            autoHideDelay: 200,
          },
        })
      }

      if (editorToolbar) {
        OverlayScrollbars(editorToolbar, {
          scrollbars: {
            autoHide: 'leave',
            autoHideDelay: 200,
          },
        })
      }
    })

    return {
      cssMaxWidth,
      currentLayer,
      editorOptions,
      focus,
      ink,
      instance,
      nextLayer,
      twoLayersAbove,
    }
  },
})
</script>

<template>
  <Ink
    ref="ink"
    :model-value="modelValue"
    :options="editorOptions"
    class="core-editor flex flex-col flex-grow flex-shrink rounded"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>

<style scoped>
.core-editor {
  --core-editor-max-width-in-chars: v-bind('cssMaxWidth');
  --core-editor-layer-0-bg: rgb(v-bind('nextLayer.bgCssVar'));
  --core-editor-layer-1-bg: rgb(v-bind('nextLayer.bgCssVar'));
  --core-editor-layer-2-bg: rgb(v-bind('twoLayersAbove.bgCssVar'));
  --ink-font-family: 'Inter', helvetica, sans-serif;
  --ink-code-font-family: 'Fira Code', monospace;
  --ink-block-background-color: rgb(v-bind('nextLayer.bgCssVar'));
  --ink-block-background-color-on-hover: rgb(v-bind('nextLayer.bgHoverCssVar'));
  --ink-syntax-hashtag-background-color: rgb(v-bind('nextLayer.bgCssVar'));
  --ink-syntax-processing-instruction-color: rgb(v-bind('nextLayer.textCssVar') / 0.1);

  :deep(.ink-mde) {
    border: none;
    border-radius: 0;

    @media (max-width: 767px) {
      .ink-mde-toolbar {
        order: 1;

        .ink-mde-container {
          gap: 0;
        }
      }

      .ink-mde-editor {
        padding-top: 2rem;
      }

      .ink-mde-details {
        background-color: transparent;
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
      }
    }

    @media (min-width: 768px) {
      .ink-mde-toolbar {
        background-color: transparent;
        background: repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 10px,
          var(--core-editor-layer-1-bg) 10px,
          var(--core-editor-layer-1-bg) 12px
        );
        border-bottom: 2px solid var(--core-editor-layer-1-bg);

        .ink-mde-container {
          background-color: var(--core-editor-layer-1-bg);
          border-radius: 0.25rem;
          padding: 0.25rem;
        }
      }

      .ink-mde-details {
        border-top: 2px solid var(--core-editor-layer-2-bg);
      }
    }

    .ink-mde-container {
      max-width: var(--core-editor-max-width-in-chars);
    }

    .ink-mde-task-toggle {
      @apply checkbox;

      top: -2px;
    }

    .cm-editor,
    .cm-scroller {
      flex-grow: 1;
      flex-shrink: 1;
      min-height: 0;
    }

    .cm-editor.cm-focused {
      outline: none;
    }

    .ink-mde-widget svg {
      margin: auto;
    }
  }
}
</style>
