<template>
  <div>
    <div ref="ink" v-html="html"></div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import { ink, ssr } from 'ink-mde/ssr'
import { defineComponent } from 'vue'

import type * as Ink from 'ink-mde'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'InkMde',
  emits: ['input', 'update:modelValue'],
  props: {
    options: {
      type: Object as PropType<Ink.Options>,
    },
    modelValue: {
      type: String,
    },
    value: {
      type: String,
    },
    version: {
      type: Number,
      default: () => 3,
      validator: (value: number) => (
        [2, 3].includes(value)
      ),
    },
  },
  data() {
    return {
      html: '',
      instance: undefined,
    } as { html: string, instance?: Ink.Instance }
  },
  watch: {
    options: {
      deep: true,
      handler(newValue, _oldValue) {
        this.instance?.reconfigure(newValue)
      },
    },
    modelValue(value) {
      if (this.instance?.doc() !== value) {
        this.instance?.update(value)
      }
    },
    value(value) { // Vue 2 support
      if (this.instance?.doc() !== value) {
        this.instance?.update(value)
      }
    },
  },
  computed: {
    doc() {
      return (this.version === 3 ? this.modelValue : this.value) || ''
    },
  },
  methods: {
    focus() {
      this.instance?.focus()
    },
    select(selections: Ink.Editor.Selection[]) {
      this.instance?.select(selections)
    },
    selections() {
      return this.instance?.selections()
    },
    tryInit() {
      if (this.$refs.ink && !this.instance) {
        this.instance = ink(this.$refs.ink as HTMLElement, {
          ...this.options,
          doc: this.doc,
          hooks: {
            ...this.options?.hooks,
            afterUpdate: (doc: string) => {
              if (this.version === 3) {
                this.$emit('update:modelValue', doc)
              } else {
                this.$emit('input', doc) // Vue 2 support
              }

              if (this.options?.hooks?.afterUpdate) {
                this.options.hooks.afterUpdate(doc)
              }
            },
          },
        })

        // @ts-ignore
        this.$refs.ink.addEventListener('input', (event: InputEvent) => {
          event.stopPropagation()
        })

        this.instance.focus()
      }
    },
  },
  created() {
    // if (!process.client) {
      this.html = ssr(this.options)

      console.log('html', this.html)
    // }
  },
  updated() {
    this.tryInit()
  },
  mounted() {
    this.tryInit()
  },
})
</script>
