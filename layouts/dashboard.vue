<script lang="ts" setup>
import { computed, onMounted, onUnmounted } from 'vue'
import CoreButton from '#root/components/CoreButton.vue'
import CoreDivider from '#root/components/CoreDivider.vue'
import CoreLink from '#root/components/CoreLink.vue'
import TheLeftSidebar from '#root/pages/menu.vue'
import TheRightSidebar from '#root/pages/docs/[docId]/meta.vue'
import { bindGlobal } from '#root/src/common/keybindings'

const { doc } = useDocs()
const { isZen, toggleZen } = useZen()
const { showMenu, showMeta, toggleMenu, toggleMeta } = useLayout()
const { storedValue: appearance, isAuto, isDark, isLight } = useAppearance()
const isPrimaryGutterShowing = computed(() => !isZen.value && showMenu.value)
const isSecondaryGutterShowing = computed(() => !isZen.value && showMeta.value && !!doc.value)

const scrollListener = (event: Event) => {
  event.preventDefault()
  event.stopImmediatePropagation()
  event.stopPropagation()

  window.scrollTo(0, 0)
}

const toggleAppearance = () => {
  appearance.value = isAuto.value ? 'dark' : isDark.value ? 'light' : 'auto'
}

onMounted(() => {
  window.addEventListener('scroll', scrollListener)

  // Todo: Migrate keybindings to composables.
  bindGlobal('mod+\\', () => {
    toggleZen()
  })

  // Todo: Migrate keybindings to composables.
  bindGlobal('mod+shift+,', () => {
    toggleMenu()
  })

  // Todo: Migrate keybindings to composables.
  bindGlobal('mod+shift+.', () => {
    toggleMeta()
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollListener)
})
</script>

<template>
  <div class="dashboard flex flex-col lg:flex-row h-screen w-screen min-h-0 min-w-0 overflow-hidden border-t border-layer">
    <Gutter :show="isPrimaryGutterShowing" :size="256" class="hidden lg:flex">
      <TheLeftSidebar class="flex flex-grow flex-shrink overflow-hidden w-full" />
    </Gutter>
    <FlexDivider class="hidden lg:block" />
    <CoreLayer class="bg-layer basis-full flex flex-col flex-grow flex-shrink min-h-0">
      <div class="flex p-1 items-center">
        <div class="flex gap-1 flex-row-reverse lg:flex-row items-center basis-full justify-start">
          <CoreButton class="hidden lg:flex" @click="toggleMenu">
            <Icon name="Menu" />
            <span>Menu</span>
          </CoreButton>
          <CoreButton :as="CoreLink" :to="{ path: '/menu' }" class="lg:hidden">
            <Icon name="Menu" />
            <span>Menu</span>
          </CoreButton>
          <CoreButton :as="CoreLink" :to="{ path: '/docs/new' }">
            <Icon name="PencilPlus" />
            <span>New</span>
          </CoreButton>
        </div>
        <div class="flex -order-1 lg:order-none items-center justify-center">
          <CoreLayer class="flex text-xl gap-4">
            <svg class="sq-7 transition-colors duration-300 cursor-pointer" :class="isZen ? 'text-layer-bg' : 'text-brand'" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg" @click="toggleZen">
              <path d="M125 250C194.036 250 250 194.036 250 125C250 55.9644 194.036 0 125 0C55.9644 0 0 55.9644 0 125C0 194.036 55.9644 250 125 250Z" fill="currentColor" />
              <template v-if="isZen">
                <path class="fill-layer-text-muted stroke-layer-text-muted" d="M212.962 153.171C212.962 153.171 192.949 159.5 179.472 159.5C165.995 159.5 145.981 153.171 145.981 153.171C145.981 153.171 164.921 167.5 179.472 167.5C194.022 167.5 212.962 153.171 212.962 153.171Z" stroke-width="2" stroke-linejoin="round" />
                <path class="fill-layer-text-muted stroke-layer-text-muted" d="M37 153.171C37 153.171 57.0133 159.5 70.4906 159.5C83.9679 159.5 103.981 153.171 103.981 153.171C103.981 153.171 85.0412 167.5 70.4906 167.5C55.94 167.5 37 153.171 37 153.171Z" stroke-width="2" stroke-linejoin="round" />
              </template>
              <template v-else>
                <mask id="mask0_508_218" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="145" y="117" width="68" height="85">
                  <ellipse cx="179.378" cy="159.462" rx="33.4292" ry="42.3835" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_508_218)">
                  <ellipse cx="179.378" cy="159.462" rx="33.4292" ry="42.3835" fill="white" />
                  <ellipse cx="163.865" cy="162.805" rx="23.3666" ry="29.6255" fill="black" />
                </g>
                <mask id="mask1_508_218" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="37" y="117" width="68" height="85">
                  <ellipse cx="70.7535" cy="159.462" rx="33.4292" ry="42.3836" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask1_508_218)">
                  <ellipse cx="70.7535" cy="159.462" rx="33.4292" ry="42.3836" fill="white" />
                  <ellipse cx="86.0505" cy="162.271" rx="23.3664" ry="29.6253" fill="black" />
                </g>
              </template>
            </svg>
          </CoreLayer>
        </div>
        <div class="flex items-center gap-1 lg:basis-full justify-end">
          <CoreButton class="hidden lg:flex" @click="toggleAppearance">
            <Icon v-if="isDark" name="Moon" />
            <Icon v-else-if="isLight" name="Sun" />
            <Icon v-else name="SunWithMoon" />
          </CoreButton>
          <CoreButton v-if="doc" class="hidden lg:flex" data-test-id="toggle-meta" data-test-toggle-meta @click="toggleMeta">
            <Icon name="DotsVertical" />
          </CoreButton>
          <CoreButton v-if="doc" :as="CoreLink" :to="{ path: `/docs/${doc.id}/meta` }" class="lg:hidden" data-test-id="toggle-meta" data-test-toggle-meta>
            <Icon name="DotsVertical" />
          </CoreButton>
        </div>
      </div>
      <CoreDivider />
      <div class="flex flex-grow flex-shrink min-h-0 overflow-hidden min-w-0">
        <section class="flex flex-grow flex-shrink min-h-0 overflow-hidden min-w-0">
          <slot />
        </section>
      </div>
    </CoreLayer>
    <FlexDivider class="hidden lg:block" />
    <Gutter :show="isSecondaryGutterShowing" :size="256" class="hidden lg:flex justify-end flex-nowrap">
      <TheRightSidebar class="hidden lg:flex flex-grow flex-shrink-0 w-full" />
    </Gutter>
    <ToastList class="fixed bottom-8 right-8 m-auto" />
  </div>
</template>

<style scoped>
.dashboard {
  height: var(--app-height, 100vh);
}

.gutter-right {
  direction: rtl;
}

:deep(.gutter-right > *) {
  direction: ltr;
}
</style>
