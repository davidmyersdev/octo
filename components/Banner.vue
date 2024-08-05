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
      <div class="lg:ml-2">Share your docs, attach files, and get early access to new features.</div>
      <div class="flex items-center justify-end">
        <CoreButton :as="CoreLink" :to="{ path: '/account' }" class="whitespace-nowrap text-primary" @click="trackCta">
          Learn More
        </CoreButton>
      </div>
    </div>
  </CoreCard>
</template>
