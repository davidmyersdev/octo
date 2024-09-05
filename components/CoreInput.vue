<script generic="T extends 'number' | 'text' = 'text'" lang="ts" setup>
const props = defineProps<{
  as?: string | Component,
  id?: string,
  type?: T,
  autofocus?: boolean,
  description?: string,
  disabled?: boolean,
  label?: string,
  lines?: number,
  min?: number,
  multiline?: boolean,
  placeholder?: string,
  private?: boolean,
}>()

const model = defineModel<T extends 'number' ? number : string>()

const filterNumber = (value: string) => {
  let transformed = value.replace(/[^\d]/g, '')

  if (!transformed) {
    transformed = '0'
  }

  if (props.min) {
    transformed = Math.max(props.min, parseInt(transformed)).toString()
  }

  return transformed
}

const filterString = (value: string) => {
  let filtered = `${value}`

  if (!props.multiline) {
    filtered = filtered.replace(/(?:\s+)?\n(?:\s+)?/g, ' ')
  }

  return filtered
}

const modelProxy = ref('')
const input = computed(() => props.as || (props.multiline ? 'textarea' : 'input'))

watch(model, () => {
  modelProxy.value = filterString(`${model.value ?? ''}`)
}, { immediate: true })

watch(modelProxy, () => {
  if (props.type === 'number') {
    modelProxy.value = filterNumber(`${modelProxy.value}`)
    model.value = parseInt(modelProxy.value) as any
  } else {
    modelProxy.value = filterString(`${modelProxy.value}`)
    model.value = modelProxy.value as any
  }
})

const inputRef = ref()
const height = ref('auto')
const inputElement = computed(() => {
  if (inputRef.value && '$el' in inputRef.value) {
    return inputRef.value.$el
  }

  return inputRef.value
})

const handleEnter = (event: KeyboardEvent) => {
  if (!props.multiline) {
    event.preventDefault()
    event.stopPropagation()
  }
}

const updateHeight = () => {
  if (inputElement.value && typeof window !== 'undefined') {
    const computedStyles = window.getComputedStyle(inputElement.value)
    const lineHeight = computedStyles.getPropertyValue('line-height')
    const paddingTop = computedStyles.getPropertyValue('padding-top')
    const paddingBottom = computedStyles.getPropertyValue('padding-bottom')
    const borderTop = computedStyles.getPropertyValue('border-top-width')
    const borderBottom = computedStyles.getPropertyValue('border-bottom-width')
    const lineCount = modelProxy.value.split('\n').length

    height.value = `calc((${lineHeight} * ${lineCount}) + ${borderTop} + ${borderBottom} + ${paddingTop} + ${paddingBottom})`
  }
}

watch(modelProxy, () => {
  if (props.multiline) {
    updateHeight()
  }
})

onMounted(() => {
  updateHeight()

  if (props.autofocus) {
    inputElement.value?.focus()
  }
})
</script>

<template>
  <div class="flex flex-col gap-1">
    <label class="cursor-pointer flex flex-col gap-1 group focus-within:cursor-text">
      <small v-if="label">{{ label }}</small>
      <div class="flex -m-0.5 p-0.5 rounded group-focus-within:ring-2 ring-opacity-25">
        <div class="flex flex-col flex-grow overflow-hidden px-2 py-1 relative rounded border border-layer">
          <span v-if="private" class="absolute flex inset-0 items-center justify-center z-10 group-focus-within:opacity-0 group-focus-within:-z-10 bg-layer">
            <span class="flex gap-2 items-center">
              <Icon name="Private" />
              <span>Tap to view</span>
            </span>
          </span>
          <component
            :is="input"
            :id="id"
            ref="inputRef"
            v-model="modelProxy"
            aria-autocomplete="none"
            autocomplete="off"
            :disabled="disabled"
            name="text"
            :placeholder="placeholder"
            :rows="lines"
            :spellcheck="false"
            :style="{ height }"
            type="text"
            :value="modelProxy"
            class="unset-all cursor-text block min-h-0 overflow-hidden resize-none placeholder-muted"
            :class="{ 'whitespace-nowrap': !multiline }"
            data-core-input
            @input="modelProxy = $event.target.value"
            @keypress.enter="handleEnter"
          />
        </div>
      </div>
    </label>
    <small v-if="description" class="text-layer-muted">{{ description }}</small>
  </div>
</template>
