<template>
  <TheEditor v-if="daily" :id="daily.id" initialFocus="end" />
</template>

<script>
import moment from 'moment'

import TheEditor from '@/components/TheEditor'

import Doc from '@/models/doc'

import {
  ADD_DOCUMENT,
  DOCUMENTS_LOADED,
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
  methods: {
    checkDaily() {
      let cutoff = moment().startOf('day').add(3, 'hours')

      if (moment() < cutoff) {
        cutoff = cutoff.subtract(1, 'day')
      }

      if (!this.daily || this.daily.createdAt < cutoff) {
        const template = `#daily\n\n# ${moment().format('ddd, MMMM Do, YYYY')}\n\n`
        const doc = new Doc({ text: template, daily: true })

        this.$store.commit(ADD_DOCUMENT, doc)
      }
    },
  },
  beforeMount() {
    if (this.$store.state.documents.loaded) {
      this.checkDaily()
    } else {
      this.$store.subscribe(({ type }, _state) => {
        if (type === DOCUMENTS_LOADED) {
          this.checkDaily()
        }
      })
    }
  },
}
</script>
