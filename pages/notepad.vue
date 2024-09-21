<script>
import moment from 'moment'
import { computed, onMounted, watch } from 'vue'
import EditorPage from '/pages/docs/[docId]/index.vue'
import Doc from '/src/models/doc'
import { EDIT_DOCUMENT } from '/src/store/actions'

export default {
  components: {
    EditorPage,
  },
  setup() {
    const { store } = useVuex()
    const daily = computed(() => store.getters.daily)

    const buildTemplate = async () => {
      try {
        const quotes = (await import('/src/data/quotes.json')).default
        const quote = quotes[Math.floor(Math.random() * quotes.length)]

        return `#daily\n\n# ${moment().format('dddd, MMMM Do, YYYY')}\n\n> ${quote.text}\n> ${quote.author || 'Unknown'}\n\n`
      } catch (error) {
        console.warn({ error })

        return `#daily\n\n# ${moment().format('dddd, MMMM Do, YYYY')}\n\n`
      }
    }

    const checkDaily = async () => {
      let cutoff = moment().startOf('day').add(3, 'hours')

      if (moment() < cutoff) {
        cutoff = cutoff.subtract(1, 'day')
      }

      if (!daily.value || daily.value.createdAt < cutoff) {
        const template = await buildTemplate()
        const doc = new Doc({ text: template, daily: true })

        store.commit(EDIT_DOCUMENT, doc)
      }
    }

    useHead({
      title: 'Notepad',
    })

    onMounted(() => {
      if (store.state.documents.loaded) {
        checkDaily()
      }
    })

    watch(() => store.state.documents.loaded, (loaded) => {
      if (loaded) {
        checkDaily()
      }
    })

    return {
      daily,
    }
  },
}
</script>

<template>
  <EditorPage v-if="daily" :doc-id="daily.id" />
</template>
