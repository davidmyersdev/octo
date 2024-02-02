<script lang="ts" setup>
import { track } from '#helpers/analytics'
import CoreLink from '~/components/CoreLink.vue'

const { public: { fathomEventCtaSettingsUpgrade } } = useConfig()
const { isSubscribed } = useSubscription()

const trackCta = () => {
  track(fathomEventCtaSettingsUpgrade)
}
</script>

<template>
  <CoreCard v-if="!isSubscribed" class="text-center rounded">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
      <div class="w-full lg:w-auto text-left inline-flex">
        <strong class="inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
          </svg>
          <span class="whitespace-nowrap text-lg">Octo Pro</span>
        </strong>
      </div>
      <div class="lg:ml-2">Share your docs, attach files, and get early access to new features.</div>
      <div class="flex items-center justify-end">
        <CoreButton :as="CoreLink" :to="{ path: '/account' }" class="whitespace-nowrap text-primary" @click="trackCta">
          Learn More
        </CoreButton>
      </div>
    </div>
  </CoreCard>
</template>
