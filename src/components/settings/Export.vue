<template>
  <section>
    <h4 class="font-weight-normal mt-3 mt-md-5">Export Documents</h4>
    <hr>
    <div class="form-group">
      <label>Bundle all documents as JSON. Documents will be decrypted if the necessary keys are available.</label>
    </div>
    <div class="form-group">
      <router-link :to="{ name: 'export' }" class="btn btn-secondary">Export Documents</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Export',
}
</script>
