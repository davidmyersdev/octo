<script lang="ts">
import { ViewColumnsIcon } from '@heroicons/vue/24/outline'
import { CalendarIcon, Cog8ToothIcon, DocumentPlusIcon, HeartIcon, InboxIcon, UserCircleIcon, XMarkIcon } from '@heroicons/vue/24/solid'
import { computed, defineComponent, onBeforeUnmount, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useMq } from 'vue3-mq'
import DiscordIcon from '/assets/discord.svg?component'
import GraphIcon from '/assets/graph.svg?component'
import CoreButton from '/components/CoreButton.vue'
import CoreDivider from '/components/CoreDivider.vue'
import CoreLink from '/components/CoreLink.vue'
import Key from '/components/Key.vue'
import LayoutNavbar from '/components/LayoutNavbar.vue'
import TheLogo from '/components/TheLogo.vue'
import { useLayout, usePinnedDocs } from '/composables'
import TheLeftSidebar from '/pages/menu.vue'
import TheRightSidebar from '/pages/docs/[docId]/meta.vue'
import { bindGlobal } from '/src/common/keybindings'

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
    TheLeftSidebar,
    TheLogo,
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

    const handleTabClose = (id: string) => {
      if (doc.value?.id === id) {
        router.push({ path: '/docs/new' })
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
  <div class="flex h-full w-screen min-h-0 min-w-0 overflow-hidden border-t-2 border-white dark:border-gray-900">
    <section v-if="!mobile" class="flex flex-col items-center justify-between gap-4 h-full w-14 bg-gray-100 dark:bg-darkest md:flex">
      <div class="flex flex-col">
        <div class="flex flex-col flex-shrink-0 items-center justify-center w-14">
          <button @click="handleLayoutChange" class="flex items-center justify-center p-2 h-14">
            <TheLogo class="h-8 text-theme" />
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
    <CoreDivider :vertical="true" />
    <section class="flex flex-col flex-grow flex-shrink min-h-0 min-w-0">
      <nav class="flex items-center justify-between py-2 bg-gray-100 dark:bg-darkest h-14">
        <CoreLink v-if="mobile" :to="{ path: '/docs/new' }" class="flex items-center justify-center p-2 h-14">
          <TheLogo class="h-8 text-theme" />
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
        <section v-if="!mobile" class="flex flex-grow flex-shrink gap-2 bg-gray-100 dark:bg-darkest px-2 min-w-0">
          <CoreLink v-for="pinnedDoc in pinnedDocs" :key="pinnedDoc.id" :to="{ path: `/docs/${pinnedDoc.id}` }" class="core-button core-button-layer-1 flex flex-shrink justify-between min-w-[4rem] max-w-[20rem]" :class="{ 'bg-layer-2': isDoc && pinnedDoc.id === doc?.id }">
            <span class="text-ellipsis overflow-hidden">{{ pinnedDoc.headers[0] || pinnedDoc.text.substring(0, 25) }}</span>
            <XMarkIcon @click.prevent.stop="() => handleTabClose(pinnedDoc.id)" class="w-4 transition hover:scale-125" />
          </CoreLink>
        </section>
        <CoreDivider v-if="!mobile" :vertical="true" />
        <section v-if="!mobile" class="flex-shrink-0 px-2 w-64">
          <CoreButton :layer="1" @click="handleLayoutChange" class="border border-white dark:border-gray-900 justify-between w-full">
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
        <TheLeftSidebar v-if="(!mobile && showMenu)" class="hidden w-64 bg-gray-100 dark:bg-darkest md:flex flex-shrink-0" />
        <CoreDivider v-if="(!mobile && showMenu)" :vertical="true" />
        <slot />
        <CoreDivider v-if="(!mobile && showMeta && doc)" :vertical="true" />
        <TheRightSidebar v-if="(!mobile && showMeta && doc && isDoc)" class="hidden w-64 bg-gray-100 dark:bg-darkest md:flex flex-shrink-0" />
      </section>
    </section>
  </div>
</template>

<style>
.dark .dashboard-content {
  background: url('data:image/svg+xml,<svg viewBox="0 0 512 512" fill="rgb(0,0,0)" fill-opacity="0.1" xmlns="http://www.w3.org/2000/svg"><path d="M62.0681 334.307C64.2233 332.94 65.5192 332.279 67.9043 331.298C64.5768 328.379 61.3313 327.552 57.1583 328.482C60.1843 330.855 61.7542 332.573 62.0681 334.307Z"/><path d="M448.783 310.161C451.754 311.196 453.111 311.763 454.402 312.714C455.015 311.256 456.526 309.731 459.053 307.749C455.08 306.863 451.947 307.571 448.783 310.161Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M260.852 0.31369C165.49 -6.71839 53.8113 105.548 184.198 229.574C176.534 258.283 146.594 268.044 124.568 251.124C114 243.006 96.1775 235.7 77.8656 235.7C31.989 235.7 2.55125 269.263 3.52336 302.275C4.668 341.145 21.6438 354.676 29.5226 358.879C36.0058 351.738 39.8945 348.269 47.3684 343.015C35.8731 333.685 28.5225 305.995 57.1582 293.953C78.959 284.785 98.9656 306.947 105.967 315.115C130.358 312.791 160.605 292.647 175.754 270.313C161.081 298.75 149.885 308.993 79.0603 334.307C64.5795 339.482 55.91 344.037 41.3767 356.67C15.8666 378.844 15.6338 423.693 30.8556 448.312C48.0896 476.186 91.4121 475.748 100.37 459.274C109.328 442.799 95.1095 431.838 88.7216 435.534C96.2367 443.113 93.2307 452.509 81.5823 450.629C50.3398 445.589 53.7766 398.012 81.5823 393.502C89.8683 392.158 97.8255 392.189 105.891 392.22C123.039 392.287 140.676 392.355 163 379.216C164.393 378.397 165.803 377.526 167.233 376.6C164.2 345.735 173.983 322.353 203.173 278.434C202.899 278.969 202.381 279.89 201.671 281.152L201.67 281.154C190.203 301.532 128.67 410.879 235.388 427.531C239.089 428.108 242.972 428.656 246.952 429.218C274.292 433.079 306.225 437.588 315.301 456.657C327.708 482.723 300.893 509.188 285.816 485.263C282.697 511.788 309.655 515.832 323.767 509.188C350.281 496.705 364.837 466.539 353.92 435.534C348.107 419.026 335.736 403.459 287.376 377.6C257.223 361.477 263.509 308.753 278.512 272.044C268.5 314 269.898 352.338 288.039 369.615C298.539 379.615 337.324 393.05 388.091 378.314C402.647 373.76 417.624 369.073 434.415 367.569C482.329 363.278 475.051 452.496 444.971 425.762C444.971 448.312 472.401 445.316 484.049 435.534C523.879 402.084 508.097 340.447 447.977 317.521C420.724 308.702 402.319 314.964 386.647 320.296C354.14 331.355 321.773 312.714 320.596 281.506C329.506 307.749 350.031 327.171 391.376 311.38C418.633 256.919 489.592 279.14 470.849 321.023C481.444 327.471 486.045 331.118 491.232 337.692C500.188 324.77 529.822 274.669 481.809 237.69C454.41 216.587 418.258 217.395 389.7 237.69C361.143 257.986 323.247 269.937 320.596 229.574C454.706 134.926 361.321 7.72238 260.852 0.31369ZM220.458 179.964C220.749 165.803 210.695 152.315 196.598 153.655C183.159 154.933 175.817 169.966 177.622 183.347C179.33 196.002 190.716 207.566 203.173 204.769C214.064 202.325 220.229 191.125 220.458 179.964ZM332.586 179.964C332.877 165.803 322.822 152.315 308.725 153.655C295.287 154.933 287.944 169.966 289.75 183.347C291.458 196.002 302.844 207.566 315.301 204.769C326.191 202.325 332.356 191.125 332.586 179.964Z"/></svg>') center center no-repeat;
  background-size: 50% 50%;
}

.light .dashboard-content {
  background: url('data:image/svg+xml,<svg viewBox="0 0 512 512" fill="rgb(200,200,200)" fill-opacity="0.1" xmlns="http://www.w3.org/2000/svg"><path d="M62.0681 334.307C64.2233 332.94 65.5192 332.279 67.9043 331.298C64.5768 328.379 61.3313 327.552 57.1583 328.482C60.1843 330.855 61.7542 332.573 62.0681 334.307Z"/><path d="M448.783 310.161C451.754 311.196 453.111 311.763 454.402 312.714C455.015 311.256 456.526 309.731 459.053 307.749C455.08 306.863 451.947 307.571 448.783 310.161Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M260.852 0.31369C165.49 -6.71839 53.8113 105.548 184.198 229.574C176.534 258.283 146.594 268.044 124.568 251.124C114 243.006 96.1775 235.7 77.8656 235.7C31.989 235.7 2.55125 269.263 3.52336 302.275C4.668 341.145 21.6438 354.676 29.5226 358.879C36.0058 351.738 39.8945 348.269 47.3684 343.015C35.8731 333.685 28.5225 305.995 57.1582 293.953C78.959 284.785 98.9656 306.947 105.967 315.115C130.358 312.791 160.605 292.647 175.754 270.313C161.081 298.75 149.885 308.993 79.0603 334.307C64.5795 339.482 55.91 344.037 41.3767 356.67C15.8666 378.844 15.6338 423.693 30.8556 448.312C48.0896 476.186 91.4121 475.748 100.37 459.274C109.328 442.799 95.1095 431.838 88.7216 435.534C96.2367 443.113 93.2307 452.509 81.5823 450.629C50.3398 445.589 53.7766 398.012 81.5823 393.502C89.8683 392.158 97.8255 392.189 105.891 392.22C123.039 392.287 140.676 392.355 163 379.216C164.393 378.397 165.803 377.526 167.233 376.6C164.2 345.735 173.983 322.353 203.173 278.434C202.899 278.969 202.381 279.89 201.671 281.152L201.67 281.154C190.203 301.532 128.67 410.879 235.388 427.531C239.089 428.108 242.972 428.656 246.952 429.218C274.292 433.079 306.225 437.588 315.301 456.657C327.708 482.723 300.893 509.188 285.816 485.263C282.697 511.788 309.655 515.832 323.767 509.188C350.281 496.705 364.837 466.539 353.92 435.534C348.107 419.026 335.736 403.459 287.376 377.6C257.223 361.477 263.509 308.753 278.512 272.044C268.5 314 269.898 352.338 288.039 369.615C298.539 379.615 337.324 393.05 388.091 378.314C402.647 373.76 417.624 369.073 434.415 367.569C482.329 363.278 475.051 452.496 444.971 425.762C444.971 448.312 472.401 445.316 484.049 435.534C523.879 402.084 508.097 340.447 447.977 317.521C420.724 308.702 402.319 314.964 386.647 320.296C354.14 331.355 321.773 312.714 320.596 281.506C329.506 307.749 350.031 327.171 391.376 311.38C418.633 256.919 489.592 279.14 470.849 321.023C481.444 327.471 486.045 331.118 491.232 337.692C500.188 324.77 529.822 274.669 481.809 237.69C454.41 216.587 418.258 217.395 389.7 237.69C361.143 257.986 323.247 269.937 320.596 229.574C454.706 134.926 361.321 7.72238 260.852 0.31369ZM220.458 179.964C220.749 165.803 210.695 152.315 196.598 153.655C183.159 154.933 175.817 169.966 177.622 183.347C179.33 196.002 190.716 207.566 203.173 204.769C214.064 202.325 220.229 191.125 220.458 179.964ZM332.586 179.964C332.877 165.803 322.822 152.315 308.725 153.655C295.287 154.933 287.944 169.966 289.75 183.347C291.458 196.002 302.844 207.566 315.301 204.769C326.191 202.325 332.356 191.125 332.586 179.964Z"/></svg>') center center no-repeat;
  background-size: 50% 50%;
}
</style>
