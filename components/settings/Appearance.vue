<script lang="ts" setup>
import { computed } from 'vue'

const { store } = useVuex()
const { store: appearance } = useAppearance()

const experimental = computed(() => store.state.settings.experimental)
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
        <CoreButton v-if="experimental" as="label">
          <input v-model="appearance" type="radio" value="custom" class="radio">
          <span class="flex items-center justify-between gap-2">
            <span>Custom</span>
            <CoreAsset type="Experimental" class="sq-5 text-layer-muted" />
          </span>
        </CoreButton>
      </CoreLayer>
    </Extendable>
  </CorePageSection>
</template>
