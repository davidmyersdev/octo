<template>
  <nav class="relative flex flex-wrap items-center content-between p-4 z-index-10 md:hidden w-full">
    <router-link class="pt-1 pb-1 mr-4 text-lg whitespace-no-wrap flex justify-between items-center" :to="{ name: 'new_doc' }">
      <TheLogo class="h-9 text-theme" />
    </router-link>
    <div class="flex items-stretch fixed top-3 right-3">
      <router-link class="button button-size-medium button-color-gray ml-2" :to="{ name: 'menu' }" role="button" aria-haspopup="true" aria-expanded="false">
        <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span class="ml-2">Menu</span>
      </router-link>
      <router-link v-if="isDashboard" :to="{ name: 'quick_action' }" class="button button-size-medium button-color-gray ml-2">
        <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </router-link>
      <router-link v-else-if="isDoc" :to="{ name: 'doc_meta', params: { id: doc.id } }" class="button button-size-medium button-color-gray ml-2">
        <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </router-link>
      <button v-else @click="close" class="button button-size-medium button-color-gray ml-2">
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
  name: 'TheNavbar',
  components: {
    TheLogo,
  },
  computed: {
    doc() {
      return this.$store.getters.currentDoc
    },
    isDoc() {
      return this.doc && this.$route.name === 'doc'
    },
    isDashboard() {
      return this.$route.name === 'new_doc'
    },
    october() {
      return this.$store.state.settings.theme === 'october'
    },
  },
  methods: {
    close() {
      if (this.doc) {
        return open({
          name: 'doc',
          params: {
            id: this.doc.id,
          },
        })
      }

      open({ name: 'new_doc' })
    },
  },
}
</script>
