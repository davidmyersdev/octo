<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import AuthTiers from '#root/components/AuthTiers.vue'
import Providers from '#root/components/Providers.vue'

export default defineComponent({
  components: {
    AuthTiers,
    Providers,
  },
  setup() {
    const store = useStore()
    const online = computed(() => store.state.online)
    const { user } = useUser()

    useHead({
      title: 'Account',
    })

    return {
      online,
      user,
    }
  },
})
</script>

<template>
  <CorePage>
    <h2 class="text-4xl mb-1">My Account</h2>
    <p class="text-layer-muted mb-8">Manage account settings and subscriptions</p>
    <p v-if="!user.id" class="mb-4">By default, docs are only stored in your browser. This means some actions, such as clearing your history, could <strong>erase everything</strong>. To protect your data, you should sign up for an account.</p>
    <section v-if="user.id" class="mb-8">
      <h3 class="text-3xl mb-4">Status</h3>
      <div v-if="online" class="flex items-center">
        <Icon name="NetworkAvailable" />
        <span class="ml-2">Docs are currently syncing to your account.</span>
      </div>
      <div v-else class="flex items-center text-red-400">
        <Icon name="NetworkUnavailable" />
        <span class="ml-2">You are currently offline. Docs will continue syncing when you go online.</span>
      </div>
    </section>
    <section class="mb-8">
      <h3 v-if="user.id" class="text-3xl mb-4">Subscriptions</h3>
      <AuthTiers />
    </section>
    <section v-if="user.id" class="mb-8">
      <h3 class="text-3xl mb-4">Providers</h3>
      <Providers />
    </section>
  </CorePage>
</template>
