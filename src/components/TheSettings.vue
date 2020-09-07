<template>
  <div class="container context mt-3 mt-md-5">
    <div>
      <h3 class="card-title">Settings</h3>
      <h6 class="card-subtitle text-muted font-weight-normal mb-3">Make yourself comfortable</h6>
      <section>
        <h4 class="font-weight-normal">Editor</h4>
        <hr>
        <div class="form-group">
          <label for="config-tab-size">Tab length</label>
          <input v-model="tabSize" type="number" min="2" id="config-tab-size" class="form-control">
          <small class="text-muted">Number of spaces per tab (minimum: 2)</small>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import {
  SET_EDITOR_TAB_SIZE,
} from '@/store/modules/settings';

export default {
  name: 'TheSettings',
  data() {
    return {
      // nothing yet
    };
  },
  computed: {
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
