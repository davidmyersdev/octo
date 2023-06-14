<script lang="ts">
import { ViewColumnsIcon } from '@heroicons/vue/24/outline'
import { CalendarIcon, Cog8ToothIcon, DocumentPlusIcon, HeartIcon, InboxIcon, UserCircleIcon, XMarkIcon } from '@heroicons/vue/24/solid'
import { computed, defineComponent, onBeforeUnmount, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useMq } from 'vue3-mq'
import DiscordIcon from '#root/assets/discord.svg?component'
import GraphIcon from '#root/assets/graph.svg?component'
import LogoIcon from '#root/assets/logo-icon.svg?component'
import CoreButton from '#root/components/CoreButton.vue'
import CoreDivider from '#root/components/CoreDivider.vue'
import CoreLink from '#root/components/CoreLink.vue'
import Key from '#root/components/Key.vue'
import LayoutNavbar from '#root/components/LayoutNavbar.vue'
import { useLayout, usePinnedDocs } from '#root/composables'
import TheLeftSidebar from '#root/pages/menu.vue'
import TheRightSidebar from '#root/pages/docs/[docId]/meta.vue'
import { bindGlobal } from '#root/src/common/keybindings'

export default defineComponent({
  components: {
    CalendarIcon,
    Cog8ToothIcon,
    CoreButton,
    CoreDivider,
    CoreLink,
    DiscordIcon,
    DocumentPlusIcon,
    GraphIcon,
    HeartIcon,
    InboxIcon,
    Key,
    LayoutNavbar,
    LogoIcon,
    TheLeftSidebar,
    TheRightSidebar,
    UserCircleIcon,
    ViewColumnsIcon,
    XMarkIcon,
  },
  inject: ['mq'],
  setup() {
    const { isNuxt } = useIsNuxt()
    const mq = useMq()
    const store = useStore()
    const router = useRouter()
    const { doc } = useDocs()
    const { showMenu, showMeta, toggleMenu, toggleMeta } = useLayout()
    const { pinnedDocs, unpinDoc } = usePinnedDocs()
    const { public: { discordInviteLink } } = useConfig()
    const modKey = computed(() => store.state.modKey)
    const mobile = computed(() => ['xs', 'sm'].includes(mq.current))
    const isDoc = computed(() => router.currentRoute.value.name === 'docs-docId')
    const isNew = computed(() => router.currentRoute.value.path === '/docs/new')

    const handleQuickActionClose = () => {
      if (doc.value) {
        return router.push({ path: `/docs/${doc.value.id}` })
      }

      router.push({ path: '/docs/new' })
    }

    const handleLayoutChange = () => {
      toggleMenu()
      toggleMeta()
    }

    // Todo: Migrate keybindings to composables.
    bindGlobal('mod+\\', () => {
      toggleMenu()
      toggleMeta()
    })

    const handleTabClose = async (id: string) => {
      if (doc.value?.id === id) {
        await router.push({ path: '/docs/new' })
      }

      unpinDoc(id)
    }

    const scrollListener = (event: Event) => {
      event.preventDefault()
      event.stopImmediatePropagation()
      event.stopPropagation()

      window.scrollTo(0, 0)
    }

    onMounted(() => {
      window.addEventListener('scroll', scrollListener)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', scrollListener)
    })

    return {
      discordInviteLink,
      doc,
      handleLayoutChange,
      handleQuickActionClose,
      handleTabClose,
      isDoc,
      isNew,
      isNuxt,
      mobile,
      modKey,
      pinnedDocs,
      showMenu,
      showMeta,
    }
  },
})
</script>

