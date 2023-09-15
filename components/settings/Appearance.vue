<script lang="ts">
export default defineComponent({
  setup() {
    const { store: appearance } = useAppearance()

    return {
      appearance,
    }
  },
})
</script>

<template>
  <section>
    <h3 class="text-3xl">
      Appearance
    </h3>
    <hr class="mt-2 mb-4">
    <Extendable scope="app.settings.appearance">
      <div class="mb-4">
        <div>
          <label class="button button-size-medium button-color-gray">
            <input v-model="appearance" type="radio" value="auto" class="radio">
            <span class="ml-3">Auto</span>
          </label>
          <label class="button button-size-medium button-color-gray ml-2">
            <input v-model="appearance" type="radio" value="dark" class="radio">
            <span class="ml-3">Dark</span>
          </label>
          <label class="button button-size-medium button-color-gray ml-2">
            <input v-model="appearance" type="radio" value="light" class="radio">
            <span class="ml-3">Light</span>
          </label>
          <label class="button button-size-medium button-color-gray ml-2">
            <input v-model="appearance" type="radio" value="october" class="radio">
            <span class="ml-3">Spooky</span>
          </label>
        </div>
      </div>
    </Extendable>
  </section>
</template>
