<template>
  <section>
    <h4 class="font-weight-normal mt-3 mt-md-5">Theme</h4>
    <hr>
    <Extendable scope="app.settings.theme">
      <div class="form-group">
        <div>
          <label class="btn btn-primary btn-toggle">
            <div class="custom-control custom-radio d-flex align-items-center">
              <input v-model="theme" type="radio" value="dark" class="custom-control-input d-flex">
              <span class="custom-control-label d-flex">Dark</span>
            </div>
          </label>
          <label class="btn btn-primary btn-toggle ml-2">
            <div class="custom-control custom-radio d-flex align-items-center">
              <input v-model="theme" type="radio" value="light" class="custom-control-input d-flex">
              <span class="custom-control-label d-flex">Light</span>
            </div>
          </label>
        </div>
      </div>
    </Extendable>
  </section>
</template>

<script>
import {
  SET_THEME,
} from '@/store/modules/settings';

export default {
  name: 'Theme',
  computed: {
    theme: {
      get() {
        return this.$store.state.settings.theme;
      },
      set(value) {
        this.$store.dispatch(SET_THEME, value);
      },
    },
  },
};
</script>
