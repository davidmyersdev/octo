<template>
  <section>
    <h3 class="text-3xl">Editor</h3>
    <hr class="mt-2 mb-4">
    <p class="mb-6">Configure settings for Ink - the Markdown editor that powers Octo.</p>
    <Extendable scope="app.settings.editor">
      <div class="mb-4">
        <div>
          <label class="button button-size-medium button-color-gray items-center">
            <input v-model="spellcheck" type="checkbox" class="checkbox">
            <span class="ml-3">Spellcheck</span>
          </label>
        </div>
        <small class="text-gray-700">Note: This will not disable Grammarly if you have the extension enabled.</small>
      </div>
      <div class="mb-4">
        <div>
          <label class="button button-size-medium button-color-gray items-center">
            <input v-model="vim" type="checkbox" class="checkbox">
            <span class="ml-3">Vim Mode</span>
          </label>
        </div>
        <small class="text-gray-700">Use Vim keybindings to edit your docs.</small>
      </div>
      <div class="mb-4">
        <label for="config-tab-size">Tab length</label>
        <input v-model="tabSize" type="number" min="2" id="config-tab-size" class="form-text w-full">
        <small class="text-gray-700">Set the number of spaces to use for each tab (minimum: 2).</small>
      </div>
      <div class="mb-4">
        <h4 class="text-2xl mb-2">Readability Information</h4>
        <p class="mb-2">The Readability Bar shows useful information such as word count and read time at the bottom of the editor.</p>
        <div class="mb-4">
          <div>
            <label class="button button-size-medium button-color-gray items-center">
              <input v-model="readabilityEnabled" type="checkbox" class="checkbox">
              <span class="ml-3 ">Toggle Readability Bar</span>
            </label>
          </div>
        </div>
        <div class="mb-4">
          <label for="config-tab-size">Reading Speed (words per minute)</label>
          <input v-model="readabilityWordsPerMinute" type="number" min="2" id="config-tab-size" class="form-text w-full">
          <small class="text-gray-700">Reading speed is used to estimate document read time.</small>
        </div>
        <div class="mb-4">
          <label for="config-max-width">Max Width of Editor (in number of characters)</label>
          <input v-model="readabilityMaxWidth" type="number" min="40" id="config-max-width" class="form-text w-full">
          <small class="text-gray-700">Values between 60 and 100 are common.</small>
        </div>
      </div>
      <div class="mb-4">
        <h4 class="text-2xl mb-2">Formatting Toolbar</h4>
        <p class="mb-2">Display the formatting toolbar in the editor.</p>
        <div class="mb-4">
          <label class="button button-size-medium button-color-gray items-center">
            <input v-model="toolbar" type="checkbox" class="checkbox">
            <span class="ml-3 ">Enable Toolbar</span>
          </label>
        </div>
      </div>
      <div class="mb-4">
        <h4 class="text-2xl mb-2">Font Ligatures</h4>
        <p class="mb-2">Render <a href="https://github.com/tonsky/FiraCode#whats-in-the-box" target="_blank" rel="noopener noreferrer">font ligatures</a> (e.g. <code class="monospace ligatures-normal">=></code>).</p>
        <div class="mb-4">
          <label class="button button-size-medium button-color-gray items-center">
            <input v-model="ligatures" type="checkbox" class="checkbox">
            <span class="ml-3 ">Enable Ligatures</span>
          </label>
        </div>
      </div>
      <div class="mb-4">
        <h4 class="text-2xl mb-2">Images</h4>
        <p class="mb-2">This setting determines whether or not image tags (e.g. <code class="bg-gray-100 dark:bg-darkest p-0.5 rounded">![alt text](/path/to/image)</code>) will render images in your docs.</p>
        <div class="mb-4">
          <div>
            <label class="button button-size-medium button-color-gray items-center">
              <input v-model="imagesEnabled" type="checkbox" class="checkbox">
              <span class="ml-3 ">Enable Images</span>
            </label>
          </div>
        </div>
      </div>
    </Extendable>
  </section>
</template>

<script>
import {
  SET_EDITOR_IMAGES_ENABLED,
  SET_EDITOR_IMAGES_SHOW_CAPTIONS,
  SET_EDITOR_KEY_MAP,
  SET_EDITOR_LIGATURES,
  SET_EDITOR_READABILITY_ENABLED,
  SET_EDITOR_READABILITY_MAX_WIDTH,
  SET_EDITOR_READABILITY_WORDS_PER_MINUTE,
  SET_EDITOR_SPELLCHECK,
  SET_EDITOR_TAB_SIZE,
  SET_EDITOR_TOOLBAR,
} from '/src/store/modules/settings.js'

export default {
  name: 'EditorSettings',
  computed: {
    imagesEnabled: {
      get() {
        return this.$store.state.settings.editor.images.enabled
      },
      set(value) {
        this.$store.dispatch(SET_EDITOR_IMAGES_ENABLED, value)
      },
    },
    ligatures: {
      get() {
        return this.$store.state.settings.editor.ligatures
      },
      set(value) {
        this.$store.commit(SET_EDITOR_LIGATURES, value)
      },
    },
    readabilityEnabled: {
      get() {
        return this.$store.state.settings.editor.readability.enabled
      },
      set(value) {
        this.$store.commit(SET_EDITOR_READABILITY_ENABLED, value)
      },
    },
    readabilityMaxWidth: {
      get() {
        return this.$store.state.settings.editor.readability.maxWidthInChars
      },
      set(value) {
        this.$store.commit(SET_EDITOR_READABILITY_MAX_WIDTH, value)
      },
    },
    readabilityWordsPerMinute: {
      get() {
        return this.$store.state.settings.editor.readability.wordsPerMinute
      },
      set(value) {
        this.$store.commit(SET_EDITOR_READABILITY_WORDS_PER_MINUTE, value)
      },
    },
    showCaptions: {
      get() {
        return this.$store.state.settings.editor.images.showCaptions
      },
      set(value) {
        this.$store.dispatch(SET_EDITOR_IMAGES_SHOW_CAPTIONS, value)
      },
    },
    spellcheck: {
      get() {
        return this.$store.state.settings.editor.spellcheck
      },
      set(value) {
        this.$store.commit(SET_EDITOR_SPELLCHECK, value)
      },
    },
    tabSize: {
      get() {
        return this.$store.state.settings.editor.tabSize
      },
      set(value) {
        this.$store.dispatch(SET_EDITOR_TAB_SIZE, parseInt(value) || 2)
      },
    },
    toolbar: {
      get() {
        return this.$store.state.settings.editor.toolbar
      },
      set(value) {
        this.$store.commit(SET_EDITOR_TOOLBAR, value)
      },
    },
    vim: {
      // Todo: Use a new setting for Vim.
      get() {
        return this.$store.state.settings.editor.keyMap === 'vim'
      },
      set(value) {
        this.$store.dispatch(SET_EDITOR_KEY_MAP, value ? 'vim' : 'default')
      },
    },
  },
}
</script>
