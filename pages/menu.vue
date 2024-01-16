<script lang="ts">
import { UserCircleIcon as AccountIcon, BeakerIcon, CheckIcon, ChevronUpDownIcon, DocumentIcon, DocumentTextIcon, InboxIcon, CloudArrowUpIcon as SaveIcon, MagnifyingGlassIcon as SearchIcon, Cog8ToothIcon as SettingsIcon, HashtagIcon as TagIcon, TrashIcon, Square2StackIcon as WorkspaceIcon, Squares2X2Icon as WorkspacesIcon } from '@heroicons/vue/24/outline'
import { nanoid } from 'nanoid'
import { inject } from 'vue'
import CoreDivider from '#root/components/CoreDivider.vue'
import CoreLink from '#root/components/CoreLink.vue'
import ModKKey from '#root/components/ModKKey.vue'
import TagLink from '#root/components/TagLink.vue'
import { DEACTIVATE_CONTEXT, SET_CONTEXT_TAGS } from '#root/src/store/actions'
import { useFiles } from '#root/src/stores/useFiles'
import { AsyncIterable } from '#root/src/utils/iterables'

export default {
  components: {
    AccountIcon,
    BeakerIcon,
    CheckIcon,
    ChevronUpDownIcon,
    CoreDivider,
    CoreLink,
    DocumentIcon,
    DocumentTextIcon,
    TagIcon,
    InboxIcon,
    ModKKey,
    SaveIcon,
    SearchIcon,
    SettingsIcon,
    TagLink,
    TrashIcon,
    WorkspaceIcon,
    WorkspacesIcon,
  },
  setup() {
    const user = inject('user')
    const { public: { fathomEventCtaSaveDocs, firebaseDisabled, linkFeedback } } = useConfig()
    const mq = useMq()
    const mediumPlus = computed(() => mq.value.mdPlus)

    const trackCta = () => {
      window.fathom?.trackGoal(fathomEventCtaSaveDocs, 0)
    }

    return {
      firebaseDisabled,
      linkFeedback,
      mediumPlus,
      trackCta,
      user,
    }
  },
  computed: {
    authIsEvaluated() {
      return this.$store.state.auth.isEvaluated
    },
    context() {
      return this.$store.state.context
    },
    contextTags() {
      return this.context.tags.sort()
    },
    contexts() {
      return this.$store.getters.sortedContexts
    },
    experimentalFeaturesEnabled() {
      return this.$store.state.settings.experimental
    },
    tags() {
      return this.$store.getters.tags
    },
  },
  methods: {
    clearContext() {
      this.$store.dispatch(DEACTIVATE_CONTEXT)
    },
    async openFile() {
      const id = nanoid()
      // @ts-expect-error This API is valid but is not recognized by TypeScript.
      const [handle] = await window.showOpenFilePicker({
        types: [
          {
            description: 'Markdown Files',
            accept: {
              'text/markdown': ['.markdown', '.md'],
            },
          },
        ],
      })

      try {
        const { id } = await AsyncIterable(useFiles().files).any((file) => {
          return file.handle.isSameEntry(handle)
        })

        if (id) {
          return this.$router.push({ path: `/file-editor/${id}` })
        }
      } catch {}

      await handle.createWritable()

      useFiles().add({ id, handle })
      return this.$router.push({ path: `/file-editor/${id}` })
    },
    setContext(context: unknown) {
      this.$store.dispatch(SET_CONTEXT_TAGS, { context })
    },
  },
}
</script>

