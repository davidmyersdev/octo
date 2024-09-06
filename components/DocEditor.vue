<script lang="ts">
import { type Options } from 'ink-mde'
import { toRaw } from 'vue'
import { addFile } from '#root/src/firebase/storage'
import { mermaid, plugins } from '#root/src/vendor/plugins'
import { useVue } from '#shared/composables'

export default defineComponent({
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
    const coreEditor = ref()
    const { isMounted } = useVue()

    const focus = () => {
      // Focus the editor.
      coreEditor.value?.instance?.focus()
    }

    const uploadFiles = async (files: FileList) => {
      await Promise.all(
        Array.from(files).map(async (file) => {
          return addFile(file).then((uploadedFile) => {
            // Todo: Handle non-image files
            if (/^image\/.*/.test(uploadedFile?.mimeType || '')) {
              coreEditor.value.instance.insert(`![](${uploadedFile?.url})`)
            }
          })
        }),
      )
    }

    watch(coreEditor, () => {
      focus()

      // Expose the Ink instance for tests.
      window.inkMde = coreEditor.value?.instance
    })

    return {
      coreEditor,
      focus,
      isMounted,
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
        search: true,
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
      console.error('[mermaid]', error)
    })
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
      <CoreEditor
        v-if="isMounted"
        ref="coreEditor"
        v-model="text"
        :max-width-in-chars="maxWidthInChars"
        :options="options"
        class="min-h-0"
      />
    </div>
  </div>
</template>

<style scoped>
:deep(.editor) {
  .ink-mde-editor {
    padding: 1.5rem;
  }
}
</style>
