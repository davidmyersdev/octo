<template>
  <section v-if="!subscription.pro" class="bg-gray-100 dark:bg-darkest text-center xl:text-left shadow rounded p-4 md:p-2">
    <div class="flex flex-col lg:flex-row items-center justify-between gap-4">
      <strong class="inline-flex items-center lg:ml-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
        </svg>
        <span class="whitespace-nowrap ml-2">Octo Pro</span>
      </strong>
      <div class="lg:ml-2 xl:ml-4">Share your docs, attach files, and get early access to new features.</div>
      <div class="flex items-center justify-end">
        <router-link @click="trackCta" :to="{ path: '/account' }" class="button-flat button-color-surface button-size-medium w-full whitespace-nowrap lg:ml-2 text-blue-400">Learn More</router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { subscription } from '/src/common/account'

const trackCta = () => {
  // @ts-ignore
  window.fathom.trackGoal(import.meta.env.VITE_FATHOM_EVENT_CTA_SETTINGS_UPGRADE, 0)
}
</script>
