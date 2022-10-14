<template>
  <div class="container mx-auto p-4 flex">
    <button class="button button-size-medium button-color-gray" v-on:click="exportFiles">Export documents</button>
  </div>
</template>

<script>
import { saveAs } from 'file-saver';
import JSZip from 'jszip'

export default {
  computed: {
    value() {
      return JSON.stringify(this.$store.state.documents.all, null, 2)
    },
  },
  methods: {
    exportFiles() {
      const zip = new JSZip();
      const folder = zip.folder("octo_exported");

      this.$store.state.documents.all.forEach(({ id, text }) => {
        folder.file(`${id}.md`, text);        
      })

      zip.generateAsync({type:"blob"}).then(function(content) {
          saveAs(content, "octo_exported.zip");
        });
    }
  },
}
</script>
