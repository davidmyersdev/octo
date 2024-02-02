<script lang="ts" setup>
import { DesignSystemLayerStack } from '~/lib/components'
import { useColors } from '~/lib/composables'

const { color, dark, light, neutral, toCssVars } = useColors()
const isDarkMode = ref(true)

watch(color, () => {
  for (const color of dark.value) {
    for (const [property, value] of Object.entries(toCssVars(color))) {
      document.querySelector<HTMLElement>('.custom')?.style.setProperty(property, value)
    }
  }
})
</script>

<template>
  <div class="flex flex-col gap-4 p-4">
    <div class="flex gap-2">
      <CoreButton as="label" class="items-center relative overflow-hidden" :style="{ backgroundColor: color, color: neutral.textColor }">
        <input v-model="color" type="color" class="absolute left-0 bottom-0 opacity-0 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd" d="M3.5 2A1.5 1.5 0 0 0 2 3.5V15a3 3 0 1 0 6 0V3.5A1.5 1.5 0 0 0 6.5 2h-3Zm11.753 6.99L9.5 14.743V6.257l1.51-1.51a1.5 1.5 0 0 1 2.122 0l2.121 2.121a1.5 1.5 0 0 1 0 2.122ZM8.364 18H16.5a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-2.136l-6 6ZM5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
        </svg>
        <span>Choose Color</span>
      </CoreButton>
      <CoreButton as="label">
        <input v-model="isDarkMode" type="checkbox" class="checkbox">
        <span>Dark Mode</span>
      </CoreButton>
    </div>
    <div
      v-if="isDarkMode"
      class="flex gap-2 bg-black p-12 rounded"
      :style="{ backgroundColor: dark[0].bgColor, color: dark[0].textColor }"
    >
      <DesignSystemLayerStack
        :index="0"
        :levels="dark"
      />
    </div>
    <div
      v-else
      class="flex gap-2 bg-white p-12 rounded text-gray-300"
      :style="{ backgroundColor: light[0].bgColor, color: light[0].textColor }"
    >
      <DesignSystemLayerStack
        :index="0"
        :levels="light"
      />
    </div>
    <div>
      <div v-for="color in dark" :key="color.level">
        <div v-for="[property, value] in Object.entries(toCssVars(color))" :key="property">
          {{ property }}: {{ value }};
        </div>
      </div>
    </div>
  </div>
</template>
