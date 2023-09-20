<script lang="ts">
import { Prec } from '@codemirror/state'
import { keymap } from '@codemirror/view'
import { type Options } from 'ink-mde'
import { type CoreEditor } from '#components'
import { type LayerIndex } from '#composables/useLayers'
import { readonly } from '#root/src/vendor/plugins/readonly'

export default defineComponent({
  props: {
    layer: {
      required: true,
      type: Number as PropType<LayerIndex>,
    },
    modelValue: {
      default: '',
      type: String,
    },
    placeholder: {
      default: '',
      type: String,
    },
    readonly: {
      default: false,
      type: Boolean,
    },
  },
  emits: {
    'modEnter': () => {
      return true
    },
    'tab': () => {
      return true
    },
    'update:modelValue': (value: string) => {
      return typeof value === 'string'
    },
  },
  setup(props, { emit }) {
    const coreEditor = ref<InstanceType<typeof CoreEditor>>()

    const options = computed<Options>(() => {
      return {
        interface: {
          attribution: false,
          autocomplete: true,
          images: false,
          lists: false,
          readonly: props.readonly,
          spellcheck: false,
          toolbar: false,
        },
        placeholder: props.placeholder,
        plugins: [
          {
            type: 'default',
            value: Prec.high(
              keymap.of([
                {
                  key: 'Mod-Enter',
                  run: () => {
                    emit('modEnter')

                    return true
                  },
                },
              ]),
            ),
          },
          ...readonly(props.readonly),
        ],
        trapTab: false,
        readability: false,
      }
    })

    return {
      coreEditor,
      options,
    }
  },
})
</script>

<template>
  <CoreEditor
    ref="coreEditor"
    :options="options"
    v-bind="{ ...$attrs, ...$props }"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>
