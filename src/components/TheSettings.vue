<template>
  <div class="container mt-3 mt-md-5">
    <div>
      <h3 class="card-title">Settings</h3>
      <h6 class="card-subtitle text-muted font-weight-normal mb-3">Make yourself comfortable</h6>
      <Extendable scope="app.settings">
        <Editor/>
        <Theme/>
        <Encryption/>
        <Export/>
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
