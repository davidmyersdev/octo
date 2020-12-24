<template>
  <section>
    <h4 class="font-weight-normal mt-3 mt-md-5">Editor</h4>
    <hr>
    <Extendable scope="app.settings.editor">
      <div class="form-group">
        <label for="config-tab-size">Tab length</label>
        <input v-model="tabSize" type="number" min="2" id="config-tab-size" class="form-control">
        <small class="text-muted">Number of spaces per tab (minimum: 2)</small>
      </div>
      <div class="form-group">
        <label for="config-key-map">Keymaps</label>
        <div>
          <label class="btn btn-primary btn-toggle">
            <div class="custom-control custom-radio d-flex align-items-center">
              <input v-model="keyMap" type="radio" value="default" class="custom-control-input d-flex">
              <span class="custom-control-label d-flex">Default</span>
            </div>
          </label>
          <label class="btn btn-primary btn-toggle ml-2">
            <div class="custom-control custom-radio d-flex align-items-center">
              <input v-model="keyMap" type="radio" value="vim" class="custom-control-input d-flex">
              <span class="custom-control-label d-flex">Vim</span>
            </div>
          </label>
        </div>
        <small class="text-muted">Select an alternate keymapping</small>
      </div>
      <div class="form-group">
        <h5 class="font-weight-normal">Images</h5>
        <div class="form-group">
          <p>This setting determines whether or not image tags (e.g. <code class="text-muted">![alt text](/path/to/image)</code>) will render images in your documents.</p>
        </div>
        <div class="form-group">
          <div>
            <label class="btn btn-primary btn-toggle">
              <div class="custom-control custom-checkbox d-flex align-items-center">
                <input v-model="imagesEnabled" type="checkbox" class="custom-control-input d-flex">
                <span class="custom-control-label d-flex">Enable Images</span>
              </div>
            </label>
            <label class="btn btn-primary btn-toggle ml-2">
              <div class="custom-control custom-checkbox d-flex align-items-center">
                <input v-model="showCaptions" :disabled="!imagesEnabled" type="checkbox" class="custom-control-input d-flex">
                <span class="custom-control-label d-flex">Show Captions</span>
              </div>
            </label>
          </div>
          <small class="text-muted">Note: Captions are pulled from alt text and rendered under your images in the image container.</small>
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
