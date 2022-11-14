<template>
  <Modal v-if="showChangeLog" @close="closeChangeLog">
    <template #header>
      What's New
    </template>
    <div class="flex flex-col gap-12">
      <ChangeLogEntry header="Monday, November 14th, 2022">
        <p>Introducing a new way to sign in.</p>
        <template #items>
          <li>Send yourself a <strong>magic link</strong> to sign in with your email address.</li>
          <li>If you already have an account with a social provider, your email address will be linked to that account.</li>
        </template>
      </ChangeLogEntry>
      <ChangeLogEntry header="Sunday, October 16th, 2022">
        <p>Today's updates focus on <strong>portability</strong>.</p><p>Vendor lock-in has become commonplace, but you deserve the right to take your data with you <strong>anywhere</strong> you choose. Thanks to recent community contributions, transferring your data into or out of Octo has become much simpler.</p>
        <template #items>
          <li>Import plain-text Markdown files into your knowledge base, directly from App Settings.</li>
          <li>Export your entire knowledge base as a zipped folder of plain-text Markdown files, directly from App Settings.</li>
        </template>
      </ChangeLogEntry>
      <ChangeLogEntry header="Thursday, July 21st, 2022">
        <template #items>
          <li>Tags are now properly highlighted and support a wide array of unicode letters and marks. Additionally, when typing a new tag, suggestions will appear based on your existing tags. Press enter to use the active tag suggestion.</li>
          <li>Direct doc references are finally here! Start typing the top-level title of another doc with the <Code>[[my other doc]]</Code> syntax for suggestions to appear.</li>
        </template>
      </ChangeLogEntry>
      <ChangeLogEntry header="Monday, May 23rd, 2022">
        <template #items>
          <li>The Formatting Toolbar is here! You can toggle it per-device in App Settings.</li>
          <li>You can now improve the readability of active docs by customizing the max-width to better fit your needs (defaults to 100 characters).</li>
          <li>There is a new 'Auto' appearance option that will match your system theme. It is the default for new users, and you can update it for yourself in App Settings.</li>
          <li>Formatting tokens (<Code>#</Code>, <Code>*</Code>, etc) now have better contrast with the surrounding text.</li>
          <li>Additionally, this release includes dependency updates, performance improvements, and small bugfixes.</li>
        </template>
      </ChangeLogEntry>
      <ChangeLogEntry header="Wednesday, March 30th, 2022">
        <template #items>
          <li>Drag-and-drop or paste files to upload and attach to the current doc (Octo Pro).</li>
        </template>
      </ChangeLogEntry>
      <ChangeLogEntry header="Saturday, March 26th, 2022">
        <template #items>
          <li>Changelog notifications are displayed when Octo updates.</li>
          <li>Improvements have been made to IME language support.</li>
          <li>Regular expressions are automatically recognized by the <Code>/.*/i</Code> syntax in searches.</li>
          <li>The Active Context bar has been merged into the navigation menu.</li>
          <li>The legacy Markdown editor has been removed in favor of Ink.</li>
          <li>The Daily Notepad page now works offline.</li>
          <li>Vim Mode can be enabled on the Settings page.</li>
        </template>
      </ChangeLogEntry>
    </div>
    <template #footer>
      <div class="flex items-center justify-end gap-2">
        <button class="button-flat button-size-medium" @click="closeChangeLog">Dismiss</button>
        <router-link v-if="!subscription.pro" @click="trackCta" :to="{ path: '/account' }" class="text-blue-400 button-flat button-color-surface button-size-medium">
          <span>Upgrade</span>
        </router-link>
        <router-link v-else-if="!user" @click="trackCta" :to="{ path: '/account' }" class="text-blue-400 button-flat button-color-surface button-size-medium">
          <span>Sign Up</span>
        </router-link>
      </div>
    </template>
  </Modal>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import { subscription, user } from '/src/common/account'
import ChangeLogEntry from '/components/ChangeLogEntry.vue'
import Code from '/components/Code.vue'
import Modal from '/components/Modal.vue'

const showChangeLog = ref(false)
const closeChangeLog = () => { showChangeLog.value = false }
const trackCta = () => {
  closeChangeLog()

  // @ts-ignore
  window.fathom?.trackGoal(import.meta.env.VITE_FATHOM_EVENT_CTA_MODAL_UPGRADE, 0)
}

onMounted(async () => {
  try {
    // Make sure this timestamp is updated when new entries are added.
    // (new Date()).toISOString()
    const lastEntryTimestamp = '2022-11-14T04:15:07.232Z'
    const lastClientTimestamp = localStorage.getItem('changelog:v1')

    if (!lastClientTimestamp || new Date(lastEntryTimestamp) > new Date(lastClientTimestamp)) {
      showChangeLog.value = true

      localStorage.setItem('changelog:v1', lastEntryTimestamp)
    }
  } catch (error) {
    console.warn({ error })
  }
})
</script>
