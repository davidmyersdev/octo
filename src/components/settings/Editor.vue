<template>
  <section>
    <h3 class="text-3xl">Editor</h3>
    <hr class="mt-2 mb-4">
    <Extendable scope="app.settings.editor">
      <div class="mb-4">
        <label for="config-tab-size">Tab length</label>
        <input v-model="tabSize" type="number" min="2" id="config-tab-size" class="form-text w-full">
        <small class="text-gray-700">Number of spaces per tab (minimum: 2)</small>
      </div>
      <div class="mb-4">
        <h4 class="text-2xl mb-2">Keymaps</h4>
        <div>
          <label class="button button-size-medium button-color-gray">
            <input v-model="keyMap" type="radio" value="default" class="radio">
            <span class="ml-3">Default</span>
          </label>
          <label class="button button-size-medium button-color-gray ml-2">
            <input v-model="keyMap" type="radio" value="vim" class="radio">
            <span class="ml-3">Vim</span>
          </label>
        </div>
        <small class="text-gray-700">Select an alternate keymapping</small>
      </div>
      <div class="mb-4">
        <h4 class="text-2xl mb-2">Images</h4>
        <p class="mb-2">This setting determines whether or not image tags (e.g. <code class="text-gray-700">![alt text](/path/to/image)</code>) will render images in your documents.</p>
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
  SET_EDITOR_TAB_SIZE,
  SET_EDITOR_KEY_MAP,
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
    showCaptions: {
      get() {
        return this.$store.state.settings.editor.images.showCaptions;
      },
      set(value) {
        this.$store.dispatch(SET_EDITOR_IMAGES_SHOW_CAPTIONS, value);
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
  },
};
</script>
