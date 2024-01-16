<script lang="ts">
import {
  SET_EDITOR_IMAGES_ENABLED,
  SET_EDITOR_IMAGES_SHOW_CAPTIONS,
  SET_EDITOR_KEY_MAP,
  SET_EDITOR_LIGATURES,
  SET_EDITOR_LISTS_ENABLED,
  SET_EDITOR_READABILITY_ENABLED,
  SET_EDITOR_READABILITY_MAX_WIDTH,
  SET_EDITOR_READABILITY_WORDS_PER_MINUTE,
  SET_EDITOR_SPELLCHECK,
  SET_EDITOR_TAB_SIZE,
  SET_EDITOR_TOOLBAR,
} from '#root/src/store/modules/settings'

export default defineComponent({
  computed: {
    imagesEnabled: {
      get() {
        return this.$store.state.settings.editor.images.enabled
      },
      set(value: any) {
        this.$store.dispatch(SET_EDITOR_IMAGES_ENABLED, value)
      },
    },
    ligatures: {
      get() {
        return this.$store.state.settings.editor.ligatures
      },
      set(value: any) {
        this.$store.commit(SET_EDITOR_LIGATURES, value)
      },
    },
    listsEnabled: {
      get() {
        return this.$store.state.settings.editor.lists.enabled
      },
      set(value: any) {
        this.$store.commit(SET_EDITOR_LISTS_ENABLED, value)
      },
    },
    readabilityEnabled: {
      get() {
        return this.$store.state.settings.editor.readability.enabled
      },
      set(value: any) {
        this.$store.commit(SET_EDITOR_READABILITY_ENABLED, value)
      },
    },
    readabilityMaxWidth: {
      get() {
        return this.$store.state.settings.editor.readability.maxWidthInChars
      },
      set(value: any) {
        this.$store.commit(SET_EDITOR_READABILITY_MAX_WIDTH, value)
      },
    },
    readabilityWordsPerMinute: {
      get() {
        return this.$store.state.settings.editor.readability.wordsPerMinute
      },
      set(value: any) {
        this.$store.commit(SET_EDITOR_READABILITY_WORDS_PER_MINUTE, value)
      },
    },
    showCaptions: {
      get() {
        return this.$store.state.settings.editor.images.showCaptions
      },
      set(value: any) {
        this.$store.dispatch(SET_EDITOR_IMAGES_SHOW_CAPTIONS, value)
      },
    },
    spellcheck: {
      get() {
        return this.$store.state.settings.editor.spellcheck
      },
      set(value: any) {
        this.$store.commit(SET_EDITOR_SPELLCHECK, value)
      },
    },
    tabSize: {
      get(): number {
        return this.$store.state.settings.editor.tabSize
      },
      set(value: number) {
        this.$store.dispatch(SET_EDITOR_TAB_SIZE, value || 2)
      },
    },
    toolbar: {
      get() {
        return this.$store.state.settings.editor.toolbar
      },
      set(value: any) {
        this.$store.commit(SET_EDITOR_TOOLBAR, value)
      },
    },
    vim: {
      // Todo: Use a new setting for Vim.
      get() {
        return this.$store.state.settings.editor.keyMap === 'vim'
      },
      set(value: any) {
        this.$store.dispatch(SET_EDITOR_KEY_MAP, value ? 'vim' : 'default')
      },
    },
  },
})
</script>

<template>
  <CorePageSection title="Editor">
    <Extendable scope="app.settings.editor" class="flex flex-col gap-4">
      <div>
        <CoreLayer>
          <CoreButton as="label">
            <input v-model="spellcheck" type="checkbox" class="checkbox">
            <span>Spellcheck</span>
          </CoreButton>
        </CoreLayer>
        <small class="text-layer-muted">Note: This will not disable Grammarly if you have the extension enabled.</small>
      </div>
      <div>
        <CoreLayer>
          <CoreButton as="label">
            <input v-model="vim" type="checkbox" class="checkbox">
            <span>Vim Mode</span>
          </CoreButton>
        </CoreLayer>
        <small class="text-layer-muted">Use Vim keybindings to edit your docs.</small>
      </div>
      <div>
        <CoreInput
          v-model="tabSize"
          label="Tab length"
          description="Set the number of spaces to use for each tab (minimum: 2)."
          :min="2"
          type="number"
        />
      </div>
      <div class="pt-4 pb-2">
        <h4 class="text-xl">Readability Information</h4>
        <p class="mt-1 text-layer-muted">The Readability Bar shows useful information such as word count and read time at the bottom of the editor.</p>
      </div>
      <div>
        <CoreLayer>
          <CoreButton as="label">
            <input v-model="readabilityEnabled" type="checkbox" class="checkbox">
            <span>Toggle Readability Bar</span>
          </CoreButton>
        </CoreLayer>
      </div>
      <div>
        <CoreInput
          v-model="readabilityWordsPerMinute"
          label="Reading Speed (words per minute)"
          description="Reading speed is used to estimate document read time."
          :min="2"
          type="number"
        />
      </div>
      <div>
        <CoreInput
          v-model="readabilityMaxWidth"
          label="Max Width of Editor (in number of characters)"
          description="Values between 60 and 100 are common."
          :min="40"
          type="number"
        />
      </div>
      <div class="pt-4 pb-2">
        <h4 class="text-xl">Formatting Toolbar</h4>
        <p class="mt-1 text-layer-muted">Display the formatting toolbar in the editor.</p>
      </div>
      <div>
        <CoreLayer>
          <CoreButton as="label">
            <input v-model="toolbar" type="checkbox" class="checkbox">
            <span>Enable Toolbar</span>
          </CoreButton>
        </CoreLayer>
      </div>
      <div class="pt-4 pb-2">
        <h4 class="text-xl">Font Ligatures</h4>
        <p class="mt-1 text-layer-muted">Render <a href="https://github.com/tonsky/FiraCode#whats-in-the-box" target="_blank" rel="noopener noreferrer">font ligatures</a> (e.g. <CoreCode class="monospace ligatures-normal">=></CoreCode>).</p>
      </div>
      <div>
        <CoreLayer>
          <CoreButton as="label">
            <input v-model="ligatures" type="checkbox" class="checkbox">
            <span>Enable Ligatures</span>
          </CoreButton>
        </CoreLayer>
      </div>
      <div class="pt-4 pb-2">
        <h4 class="text-xl">Images</h4>
        <p class="mt-1 text-layer-muted">This setting determines whether or not image tags (e.g. <CoreCode>![alt text](/path/to/image)</CoreCode>) will render images in your docs.</p>
      </div>
      <div>
        <CoreLayer>
          <CoreButton as="label">
            <input v-model="imagesEnabled" type="checkbox" class="checkbox">
            <span>Enable Images</span>
          </CoreButton>
        </CoreLayer>
      </div>
      <div class="pt-4 pb-2">
        <h4 class="text-xl">List Overlays</h4>
        <p class="mt-1 text-layer-muted">This setting enables overlays for bullet and task lists. Task lists will render an interactive checkbox in place of <CoreCode>- [ ]</CoreCode> or <CoreCode>- [x]</CoreCode>.</p>
      </div>
      <div>
        <CoreLayer>
          <CoreButton as="label">
            <input v-model="listsEnabled" type="checkbox" class="checkbox">
            <span>Enable List Overlays</span>
          </CoreButton>
        </CoreLayer>
      </div>
    </Extendable>
  </CorePageSection>
</template>
