<script lang="ts" setup>
import {
  IconBlockquote,
  IconBold,
  IconCode,
  IconHeading,
  IconItalic,
  IconLink,
  IconList,
  IconListCheck,
  IconListNumbers,
  IconPhoto,
  IconUpload,
} from '@tabler/icons-vue'

withDefaults(defineProps<{
  blockquote?: boolean,
  bold?: boolean,
  bulletList?: boolean,
  code?: boolean,
  heading?: boolean,
  image?: boolean,
  italic?: boolean,
  link?: boolean,
  numberList?: boolean,
  taskList?: boolean,
  upload?: boolean,
}>(), {
  blockquote: true,
  bold: true,
  bulletList: true,
  code: true,
  heading: true,
  image: true,
  italic: true,
  link: true,
  numberList: true,
  taskList: true,
  upload: false,
})

defineEmits<{
  blockquote: [],
  bold: [],
  bulletList: [],
  code: [],
  heading: [],
  image: [],
  italic: [],
  link: [],
  numberList: [],
  taskList: [],
  upload: [event: Event],
}>()

const fileInput = ref<HTMLElement>()

const triggerUpload = () => {
  fileInput.value?.click()
}
</script>

<template>
  <div class="flex gap-1 lg:gap-4">
    <div v-if="heading || bold || italic" class="flex gap-1">
      <CoreButton v-if="heading" class="p-1 border border-layer" title="Heading" @click="$emit('heading')">
        <IconHeading class="sq-6" :stroke-width="1.25" />
      </CoreButton>
      <CoreButton v-if="bold" class="p-1 border border-layer" title="Bold" @click="$emit('bold')">
        <IconBold class="sq-6" :stroke-width="1.25" />
      </CoreButton>
      <CoreButton v-if="italic" class="p-1 border border-layer" title="Italic" @click="$emit('italic')">
        <IconItalic class="sq-6" :stroke-width="1.25" />
      </CoreButton>
    </div>
    <div v-if="blockquote || code" class="flex gap-1">
      <CoreButton v-if="blockquote" class="p-1 border border-layer" title="Blockquote" @click="$emit('blockquote')">
        <IconBlockquote class="sq-6" :stroke-width="1.25" />
      </CoreButton>
      <CoreButton v-if="code" class="p-1 border border-layer" title="Code" @click="$emit('code')">
        <IconCode class="sq-6" :stroke-width="1.25" />
      </CoreButton>
    </div>
    <div v-if="bulletList || numberList || taskList" class="flex gap-1">
      <CoreButton v-if="bulletList" class="p-1 border border-layer" title="Bullet List" @click="$emit('bulletList')">
        <IconList class="sq-6" :stroke-width="1.25" />
      </CoreButton>
      <CoreButton v-if="numberList" class="p-1 border border-layer" title="Number List" @click="$emit('numberList')">
        <IconListNumbers class="sq-6" :stroke-width="1.25" />
      </CoreButton>
      <CoreButton v-if="taskList" class="p-1 border border-layer" title="Task List" @click="$emit('taskList')">
        <IconListCheck class="sq-6" :stroke-width="1.25" />
      </CoreButton>
    </div>
    <div v-if="link || image || upload" class="flex gap-1">
      <CoreButton v-if="link" class="p-1 border border-layer" title="Link" @click="$emit('link')">
        <IconLink class="sq-6" :stroke-width="1.25" />
      </CoreButton>
      <CoreButton v-if="image" class="p-1 border border-layer" title="Image" @click="$emit('image')">
        <IconPhoto class="sq-6" :stroke-width="1.25" />
      </CoreButton>
      <CoreButton v-if="upload" class="p-1 border border-layer" title="Upload" @click="triggerUpload">
        <IconUpload class="sq-6" :stroke-width="1.25" />
        <input ref="fileInput" class="hidden" type="file" @change="$emit('upload', $event)">
      </CoreButton>
    </div>
  </div>
</template>
