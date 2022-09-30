<template>
  <section>
    <div v-if="accountConflict" role="alert" class="flex items-center rounded p-2 bg-blue-100 dark:bg-blue-400 text-gray-900 mb-4 shadow">
      <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <span class="ml-3">You have an account with another provider. If you want to link these accounts, you need to sign in with the correct provider first.</span>
    </div>
    <div v-if="stripeError" role="alert" class="flex items-center rounded p-2 bg-blue-100 dark:bg-blue-400 text-gray-900 mb-4 shadow">
      <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <span class="ml-3">We could not connect to Stripe for checkout. Please try again.</span>
    </div>
    <div class="flex flex-col justify-center lg:flex-row gap-4">
      <div class="flex-shrink flex-basis-1/2 bg-gray-100 dark:bg-darkest shadow rounded p-4">
        <h3 class="text-3xl flex justify-between mb-2">
          <span class="font-bold">Personal</span>
          <span class="font-semibold ml-4"><span>$0</span> <span class="text-base font-normal">per month</span></span>
        </h3>
        <p v-if="user && !subscribed" class="bg-gray-200 dark:bg-gray-900 text-base font-normal py-0.5 px-2 rounded ml-2">Active</p>
        <p class="mb-4">For individuals who want to maintain a personal knowledge base</p>
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
            <span>End-to-End Encryption (E2EE)</span>
          </li>
        </ul>
      </div>
      <div class="flex-grow flex-shrink flex-basis-1/2 bg-gray-100 dark:bg-darkest shadow rounded p-4 ring ring-blue-400 ring-opacity-75">
        <h3 class="text-3xl flex justify-between mb-2">
          <span class="font-bold">Pro</span>
          <span class="font-semibold ml-4"><span class="text-blue-400">$4</span> <span class="text-base font-normal">per month</span></span>
        </h3>
        <p v-if="user && subscribed" class="bg-gray-200 dark:bg-gray-900 text-base font-normal py-0.5 px-2 rounded ml-2">Active</p>
        <p class="mb-4">For professionals who want to collaborate on documentation and more</p>
        <div v-if="!user" class="flex flex-col gap-2 mb-4">
          <button @click="signInGithubPro" :disabled="!online" class="button-base button-size-medium button-color-surface shadow w-full whitespace-nowrap justify-center text-blue-400">
            <GitHubIcon class="h-5 w-5" />
            <span class="action ml-3">Continue with GitHub</span>
          </button>
          <button @click="signInGooglePro" :disabled="!online" class="button-base button-size-medium button-color-surface shadow w-full whitespace-nowrap justify-center text-blue-400">
            <GoogleIcon class="h-5 w-5" />
            <span class="action ml-3">Continue with Google</span>
          </button>
          <button @click="signInTwitterPro" :disabled="!online" class="button-base button-size-medium button-color-surface shadow w-full whitespace-nowrap justify-center text-blue-400">
            <TwitterIcon class="h-5 w-5" />
            <span class="action ml-3">Continue with Twitter</span>
          </button>
        </div>
        <p class="text-gray-500 mb-4">You will be redirected to Stripe for checkout after you sign up with your preferred auth provider.</p>
        <div v-if="user && !subscribed" class="flex flex-col gap-2 mb-4">
          <button @click="upgrade" :disabled="!online" class="button-base button-size-medium button-color-surface shadow w-full whitespace-nowrap justify-center text-blue-400">
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
            <span>Unlimited file attachments</span>
          </li>
          <li class="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Realtime collaboration (coming soon)</span>
          </li>
          <li class="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>1% of revenue <a href="https://stripe.com/climate" target="_blank" rel="noopener noreferrer" class="text-blue-400">funds carbon removal</a></span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { getAuth, getRedirectResult, GithubAuthProvider, GoogleAuthProvider, signInWithRedirect, TwitterAuthProvider } from 'firebase/auth'

import GitHubIcon from '/components/icons/GitHub.vue'
import GoogleIcon from '/components/icons/Google.vue'
import TwitterIcon from '/components/icons/Twitter.vue'
import { addCheckout } from '/src/firebase/firestore'
import { open } from '/src/router'

import { SET_STRIPE_MODAL_VISIBILITY } from '/src/store.js'

export default {
  name: 'Subscriptions',
  components: {
    GitHubIcon,
    GoogleIcon,
    TwitterIcon,
  },
  data() {
    return {
      accountConflict: false,
      stripeError: null,
      subscribed: false,
    }
  },
  watch: {
    user() {
      if (this.user) {
        this.checkSubscription()
      }
    },
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
      this.user.linkWithRedirect(new GithubAuthProvider())
    },
    linkGoogle() {
      this.user.linkWithRedirect(new GoogleAuthProvider())
    },
    linkTwitter() {
      this.user.linkWithRedirect(new TwitterAuthProvider())
    },
    signInGithub() {
      signInWithRedirect(getAuth(), new GithubAuthProvider())
    },
    signInGithubPro() {
      window.location.hash = 'pro'

      this.trackCtaContinueWithPro()
      this.signInGithub()
    },
    signInGoogle() {
      signInWithRedirect(getAuth(), new GoogleAuthProvider())
    },
    signInGooglePro() {
      window.location.hash = 'pro'

      this.trackCtaContinueWithPro()
      this.signInGoogle()
    },
    signInTwitter() {
      signInWithRedirect(getAuth(), new TwitterAuthProvider())
    },
    signInTwitterPro() {
      window.location.hash = 'pro'

      this.trackCtaContinueWithPro()
      this.signInTwitter()
    },
    signOut() {
      getAuth().signOut()
    },
    trackCtaContinue() {
      window.fathom.trackGoal(import.meta.env.VITE_FATHOM_EVENT_CTA_CONTINUE, 0)
    },
    trackCtaContinueWithPro() {
      window.fathom.trackGoal(import.meta.env.VITE_FATHOM_EVENT_CTA_CONTINUE_WITH_PRO, 0)
    },
    trackCtaUpgradeToPro() {
      window.fathom.trackGoal(import.meta.env.VITE_FATHOM_EVENT_CTA_UPGRADE_TO_PRO, 0)
    },
    upgrade() {
      this.trackCtaUpgradeToPro()
      this.subscribe()
    },
    async checkSubscription() {
      await getAuth().currentUser.getIdToken(true)

      const decodedToken = await getAuth().currentUser.getIdTokenResult()

      this.subscribed = decodedToken.claims.stripeRole === 'subscriber'
    },
    async subscribe() {
      this.$store.dispatch(SET_STRIPE_MODAL_VISIBILITY, true)

      const checkoutRef = await addCheckout({ userId: this.user.uid })
      const { error, url } = checkoutRef.data()

      if (error) {
        this.stripeError = error.message

        this.$store.dispatch(SET_STRIPE_MODAL_VISIBILITY, false)
      }

      if (url) {
        window.location.assign(url)
      }
    },
  },
  created() {
    if (this.user) {
      this.checkSubscription()
    }

    getRedirectResult(getAuth()).then((result) => {
      // track new sign ups
      if (result.additionalUserInfo && result.additionalUserInfo.isNewUser) {
        window.fathom.trackGoal(import.meta.env.VITE_FATHOM_GOAL_ACCOUNT_REGISTRATION, 0)
      }

      if (window.location.hash === '#pro') {
        this.checkSubscription().then(() => {
          if (!this.subscribed) {
            this.subscribe()
          }
        })
      } else {
        open({ name: 'new_doc' })
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
