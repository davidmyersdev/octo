<script>
import moment from 'moment'

import DiscardableAction from '#root/components/DiscardableAction.vue'
import DocLink from '#root/components/DocLink.vue'
import TagLink from '#root/components/TagLink.vue'

import CodeSandbox from '#root/src/common/code_sandbox.js'
import { parseCodeblocks } from '#root/src/common/parsers'

import {
  DISCARD_DOCUMENT,
  DUPLICATE_DOCUMENT,
  RESTORE_DOCUMENT,
  RESTRICT_DOCUMENT,
  SET_RIGHT_SIDEBAR_VISIBILITY,
  SHARE_DOCUMENT,
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
    backlinks() {
      return this.$store.getters.sorted.filter((doc) => {
        return doc.references.includes(this.doc.id)
      })
    },
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
      return this.$store.getters.decrypted.find((doc) => doc.id === this.$route.params.docId)
    },
    hasCodeblocks() {
      return this.codeblocks.length > 0
    },
    publicUrl() {
      const path = this.$router.resolve({ path: `/public/${this.doc.id}` }).href

      return `${location.protocol}//${location.host}${path}`
    },
    references() {
      return this.$store.getters.sorted.filter((doc) => {
        return this.doc.references.includes(doc.id)
      })
    },
    savedAt() {
      if (this.$route.params.docId) {
        if (this.now.diff(this.doc.updatedAt, 'seconds') < 5) {
          return 'just now'
        } else {
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
  mounted() {
    this.mounted = true

    this.ticker = setInterval(() => {
      this.now = moment()
    }, 5000)
  },
  unmounted() {
    clearInterval(this.ticker)
  },
  methods: {
    async copyPublicUrl() {
      // copy link to clipboard
      this.$refs.link.select()
      document.execCommand('copy')
    },
    async discardDocument() {
      this.$store.dispatch(DISCARD_DOCUMENT, { id: this.doc.id })

      this.$router.push({ path: '/docs/new' })
    },
    async duplicateDocument() {
      const newDocId = await this.$store.dispatch(DUPLICATE_DOCUMENT, { id: this.doc.id })

      this.$router.push({ path: `/docs/${newDocId}` })
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
}
</script>

<template>
  <CoreScrollable v-if="doc" v-slot="{ element }">
    <div :ref="element" class="flex flex-col flex-grow">
      <div class="flex flex-col gap-1 p-1">
        <button class="sidebar-link w-full" @click.stop="duplicateDocument">
          <Icon name="DocDuplicate" />
          <span class="ml-2 flex-grow text-left">Duplicate</span>
        </button>
        <DiscardableAction v-if="doc.id" :discarded-at="doc.discardedAt" :on-discard="discardDocument" :on-restore="restoreDocument" class="sidebar-link w-full" />
        <button v-if="hasCodeblocks" class="sidebar-link w-full" @click="openSandbox">
          <Icon name="BrandCodeSandbox" />
          <span class="ml-2 flex-grow text-left">Create Sandbox</span>
        </button>
        <template v-if="doc.public">
          <button class="sidebar-link w-full" @click="restrictDocument">
            <Icon name="LockClosed" />
            <span class="ml-2 flex-grow text-left">Make Private</span>
          </button>
          <button class="sidebar-link w-full" @click="copyPublicUrl">
            <Icon name="Clipboard" />
            <span class="ml-2 flex-grow text-left">Copy Link</span>
          </button>
          <CoreLayer>
            <input ref="link" :value="publicUrl" type="text" class="bg-layer rounded p-2 w-full" readonly data-test-public-url>
          </CoreLayer>
        </template>
        <template v-else>
          <button class="sidebar-link w-full" data-test-share-doc @click="shareDocument">
            <Icon name="LockOpen" />
            <span class="ml-2 flex-grow text-left">Make Public</span>
          </button>
        </template>
      </div>
      <template v-if="references.length || backlinks.length || doc.tags.length || doc.tasks.length">
        <FlexDivider />
        <CoreLayer class="flex flex-col gap-1 p-1">
          <DashPanel
            v-if="references.length"
            class="bg-layer"
            data-test-id="doc-references"
            label="References"
          >
            <DocLink v-for="reference in references" :key="reference.id" :doc="reference" class="sidebar-link" />
          </DashPanel>
          <DashPanel
            v-if="backlinks.length"
            class="bg-layer"
            data-test-id="doc-backlinks"
            label="Backlinks"
          >
            <DocLink v-for="reference in backlinks" :key="reference.id" :doc="reference" class="sidebar-link" />
          </DashPanel>
          <DashPanel
            v-if="doc.tags.length"
            class="bg-layer"
            collapsed
            label="Tags"
          >
            <TagLink v-for="tag in doc.tags" :key="tag" :tag="tag" class="sidebar-link" />
          </DashPanel>
          <DashPanel
            v-if="doc.tasks.length"
            class="bg-layer"
            collapsed
            label="Tasks"
          >
            <div v-for="task in doc.tasks" :key="task" class="flex items-center px-3 py-2 my-1 md:px-2 md:py-1">
              <Icon name="Check" />
              <span class="flex-grow overflow-hidden truncate ml-2">{{ task }}</span>
            </div>
          </DashPanel>
        </CoreLayer>
      </template>
      <FlexDivider />
      <CoreLayer class="flex flex-col gap-1 p-1">
        <DashPanel class="bg-layer" label="Timestamps">
          <div v-if="doc.updatedAt">
            <small class="text-layer-muted">Last Saved</small>
            <div class="capitalize pt-2 md:pt-1">
              {{ savedAt }}
            </div>
          </div>
          <div v-if="doc.createdAt" class="mt-3 md:mt-2">
            <small class="text-layer-muted">Created</small>
            <div class="pt-2 md:pt-1">
              {{ createdAt }}
            </div>
          </div>
          <div v-if="doc.updatedAt" class="mt-3 md:mt-2">
            <small class="text-layer-muted">Updated</small>
            <div class="pt-2 md:pt-1">
              {{ updatedAt }}
            </div>
          </div>
          <div v-if="doc.discardedAt" class="mt-3 md:mt-2">
            <small class="text-layer-muted">Discarded</small>
            <div class="pt-2 md:pt-1">
              {{ discardedAt }}
            </div>
          </div>
        </DashPanel>
      </CoreLayer>
    </div>
  </CoreScrollable>
</template>
