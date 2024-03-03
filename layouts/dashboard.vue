<script lang="ts">
import { ViewColumnsIcon } from '@heroicons/vue/24/outline'
import { CalendarIcon, Cog8ToothIcon, DocumentPlusIcon, HeartIcon, UserCircleIcon, XMarkIcon } from '@heroicons/vue/24/solid'
import { computed, defineComponent, onMounted, onUnmounted } from 'vue'
import DiscordIcon from '#root/assets/discord.svg?component'
import GraphIcon from '#root/assets/graph.svg?component'
import LogoIcon from '#root/assets/logo-icon.svg?component'
import CoreButton from '#root/components/CoreButton.vue'
import CoreDivider from '#root/components/CoreDivider.vue'
import CoreLink from '#root/components/CoreLink.vue'
import Key from '#root/components/Key.vue'
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
    Key,
    LogoIcon,
    TheLeftSidebar,
    TheRightSidebar,
    UserCircleIcon,
    ViewColumnsIcon,
    XMarkIcon,
  },
  setup() {
    const { isNuxt } = useIsNuxt()
    const router = useRouter()
    const { doc } = useDocs()
    const { showMenu, showMeta, toggleMenu, toggleMeta } = useLayout()
    const { pinnedDocs, unpinDoc } = usePinnedDocs()
    const { public: { discordInviteLink } } = useConfig()
    const { isDesktop, isMobile, modKey } = useDevice()
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

    onMounted(() => {
      // Todo: Migrate keybindings to composables.
      bindGlobal('mod+\\', () => {
        toggleMenu()
        toggleMeta()
      })
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

    onUnmounted(() => {
      window.removeEventListener('scroll', scrollListener)
    })

    return {
      CoreDivider,
      CoreLink,
      discordInviteLink,
      doc,
      handleLayoutChange,
      handleQuickActionClose,
      handleTabClose,
      isDesktop,
      isDoc,
      isMobile,
      isNew,
      isNuxt,
      modKey,
      pinnedDocs,
      showMenu,
      showMeta,
    }
  },
})
</script>

