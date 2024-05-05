<script lang="ts" setup>
import Appearance from '#root/components/settings/Appearance.vue'
import Banner from '#root/components/Banner.vue'
import EditorSettings from '#root/components/SettingsEditor.vue'
import Encryption from '#root/components/settings/Encryption.vue'
import Experimental from '#root/components/settings/Experimental.vue'
import Export from '#root/components/settings/Export.vue'
import Import from '#root/components/settings/Import.vue'

useHead({
  title: 'Settings',
})
</script>

<template>
  <CorePage>
    <div class="flex flex-col gap-8">
      <div>
        <h2 class="text-4xl">App Settings</h2>
        <p class="mt-2 text-layer-muted">Make yourself comfortable</p>
      </div>
      <CoreLayer>
        <Banner class="bg-layer" />
      </CoreLayer>
      <Extendable scope="app.settings" class="flex flex-col gap-16">
        <Appearance />
        <EditorSettings />
        <Encryption />
        <Import />
        <Export />
        <Experimental />
      </Extendable>
    </div>
  </CorePage>
</template>
