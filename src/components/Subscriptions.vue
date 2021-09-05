<template>
  <section>
    <div class="flex flex-col justify-center lg:flex-row gap-4">
      <div class="flex-shrink flex-basis-1/2 bg-gray-100 dark:bg-darkest shadow rounded p-4">
        <h3 class="flex items-center text-2xl font-bold mb-2">
          <span>Personal</span>
          <span v-if="user" class="bg-gray-200 dark:bg-gray-900 text-base font-normal py-0.5 px-2 rounded ml-2">Active</span>
        </h3>
        <p class="mb-4">For individuals, students, and content consumers</p>
        <p class="text-4xl font-bold mb-4">$0 <span class="text-base font-normal">/mo</span></p>
        <div v-if="!user" class="flex flex-col gap-2 mb-4">
          <button @click="signInGithub" :disabled="!online" class="button-base button-size-medium button-color-surface shadow w-full whitespace-nowrap justify-center">
            <GitHubIcon class="h-5 w-5" />
            <span class="action ml-3">Continue with GitHub</span>
          </button>
          <button @click="signInGoogle" :disabled="!online" class="button-base button-size-medium button-color-surface shadow w-full whitespace-nowrap justify-center">
            <GoogleIcon class="h-5 w-5" />
            <span class="action ml-3">Continue with Google</span>
          </button>
          <button @click="signInTwitter" :disabled="!online" class="button-base button-size-medium button-color-surface shadow w-full whitespace-nowrap justify-center">
            <TwitterIcon class="h-5 w-5" />
            <span class="action ml-3">Continue with Twitter</span>
          </button>
        </div>
        <p class="font-bold mb-4">What's included?</p>
        <ul>
          <li class="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Unlimited private docs</span>
          </li>
          <li class="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Unlimited syncing</span>
          </li>
          <li class="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Backups and retention</span>
          </li>
          <li class="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>End-to-end encryption</span>
          </li>
        </ul>
      </div>
      <div class="flex-grow flex-shrink flex-basis-1/2 bg-gray-100 dark:bg-darkest shadow rounded p-4 ring">
        <h3 class="text-2xl font-bold mb-2">Pro</h3>
        <p class="mb-4">For professionals, authors, and content creators</p>
        <p class="text-4xl font-bold mb-4">$7 <span class="text-base font-normal">/mo</span></p>
        <div v-if="!user" class="flex flex-col gap-2 mb-4">
          <button @click="signInGithub" :disabled="!online" class="button-base button-size-medium button-color-surface shadow w-full whitespace-nowrap justify-center text-brand">
            <GitHubIcon class="h-5 w-5" />
            <span class="action ml-3">Continue with GitHub</span>
          </button>
          <button @click="signInGoogle" :disabled="!online" class="button-base button-size-medium button-color-surface shadow w-full whitespace-nowrap justify-center text-brand">
            <GoogleIcon class="h-5 w-5" />
            <span class="action ml-3">Continue with Google</span>
          </button>
          <button @click="signInTwitter" :disabled="!online" class="button-base button-size-medium button-color-surface shadow w-full whitespace-nowrap justify-center text-brand">
            <TwitterIcon class="h-5 w-5" />
            <span class="action ml-3">Continue with Twitter</span>
          </button>
        </div>
        <div v-else class="flex flex-col gap-2 mb-4">
          <button @click="signInGithub" :disabled="!online" class="button-base button-size-medium button-color-surface shadow w-full whitespace-nowrap justify-center text-brand">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
            </svg>
            <span class="action ml-3">Upgrade Subscription</span>
          </button>
        </div>
        <p class="font-bold mb-4">What's included?</p>
        <ul>
          <li class="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Everything in <span class="font-bold">Personal</span></span>
          </li>
          <li class="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Unlimited public docs</span>
          </li>
          <li class="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Unlimited attachments</span>
          </li>
          <li class="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>
              <span>Unlimited cross-posting</span>
              <span class="has-tooltip">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline ml-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="tooltip">Publish directly to dev.to, hashnode.com, and medium.com</span>
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import GitHubIcon from '@/components/icons/GitHub'
import GoogleIcon from '@/components/icons/Google'
import TwitterIcon from '@/components/icons/Twitter'

import { authInstance, authNamespace } from '@/firebase'

export default {
  name: 'Subscription',
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
        window.fathom.trackGoal(process.env.VUE_APP_FATHOM_GOAL_ACCOUNT_REGISTRATION, 0)
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
