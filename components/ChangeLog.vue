<script lang="ts" setup>
import { ref } from 'vue'
import KeyboardKey from './KeyboardKey.vue'
import KeyboardKeyCombination from './KeyboardKeyCombination.vue'
import ChangeLogEntry from './ChangeLogEntry.vue'
import CoreLink from './CoreLink.vue'
import Modal from './Modal.vue'
import { track } from '/helpers/analytics'

// When updating the changelog, generate a new timestamp
// with `Date.now()`.
const lastUpdated = ref(1726035870403)
const lastSeen = useLocalStorage('changelog:v1', 0, {
  initOnMounted: true,
})

const showChangeLog = ref(false)
const { modKey } = useDevice()
const { public: { fathomEventCtaModalUpgrade, linkFeedback } } = useConfig()
const { isSubscribed, user } = useSubscription()

const closeChangeLog = () => {
  showChangeLog.value = false
}

const trackCta = () => {
  closeChangeLog()
  track(fathomEventCtaModalUpgrade)
}

watch(lastSeen, () => {
  if (typeof lastSeen.value === 'string') {
    lastSeen.value = Date.parse(lastSeen.value)
  }

  if (lastSeen.value) {
    if (lastSeen.value < lastUpdated.value) {
      showChangeLog.value = true
    }
  }

  lastSeen.value = lastUpdated.value
})
</script>

<template>
  <Modal v-if="showChangeLog" @close="closeChangeLog">
    <template #header>
      <span class="inline-flex items-center gap-2"><Icon name="Announce" size="1em" /> Announcements</span>
    </template>
    <div class="flex flex-col gap-4">
      <ChangeLogEntry>
        <template #header>
          A fresh new look
        </template>
        <template #timestamp>
          Tuesday, September 10th, 2024
        </template>
        <p>The UI has been redesigned to better prepare for future improvements.</p>
        <ul class="flex flex-col gap-1 list-disc pl-6">
          <li>
            <strong>Tabs</strong> are now in the sidebar!
          </li>
          <li>
            A new feature called "<strong>Zen Mode</strong>" has been added to help you focus on your writing or note-taking. You can toggle it with the <KeyboardKeyCombination><KeyboardKey :text="modKey" /><KeyboardKey text="\" /></KeyboardKeyCombination> shortcut or by tapping the <Icon name="Logo" class="inline" /> logo in the top nav.
          </li>
          <li>
            Additionally, this release contains multiple bug fixes, performance enhancements, and accessibility improvements.
          </li>
        </ul>
        <p>Have thoughts on what we should work on next? We would <strong>love</strong> your <CoreLink :to="linkFeedback" class="text-blue-500">feedback</CoreLink>!</p>
      </ChangeLogEntry>
    </div>
    <template #footer>
      <div class="flex items-center justify-end gap-1">
        <CoreButton @click="closeChangeLog">
          Dismiss
        </CoreButton>
        <CoreButton v-if="!isSubscribed" :as="CoreLink" :to="{ path: '/account' }" class="text-primary" @click="trackCta">
          <span>Upgrade to Pro</span>
        </CoreButton>
        <CoreButton v-else-if="!user" :as="CoreLink" :to="{ path: '/account' }" class="text-primary" @click="trackCta">
          <span>Sign Up</span>
        </CoreButton>
      </div>
    </template>
  </Modal>
</template>
