<template>
  <div class="container mx-auto p-4 flex">
    <pre contenteditable ref="editable" class="editable monospace h-auto w-full text-current bg-transparent outline-none">{{value}}</pre>
  </div>
</template>

<script>
export default {
  computed: {
    value() {
      return JSON.stringify(this.$store.state.documents.all, null, 2)
    },
  },
  methods: {
    focus() {
      this.$refs.editable.focus()
    },
  },
  mounted() {
    this.focus()
  },
}
</script>
