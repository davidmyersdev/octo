<template>
  <Modal v-if="showChangeLog" @close="closeChangeLog">
    <template #header>
      What's new?
    </template>
    <div class="flex flex-col gap-8">
      <ChangeSet v-for="changeSet in changeSets" :changeSet="changeSet" :key="changeSet.timestamp" />
    </div>
    <template #footer>
      <div class="flex items-center justify-end gap-2">
        <button class="button-flat button-size-medium" @click="closeChangeLog">Dismiss</button>
        <NuxtLink v-if="!subscription.pro" @click="trackCta" :to="{ name: 'account' }" class="text-blue-400 button-flat button-color-surface button-size-medium">
          <span>Upgrade</span>
        </NuxtLink>
        <NuxtLink v-else-if="!user" @click="trackCta" :to="{ name: 'account' }" class="text-blue-400 button-flat button-color-surface button-size-medium">
          <span>Sign Up</span>
        </NuxtLink>
      </div>
    </template>
  </Modal>
</template>

<script lang="ts" setup>
import moment from 'moment'
import { onMounted, ref } from 'vue'

import { subscription, user } from '/src/common/account'
import ChangeSet from '/components/ChangeSet.vue'
import Modal from '/components/Modal.vue'

const changeSets = ref<any>([])
const showChangeLog = ref(false)
const closeChangeLog = () => { showChangeLog.value = false }
const trackCta = () => {
  if (process.browser) {
    // @ts-ignore
    window.fathom.trackGoal(import.meta.env.VITE_FATHOM_EVENT_CTA_MODAL_UPGRADE, 0)

    closeChangeLog()
  }
}

onMounted(async () => {
  try {
    const changeLog = (await import('/src/data/changelog.json')).default

    changeSets.value.push(...changeLog.sort((a, b) => {
      return moment(b.timestamp).unix() - moment(a.timestamp).unix()
    }))

    const latestTimestamp = changeSets.value[0].timestamp
    const lastUpdated = localStorage.getItem('changelog:v1')

    if (!lastUpdated || new Date(latestTimestamp) > new Date(lastUpdated)) {
      showChangeLog.value = true

      localStorage.setItem('changelog:v1', latestTimestamp)
    }
  } catch (error) {
    // Todo: Handle this error
    console.error(error)
  }
})
</script>