<template>
  <div class="dashboard flex h-screen w-screen min-h-0 min-w-0 overflow-hidden border-t-2 border-layer">
    <CoreLayer v-if="isDesktop" as="section" class="flex flex-col items-center justify-between gap-4 h-full w-14 bg-layer md:flex">
      <div class="flex flex-col">
        <div class="flex flex-col flex-shrink-0 items-center justify-center w-14 h-14">
          <CoreButton class="flex items-center justify-center p-1" @click="handleLayoutChange">
            <LogoIcon class="h-8 text-brand" />
          </CoreButton>
        </div>
        <CoreDivider />
        <div class="flex flex-col gap-1 pt-2 items-center">
          <CoreButtonLink :to="{ path: '/docs/new' }" :layer="1" :flat="true">
            <DocumentPlusIcon class="w-6" />
          </CoreButtonLink>
          <CoreButtonLink :to="{ path: '/notepad' }" :layer="1" :flat="true">
            <CalendarIcon class="w-6" />
          </CoreButtonLink>
          <CoreButtonLink :to="{ path: '/force-graph' }" :layer="1" :flat="true">
            <GraphIcon class="w-6" />
          </CoreButtonLink>
        </div>
      </div>
      <div class="flex flex-col gap-1 pb-2 items-center">
        <div class="flex flex-col gap-1 pb-2 items-center">
          <CoreButtonLink v-if="discordInviteLink" :to="discordInviteLink" :layer="1" :flat="true">
            <DiscordIcon class="w-6 h-6 opacity-25" />
          </CoreButtonLink>
          <!-- <HeartIcon class="w-6" /> -->
        </div>
        <CoreButtonLink :to="{ path: '/settings' }" :layer="1" :flat="true">
          <Cog8ToothIcon class="w-6" />
        </CoreButtonLink>
        <CoreButtonLink :to="{ path: '/account' }" :layer="1" :flat="true">
          <UserCircleIcon class="w-6" />
        </CoreButtonLink>
      </div>
    </CoreLayer>
    <CoreLayer v-if="isDesktop" :as="CoreDivider" :vertical="true" />
    <section class="flex flex-col flex-grow flex-shrink min-h-0 min-w-0">
      <CoreLayer as="nav" class="flex items-center justify-between bg-layer h-14">
        <CoreLink v-if="isMobile" :to="{ path: '/docs/new' }" class="flex items-center justify-center p-2 h-14">
          <LogoIcon class="h-8 text-brand" />
        </CoreLink>
        <div v-if="isMobile" class="flex items-center">
          <CoreButton :as="CoreLink" :to="{ path: '/menu' }" role="button" aria-haspopup="true" aria-expanded="false">
            <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span class="ml-2">Menu</span>
          </CoreButton>
          <CoreButton v-if="isNew" :as="CoreLink" :to="{ path: '/quick-action' }">
            <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </CoreButton>
          <CoreButton v-else-if="isDoc" :as="CoreLink" :to="{ path: `/docs/${doc?.id}/meta` }">
            <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </CoreButton>
          <CoreButton v-else @click="handleQuickActionClose">
            <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </CoreButton>
        </div>
        <CoreNavPanel v-if="isDesktop" class="flex-shrink-0 w-64">
          <CoreLink :to="{ path: '/docs' }" class="sidebar-link justify-between w-full">
            <div class="flex gap-3 items-center">
              <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search</span>
            </div>
            <span class="hidden md:flex text-layer-muted">
              <Key>{{ modKey }}</Key>
              <Key>⇧</Key>
              <Key>f</Key>
            </span>
          </CoreLink>
        </CoreNavPanel>
        <CoreDivider v-if="isDesktop" vertical />
        <CoreNavPanel v-if="isDesktop" class="flex flex-grow flex-shrink gap-2 min-w-0">
          <CoreButton v-for="pinnedDoc in pinnedDocs" :key="pinnedDoc.id" :as="CoreLink" :to="{ path: `/docs/${pinnedDoc.id}` }" class="allow-link-active flex flex-shrink justify-between min-w-[4rem] max-w-[20rem]">
            <span class="text-ellipsis overflow-hidden">{{ pinnedDoc.label }}</span>
            <XMarkIcon class="w-4 transition hover:scale-125" @click.prevent.stop="() => handleTabClose(pinnedDoc.id)" />
          </CoreButton>
        </CoreNavPanel>
        <CoreDivider v-if="isDesktop" :vertical="true" />
        <CoreNavPanel v-if="isDesktop" class="flex-shrink-0 w-64">
          <CoreButton class="justify-between w-full" data-test-toggle-sidebars @click="handleLayoutChange">
            <div class="flex gap-3 items-center">
              <ViewColumnsIcon class="w-5" />
              <span>Toggle Sidebars</span>
            </div>
            <span class="hidden md:flex text-layer-muted">
              <Key>{{ modKey }}</Key>
              <Key>\</Key>
            </span>
          </CoreButton>
        </CoreNavPanel>
      </CoreLayer>
      <CoreLayer :as="CoreDivider" />
      <section class="flex flex-grow flex-shrink overflow-hidden min-w-0">
        <CoreLayer v-if="(isDesktop && showMenu)" v-slot="{ layer }" template>
          <TheLeftSidebar class="hidden w-64 md:flex flex-shrink-0 bg-layer" :class="layer.class" />
        </CoreLayer>
        <CoreLayer v-if="(isDesktop && showMenu)" :as="CoreDivider" :vertical="true" />
        <slot />
        <CoreLayer v-if="isDesktop" :as="CoreDivider" :vertical="true" />
        <CoreLayer v-if="(isDesktop && showMeta && doc && isDoc)" v-slot="{ layer }" template>
          <TheRightSidebar v-if="(isDesktop && showMeta && doc && isDoc)" class="hidden w-64 bg-layer md:flex flex-shrink-0" :class="layer.class" />
        </CoreLayer>
        <CoreLayer v-else class="hidden w-2 bg-layer lg:flex flex-shrink-0" />
      </section>
    </section>
    <ToastList class="fixed bottom-8 right-8 m-auto" />
  </div>
</template>
