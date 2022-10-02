<template>
  <section>
    <h3 class="text-3xl">Appearance</h3>
    <hr class="mt-2 mb-4" />
    <Extendable scope="app.settings.theme">
      <div class="mb-4">
        <div>
          <label class="button button-size-medium button-color-gray">
            <input v-model="theme" type="radio" value="auto" class="radio" />
            <span class="ml-3">Auto</span>
          </label>
          <label class="button button-size-medium button-color-gray ml-2">
            <input v-model="theme" type="radio" value="dark" class="radio" />
            <span class="ml-3">Dark</span>
          </label>
          <label class="button button-size-medium button-color-gray ml-2">
            <input v-model="theme" type="radio" value="light" class="radio" />
            <span class="ml-3">Light</span>
          </label>
          <label class="button button-size-medium button-color-gray ml-2">
            <input v-model="theme" type="radio" value="october" class="radio" />
            <span class="ml-3">Halloween</span>
          </label>
        </div>
      </div>
    </Extendable>
  </section>
</template>

<script>
import { SET_THEME } from "/src/store/modules/settings.js"

export default {
  computed: {
    theme: {
      get() {
        return this.$store.state.settings.theme
      },
      set(value) {
        this.$store.dispatch(SET_THEME, value)
      },
    },
  },
}
</script>
