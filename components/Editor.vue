<script lang="ts">
import { type Options } from 'ink-mde'
import Ink from 'ink-mde/vue'
import { OverlayScrollbars } from 'overlayscrollbars'
import { toRaw } from 'vue'
import { addFile } from '#root/src/firebase/storage'
import { mermaid, plugins } from '#root/src/vendor/plugins'
import { useVue } from '#shared/composables'

export default defineComponent({
  components: {
    Ink,
  },
  props: {
    appearance: {
      type: String as PropType<'auto' | 'dark' | 'light'>,
      default: () => ('auto'),
      validator: (value: string) => (
        ['auto', 'dark', 'light'].includes(value)
      ),
    },
    doc: {
      type: Object,
    },
    ro: {
      type: Boolean,
    },
    settings: {
      type: Object,
    },
  },
  emits: ['input'],
  setup() {
    const { user } = useUser()
    const ink = ref()
    const { isMounted } = useVue()
    const { layer, nextLayer } = useLayers()
    const bgCssVar = computed(() => `var(--layer-${nextLayer.value.index}-bg)`)
    const bgHoverCssVar = computed(() => `var(--layer-${nextLayer.value.index}-bg-hover)`)

    const focus = () => {
      // Focus the editor.
      ink.value?.instance?.focus()
    }

    const uploadFiles = async (files: FileList) => {
      await Promise.all(
        Array.from(files).map(async (file) => {
          return addFile(file).then((uploadedFile) => {
            // Todo: Handle non-image files
            if (/^image\/.*/.test(uploadedFile?.mimeType || '')) {
              ink.value.instance.insert(`![](${uploadedFile?.url})`)
            }
          })
        }),
      )
    }

    watch(ink, () => {
      focus()

      // Expose the Ink instance for Cypress.
      window.inkMde = ink.value?.instance
    })

    return {
      bgCssVar,
      bgHoverCssVar,
      focus,
      ink,
      isMounted,
      layer,
      nextLayer,
      uploadFiles,
      user,
    }
  },
  data() {
    return {
      lazyPlugins: [] as any[],
    }
  },
  computed: {
    cssMaxWidth() {
      return `${this.maxWidthInChars}ch`
    },
    docs() {
      return this.$store.getters.kept.reduce((docs: any[], doc: any) => {
        if (doc.id && doc.id !== this.doc?.id && doc.headers.length > 0) {
          docs.push({
            id: doc.id,
            title: doc.headers[0],
          })
        }

        return docs
      }, [])
    },
    maxWidthInChars() {
      return this.settings?.readability.maxWidthInChars
    },
    options(): Options {
      const isExperimentalEnabled = this.$store.state.settings.experimental
      const hasLazyPlugins = this.lazyPlugins.length > 0

      return {
        files: {
          clipboard: this.pro,
          dragAndDrop: this.pro,
          handler: (files: FileList) => {
            return this.uploadFiles(files)
          },
          injectMarkup: false,
        },
        interface: {
          appearance: this.appearance,
          attribution: false,
          autocomplete: true,
          images: this.settings?.images.enabled,
          lists: this.settings?.lists.enabled,
          readonly: this.ro,
          spellcheck: this.settings?.spellcheck,
          toolbar: this.settings?.toolbar && !this.ro,
        },
        placeholder: 'Start writing...',
        // Todo: Make these configurable.
        plugins: [
          ...toRaw(this.plugins),
          ...toRaw((isExperimentalEnabled && hasLazyPlugins) ? this.lazyPlugins : []),
        ],
        readability: this.settings?.readability.enabled,
        toolbar: {
          upload: this.pro,
        },
        vim: this.settings?.keyMap === 'vim',
      }
    },
    plugins() {
      // For now, passing the current context in allows us to not recalculate the plugins on every doc change. Since the
      // object we're passing in is a reference, the editor automatically gets access to the live lists of docs and tags
      // without needing to recalculate.
      return plugins(this)
    },
    pro() {
      return this.user.roles.includes('ambassador') || this.user.roles.includes('subscriber')
    },
    spellcheck() {
      return this.settings?.spellcheck
    },
    tags() {
      return this.$store.getters.allTags.filter((tag: string) => {
        return !this.doc?.tags.includes(tag)
      })
    },
    text: {
      get() {
        return this.doc?.text
      },
      set(value: string) {
        this.input(value)
      },
    },
  },
  mounted() {
    mermaid().then((plugins) => {
      this.lazyPlugins.push(...plugins)
    }).catch((error) => {
      console.log('[mermaid]', error)
    })

    const editorContent = document.querySelector<HTMLElement>('.ink-mde-editor')
    const editorToolbar = document.querySelector<HTMLElement>('.ink-mde-toolbar')

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
  },
  methods: {
    async input(text: string) {
      this.$emit('input', text)
    },
  },
})
</script>

<template>
  <div class="flex flex-col flex-grow relative" @click="focus">
    <div class="editor flex flex-col flex-grow flex-shrink min-h-0 min-w-0 w-full">
      <Ink v-if="isMounted" ref="ink" v-model="text" :options="options" class="ink-editor flex flex-col flex-grow flex-shrink min-h-0" />
    </div>
  </div>
</template>

<style scoped>
  .md-plus .editable {
    font-size: 1.1em;
  }

  :deep(.editor) {
    --ink-font-family: 'Inter', helvetica, sans-serif;
    --ink-code-font-family: 'Fira Code', monospace;
    --ink-block-background-color: rgb(v-bind('bgCssVar'));
    --ink-block-background-color-on-hover: rgb(v-bind('bgHoverCssVar'));
    --ink-syntax-hashtag-background-color: rgb(v-bind('bgCssVar'));
    --ink-syntax-processing-instruction-color: rgb(v-bind('nextLayer.textCssVar') / 0.1);
  }

  :deep(.ink-mde .ink-mde-task-toggle) {
    @apply checkbox;

    top: -2px;
  }

  @media (max-width: 767px) {
    :deep(.ink-mde-toolbar) {
      order: 1;
    }

    :deep(.ink-mde .ink-mde-toolbar .ink-mde-container) {
      gap: 0;
    }

    :deep(.ink-mde .ink-mde-editor) {
      padding-top: 2rem;
    }

    :deep(.ink-mde .ink-mde-details) {
      background-color: transparent;
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
    }
  }

  @media (min-width: 768px) {
    :deep(.ink-mde .ink-mde-toolbar) {
      background-color: transparent;
      background: repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 10px,
        rgb(v-bind('bgCssVar')) 10px,
        rgb(v-bind('bgCssVar')) 12px
      );
      border-bottom: 2px solid rgb(v-bind('bgCssVar'));
    }

    :deep(.ink-mde .ink-mde-toolbar .ink-mde-container) {
      background-color: rgb(v-bind('bgCssVar'));
      border-radius: 0.25rem;
      padding: 0.25rem;
    }

    :deep(.ink-mde .ink-mde-details) {
      border-top: 2px solid rgb(v-bind('layer.bgHoverCssVar'));
    }
  }

  :deep(.ink-mde) {
    border: none;
    border-radius: 0;
  }

  :deep(.ink-mde .ink-mde-container) {
    max-width: v-bind('cssMaxWidth');
  }

  :deep(.ink-editor .ink-mde-widget svg) {
    margin: auto;
  }

  .ink-editor :deep(.cm-editor.cm-focused) {
    outline: none;
  }
</style>
