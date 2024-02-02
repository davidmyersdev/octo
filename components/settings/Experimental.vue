<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { SET_EXPERIMENTAL } from '#root/src/store/modules/settings'

const { commit, state } = useStore()
const experimental = computed({
  get() {
    return state.settings.experimental
  },
  set(value: boolean) {
    commit(SET_EXPERIMENTAL, value)
  },
})
</script>

<template>
  <CorePageSection title="Experimental Features">
    <div class="flex flex-col gap-4">
      <p class="mb-4">These features may be changed or removed at any time.</p>
      <ul class="flex flex-col gap-1 list-disc pl-6 mb-4">
        <li>Edit plain-text Markdown files that reside on your device (in supported browsers)</li>
        <li>Render live Mermaid (UML) diagrams above applicable code blocks</li>
      </ul>
      <CoreLayer>
        <CoreButton as="label" class="inline-flex">
          <input v-model="experimental" type="checkbox" class="checkbox">
          <span class="ml-3 ">Enable Experimental Features</span>
        </CoreButton>
      </CoreLayer>
    </div>
  </CorePageSection>
</template>
