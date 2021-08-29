<template>
  <section class="flex flex-col lg:flex-row gap-4 bg-gray-100 dark:bg-darkest shadow rounded p-4">
    <div class="flex-grow flex-basis-2/3">
      <h4 class="text-2xl text-brand mb-2">{{ user ? 'Account' : 'Save Docs' }}</h4>
      <hr class="border-brand mb-4">
      <div v-if="user" class="lg:flex">
        <div class="flex-grow mb-4">
          <h5 class="text-xl mb-2">Status</h5>
          <div v-if="online" class="flex items-center text-brand">
            <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="ml-3">Docs are currently syncing to your account.</span>
          </div>
          <div v-else class="flex items-center text-brand">
            <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span class="ml-3">You are offline. Docs will continue syncing when you go online.</span>
          </div>
        </div>
      </div>
      <div v-else>
        <div v-if="accountConflict" role="alert" class="flex items-center rounded p-2 bg-blue-100 dark:bg-blue-400 text-gray-900 mb-4 shadow">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span class="ml-3">You have an account with another provider. If you want to link these accounts, you need to sign in with the correct provider first.</span>
        </div>

        <div class="flex flex-col gap-4 xl:flex-row">
          <div class="mb-4 flex-grow">
            <p class="mb-6">By default, documents are only stored in your browser. This means an action such as <strong>clearing your history could erase everything</strong>. To protect your data, you should sign up for a free account.</p>
            <ul>
              <li class="flex items-center mb-2">
                <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
                <span class="ml-3">Privacy-focused with zero cookies</span>
              </li>
              <li class="flex items-center mb-2">
                <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <span class="ml-3">Back up, sync, and share your documents</span>
              </li>
              <li class="flex items-center mb-2">
                <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span class="ml-3">Protect your data with end-to-end (client-side) encryption</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between bg-gray-200 dark:bg-gray-900 shadow p-4 w-full flex-grow flex-basis-1/3">
      <div v-if="user" class="">
        <div class="flex-grow">
          <h5 class="text-xl mb-6">My Info</h5>
          <div class="mb-4">
            <div v-if="github" class="flex items-center mb-2">
              <GitHubIcon />
              <span class="ml-3">{{ github.email }}</span>
            </div>

            <div v-if="twitter" class="flex items-center mb-2">
              <TwitterIcon />
              <span class="ml-3">{{ twitter.email }}</span>
            </div>

            <div v-if="google" class="flex items-center">
              <GoogleIcon />
              <span class="ml-3">{{ google.email }}</span>
            </div>
          </div>

          <div class="flex flex-col gap-2 items-center">
            <button v-if="!github" @click="linkGithub" class="button-base button-size-medium button-color-gray shadow w-full whitespace-nowrap justify-center text-brand">
              <GitHubIcon />
              <span class="action ml-3">Link GitHub</span>
            </button>

            <button v-if="!twitter" @click="linkTwitter" class="button-base button-size-medium button-color-gray shadow w-full whitespace-nowrap justify-center text-brand">
              <TwitterIcon />
              <span class="action ml-3">Link Twitter</span>
            </button>

            <button v-if="!google" @click="linkGoogle" class="button-base button-size-medium button-color-gray shadow w-full whitespace-nowrap justify-center text-brand">
              <GoogleIcon />
              <span class="action ml-3">Link Google</span>
            </button>

            <button @click="signOut" class="button-base button-size-medium button-color-gray shadow w-full whitespace-nowrap justify-center">
              <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span class="action ml-3">Sign out of my account</span>
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="mb-4 text-center text-lg">Supported Providers</p>
        <div class="flex flex-col gap-2">
          <button @click="signInGithub" :disabled="!online" class="button-base button-size-medium button-color-gray shadow w-full whitespace-nowrap justify-center text-brand">
            <GitHubIcon />
            <span class="action ml-3">Continue with GitHub</span>
          </button>
          <button @click="signInGoogle" :disabled="!online" class="button-base button-size-medium button-color-gray shadow w-full whitespace-nowrap justify-center text-brand">
            <GoogleIcon />
            <span class="action ml-3">Continue with Google</span>
          </button>
          <button @click="signInTwitter" :disabled="!online" class="button-base button-size-medium button-color-gray shadow w-full whitespace-nowrap justify-center text-brand">
            <TwitterIcon />
            <span class="action ml-3">Continue with Twitter</span>
          </button>
        </div>
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
  name: 'AuthSettings',
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
