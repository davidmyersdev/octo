<template>
  <div class="flex flex-col gap-4">
    <div>
      <label class="button button-size-medium button-color-gray items-center">
        <input v-model="withFrontMatter" type="checkbox" class="checkbox">
        <span class="ml-3">Include metadata as Front Matter</span>
      </label>
    </div>
    <div>
      <button class="button button-size-medium button-color-gray" @click="exportFiles(withFrontMatter)">Export</button>
    </div>
  </div>
</template>

<script>
import { saveAs } from 'file-saver';
import JSZip from 'jszip'

export default {
  data() {
    return {
      withFrontMatter: true
    }
  },
  methods: {
    exportFiles(withFrontMatter = false) {
      const zip = new JSZip();
      const folder = zip.folder("octo_exported");

      this.$store.state.documents.all.forEach((doc) => {
        const { id, text } = doc
        const content = withFrontMatter ? `---\nid: ${id}\n---\n\n${text}` : text
        folder.file(`${id}.md`, content);
      })

      zip.generateAsync({ type: "blob" }).then(function (content) {
        saveAs(content, "octo_exported.zip");
      });
    }
  },
}
</script>
