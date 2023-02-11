<script lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import CoreButton from '#root/components/CoreButton.vue'
import CoreDivider from '#root/components/CoreDivider.vue'
import Key from '#root/components/Key.vue'
import TheLogo from '#root/components/TheLogo.vue'

export default defineComponent({
  components: {
    CoreButton,
    CoreDivider,
    Key,
    TheLogo,
    XMarkIcon,
  },
  setup() {
    const store = useStore()
    const modKey = computed(() => store.state.modKey)

    return {
      modKey,
    }
  },
})
</script>

<template>
  <nav class="flex items-center max-w-[100vw] py-2 bg-gray-100 dark:bg-darkest border-b border-white dark:border-gray-900">
    <section class="flex flex-shrink-0 items-center justify-center w-14">
      <CoreLink class="flex p-2" :to="{ path: '/docs/new' }">
        <TheLogo class="h-8 text-theme" />
      </CoreLink>
    </section>
    <CoreDivider :vertical="true" />
    <section class="flex-shrink-0 px-2 w-72">
      <div>
        <CoreLink :to="{ path: '/docs' }" class="block">
          <CoreButton class="bg-transparent dark:bg-transparent border justify-between w-full">
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
          </CoreButton>
        </CoreLink>
      </div>
    </section>
    <CoreDivider :vertical="true" />
    <section class="flex flex-grow flex-shrink gap-2 bg-gray-100 dark:bg-darkest px-2 min-w-0 overflow-hidden">
      <CoreButton class="bg-transparent dark:bg-transparent flex-shrink overflow-hidden"><span class="text-ellipsis overflow-hidden">Mermaid example diagrams</span><XMarkIcon class="w-4" /></CoreButton>
      <CoreButton class="flex-shrink overflow-hidden"><span class="text-ellipsis overflow-hidden">Wednesday, November 16th, 2022</span><XMarkIcon class="w-4" /></CoreButton>
      <CoreButton class="bg-transparent dark:bg-transparent flex-shrink overflow-hidden"><span class="text-ellipsis overflow-hidden">Mermaid example diagrams</span><XMarkIcon class="w-4" /></CoreButton>
      <CoreButton class="bg-transparent dark:bg-transparent flex-shrink overflow-hidden"><span class="text-ellipsis overflow-hidden">Mermaid example diagrams</span><XMarkIcon class="w-4" /></CoreButton>
      <CoreButton class="bg-transparent dark:bg-transparent flex-shrink overflow-hidden"><span class="text-ellipsis overflow-hidden">Mermaid example diagrams</span><XMarkIcon class="w-4" /></CoreButton>
      <CoreButton class="bg-transparent dark:bg-transparent flex-shrink overflow-hidden"><span class="text-ellipsis overflow-hidden">Mermaid example diagrams</span><XMarkIcon class="w-4" /></CoreButton>
    </section>
  </nav>
</template>
