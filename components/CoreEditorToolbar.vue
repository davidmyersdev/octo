<script lang="ts" setup>
withDefaults(defineProps<{
  blockquote?: boolean,
  bold?: boolean,
  bulletList?: boolean,
  code?: boolean,
  heading?: boolean,
  image?: boolean,
  indent?: boolean,
  italic?: boolean,
  link?: boolean,
  numberList?: boolean,
  taskList?: boolean,
  unindent?: boolean,
  upload?: boolean,
}>(), {
  blockquote: true,
  bold: true,
  bulletList: true,
  code: true,
  heading: true,
  image: true,
  indent: true,
  italic: true,
  link: true,
  numberList: true,
  taskList: true,
  unindent: true,
  upload: false,
})

defineEmits<{
  blockquote: [],
  bold: [],
  bulletList: [],
  code: [],
  heading: [],
  image: [],
  indent: [],
  italic: [],
  link: [],
  numberList: [],
  taskList: [],
  unindent: [],
  upload: [event: Event],
}>()

const fileInput = ref<HTMLElement>()

const triggerUpload = () => {
  fileInput.value?.click()
}
</script>

<template>
  <div class="flex gap-1 lg:gap-4">
    <div v-if="indent || unindent" class="flex gap-1">
      <CoreButton v-if="indent" class="p-1 border border-layer" title="Indent" @click="$emit('indent')">
        <Icon name="FormatIndent" size="1.5rem" />
      </CoreButton>
      <CoreButton v-if="unindent" class="p-1 border border-layer" title="Unindent" @click="$emit('unindent')">
        <Icon name="FormatUnindent" size="1.5rem" />
      </CoreButton>
    </div>
    <div v-if="heading || bold || italic" class="flex gap-1">
      <CoreButton v-if="heading" class="p-1 border border-layer" title="Heading" @click="$emit('heading')">
        <Icon name="FormatHeading" size="1.5rem" />
      </CoreButton>
      <CoreButton v-if="bold" class="p-1 border border-layer" title="Bold" @click="$emit('bold')">
        <Icon name="FormatBold" size="1.5rem" />
      </CoreButton>
      <CoreButton v-if="italic" class="p-1 border border-layer" title="Italic" @click="$emit('italic')">
        <Icon name="FormatItalic" size="1.5rem" />
      </CoreButton>
    </div>
    <div v-if="blockquote || code" class="flex gap-1">
      <CoreButton v-if="blockquote" class="p-1 border border-layer" title="Blockquote" @click="$emit('blockquote')">
        <Icon name="FormatBlockquote" size="1.5rem" />
      </CoreButton>
      <CoreButton v-if="code" class="p-1 border border-layer" title="Code" @click="$emit('code')">
        <Icon name="FormatCode" size="1.5rem" />
      </CoreButton>
    </div>
    <div v-if="bulletList || numberList || taskList" class="flex gap-1">
      <CoreButton v-if="bulletList" class="p-1 border border-layer" title="Bullet List" @click="$emit('bulletList')">
        <Icon name="FormatListBulleted" size="1.5rem" />
      </CoreButton>
      <CoreButton v-if="numberList" class="p-1 border border-layer" title="Number List" @click="$emit('numberList')">
        <Icon name="FormatListNumbered" size="1.5rem" />
      </CoreButton>
      <CoreButton v-if="taskList" class="p-1 border border-layer" title="Task List" @click="$emit('taskList')">
        <Icon name="FormatListChecked" size="1.5rem" />
      </CoreButton>
    </div>
    <div v-if="link || image || upload" class="flex gap-1">
      <CoreButton v-if="link" class="p-1 border border-layer" title="Link" @click="$emit('link')">
        <Icon name="FormatLink" size="1.5rem" />
      </CoreButton>
      <CoreButton v-if="image" class="p-1 border border-layer" title="Image" @click="$emit('image')">
        <Icon name="FormatImage" size="1.5rem" />
      </CoreButton>
      <CoreButton v-if="upload" class="p-1 border border-layer" title="Upload" @click="triggerUpload">
        <Icon name="FormatUpload" size="1.5rem" />
        <input ref="fileInput" class="hidden" type="file" @change="$emit('upload', $event)">
      </CoreButton>
    </div>
  </div>
</template>
