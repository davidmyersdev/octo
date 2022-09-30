<template>
  <div>
    <h2 class="mb-4">{{timestamp}}</h2>
    <ul class="flex flex-col gap-1 list-disc pl-4">
      <li v-for="change in changes" :key="change">{{change}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import moment from 'moment'

export default defineComponent({
  name: 'ChangeSet',
  props: {
    changeSet: {
      required: true,
      type: Object as PropType<{ timestamp: string, changes: string[] }>,
    },
  },
  computed: {
    changes() {
      return this.changeSet.changes
    },
    timestamp() {
      return moment(this.changeSet.timestamp).format('dddd, MMMM Do, YYYY')
    },
  },
})
</script>
