<script lang="ts" setup>
import Exporter from '/pages/docs/export.vue'
</script>

<template>
  <section>
    <h3 class="text-3xl">Export Docs</h3>
    <hr class="mt-2 mb-4">
    <div class="mb-4">
      <label>This tool lets you download your knowledge base as a zipped folder of plain-text Markdown files.</label>
    </div>
    <div class="mb-4">
      <Exporter />
    </div>
  </section>
</template>