<template>
  <div class="dashboard flex h-screen w-screen min-h-0 min-w-0 overflow-hidden border-t-2 border-white dark:border-gray-900">
    <section v-if="!mobile" class="flex flex-col items-center justify-between gap-4 h-full w-14 bg-layer-1 md:flex">
      <div class="flex flex-col">
        <div class="flex flex-col flex-shrink-0 items-center justify-center w-14">
          <button @click="handleLayoutChange" class="flex items-center justify-center p-2 h-14">
            <LogoIcon class="h-8 text-theme" />
          </button>
        </div>
        <CoreDivider class="mx-2" />
        <div class="flex flex-col gap-4 pt-4 items-center">
          <CoreLink :to="{ path: '/docs/new' }">
            <DocumentPlusIcon class="w-6" />
          </CoreLink>
          <CoreLink :to="{ path: '/notepad' }">
            <CalendarIcon class="w-6" />
          </CoreLink>
          <CoreLink :to="{ path: '/force-graph' }">
            <GraphIcon class="w-6" />
          </CoreLink>
        </div>
      </div>
      <div class="flex flex-col gap-4 pb-4 items-center">
        <div class="flex flex-col gap-4 pb-4 items-center opacity-25">
          <CoreLink v-if="discordInviteLink" :to="discordInviteLink">
            <DiscordIcon class="w-6 px-px" />
          </CoreLink>
          <HeartIcon v-if="false" class="w-6" />
        </div>
        <CoreLink :to="{ path: '/settings' }">
          <Cog8ToothIcon class="w-6" />
        </CoreLink>
        <CoreLink :to="{ path: '/account' }">
          <UserCircleIcon class="w-6" />
        </CoreLink>
      </div>
    </section>
    <CoreDivider v-if="!mobile" :vertical="true" />
    <section class="flex flex-col flex-grow flex-shrink min-h-0 min-w-0">
      <nav class="flex items-center justify-between py-2 bg-layer-1 h-14">
        <CoreLink v-if="mobile" :to="{ path: '/docs/new' }" class="flex items-center justify-center p-2 h-14">
          <LogoIcon class="h-8 text-theme" />
        </CoreLink>
        <div v-if="mobile" class="flex items-center">
          <CoreLink class="button-flat button-size-medium" :to="{ path: '/menu' }" role="button" aria-haspopup="true" aria-expanded="false">
            <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span class="ml-2">Menu</span>
          </CoreLink>
          <CoreLink v-if="isNew" :to="{ path: '/quick-action' }" class="button-flat button-size-medium">
            <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </CoreLink>
          <CoreLink v-else-if="isDoc" :to="{ path: `/docs/${doc?.id}/meta` }" class="button-flat button-size-medium">
            <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </CoreLink>
          <button v-else @click="handleQuickActionClose" class="button-flat button-size-medium">
            <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <section v-if="!mobile" class="flex-shrink-0 px-2 w-64">
          <CoreLink :to="{ path: '/docs' }" class="core-button core-button-layer-1 border border-white dark:border-gray-900 justify-between w-full">
            <div class="flex gap-3 items-center">
              <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search</span>
            </div>
            <span class="hidden md:flex text-gray-500">
              <Key>{{ modKey }}</Key>
              <Key>⇧</Key>
              <Key>f</Key>
            </span>
          </CoreLink>
        </section>
        <CoreDivider v-if="!mobile" :vertical="true" />
        <section v-if="!mobile" class="flex flex-grow flex-shrink gap-2 bg-layer-1 px-2 min-w-0">
          <CoreLink v-for="pinnedDoc in pinnedDocs" :key="pinnedDoc.id" :to="{ path: `/docs/${pinnedDoc.id}` }" class="core-button core-button-layer-1 flex flex-shrink justify-between min-w-[4rem] max-w-[20rem]" :class="{ 'bg-layer-2': isDoc && pinnedDoc.id === doc?.id }">
            <span class="text-ellipsis overflow-hidden">{{ pinnedDoc.headers[0] || pinnedDoc.text.substring(0, 25) }}</span>
            <XMarkIcon @click.prevent.stop="() => handleTabClose(pinnedDoc.id)" class="w-4 transition hover:scale-125" />
          </CoreLink>
        </section>
        <CoreDivider v-if="!mobile" :vertical="true" />
        <section v-if="!mobile" class="flex-shrink-0 px-2 w-64">
          <CoreButton :flat="true" :layer="1" @click="handleLayoutChange" class="border border-white dark:border-gray-900 justify-between w-full">
            <div class="flex gap-3 items-center">
              <ViewColumnsIcon class="w-5" />
              <span>Toggle Sidebars</span>
            </div>
            <span class="hidden md:flex text-gray-500">
              <Key>{{ modKey }}</Key>
              <Key>\</Key>
            </span>
          </CoreButton>
        </section>
      </nav>
      <CoreDivider />
      <section class="flex flex-grow flex-shrink overflow-hidden min-w-0">
        <TheLeftSidebar v-if="(!mobile && showMenu)" class="hidden w-64 bg-layer-1 md:flex flex-shrink-0" />
        <CoreDivider v-if="(!mobile && showMenu)" :vertical="true" />
        <slot />
        <CoreDivider v-if="!mobile" :vertical="true" />
        <TheRightSidebar v-if="(!mobile && showMeta && doc && isDoc)" class="hidden w-64 bg-layer-1 md:flex flex-shrink-0" />
        <div v-else class="hidden w-2 bg-layer-1 md:flex flex-shrink-0"></div>
      </section>
    </section>
  </div>
</template>
