<script lang="ts" setup>
import { type Options } from 'ink-mde'
import Ink from 'ink-mde/vue'
import { type BaseAppearance } from '#root/composables/useAppearance'

defineEmits(['update:modelValue'])
const props = defineProps<{ modelValue: string, appearance?: BaseAppearance, options?: Options }>()

const { baseAppearance } = useAppearance()
const editorElement = ref()
const editorAppearance = computed(() => (props.appearance ?? props.options?.interface?.appearance ?? baseAppearance.value))
const editorOptions = computed(() => {
  return {
    ...props.options,
    interface: {
      ...props.options?.interface,
      appearance: editorAppearance.value,
    },
  }
})

defineExpose({
  focus: () => {
    editorElement.value?.instance?.focus()
  },
})
</script>

<template>
  <Ink
    ref="editorElement"
    :model-value="modelValue"
    :options="editorOptions"
    @update:model-value="$emit('update:modelValue', $event)"
    class="core-editor flex flex-col flex-grow flex-shrink"
  />
</template>

<style scoped>
.core-editor {
  --ink-font-family: 'Inter', helvetica, sans-serif;
  --ink-code-font-family: 'Fira Code', monospace;
}

:deep(.ink-mde) {
  border: none;
  border-radius: 0;
}

:deep(.ink-mde .cm-editor),
:deep(.ink-mde .cm-scroller) {
  flex-grow: 1;
  flex-shrink: 1;
  min-height: 0;
}

:deep(.core-editor .ink-mde-widget svg) {
  margin: auto;
}

.core-editor :deep(.cm-editor.cm-focused) {
  outline: none;
}
</style>
