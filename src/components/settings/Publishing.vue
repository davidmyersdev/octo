<template>
  <section>
    <h3 class="text-3xl">Publishing (experimental)</h3>
    <hr class="mt-2 mb-4">
    <p class="mb-4">This feature gives you the option to publish a document directly to one or multiple platforms.</p>
    <Extendable scope="app.settings.publishing">
      <h4 class="text-2xl mb-4">DEV (dev.to)</h4>
      <label class="button button-size-medium button-color-gray items-baseline mb-4">
        <input v-model="devEnabled" type="checkbox" class="checkbox">
        <span class="ml-3 ">Enable DEV</span>
      </label>
      <div class="mb-4">
        <label>API Key</label>
        <input v-model="apiKey" type="text" min="2" class="form-text w-full">
        <small class="text-gray-700">You can generate an API key at <a href="https://dev.to/settings/account" target="_blank" rel="noopener noreferrer" class="text-blue-400">dev.to/settings/account</a>.</small>
      </div>
    </Extendable>
  </section>
</template>

<script>
import {
  SET_PUBLISHING_DEV_API_KEY,
  SET_PUBLISHING_DEV_ENABLED,
} from '/src/store/modules/settings.js'

export default {
  name: 'Publishing',
  computed: {
    apiKey: {
      get() {
        return this.$store.state.settings.publishing.dev.apiKey
      },
      set(value) {
        this.$store.dispatch(SET_PUBLISHING_DEV_API_KEY, value)
      },
    },
    devEnabled: {
      get() {
        return this.$store.state.settings.publishing.dev.enabled
      },
      set(value) {
        this.$store.dispatch(SET_PUBLISHING_DEV_ENABLED, value)
      },
    },
  },
}
</script>
