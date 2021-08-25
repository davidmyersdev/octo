<template>
  <section>
    <h3 class="text-3xl">Editor</h3>
    <hr class="mt-2 mb-4">
    <Extendable scope="app.settings.editor">
      <div class="mb-4">
        <label for="config-editor-version">Markdown Editor Version</label>
        <div>
          <label class="button button-size-medium button-color-gray">
            <input v-model="version" type="radio" value="ink" class="radio">
            <span class="ml-3">Ink</span>
          </label>
          <label class="button button-size-medium button-color-gray ml-2">
            <input v-model="version" type="radio" value="original" class="radio">
            <span class="ml-3">Original (deprecated)</span>
          </label>
        </div>
        <small class="text-gray-700">Ink is the next generation of Octo's markdown editor. We are leaving the Original editor available for our Vim Mode users until this feature is implemented in Ink.</small>
      </div>
      <div v-if="usingInk" class="mb-4">
        <label for="config-editor-version">Spellcheck</label>
        <div>
          <label class="button button-size-medium button-color-gray items-baseline">
            <input v-model="spellcheck" type="checkbox" class="checkbox">
            <span class="ml-3 ">Enable Spellcheck</span>
          </label>
        </div>
        <small class="text-gray-700">Spellcheck (and Grammarly support) is only available with the Ink editor.</small>
      </div>
      <div v-if="usingLegacy" class="mb-4">
        <label for="config-key-map">Vim Mode</label>
        <div>
          <label class="button button-size-medium button-color-gray">
            <input v-model="keyMap" type="radio" value="default" class="radio">
            <span class="ml-3">Disable</span>
          </label>
          <label class="button button-size-medium button-color-gray ml-2">
            <input v-model="keyMap" type="radio" value="vim" class="radio">
            <span class="ml-3">Enable</span>
          </label>
        </div>
      </div>
      <div class="mb-4">
        <label for="config-tab-size">Tab length</label>
        <input v-model="tabSize" type="number" min="2" id="config-tab-size" class="form-text w-full">
        <small class="text-gray-700">Set the number of spaces to use for each tab (minimum: 2).</small>
      </div>
      <div class="mb-4">
        <h4 class="text-2xl mb-2">Font Ligatures</h4>
        <p class="mb-2">Whether or not to show <a href="https://github.com/tonsky/FiraCode#whats-in-the-box" target="_blank" rel="noopener noreferrer">font ligatures</a> (<code class="monospace ligatures-normal">=></code>).</p>
        <div class="mb-4">
          <label class="button button-size-medium button-color-gray items-baseline">
            <input v-model="ligatures" type="checkbox" class="checkbox">
            <span class="ml-3 ">Enable Ligatures</span>
          </label>
        </div>
      </div>
      <div class="mb-4">
        <h4 class="text-2xl mb-2">Images</h4>
        <p class="mb-2">This setting determines whether or not image tags (e.g. <code class="bg-gray-100 dark:bg-darkest p-0.5 rounded">![alt text](/path/to/image)</code>) will render images in your documents.</p>
        <div class="mb-4">
          <div>
            <label class="button button-size-medium button-color-gray items-baseline">
              <input v-model="imagesEnabled" type="checkbox" class="checkbox">
              <span class="ml-3 ">Enable Images</span>
            </label>
            <label class="button button-size-medium button-color-gray ml-2">
              <input v-model="showCaptions" :disabled="!imagesEnabled" type="checkbox" class="checkbox">
              <span class="ml-3">Show Captions</span>
            </label>
          </div>
          <small class="text-gray-700">Note: Captions are pulled from alt text and rendered under your images in the image container.</small>
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
  SET_EDITOR_SPELLCHECK,
  SET_EDITOR_TAB_SIZE,
  SET_EDITOR_VERSION,
} from '@/store/modules/settings';

export default {
  name: 'Editor',
  computed: {
    imagesEnabled: {
      get() {
        return this.$store.state.settings.editor.images.enabled;
      },
      set(value) {
        this.$store.dispatch(SET_EDITOR_IMAGES_ENABLED, value);
      },
    },
    keyMap: {
      get() {
        return this.$store.state.settings.editor.keyMap;
      },
      set(value) {
        this.$store.dispatch(SET_EDITOR_KEY_MAP, value);
      },
    },
    ligatures: {
      get() {
        return this.$store.state.settings.editor.ligatures;
      },
      set(value) {
        this.$store.commit(SET_EDITOR_LIGATURES, value);
      },
    },
    showCaptions: {
      get() {
        return this.$store.state.settings.editor.images.showCaptions;
      },
      set(value) {
        this.$store.dispatch(SET_EDITOR_IMAGES_SHOW_CAPTIONS, value);
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
        return this.$store.state.settings.editor.tabSize;
      },
      set(value) {
        this.$store.dispatch(SET_EDITOR_TAB_SIZE, parseInt(value) || 2);
      },
    },
    usingInk() {
      return this.version === 'ink'
    },
    usingLegacy() {
      return this.version === 'original'
    },
    version: {
      get() {
        return this.$store.state.settings.editor.version
      },
      set(value) {
        this.$store.commit(SET_EDITOR_VERSION, value)
      },
    },
  },
};
</script>
