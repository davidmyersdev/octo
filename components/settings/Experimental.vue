<template>
  <section>
    <h3 class="text-3xl">Experimental Features</h3>
    <hr class="mt-2 mb-4">
    <div class="flex flex-col gap-4">
      <p>These features may be changed or removed at any time.</p>
      <ul class="flex flex-col gap-1 list-disc pl-4">
        <li>Edit plain-text Markdown files that reside on your device (in supported browsers)</li>
        <li>Render live Mermaid (UML) diagrams above applicable code blocks</li>
      </ul>
      <div>
        <label class="button button-size-medium button-color-gray items-center">
          <input v-model="experimental" type="checkbox" class="checkbox">
          <span class="ml-3 ">Enable Experimental Features</span>
        </label>
      </div>
    </div>
  </section>
</template>

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
