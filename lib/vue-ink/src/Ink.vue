<template>
  <div ref="ink" id="ink"></div>
</template>

<script>
import ink from '@writewithocto/ink'

export default {
  name: 'Ink',
  props: {
    appearance: {
      type: String,
      default: 'dark',
    },
    images: {
      type: Boolean,
      default: false,
    },
    initialSelection: {
      type: Object,
    },
    spellcheck: {
      type: Boolean,
      default: true,
    },
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      instance: null,
    }
  },
  watch: {
    value(value) {
      if (this.instance.doc() !== value) {
        this.instance.update(value)
      }
    },
  },
  methods: {
    focus() {
      this.instance.focus()
    },
    focusEnd() {
      // focus end
    },
    focusStart() {
      // focus start
    },
    refresh() {
      // refresh editor
    },
    selection() {
      return this.instance.selection()
    },
  },
  mounted() {
    console.log(this.initialSelection)
    console.log(this.value)
    this.instance = ink(this.$refs.ink, {
      doc: this.value,
      appearance: this.appearance,
      enableSpellcheck: this.spellcheck,
      renderImages: this.images,
      selection: this.initialSelection,
      onChange: (doc) => {
        this.$emit('input', doc)
      },
    })
  },
}
</script>

<style>
  #ink .cm-focused {
    outline: none !important;
  }
</style>
