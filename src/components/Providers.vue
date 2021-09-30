<template>
  <section class="flex flex-col gap-4">
    <div>
      <div v-if="github" class="mb-4">
        <div class="flex items-center">
          <GitHubIcon class="h-5 w-5" />
          <span class="font-bold text-lg ml-3">GitHub</span>
          <span class="bg-gray-100 dark:bg-gray-800 text-base font-normal px-1 rounded ml-2">Linked</span>
        </div>
        <p>{{ github.email }}</p>
      </div>

      <div v-if="google" class="mb-4">
        <div class="flex items-center">
          <GoogleIcon class="h-5 w-5" />
          <span class="font-bold text-lg ml-3">Google</span>
          <span class="bg-gray-100 dark:bg-gray-800 text-base font-normal px-1 rounded ml-2">Linked</span>
        </div>
        <p>{{ google.email }}</p>
      </div>

      <div v-if="twitter" class="mb-4">
        <div class="flex items-center">
          <TwitterIcon class="h-5 w-5" />
          <span class="font-bold text-lg ml-3">Twitter</span>
          <span class="bg-gray-100 dark:bg-gray-800 text-base font-normal px-1 rounded ml-2">Linked</span>
        </div>
        <p>{{ twitter.email }}</p>
      </div>
    </div>

    <div class="flex flex-col gap-2 lg:max-w-xs">
      <button v-if="!github" @click="linkGithub" class="button-base button-size-medium button-color-gray shadow w-full lg:w-auto whitespace-nowrap justify-start">
        <GitHubIcon class="h-5 w-5" />
        <span class="ml-3">Link GitHub</span>
      </button>

      <button v-if="!google" @click="linkGoogle" class="button-base button-size-medium button-color-gray shadow w-full lg:w-auto whitespace-nowrap justify-start">
        <GoogleIcon class="h-5 w-5" />
        <span class="ml-3">Link Google</span>
      </button>

      <button v-if="!twitter" @click="linkTwitter" class="button-base button-size-medium button-color-gray shadow w-full lg:w-auto whitespace-nowrap justify-start">
        <TwitterIcon class="h-5 w-5" />
        <span class="ml-3">Link Twitter</span>
      </button>

      <button @click="signOut" class="button-base button-size-medium button-color-gray shadow w-full lg:w-auto whitespace-nowrap justify-start text-red-400">
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        <span class="action ml-3">Sign Out</span>
      </button>
    </div>
  </section>
</template>

<script>
import GitHubIcon from '/src/components/icons/GitHub.vue'
import GoogleIcon from '/src/components/icons/Google.vue'
import TwitterIcon from '/src/components/icons/Twitter.vue'

import { authInstance, authNamespace } from '/src/firebase.js'

export default {
  name: 'Providers',
  components: {
    GitHubIcon,
    GoogleIcon,
    TwitterIcon,
  },
  data() {
    return {
      accountConflict: false,
    }
  },
  computed: {
    github() {
      return this.providers.find(p => p.providerId === 'github.com')
    },
    google() {
      return this.providers.find(p => p.providerId === 'google.com')
    },
    online() {
      return this.$store.state.online
    },
    providers() {
      return this.user ? this.user.providerData : []
    },
    twitter() {
      return this.providers.find(p => p.providerId === 'twitter.com')
    },
    user() {
      return this.$store.state.auth.user
    },
  },
  methods: {
    linkGithub() {
      this.user.linkWithRedirect(new authNamespace.GithubAuthProvider())
    },
    linkGoogle() {
      this.user.linkWithRedirect(new authNamespace.GoogleAuthProvider())
    },
    linkTwitter() {
      this.user.linkWithRedirect(new authNamespace.TwitterAuthProvider())
    },
    signInGithub() {
      authInstance.signInWithRedirect(new authNamespace.GithubAuthProvider())
    },
    signInGoogle() {
      authInstance.signInWithRedirect(new authNamespace.GoogleAuthProvider())
    },
    signInTwitter() {
      authInstance.signInWithRedirect(new authNamespace.TwitterAuthProvider())
    },
    signOut() {
      authInstance.signOut()
    },
  },
  created() {
    authInstance.getRedirectResult().then((result) => {
      // track new sign ups
      if (result.additionalUserInfo && result.additionalUserInfo.isNewUser) {
        window.fathom.trackGoal(import.meta.env.VITE_FATHOM_GOAL_ACCOUNT_REGISTRATION, 0)
      }
    }).catch((error) => {
      switch(error.code) {
        case 'auth/account-exists-with-different-credential':
          this.accountConflict = true
          break
        default:
          break
      }
    })
  },
}
</script>
