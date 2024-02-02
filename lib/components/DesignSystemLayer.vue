<script lang="ts" setup>
import { type OkLevel } from '~/lib/composables'
import { toRounded } from '~/lib/utils'

defineProps<{
  index: number,
  level: OkLevel,
}>()
</script>

<template>
  <section
    class="p-8 rounded flex gap-4"
    :style="{ backgroundColor: level.bgColor, color: level.textColor }"
  >
    <div class="flex flex-col gap-2">
      <div>Layer {{ index }}</div>
      <div>C: {{ toRounded(level.wcag) }}</div>
      <div
        class="p-4 cursor-pointer rounded flex items-center justify-center relative overflow-hidden"
        :style="{ backgroundColor: level.bgDisabledColor, color: level.textDisabledColor }"
      >
        Disabled
      </div>
      <div
        class="p-4 cursor-pointer rounded flex items-center justify-center relative overflow-hidden"
        :style="{ backgroundColor: level.bgHoverColor, color: level.textHoverColor }"
      >
        Hover
      </div>
      <div
        class="p-4 cursor-pointer rounded flex items-center justify-center relative overflow-hidden"
        :style="{ backgroundColor: level.bgActiveColor, color: level.textColor }"
      >
        Active
      </div>
    </div>
    <div>
      <slot />
    </div>
  </section>
</template>
