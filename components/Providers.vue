<script lang="ts">
import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, getAuth, getRedirectResult, linkWithRedirect } from 'firebase/auth'
import { computed, defineComponent } from 'vue'
import IconGitHub from '#root/assets/github.svg?component'
import IconGoogle from '#root/assets/google.svg?component'
import IconTwitter from '#root/assets/twitter.svg?component'

export default defineComponent({
  components: {
    IconGitHub,
    IconGoogle,
    IconTwitter,
  },
  setup() {
    const { user } = useUser()
    const github = computed(() => user.value.providers.find(({ providerId: id }) => id === 'github.com'))
    const google = computed(() => user.value.providers.find(({ providerId: id }) => id === 'google.com'))
    const twitter = computed(() => user.value.providers.find(({ providerId: id }) => id === 'twitter.com'))

    getRedirectResult(getAuth()).catch((error) => {
      console.warn({ error })
    })

    const linkGitHub = () => {
      const authUser = getAuth().currentUser

      if (authUser) {
        linkWithRedirect(authUser, new GithubAuthProvider())
      }
    }

    const linkGoogle = () => {
      const authUser = getAuth().currentUser

      if (authUser) {
        linkWithRedirect(authUser, new GoogleAuthProvider())
      }
    }

    const linkTwitter = () => {
      const authUser = getAuth().currentUser

      if (authUser) {
        linkWithRedirect(authUser, new TwitterAuthProvider())
      }
    }

    const signOut = () => {
      getAuth().signOut()
    }

    return {
      github,
      google,
      linkGitHub,
      linkGoogle,
      linkTwitter,
      signOut,
      twitter,
    }
  },
})
</script>

<template>
  <section class="flex flex-col gap-4">
    <div>
      <div v-if="github" class="mb-4">
        <div class="flex items-center">
          <IconGitHub class="h-5 w-5" />
          <span class="font-bold text-lg ml-3">GitHub</span>
          <span class="border border-layer text-base font-normal px-1 rounded ml-2">Linked</span>
        </div>
        <p>{{ github.email }}</p>
      </div>

      <div v-if="google" class="mb-4">
        <div class="flex items-center">
          <IconGoogle class="h-5 w-5" />
          <span class="font-bold text-lg ml-3">Google</span>
          <span class="border border-layer text-base font-normal px-1 rounded ml-2">Linked</span>
        </div>
        <p>{{ google.email }}</p>
      </div>

      <div v-if="twitter" class="mb-4">
        <div class="flex items-center">
          <IconTwitter class="h-5 w-5" />
          <span class="font-bold text-lg ml-3">Twitter</span>
          <span class="border border-layer text-base font-normal px-1 rounded ml-2">Linked</span>
        </div>
        <p>{{ twitter.email }}</p>
      </div>
    </div>

    <div class="flex flex-col gap-2 lg:max-w-xs">
      <CoreButton v-if="!github" class="w-full lg:w-auto whitespace-nowrap justify-start" @click="linkGitHub">
        <IconGitHub class="h-5 w-5" />
        <span>Link GitHub</span>
      </CoreButton>

      <CoreButton v-if="!google" class="w-full lg:w-auto whitespace-nowrap justify-start" @click="linkGoogle">
        <IconGoogle class="h-5 w-5" />
        <span>Link Google</span>
      </CoreButton>

      <CoreButton v-if="!twitter" class="w-full lg:w-auto whitespace-nowrap justify-start" @click="linkTwitter">
        <IconTwitter class="h-5 w-5" />
        <span>Link Twitter</span>
      </CoreButton>

      <CoreButton class="w-full lg:w-auto whitespace-nowrap justify-start text-red-400" @click="signOut">
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        <span class="action">Sign Out</span>
      </CoreButton>
    </div>
  </section>
</template>
