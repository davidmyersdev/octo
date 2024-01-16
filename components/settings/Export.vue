<script lang="ts" setup>
import Exporter from '#root/pages/docs/export.vue'
</script>

<template>
  <CorePageSection title="Export Docs">
    <div class="flex flex-col gap-4">
      <p class="mb-4">This tool lets you export your knowledge base as a zipped folder of plain-text Markdown files.</p>
      <Exporter />
    </div>
  </CorePageSection>
</template>
