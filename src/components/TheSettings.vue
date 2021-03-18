<template>
  <div class="container flex flex-col mx-auto p-4 md:px-16 md:py-8">
    <div>
      <h2 class="text-4xl">Settings</h2>
      <p class="mt-1 mb-8 text-gray-500">Make yourself comfortable</p>
      <Extendable scope="app.settings">
        <Editor class="mt-4" />
        <Theme class="mt-8" />
        <Encryption class="mt-8" />
        <Export class="mt-8" />
      </Extendable>
    </div>
  </div>
</template>

<script>
import Editor from '@/components/settings/Editor'
import Encryption from '@/components/settings/Encryption'
import Export from '@/components/settings/Export'
import Theme from '@/components/settings/Theme'

export default {
  name: 'TheSettings',
  components: {
    Editor,
    Encryption,
    Export,
    Theme,
  },
}
</script>
