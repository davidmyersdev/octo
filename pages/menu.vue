<script lang="ts" setup>
import { nanoid } from 'nanoid'
import CoreLink from '#root/components/CoreLink.vue'
import ModKKey from '#root/components/ModKKey.vue'
import TagLink from '#root/components/TagLink.vue'
import { DEACTIVATE_CONTEXT, SET_CONTEXT_TAGS } from '#root/src/store/actions'
import { useFiles } from '#root/src/stores/useFiles'
import { AsyncIterable } from '#root/src/utils/iterables'

const { user } = useUser()
const { store } = useVuex()
const { public: { fathomEventCtaSaveDocs, firebaseDisabled, linkFeedback } } = useConfig()
const mq = useMq()
const { pinnedDocs, unpinDoc } = usePinnedDocs()
const { doc } = useDocs()
const router = useRouter()

const mediumPlus = computed(() => mq.value.mdPlus)
const experimentalFeaturesEnabled = computed(() => store.state.settings.experimental)
const context = computed(() => store.state.context)
const contextTags = computed(() => [...context.value.tags].sort())
const contexts = computed(() => store.getters.sortedContexts)
const tags = computed(() => store.getters.tags)

const clearContext = () => {
  store.dispatch(DEACTIVATE_CONTEXT)
}

const openFile = async () => {
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
      return router.push({ path: `/file-editor/${id}` })
    }
  } catch {}

  await handle.createWritable()

  useFiles().add({ id, handle })

  return router.push({ path: `/file-editor/${id}` })
}

const setContext = (context: unknown) => {
  store.dispatch(SET_CONTEXT_TAGS, { context })
}

const closeTab = async (id: string) => {
  if (doc.value?.id === id) {
    await router.push({ path: '/docs/new' })
  }

  unpinDoc(id)
}

const trackCta = () => {
  window.fathom?.trackGoal(fathomEventCtaSaveDocs, 0)
}
</script>

