<script lang="ts">
import {
  UserCircleIcon as AccountIcon,
  BeakerIcon,
  CheckIcon,
  DocumentIcon,
  DocumentTextIcon,
  InboxIcon,
  CloudArrowUpIcon as SaveIcon,
  MagnifyingGlassIcon as SearchIcon,
  Cog8ToothIcon as SettingsIcon,
  HashtagIcon as TagIcon,
  TrashIcon,
  Square2StackIcon as WorkspaceIcon,
  Squares2X2Icon as WorkspacesIcon,
} from '@heroicons/vue/24/outline'
import { nanoid } from 'nanoid'
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
    const { user } = useUser()
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
      return [...this.context.tags].sort()
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
  <CoreScrollable>
    <CoreNavPanel class="flex flex-col gap-1">
      <CoreLink v-if="!mediumPlus" :to="{ path: '/docs/new' }" class="sidebar-link">
        <div class="flex gap-3 items-center">
          <CoreAsset type="DocumentPlus" class="w-5" />
          <span>New Doc</span>
        </div>
      </CoreLink>
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
          <ModKKey class="text-layer-muted">U</ModKKey>
        </span>
      </CoreLink>
      <CoreLink v-if="!mediumPlus" :to="{ path: '/notepad' }" class="sidebar-link">
        <div class="flex gap-3 items-center">
          <CoreAsset type="Daily" class="w-5" />
          <span>Daily Notepad</span>
        </div>
      </CoreLink>
      <CoreLink :to="{ path: '/workspaces' }" class="sidebar-link">
        <WorkspacesIcon class="w-5" />
        <span class="action flex flex-grow items-stretch justify-between ml-3">
          <span class="action">Workspaces</span>
          <ModKKey class="text-layer-muted">C</ModKKey>
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
          <CoreAsset type="Feedback" class="sq-5" />
          <span>Feedback</span>
        </div>
      </CoreLink>
      <div v-if="experimentalFeaturesEnabled">
        <button class="sidebar-link w-full" title="Experimental" @click="openFile">
          <DocumentIcon class="w-5" />
          <span class="action flex flex-grow items-center justify-between ml-3">
            <span>Open File</span>
            <BeakerIcon class="text-layer-muted w-5" />
          </span>
        </button>
      </div>
      <CoreLink v-if="experimentalFeaturesEnabled" :to="{ path: '/assistant' }" class="sidebar-link allow-link-active">
        <CoreAsset type="Logo" class="w-5" />
        <span class="action flex flex-grow items-center justify-between ml-3">
          <span>Assistant</span>
          <BeakerIcon class="text-layer-muted w-5" />
        </span>
      </CoreLink>
      <CoreLink v-if="!firebaseDisabled && !user.id" :to="{ path: '/account' }" class="sidebar-link text-brand" @click="trackCta">
        <SaveIcon class="w-5" />
        <span class="action flex flex-grow items-stretch justify-between ml-3">
          <span>Save Docs</span>
        </span>
      </CoreLink>
    </CoreNavPanel>
    <CoreDivider />
    <CoreNavPanel class="flex flex-col gap-1" label="Filters">
      <CoreLink :to="{ path: '/docs/f/tasks' }" class="sidebar-link">
        <CheckIcon class="w-5" />
        <span class="action flex flex-grow items-stretch justify-between ml-3">
          <span>Tasks</span>
          <ModKKey class="text-layer-muted">T</ModKKey>
        </span>
      </CoreLink>
      <CoreLink :to="{ path: '/docs/f/discarded' }" class="sidebar-link">
        <TrashIcon class="w-5" />
        <span class="action flex flex-grow items-stretch justify-between ml-3">
          <span>Discarded</span>
          <ModKKey class="text-layer-muted">D</ModKKey>
        </span>
      </CoreLink>
    </CoreNavPanel>
    <CoreDivider v-if="context.active || contextTags.length" />
    <CoreNavPanel v-if="context.active || contextTags.length" label="Workspace">
      <template #label-alt-action>
        <CoreButton class="p-0.5" @click.stop="clearContext">
          <svg class="sq-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </CoreButton>
      </template>
      <div class="flex flex-col gap-2 md:gap-1">
        <TagLink v-for="tag in contextTags" :key="tag" :tag="tag" class="sidebar-link" />
      </div>
    </CoreNavPanel>
    <CoreDivider v-if="contexts.length" />
    <CoreNavPanel v-if="contexts.length" class="flex flex-col gap-1" label="Workspaces">
      <button v-for="workspace in contexts" :key="workspace.id" class="sidebar-link w-full" @click="setContext(workspace)">
        <WorkspaceIcon class="w-5" />
        <span class="action flex flex-grow items-stretch justify-between ml-3">
          <span>{{ workspace.name }}</span>
        </span>
      </button>
    </CoreNavPanel>
    <CoreDivider v-if="tags.length" />
    <CoreNavPanel v-if="tags.length" class="flex flex-col gap-1" label="Tags">
      <CoreLink class="sidebar-link md:hidden" :to="{ path: '/tags' }">
        <TagIcon class="w-5" />
        <span class="ml-3 flex-grow">Tags</span>
      </CoreLink>
      <div v-if="mediumPlus" class="flex flex-col gap-1">
        <TagLink v-for="tag in tags" :key="tag" :tag="tag" class="sidebar-link" />
      </div>
    </CoreNavPanel>
    <CoreDivider />
    <CoreNavPanel class="flex flex-col gap-1" label="Policies">
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
    </CoreNavPanel>
  </CoreScrollable>
</template>
