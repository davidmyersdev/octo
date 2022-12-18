<template>
  <nav class="relative flex gap-2 justify-between items-center content-between p-1 z-index-10 md:hidden w-full bg-gray-100 dark:bg-darkest">
    <CoreLink class="p-1.5 text-lg whitespace-no-wrap flex justify-between items-center" :to="{ path: '/docs/new' }">
      <TheLogo class="h-8 text-theme" />
    </CoreLink>
    <div class="flex gap-1 items-stretch">
      <CoreLink class="button-flat button-size-medium" :to="{ path: '/menu' }" role="button" aria-haspopup="true" aria-expanded="false">
        <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span class="ml-2">Menu</span>
      </CoreLink>
      <CoreLink v-if="isDashboard" :to="{ path: '/quick-action' }" class="button-flat button-size-medium">
        <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </CoreLink>
      <CoreLink v-else-if="isDoc" :to="{ path: `/docs/${doc.id}/meta` }" class="button-flat button-size-medium">
        <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </CoreLink>
      <button v-else @click="close" class="button-flat button-size-medium">
        <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </nav>
</template>

<script>
import TheLogo from '/components/TheLogo.vue'

import { open } from '/src/router.js'

export default {
  components: {
    TheLogo,
  },
  computed: {
    doc() {
      return this.$store.getters.currentDoc
    },
    isDoc() {
      return this.doc && this.$route.name === 'docs-doc'
    },
    isDashboard() {
      return this.$route.path === '/docs/new'
    },
  },
  methods: {
    close() {
      if (this.doc) {
        return open({ path: `/docs/${this.doc.id}` })
      }

      open({ path: '/docs/new' })
    },
  },
}
</script>