<template>
  <CoreScrollable class="p-1">
    <div class="flex flex-col gap-1">
      <div class="flex flex-col gap-1">
        <div class="flex flex-col gap-1">
          <CoreButton :as="CoreLink" :to="{ path: '/docs' }" class="sidebar-link">
            <Icon name="Search" />
            <span class="grow">Search</span>
          </CoreButton>
        </div>
        <CoreLayer class="flex flex-col gap-1">
          <FlexDivider class="-mx-1" />
          <DashPanel class="flex flex-col bg-layer" label="Recent">
            <div v-if="pinnedDocs.length > 0" class="flex flex-col gap-1">
              <CoreButton v-for="pinnedDoc in pinnedDocs" :key="pinnedDoc.id" :as="CoreLink" :to="{ path: `/docs/${pinnedDoc.id}` }" class="allow-link-active">
                <span class="flex-grow text-ellipsis overflow-hidden">{{ pinnedDoc.label }}</span>
                <CoreLayer class="flex -mr-1">
                  <CoreButton class="p-1 bg-transparent" @click.prevent.stop="() => closeTab(pinnedDoc.id)">
                    <Icon name="Dismiss" size="1rem" />
                  </CoreButton>
                </CoreLayer>
              </CoreButton>
            </div>
            <div v-else>
              <span class="text-layer-muted">Nothing to see here...</span>
            </div>
          </DashPanel>
        </CoreLayer>
        <FlexDivider class="-mx-1" />
        <div class="flex flex-col gap-1">
          <CoreLink :to="{ path: '/docs/f/untagged' }" class="sidebar-link">
            <Icon name="Inbox" />
            <span class="action flex flex-grow items-stretch justify-between ml-2">
              <span>Inbox</span>
              <ModKKey class="text-layer-muted">U</ModKKey>
            </span>
          </CoreLink>
          <CoreLink :to="{ path: '/notepad' }" class="sidebar-link">
            <div class="flex gap-2 items-center">
              <Icon name="Daily" />
              <span>Daily Notepad</span>
            </div>
          </CoreLink>
          <CoreLink :to="{ path: '/workspaces' }" class="sidebar-link">
            <Icon name="Workspaces" />
            <span class="action flex flex-grow items-stretch justify-between ml-2">
              <span class="action">Workspaces</span>
              <ModKKey class="text-layer-muted">C</ModKKey>
            </span>
          </CoreLink>
        </div>
        <div v-if="experimentalFeaturesEnabled" class="flex flex-col gap-1">
          <FlexDivider class="-mx-1" />
          <button class="sidebar-link w-full" @click="openFile">
            <Icon name="OpenFile" />
            <span class="action flex flex-grow items-center justify-between ml-2">
              <span>Open File</span>
              <Icon name="Experimental" class="text-layer-muted" title="Experimental" />
            </span>
          </button>
          <CoreLink :to="{ path: '/assistant' }" class="sidebar-link allow-link-active">
            <Icon name="Logo" />
            <span class="action flex flex-grow items-center justify-between ml-2">
              <span>Assistant</span>
              <Icon name="Experimental" class="text-layer-muted" title="Experimental" />
            </span>
          </CoreLink>
        </div>
        <FlexDivider class="-mx-1" />
        <div class="flex flex-col gap-1">
          <CoreLink :to="linkFeedback" class="sidebar-link">
            <div class="flex gap-2 items-center">
              <Icon name="Feedback" />
              <span>Feedback</span>
            </div>
          </CoreLink>
          <CoreLink v-if="!firebaseDisabled && !user.id" :to="{ path: '/account' }" class="sidebar-link text-brand" @click="trackCta">
            <Icon name="Save" />
            <span class="action flex flex-grow items-stretch justify-between ml-2">
              <span>Save Docs</span>
            </span>
          </CoreLink>
          <CoreLink :to="{ path: '/settings' }" class="sidebar-link">
            <div class="flex gap-2 items-center">
              <Icon name="Settings" />
              <span>Settings</span>
            </div>
          </CoreLink>
          <CoreLink :to="{ path: '/account' }" class="sidebar-link">
            <div class="flex gap-2 items-center">
              <Icon name="Account" />
              <span>Account</span>
            </div>
          </CoreLink>
        </div>
      </div>
      <FlexDivider class="-mx-1" />
      <CoreLayer class="flex flex-col gap-1">
        <DashPanel class="flex flex-col bg-layer" collapsed label="Filters">
          <CoreLink :to="{ path: '/docs/f/tasks' }" class="sidebar-link">
            <Icon name="Check" />
            <span class="action flex flex-grow items-stretch justify-between ml-2">
              <span>Tasks</span>
              <ModKKey class="text-layer-muted">T</ModKKey>
            </span>
          </CoreLink>
          <CoreLink :to="{ path: '/docs/f/discarded' }" class="sidebar-link">
            <Icon name="Trash" />
            <span class="action flex flex-grow items-stretch justify-between ml-2">
              <span>Discarded</span>
              <ModKKey class="text-layer-muted">D</ModKKey>
            </span>
          </CoreLink>
        </DashPanel>
        <DashPanel v-if="context.active || contextTags.length" class="bg-layer" closeable label="Workspace" @close="clearContext">
          <div class="flex flex-col gap-2 md:gap-1">
            <TagLink v-for="tag in contextTags" :key="tag" :tag="tag" class="sidebar-link" />
          </div>
        </DashPanel>
        <DashPanel v-if="contexts.length" class="flex flex-col bg-layer" collapsed label="Workspaces">
          <button v-for="workspace in contexts" :key="workspace.id" class="sidebar-link w-full" @click="setContext(workspace)">
            <Icon name="Workspace" />
            <span class="action flex flex-grow items-stretch justify-between ml-2">
              <span>{{ workspace.name }}</span>
            </span>
          </button>
        </DashPanel>
        <DashPanel v-if="tags.length" class="flex flex-col bg-layer" collapsed label="Tags">
          <CoreLink class="sidebar-link md:hidden" :to="{ path: '/tags' }">
            <Icon name="Tag" />
            <span class="ml-3 flex-grow">Tags</span>
          </CoreLink>
          <div v-if="mediumPlus" class="flex flex-col gap-1">
            <TagLink v-for="tag in tags" :key="tag" :tag="tag" class="sidebar-link" />
          </div>
        </DashPanel>
        <DashPanel class="flex flex-col bg-layer" collapsed label="Policies">
          <CoreLink :to="{ path: '/privacy-policy' }" class="sidebar-link">
            <Icon name="DocWithText" />
            <span class="action flex flex-grow items-stretch justify-between ml-2">
              <span>Privacy Policy</span>
            </span>
          </CoreLink>
          <CoreLink :to="{ path: '/terms-and-conditions' }" class="sidebar-link">
            <Icon name="DocWithText" />
            <span class="action flex flex-grow items-stretch justify-between ml-2">
              <span>Terms &amp; Conditions</span>
            </span>
          </CoreLink>
        </DashPanel>
      </CoreLayer>
    </div>
  </CoreScrollable>
</template>
