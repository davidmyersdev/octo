<template>
  <section>
    <h3 class="text-3xl">Export Documents</h3>
    <hr class="mt-2 mb-4">
    <div class="mb-4">
      <label>Bundle all documents as JSON. Documents will be decrypted if the necessary keys are available.</label>
    </div>
    <div class="mb-4">
      <router-link :to="{ path: '/docs/export' }" class="button button-size-medium button-color-gray">Export Documents</router-link>
    </div>
  </section>
</template>
