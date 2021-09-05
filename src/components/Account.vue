<template>
  <div class="container flex flex-col mx-auto p-4 md:px-16 md:py-8">
    <h2 class="text-4xl mb-1">Account</h2>
    <p class="text-gray-500 mb-8">Manage your account settings and subscriptions</p>
    <div v-if="accountConflict" role="alert" class="flex items-center rounded p-2 bg-blue-100 dark:bg-blue-400 text-gray-900 mb-4 shadow">
      <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <span class="ml-3">You have an account with another provider. If you want to link these accounts, you need to sign in with the correct provider first.</span>
    </div>
    <p v-if="!user" class="mb-4">By default, documents are only stored in your browser. This means an action such as <strong>clearing your history could erase everything</strong>. To protect your data, you should sign up for an account.</p>
    <section v-if="user" class="mb-8">
      <h3 class="text-3xl mb-4">Status</h3>
      <div v-if="online" class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="ml-2">Docs are currently syncing to your account.</span>
      </div>
      <div v-else class="flex items-center text-brand">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="ml-2">You are currently offline. Docs will continue syncing when you go online.</span>
      </div>
    </section>
    <section v-if="user" class="mb-8">
      <h3 class="text-3xl mb-4">Providers</h3>
      <Providers />
    </section>
    <section class="mb-8">
      <h3 v-if="user" class="text-3xl mb-4">Subscriptions</h3>
      <Subscriptions />
    </section>
  </div>
</template>

<script>
import GitHubIcon from './icons/GitHub.vue'
import GoogleIcon from './icons/Google.vue'
import TwitterIcon from './icons/Twitter.vue'

import Providers from './Providers.vue'
import Subscriptions from './Subscriptions.vue'

export default {
  name: 'Account',
  components: {
    GitHubIcon,
    GoogleIcon,
    TwitterIcon,
    Providers,
    Subscriptions,
  },
  computed: {
    github() {
      return this.providers.find(p => p.providerId === 'github.com')
    },
    google() {
      return this.providers.find(p => p.providerId === 'google.com')
    },
    providers() {
      return this.user ? this.user.providerData : []
    },
    twitter() {
      return this.providers.find(p => p.providerId === 'twitter.com')
    },
    online() {
      return this.$store.state.online
    },
    user() {
      return this.$store.state.auth.user
    },
  },
}
</script>
