<template>
  <CorePage>
    <div>
      <h2 class="text-4xl">App Settings</h2>
      <p class="mt-1 mb-8 text-gray-500">Make yourself comfortable</p>
      <Banner class="mb-8" />
      <Extendable scope="app.settings">
        <Appearance class="mb-8" />
        <Editor class="mb-8" />
        <Encryption class="mb-8" />
        <Import class="mb-8" />
        <Export class="mb-8" />
        <Experimental class="mb-8" />
      </Extendable>
    </div>
  </CorePage>
</template>

<script lang="ts" setup>
import Appearance from '/components/settings/Appearance.vue'
import Banner from '/components/Banner.vue'
import Editor from '/components/SettingsEditor.vue'
import Encryption from '/components/settings/Encryption.vue'
import Experimental from '/components/settings/Experimental.vue'
import Export from '/components/settings/Export.vue'
import Import from '/components/settings/Import.vue'
</script>
