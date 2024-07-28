<script lang="ts" setup>
import { Cog8ToothIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
import { IconCalendar, IconFilePlus, IconLayoutSidebarRight, IconMenu2, IconTopologyRing2, IconX } from '@tabler/icons-vue'
import CoreButton from '#root/components/CoreButton.vue'
import CoreDivider from '#root/components/CoreDivider.vue'

const props = defineProps<{
  bar?: boolean,
  contentAside?: boolean,
  contentMenu?: boolean,
  mainAside?: boolean,
  mainMenu?: boolean,
}>()

const { showMenu, showMeta, toggleMenu, toggleMeta } = useLayout()
const { isDesktop, isMobile, modKey } = useDevice()

const { state: barVisibilityState, toggle: toggleBarVisibility } = useToggle()
const { state: contentAsideState, toggle: toggleContentAside } = useToggle()
const { state: contentMenuState, toggle: toggleContentMenu } = useToggle()
const { state: mainAsideState, toggle: toggleMainAside } = useToggle()
const { state: mainMenuState, toggle: toggleMainMenu } = useToggle()

const isBarVisible = computed(() => props.bar && barVisibilityState.value)
const showContentAside = computed(() => props.contentAside && contentAsideState.value)
const showContentMenu = computed(() => props.contentMenu && contentMenuState.value)
const showMainAside = computed(() => props.mainAside && mainAsideState.value)
const showMainMenu = computed(() => props.mainMenu && mainMenuState.value)
</script>

<template>
  <div class="flex flex-col @lg:flex-row">
    <CoreNavbarLayout invert-at="lg" class="flex-grow">
      <template v-if="isBarVisible">
        <div class="flex flex-row @lg:flex-col flex-grow items-center justify-between gap-4 h-full bg-layer">
          <div class="flex gap-1 grow justify-between items-center @lg:flex-col @lg:justify-normal">
            <div class="flex flex-direction-inherit gap-[inherit]">
              <CoreButtonLink :to="{ path: '/docs/new' }">
                <IconFilePlus class="w-6" />
              </CoreButtonLink>
              <CoreButtonLink :to="{ path: '/notepad' }">
                <IconCalendar class="w-6" />
              </CoreButtonLink>
              <CoreButtonLink :to="{ path: '/force-graph' }">
                <IconTopologyRing2 class="w-6" />
              </CoreButtonLink>
            </div>
          </div>
          <div class="hidden @lg:flex flex-col gap-1 items-center">
            <CoreButtonLink :to="{ path: '/settings' }" :layer="1" :flat="true">
              <Cog8ToothIcon class="w-6" />
            </CoreButtonLink>
            <CoreButtonLink :to="{ path: '/account' }" :layer="1" :flat="true">
              <UserCircleIcon class="w-6" />
            </CoreButtonLink>
          </div>
        </div>
      </template>

      <template #default-wrapper>
        <template v-if="showMainMenu">
          <nav>
            <div class="p-1 flex items-center">
              <CoreButton @click="toggleMainMenu">
                <IconX class="h-6" />
                <span>Close Menu</span>
              </CoreButton>
            </div>
            <CoreDivider />
            <div class="p-1 flex flex-col flex-grow flex-shrink overflow-hidden">
              <slot name="main-menu">
                <p>Main Menu</p>
              </slot>
            </div>
          </nav>
          <CoreDivider vertical />
        </template>

        <CoreNavbarLayout class="flex-grow" dir="col">
          <template #nav>
            <div class="flex flex-inherit">
              <CoreButton @click="toggleMainMenu">
                <IconMenu2 class="h-6" />
                <span>Menu</span>
              </CoreButton>
            </div>

            <slot name="title">
              <h1 class="text-xl">title</h1>
            </slot>

            <div class="flex flex-inherit">
              <CoreButton @click="toggleMainAside">
                <IconLayoutSidebarRight class="h-6" />
                <span>Aside</span>
              </CoreButton>
            </div>
          </template>

          <template #default-wrapper>
            <CoreLayer class="bg-layer basis-full flex flex-col flex-grow flex-shrink">
              <div class="flex flex-grow">
                <template v-if="showContentMenu">
                  <nav class="p-1">
                    <slot name="content-menu">
                      <p>Content Menu</p>
                    </slot>
                  </nav>
                  <CoreDivider responsive />
                </template>
                <main class="flex flex-grow flex-shrink overflow-hidden min-w-0">
                  <slot />
                </main>
                <template v-if="showContentAside">
                  <CoreDivider responsive />
                  <slot name="content-aside">
                    <p>Content Aside</p>
                  </slot>
                </template>
              </div>
            </CoreLayer>
          </template>
        </CoreNavbarLayout>

        <template v-if="showMainAside">
          <CoreDivider responsive />
          <aside>
            <div class="p-1 flex items-center justify-end">
              <CoreButton @click="toggleMainAside">
                <IconX class="h-6" />
                <span>Close Aside</span>
              </CoreButton>
            </div>
            <CoreDivider />
            <div class="p-1">
              <slot name="main-aside">
                <p>Main Aside</p>
              </slot>
            </div>
          </aside>
        </template>
      </template>
    </CoreNavbarLayout>
    <ToastList class="fixed bottom-8 right-8 m-auto" />
  </div>
</template>
