<template>
  <TheEditor :id="daily.id" />
</template>

<script>
import moment from 'moment'

import TheEditor from '@/components/TheEditor'

import Doc from '@/models/doc'

import {
  ADD_DOCUMENT,
} from '@/store/actions'

export default {
  name: 'Daily',
  components: {
    TheEditor,
  },
  computed: {
    daily() {
      return this.$store.getters.daily
    },
  },
  beforeMount() {
    let cutoff = moment().startOf('day').add(3, 'hours')

    if (moment() < cutoff) {
      cutoff = cutoff.subtract(1, 'day')
    }

    if (!this.daily || this.daily.createdAt < cutoff) {
      const doc = new Doc({ daily: true })

      this.$store.commit(ADD_DOCUMENT, doc)
    }
  },
}
</script>
