<template>
  <CoreScrollable class="meta p-4 md:p-2">
    <div class="flex flex-col flex-grow">
      <div v-if="doc" class="flex flex-col flex-grow">
        <div>
          <button @click.stop="duplicateDocument" class="sidebar-link w-full">
            <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
            <span class="ml-6 md:ml-3 flex-grow text-left">Duplicate</span>
          </button>
          <DiscardableAction v-if="doc.id" :discardedAt="doc.discardedAt" :onDiscard="discardDocument" :onRestore="restoreDocument" class="sidebar-link w-full"></DiscardableAction>
          <button v-if="hasCodeblocks" @click="openSandbox" class="sidebar-link w-full">
            <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span class="ml-6 md:ml-3 flex-grow text-left">Create Sandbox</span>
          </button>
          <div>
            <div v-if="doc.public">
              <button @click="restrictDocument" class="sidebar-link w-full">
                <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span class="ml-6 md:ml-3 flex-grow text-left">Make Private</span>
              </button>
              <button @click="copyPublicUrl" class="sidebar-link w-full">
                <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                <span class="ml-6 md:ml-3 flex-grow text-left">Copy Link</span>
              </button>
              <input ref="link" :value="publicUrl" type="text" class="form-text w-full mb-2" readonly>
            </div>
            <div v-else class="mb-2">
              <button @click="shareDocument" class="sidebar-link w-full">
                <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                <span class="ml-6 md:ml-3 flex-grow text-left">Make Public</span>
              </button>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <TagLink v-for="tag in doc.tags" :key="tag" :tag="tag" class="sidebar-link" />
        </div>
        <div class="mt-4">
          <DocLink v-for="reference in references" :key="reference.id" :doc="reference" class="sidebar-link" />
        </div>
        <div class="mt-4">
          <div v-for="task in doc.tasks" class="flex items-center px-3 py-2 my-1 md:px-2 md:py-1">
            <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="flex-grow overflow-hidden truncate ml-3">{{ task }}</span>
          </div>
        </div>
        <div class="flex flex-col justify-end flex-grow px-3 md:p-2 mt-4 mb-3 md:mb-1">
          <div v-if="doc.updatedAt">
            <small class="text-gray-700">Last Saved</small>
            <div class="capitalize pt-2 md:pt-1">{{ savedAt }}</div>
          </div>
          <div v-if="doc.createdAt" class="mt-3 md:mt-2">
            <small class="text-gray-700">Created</small>
            <div class="pt-2 md:pt-1">{{ createdAt }}</div>
          </div>
          <div v-if="doc.updatedAt" class="mt-3 md:mt-2">
            <small class="text-gray-700">Updated</small>
            <div class="pt-2 md:pt-1">{{ updatedAt }}</div>
          </div>
          <div v-if="doc.discardedAt" class="mt-3 md:mt-2">
            <small class="text-gray-700">Discarded</small>
            <div class="pt-2 md:pt-1">{{ discardedAt }}</div>
          </div>
        </div>
      </div>
    </div>
  </CoreScrollable>
</template>

<script>
import moment from 'moment'

import DiscardableAction from '/components/DiscardableAction.vue'
import DocLink from '/components/DocLink.vue'
import TagLink from '/components/TagLink.vue'

import CodeSandbox from '/src/common/code_sandbox.js'
import { parseCodeblocks, parseReferences } from '/src/common/parsers'
import { open } from '/src/router.js'

import {
  DISCARD_DOCUMENT,
  DUPLICATE_DOCUMENT,
  RESTORE_DOCUMENT,
  RESTRICT_DOCUMENT,
  SHARE_DOCUMENT,
  SET_RIGHT_SIDEBAR_VISIBILITY,
} from '/src/store/actions.js'

export default {
  components: {
    DiscardableAction,
    DocLink,
    TagLink,
  },
  data() {
    return {
      now: moment(),
      ticker: null,
    }
  },
  computed: {
    codeblocks() {
      return parseCodeblocks(this.doc.text)
    },
    createdAt() {
      if (this.$route.params.docId) {
        return moment(this.doc.createdAt).format('ddd, MMM Do, YYYY [at] h:mm A')
      }

      return 'Not yet created'
    },
    discardedAt() {
      return moment(this.doc.discardedAt).format('ddd, MMM Do, YYYY [at] h:mm A')
    },
    doc() {
      return this.$store.getters.currentDoc
    },
    hasCodeblocks() {
      return this.codeblocks.length > 0
    },
    publicUrl() {
      const path = this.$router.resolve({ path: `/public/${this.doc.id}` }).href

      return `${location.protocol}//${location.host}${path}`
    },
    references() {
      const references = parseReferences(this.doc.text)

      return this.$store.getters.kept.filter((doc) => {
        return references.includes(doc.id)
      })
    },
    savedAt() {
      if (this.$route.params.docId) {
        if (this.now.diff(this.doc.updatedAt, 'seconds') < 5) {
          return 'just now'
        }
        else {
          return `${moment(this.doc.updatedAt).from(this.now, true)} ago`
        }
      }

      return 'Not yet saved'
    },
    updatedAt() {
      if (this.$route.params.docId) {
        return moment(this.doc.updatedAt).format('ddd, MMM Do, YYYY [at] h:mm A')
      }

      return 'Not yet updated'
    },
  },
  methods: {
    async copyPublicUrl() {
      // copy link to clipboard
      this.$refs.link.select()
      document.execCommand('copy')
    },
    async discardDocument() {
      this.$store.dispatch(DISCARD_DOCUMENT, { id: this.doc.id })

      open({ path: '/docs/new' })
    },
    async duplicateDocument() {
      const newDocId = await this.$store.dispatch(DUPLICATE_DOCUMENT, { id: this.doc.id })

      open({ path: `/docs/${newDocId}` })
    },
    async openSandbox() {
      const files = this.codeblocks.reduce((agg, codeblock, index) => {
        const filename = codeblock.filename || [index, (codeblock.language || 'txt')].join('.')

        return {
          ...agg,
          [filename]: {
            content: codeblock.code,
          },
        }
      }, {})

      CodeSandbox.create(files).then(sandbox_id => CodeSandbox.open(sandbox_id))
    },
    async restoreDocument() {
      this.$store.dispatch(RESTORE_DOCUMENT, { id: this.doc.id })
    },
    async restrictDocument() {
      this.$store.dispatch(RESTRICT_DOCUMENT, { id: this.doc.id })
    },
    async shareDocument() {
      this.$store.dispatch(SHARE_DOCUMENT, { id: this.doc.id })
    },
    async toggleMeta() {
      this.$store.dispatch(SET_RIGHT_SIDEBAR_VISIBILITY, !this.$store.state.showRightSidebar)
    },
  },
  async beforeUnmount() {
    clearInterval(this.ticker)
  },
  async mounted() {
    this.mounted = true

    this.ticker = setInterval(() => {
      this.now = moment()
    }, 5000)
  },
}
</script>