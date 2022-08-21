<template>
  <div class="container flex flex-col mx-auto p-4 md:px-16 md:py-8">
    <h2 class="text-4xl mb-1">My Account</h2>
    <p class="text-gray-500 mb-8">Manage account settings and subscriptions</p>
    <p v-if="!user" class="mb-4">By default, documents are only stored in your browser. This means an action such as <strong>clearing your history could erase everything</strong>. To protect your data, you should sign up for an account.</p>
    <section v-if="user" class="mb-8">
      <h3 class="text-3xl mb-4">Status</h3>
      <div v-if="online" class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="ml-2">Docs are currently syncing to your account.</span>
      </div>
      <div v-else class="flex items-center text-red-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="ml-2">You are currently offline. Docs will continue syncing when you go online.</span>
      </div>
    </section>
    <section class="mb-8">
      <h3 v-if="user" class="text-3xl mb-4">Subscriptions</h3>
      <Subscriptions />
    </section>
    <section v-if="user" class="mb-8">
      <h3 class="text-3xl mb-4">Providers</h3>
      <Providers />
    </section>
  </div>
</template>

<script>
import Providers from './Providers.vue'
import Subscriptions from './Subscriptions.vue'

export default {
  name: 'Account',
  components: {
    Providers,
    Subscriptions,
  },
  computed: {
    online() {
      return this?.$store?.state.online
    },
    user() {
      return this?.$store?.state.auth.user
    },
  },
}
</script>