<template>
  <CoreScrollable class="p-4 md:p-2">
    <div class="flex flex-col flex-grow pb-3">
      <div>
        <CoreLink v-if="!mediumPlus" :to="{ path: '/docs' }" class="sidebar-link">
          <div class="flex gap-3 items-center">
            <SearchIcon class="w-5" />
            <span>Search</span>
          </div>
        </CoreLink>
        <CoreLink :to="{ path: '/docs/f/untagged' }" class="sidebar-link">
          <InboxIcon class="w-5" />
          <span class="action flex flex-grow items-stretch justify-between ml-3">
            <span>Inbox</span>
            <ModKKey class="text-gray-500">U</ModKKey>
          </span>
        </CoreLink>
        <CoreLink :to="{ path: '/workspaces' }" class="sidebar-link">
          <WorkspacesIcon class="w-5" />
          <span class="action flex flex-grow items-stretch justify-between ml-3">
            <span class="action">Workspaces</span>
            <ModKKey class="text-gray-500">C</ModKKey>
          </span>
        </CoreLink>
        <CoreLink v-if="!mediumPlus" :to="{ path: '/account' }" class="sidebar-link">
          <div class="flex gap-3 items-center">
            <AccountIcon class="w-5" />
            <span>Account</span>
          </div>
        </CoreLink>
        <CoreLink v-if="!mediumPlus" :to="{ path: '/settings' }" class="sidebar-link">
          <div class="flex gap-3 items-center">
            <SettingsIcon class="w-5" />
            <span>Settings</span>
          </div>
        </CoreLink>
        <CoreLink :to="linkFeedback" class="sidebar-link">
          <div class="flex gap-3 items-center">
            <CoreAssetFeedback class="sq-5" />
            <span>Feedback</span>
          </div>
        </CoreLink>
        <div v-if="experimentalFeaturesEnabled">
          <button class="sidebar-link w-full" title="Experimental" @click="openFile">
            <DocumentIcon class="w-5" />
            <span class="action flex flex-grow items-center justify-between ml-3">
              <span>Open File</span>
              <BeakerIcon class="text-gray-300 dark:text-gray-700 w-5" />
            </span>
          </button>
        </div>
        <CoreLink v-if="experimentalFeaturesEnabled" :to="{ path: '/assistant' }" class="sidebar-link allow-link-active">
          <CoreAssetLogo class="w-5" />
          <span class="action flex flex-grow items-center justify-between ml-3">
            <span>Assistant</span>
            <BeakerIcon class="text-gray-300 dark:text-gray-700 w-5" />
          </span>
        </CoreLink>
        <CoreLink v-if="!firebaseDisabled && !user.id" :to="{ path: '/account' }" class="sidebar-link text-theme" @click="trackCta">
          <SaveIcon class="w-5" />
          <span class="action flex flex-grow items-stretch justify-between ml-3">
            <span>Save Docs</span>
          </span>
        </CoreLink>
        <CoreDivider />
        <h6 class="px-1 pt-2 sidebar-label cursor-pointer">
          <span class="flex items-center gap-2"><ChevronUpDownIcon class="h-4" /> Filters</span>
        </h6>
        <CoreLink :to="{ path: '/docs/f/tasks' }" class="sidebar-link">
          <CheckIcon class="w-5" />
          <span class="action flex flex-grow items-stretch justify-between ml-3">
            <span>Tasks</span>
            <ModKKey class="text-gray-500">T</ModKKey>
          </span>
        </CoreLink>
        <CoreLink :to="{ path: '/docs/f/discarded' }" class="sidebar-link">
          <TrashIcon class="w-5" />
          <span class="action flex flex-grow items-stretch justify-between ml-3">
            <span>Discarded</span>
            <ModKKey class="text-gray-500">D</ModKKey>
          </span>
        </CoreLink>
        <div v-if="context.active || context.editing">
          <CoreDivider />
          <h6 class="px-1 pt-2 sidebar-label cursor-pointer">
            <span class="flex items-center gap-2"><ChevronUpDownIcon class="h-4" /> Workspace</span>
            <button class="button button-color-surface" @click="clearContext">
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </h6>
          <div v-if="contextTags.length" class="flex flex-col gap-2 md:gap-1">
            <TagLink v-for="tag in contextTags" :key="tag" :tag="tag" class="context-tag" />
          </div>
          <div v-else class="p-6 md:p-2">
            No Tags Selected
          </div>
        </div>
        <CoreDivider v-if="contexts.length" />
        <h6 v-if="contexts.length" class="px-1 pt-2 sidebar-label cursor-pointer">
          <span class="flex items-center gap-2"><ChevronUpDownIcon class="h-4" /> Workspaces</span>
        </h6>
        <button v-for="context in contexts" :key="context.id" class="sidebar-link w-full" @click="setContext(context)">
          <WorkspaceIcon class="w-5" />
          <span class="action flex flex-grow items-stretch justify-between ml-3">
            <span>{{ context.name }}</span>
          </span>
        </button>
        <CoreDivider />
        <h6 class="px-1 pt-2 sidebar-label cursor-pointer">
          <span class="flex items-center gap-2"><ChevronUpDownIcon class="h-4" /> Tags</span>
        </h6>
        <CoreLink class="sidebar-link md:hidden" :to="{ path: '/tags' }">
          <TagIcon class="w-5" />
          <span class="ml-3 flex-grow">Tags</span>
        </CoreLink>
        <div v-if="mediumPlus">
          <TagLink v-for="tag in tags" :key="tag" :tag="tag" class="sidebar-link" />
        </div>
        <CoreDivider />
        <h6 class="px-1 pt-2 sidebar-label cursor-pointer">
          <span class="flex items-center gap-2"><ChevronUpDownIcon class="h-4" /> Policies</span>
        </h6>
        <CoreLink :to="{ path: '/privacy-policy' }" class="sidebar-link">
          <DocumentTextIcon class="w-5" />
          <span class="action flex flex-grow items-stretch justify-between ml-3">
            <span>Privacy Policy</span>
          </span>
        </CoreLink>
        <CoreLink :to="{ path: '/terms-and-conditions' }" class="sidebar-link">
          <DocumentTextIcon class="w-5" />
          <span class="action flex flex-grow items-stretch justify-between ml-3">
            <span>Terms &amp; Conditions</span>
          </span>
        </CoreLink>
      </div>
    </div>
  </CoreScrollable>
</template>
