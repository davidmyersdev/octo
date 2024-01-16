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
  <CorePageSection title="Appearance">
    <Extendable scope="app.settings.appearance">
      <CoreLayer class="flex flex-wrap gap-2">
        <CoreButton as="label">
          <input v-model="appearance" type="radio" value="auto" class="radio">
          <span>Auto</span>
        </CoreButton>
        <CoreButton as="label">
          <input v-model="appearance" type="radio" value="dark" class="radio">
          <span>Dark</span>
        </CoreButton>
        <CoreButton as="label">
          <input v-model="appearance" type="radio" value="light" class="radio">
          <span>Light</span>
        </CoreButton>
        <CoreButton as="label">
          <input v-model="appearance" type="radio" value="october" class="radio">
          <span>Spooky</span>
        </CoreButton>
        <CoreButton as="label">
          <input v-model="appearance" type="radio" value="custom" class="radio">
          <span>Custom</span>
        </CoreButton>
      </CoreLayer>
    </Extendable>
  </CorePageSection>
</template>
