<script lang="ts" setup>
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
        <Icon name="FormatHeading" />
      </CoreButton>
      <CoreButton v-if="bold" class="p-1 border border-layer" title="Bold" @click="$emit('bold')">
        <Icon name="FormatBold" />
      </CoreButton>
      <CoreButton v-if="italic" class="p-1 border border-layer" title="Italic" @click="$emit('italic')">
        <Icon name="FormatItalic" />
      </CoreButton>
    </div>
    <div v-if="blockquote || code" class="flex gap-1">
      <CoreButton v-if="blockquote" class="p-1 border border-layer" title="Blockquote" @click="$emit('blockquote')">
        <Icon name="FormatBlockquote" />
      </CoreButton>
      <CoreButton v-if="code" class="p-1 border border-layer" title="Code" @click="$emit('code')">
        <Icon name="FormatCode" />
      </CoreButton>
    </div>
    <div v-if="bulletList || numberList || taskList" class="flex gap-1">
      <CoreButton v-if="bulletList" class="p-1 border border-layer" title="Bullet List" @click="$emit('bulletList')">
        <Icon name="FormatListBulleted" />
      </CoreButton>
      <CoreButton v-if="numberList" class="p-1 border border-layer" title="Number List" @click="$emit('numberList')">
        <Icon name="FormatListNumbered" />
      </CoreButton>
      <CoreButton v-if="taskList" class="p-1 border border-layer" title="Task List" @click="$emit('taskList')">
        <Icon name="FormatListChecked" />
      </CoreButton>
    </div>
    <div v-if="link || image || upload" class="flex gap-1">
      <CoreButton v-if="link" class="p-1 border border-layer" title="Link" @click="$emit('link')">
        <Icon name="FormatLink" />
      </CoreButton>
      <CoreButton v-if="image" class="p-1 border border-layer" title="Image" @click="$emit('image')">
        <Icon name="FormatImage" />
      </CoreButton>
      <CoreButton v-if="upload" class="p-1 border border-layer" title="Upload" @click="triggerUpload">
        <Icon name="FormatUpload" />
        <input ref="fileInput" class="hidden" type="file" @change="$emit('upload', $event)">
      </CoreButton>
    </div>
  </div>
</template>
