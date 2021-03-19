<template>
  <div class="container mx-auto p-4 md:px-16 md:py-8">
    <DocumentList :tag="tag" :actionable="actionable" :discarded="discarded" :recent="recent" :untagged="untagged" :cols="2" />
  </div>
</template>

<script>
import DocumentList from '@/components/DocumentList'

export default {
  name: 'Documents',
  components: {
    DocumentList,
  },
  props: {
    tag: String,
    actionable: Boolean,
    discarded: Boolean,
    recent: Boolean,
    untagged: Boolean,
  },
}
</script>
