<template>
  <section>
    <div v-if="accountConflict" role="alert" class="flex items-center rounded p-2 bg-blue-100 dark:bg-blue-400 text-gray-900 mb-4 shadow">
      <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <span class="ml-3">You have an account with another provider. If you want to link these accounts, you need to sign in with the correct provider first.</span>
    </div>
    <div class="flex flex-col justify-center lg:flex-row gap-4">
      <div class="flex-shrink flex-basis-1/2 bg-gray-100 dark:bg-darkest shadow rounded p-4">
        <h3 class="flex items-center text-2xl font-bold mb-2">
          <span>Personal</span>
          <span v-if="user && !subscribed" class="bg-gray-200 dark:bg-gray-900 text-base font-normal py-0.5 px-2 rounded ml-2">Active</span>
        </h3>
        <p class="mb-4">For hobbyists, students, and content consumers</p>
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
      <div class="flex-grow flex-shrink flex-basis-1/2 bg-gray-100 dark:bg-darkest shadow rounded p-4 ring ring-blue-400 ring-opacity-75">
        <h3 class="flex items-center text-2xl font-bold mb-2">
          <span>Pro</span>
          <span v-if="user && subscribed" class="bg-gray-200 dark:bg-gray-900 text-base font-normal py-0.5 px-2 rounded ml-2">Active</span>
        </h3>
        <p class="mb-4">For professionals, authors, and content creators</p>
        <p class="text-4xl font-bold mb-4"><s class="font-normal text-3xl">$7</s> <span class="text-blue-400 ml-1">$4</span> <span class="text-base font-normal">/mo</span></p>
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
            <span>Unlimited attachments (coming soon)</span>
          </li>
          <li class="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Unlimited cross-posting <sup>1</sup> (coming soon)</span>
          </li>
          <li class="mt-4 text-sm">
            <span><sup>1</sup> Publish directly to dev.to, hashnode.com, and medium.com</span>
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

import { authInstance, authNamespace, firestoreInstance } from '@/firebase'
import { SET_STRIPE_MODAL_VISIBILITY } from '@/store'

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
    signInGithubPro() {
      window.location.hash = 'pro'

      this.trackCtaContinueWithPro()
      this.signInGithub()
    },
    signInGoogle() {
      authInstance.signInWithRedirect(new authNamespace.GoogleAuthProvider())
    },
    signInGooglePro() {
      window.location.hash = 'pro'

      this.trackCtaContinueWithPro()
      this.signInGoogle()
    },
    signInTwitter() {
      authInstance.signInWithRedirect(new authNamespace.TwitterAuthProvider())
    },
    signInTwitterPro() {
      window.location.hash = 'pro'

      this.trackCtaContinueWithPro()
      this.signInTwitter()
    },
    signOut() {
      authInstance.signOut()
    },
    trackCtaContinueWithPro() {
      window.fathom.trackGoal(process.env.VUE_APP_FATHOM_EVENT_CTA_CONTINUE_WITH_PRO, 0)
    },
    trackCtaUpgradeToPro() {
      window.fathom.trackGoal(process.env.VUE_APP_FATHOM_EVENT_CTA_UPGRADE_TO_PRO, 0)
    },
    upgrade() {
      this.trackCtaUpgradeToPro()
      this.subscribe()
    },
    async checkSubscription() {
      await authInstance.currentUser.getIdToken(true)

      const decodedToken = await authInstance.currentUser.getIdTokenResult()

      this.subscribed = decodedToken.claims.stripeRole === 'subscriber'
    },
    async subscribe() {
      this.$store.dispatch(SET_STRIPE_MODAL_VISIBILITY, true)

      const docRef = await firestoreInstance
        .collection('customers')
        .doc(this.user.uid)
        .collection('checkout_sessions')
        .add({
          price: process.env.VUE_APP_STRIPE_MONTHLY_PRICE,
          success_url: window.location.href,
          cancel_url: window.location.href,
        })

      docRef.onSnapshot((snap) => {
        const { error, url } = snap.data()

        if (error) {
          console.error({ error })

          this.stripeError = error.message

          this.$store.dispatch(SET_STRIPE_MODAL_VISIBILITY, false)
        }

        if (url) {
          window.location.assign(url)
        }
      })
    },
  },
  created() {
    if (this.user) {
      this.checkSubscription()
    }

    authInstance.getRedirectResult().then((result) => {
      // track new sign ups
      if (result.additionalUserInfo && result.additionalUserInfo.isNewUser) {
        window.fathom.trackGoal(process.env.VUE_APP_FATHOM_GOAL_ACCOUNT_REGISTRATION, 0)
      }

      if (window.location.hash === '#pro') {
        this.checkSubscription().then(() => {
          if (!this.subscribed) {
            this.subscribe()
          }
        })
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
