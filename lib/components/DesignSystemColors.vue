<script lang="ts" setup>
import { DesignSystemLayerStack } from '~/lib/components'
import DesignSystemLayerManager from '~/lib/components/DesignSystemLayerManager.vue'
import { okLayer, toCssVars, useColorLayer, useColors } from '~/lib/composables/useColors'

const { color, dark, light, neutral, oklch } = useColors()
const isDarkMode = ref(true)

const { color: color0, layer: layer0 } = useColorLayer(0)

watch(color0, () => {
  for (const [property, value] of Object.entries(toCssVars(layer0.value))) {
    document.querySelector<HTMLElement>('[data-appearance=custom]')?.style.setProperty(property, value)
  }
})
</script>

<template>
  <div class="flex flex-col gap-4 p-4">
    <div class="flex flex-col gap-4 p-4">
      <DesignSystemLayerManager :index="0" />
      <DesignSystemLayerManager :index="1" />
      <DesignSystemLayerManager :index="2" />
      <DesignSystemLayerManager :index="3" />
      <DesignSystemLayerManager :index="4" />
    </div>
    <div class="flex flex-col gap-4 p-4">
      <div class="flex gap-2">
        <CoreButton as="label" class="items-center relative overflow-hidden" :style="{ backgroundColor: color, color: neutral.textColor }">
          <input v-model="color" type="color" class="absolute left-0 bottom-0 opacity-0 cursor-pointer">
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
  </div>
</template>
