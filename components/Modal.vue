<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'
import { bindGlobal, unbind } from '/src/common/keybindings'

const emit = defineEmits<{
  close: [],
}>()

const onClose = () => {
  emit('close')
}

onMounted(() => {
  bindGlobal('esc', onClose)
})

onUnmounted(() => {
  unbind({ keybinding: 'esc' })
})
</script>

<template>
  <div class="flex items-center justify-center fixed inset-0 z-50 bg-layer bg-opacity-75">
    <CoreLayer class="w-full max-w-2xl">
      <div class="overflow-hidden flex flex-col rounded border border-layer bg-layer">
        <header class="flex items-center justify-between gap-4 p-2">
          <h2 class="text-xl flex items-center justify-between">
            <slot name="header" />
          </h2>
          <CoreButton class="p-1 bg-transparent" @click="onClose">
            <Icon name="Dismiss" />
          </CoreButton>
        </header>
        <FlexDivider />
        <CoreScrollable v-slot="{ element }" class="max-h-96 p-2">
          <div :ref="element">
            <slot />
          </div>
        </CoreScrollable>
        <FlexDivider />
        <footer v-if="$slots.footer" class="p-2">
          <slot name="footer" />
        </footer>
      </div>
    </CoreLayer>
  </div>
</template>
