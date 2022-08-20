<template>
  <section>
    <h3 class="text-3xl">Export Documents</h3>
    <hr class="mt-2 mb-4">
    <div class="mb-4">
      <label>Bundle all documents as JSON. Documents will be decrypted if the necessary keys are available.</label>
    </div>
    <div class="mb-4">
      <NuxtLink :to="{ name: 'export' }" class="button button-size-medium button-color-gray">Export Documents</NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Export',
}
</script>
