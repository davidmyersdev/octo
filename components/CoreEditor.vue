<script lang="ts">
import { type Instance, type Options } from 'ink-mde'
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

    const editorOptions = computed<Options>(() => {
      return {
        ...props.options,
        interface: {
          ...props.options?.interface,
          appearance: editorAppearance.value,
          toolbar: false,
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

    const formatSelection = (type: Parameters<Instance['format']>[0]) => {
      instance.value?.format(type, {})
    }

    const handleUpload = async (event: Event) => {
      const target = event.target as HTMLInputElement

      if (target?.files) {
        try {
          const url = await props.options?.files?.handler?.(target.files)

          if (url) {
            const markup = `![](${url})`

            instance.value?.insert(markup)
          }
        } catch (error) {
          console.error(error)
        }
      }
    }

    return {
      cssMaxWidth,
      currentLayer,
      editorOptions,
      focus,
      formatSelection,
      handleUpload,
      ink,
      instance,
      nextLayer,
      twoLayersAbove,
    }
  },
})
</script>

<template>
  <div class="core-editor flex flex-col-reverse lg:flex-col flex-grow flex-shrink min-h-0 rounded">
    <template v-if="options?.interface?.toolbar">
      <CoreScrollable class="core-editor-scrollable flex-shrink-0 w-full">
        <div class="mx-auto p-1 min-w-full">
          <CoreEditorToolbar
            class="core-editor-toolbar flex-shrink-0 mx-auto"
            :upload="options?.toolbar?.upload"
            @blockquote="formatSelection('quote')"
            @bold="formatSelection('bold')"
            @bullet-list="formatSelection('list')"
            @code="formatSelection('code')"
            @heading="formatSelection('heading')"
            @image="formatSelection('image')"
            @italic="formatSelection('italic')"
            @link="formatSelection('link')"
            @number-list="formatSelection('ordered_list')"
            @task-list="formatSelection('task_list')"
            @upload="handleUpload"
          />
        </div>
      </CoreScrollable>
      <CoreDivider />
    </template>
    <Ink
      ref="ink"
      :model-value="modelValue"
      :options="editorOptions"
      class="flex flex-col flex-grow flex-shrink min-h-0 rounded overflow-hidden"
      :class="currentLayer.class"
      @update:model-value="$emit('update:modelValue', $event)"
    />
  </div>
</template>

<style scoped>
.core-editor {
  --core-editor-divider: rgb(var(--layer-border));
  --core-editor-layer-0-bg: rgb(var(--layer-bg));
  --core-editor-layer-1-bg: rgb(v-bind('nextLayer.bgCssVar'));
  --core-editor-layer-2-bg: rgb(v-bind('twoLayersAbove.bgCssVar'));
  --core-editor-max-width-in-chars: v-bind('cssMaxWidth');
  --core-editor-text-muted: rgb(var(--layer-text-muted));
  --ink-font-family: 'Inter', helvetica, sans-serif;
  --ink-code-font-family: 'Fira Code', monospace;
  --ink-block-background-color: rgb(v-bind('nextLayer.bgCssVar'));
  --ink-block-background-color-on-hover: rgb(v-bind('nextLayer.bgHoverCssVar'));
  --ink-syntax-hashtag-background-color: rgb(v-bind('nextLayer.bgCssVar'));
  --ink-syntax-processing-instruction-color: rgb(v-bind('nextLayer.textCssVar') / 0.1);

  .core-editor-toolbar {
    max-width: var(--core-editor-max-width-in-chars);
  }

  :deep(.ink-mde) {
    border: none;
    border-radius: 0;
    padding: 0;

    .cm-placeholder {
      color: var(--core-editor-text-muted);
    }

    .cm-scroller {
      overflow: visible;
    }

    .ink-mde-details {
      background-color: transparent;
      border-top: 1px solid var(--core-editor-divider);
      padding: 0.25rem;
    }

    .ink-mde-editor {
      padding: 0.25rem;
    }

    @media (max-width: 767px) {
      .ink-mde-toolbar {
        order: 1;

        .ink-mde-container {
          gap: 0;
        }
      }

      .ink-mde-details {
        background-color: transparent;
      }
    }

    @media (min-width: 768px) {
      .ink-mde-toolbar {
        background-color: transparent;
        background: repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 10px,
          var(--core-editor-divider) 10px,
          var(--core-editor-divider) 11px
        );
        border-bottom: 1px solid var(--core-editor-divider);

        .ink-mde-container {
          background-color: var(--core-editor-layer-1-bg);
          border: 1px solid var(--core-editor-divider);
          border-radius: 0.25rem;
          padding: 0.25rem;
        }
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
