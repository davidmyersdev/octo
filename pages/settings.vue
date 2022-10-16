<template>
  <PageContainer>
    <div>
      <h2 class="text-4xl">App Settings</h2>
      <p class="mt-1 mb-8 text-gray-500">Make yourself comfortable</p>
      <Banner class="mb-8" />
      <Extendable scope="app.settings">
        <Theme class="mb-8" />
        <Editor class="mb-8" />
        <Encryption class="mb-8" />
        <Import class="mb-8" />
        <Export class="mb-8" />
        <Experimental class="mb-8" />
      </Extendable>
    </div>
  </PageContainer>
</template>

<script lang="ts" setup>
import Banner from '/components/Banner.vue'
import PageContainer from '/components/PageContainer.vue'
import Editor from '/components/settings/Editor.vue'
import Encryption from '/components/settings/Encryption.vue'
import Experimental from '/components/settings/Experimental.vue'
import Export from '/components/settings/Export.vue'
import Theme from '/components/settings/Theme.vue'
import Import from '/components/settings/Import.vue'
</script>
