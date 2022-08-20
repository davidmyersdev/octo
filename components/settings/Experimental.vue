<template>
  <section>
    <h3 class="text-3xl">Experimental Features</h3>
    <hr class="mt-2 mb-4">
    <div class="mb-4">
      <p>These features may be changed or removed at any time.</p>
    </div>
    <div>
      <label class="button button-size-medium button-color-gray items-center">
        <input v-model="experimental" type="checkbox" class="checkbox">
        <span class="ml-3 ">Enable Experimental Features</span>
      </label>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { SET_EXPERIMENTAL } from '/src/store/modules/settings'

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
