<template>
  <EditorPage v-if="daily" :docId="daily.id" />
</template>

<script>
import moment from 'moment'
import EditorPage from '#root/pages/docs/[docId]/index.vue'
import Doc from '#root/src/models/doc'
import { DOCUMENTS_LOADED, EDIT_DOCUMENT } from '#root/src/store/actions'

export default {
  components: {
    EditorPage,
  },
  computed: {
    daily() {
      return this.$store.getters.daily
    },
  },
  methods: {
    async buildTemplate() {
      try {
        const quotes = (await import('#root/src/data/quotes.json')).default
        const quote = quotes[Math.floor(Math.random() * quotes.length)]

        return `#daily\n\n# ${moment().format('dddd, MMMM Do, YYYY')}\n\n> ${quote.text}\n> ${quote.author || 'Unknown'}\n\n`
      } catch (error) {
        console.warn({ error })

        return `#daily\n\n# ${moment().format('dddd, MMMM Do, YYYY')}\n\n`
      }
    },
    async checkDaily() {
      let cutoff = moment().startOf('day').add(3, 'hours')

      if (moment() < cutoff) {
        cutoff = cutoff.subtract(1, 'day')
      }

      if (!this.daily || this.daily.createdAt < cutoff) {
        const template = await this.buildTemplate()
        const doc = new Doc({ text: template, daily: true })

        this.$store.commit(EDIT_DOCUMENT, doc)
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
  setup() {
    useHead({
      title: 'Notepad',
    })
  },
}
</script>
