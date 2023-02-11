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
import Appearance from '#root/components/settings/Appearance.vue'
import Banner from '#root/components/Banner.vue'
import Editor from '#root/components/SettingsEditor.vue'
import Encryption from '#root/components/settings/Encryption.vue'
import Experimental from '#root/components/settings/Experimental.vue'
import Export from '#root/components/settings/Export.vue'
import Import from '#root/components/settings/Import.vue'

useHead({
  title: 'Settings',
})
</script>
