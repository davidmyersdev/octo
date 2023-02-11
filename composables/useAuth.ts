import { useOnline } from '@vueuse/core'
import { type AuthProvider, type UserInfo as ProviderInfo, getAuth, getRedirectResult, GithubAuthProvider, GoogleAuthProvider, isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink, signInWithRedirect, TwitterAuthProvider } from 'firebase/auth'
import { type Ref } from 'vue'
import { useStore } from 'vuex'
import { type Tier } from '#root/composables/useTiers'

export interface AuthMagicLinkForm {
  confirmed: boolean,
  confirming: boolean,
  email: string,
  error: string,
}

export interface AuthSocialForm {
  confirmed: boolean,
  confirming: boolean,
  error: string,
}

export type AuthProviderType = 'github' | 'google' | 'twitter'

export interface User {
  id?: string,
  providers: ProviderInfo[],
  roles: UserRole[],
}

export type UserRole = 'ambassador' | 'user' | 'subscriber'

export const providers: Record<AuthProviderType, () => AuthProvider> = {
  github: () => new GithubAuthProvider(),
  google: () => new GoogleAuthProvider(),
  twitter: () => new TwitterAuthProvider(),
}

export const useAuthFlow = () => {
  const route = useRoute()
  const isMagicLinkFlow = computed(() => route.query.flow === 'magic-link')
  const isSocialFlow = computed(() => route.query.flow === 'social')

  return {
    isMagicLinkFlow,
    isSocialFlow,
  }
}

export const useAuthForm = ({ clearOnChange = true }: { clearOnChange?: boolean } = {}): AuthMagicLinkForm => {
  const form = reactive({
    confirmed: false,
    confirming: false,
    email: '',
    error: '',
  })

  if (clearOnChange) {
    watch(() => form.email, () => {
      form.error = ''
      form.confirmed = false
      form.confirming = false
    })
  }

  return form
}

export const useMagicLink = () => {
  const isMagicLink = computed(() => isSignInWithEmailLink(getAuth(), location.href))
  const isOnline = useOnline()
  const emailAddress = inject<Ref<string>>('email')!
  const isOriginalClient = computed(() => !!emailAddress)
  const router = useRouter()
  const store = useStore()
  const { public: { fathomEventAccountRegistration } } = useConfig()

  return {
    emailAddress,
    isMagicLink,
    isOriginalClient,
    sendMagicLinkEmail: async ({ form, tier }: { form: AuthMagicLinkForm, tier: Tier }) => {
      if (!isOnline.value) {
        form.error = 'A network connection cannot be established'
        form.confirming = false

        return false
      }

      if (!form.email) {
        form.error = 'Your email is required for this sign-in method'
        form.confirming = false

        return false
      }

      const accountPath = router.resolve({ path: `/account`, query: { flow: 'magic-link', tier: tier.name } }).href
      const actionCodeSettings = {
        url: `${location.protocol}//${location.host}${accountPath}`,
        handleCodeInApp: true,
      }

      return sendSignInLinkToEmail(getAuth(), form.email, actionCodeSettings).then(() => {
        // If the user signs in on the same device, we do not need to prompt for their email address after clicking
        // the magic link.
        // https://firebase.google.com/docs/auth/web/email-link-auth#security_concerns
        localStorage.setItem('email', form.email)

        form.confirming = false
        form.confirmed = true

        return true
      }).catch((error) => {
        form.confirming = false

        if (error.code === 'auth/invalid-email') {
          form.error = 'This email address is invalid'

          return false
        }

        form.error = 'An unknown error occurred'

        return false
      })
    },
    signInWithMagicLink: async (form: AuthMagicLinkForm) => {
      if (!isOnline) {
        form.error = 'A network connection cannot be established'
        form.confirming = false

        return false
      }

      if (!form.email) {
        form.error = 'Your email is required to complete magic link sign-in'
        form.confirming = false

        return false
      }

      return signInWithEmailLink(getAuth(), form.email, location.href).then((result) => {
        // @ts-ignore
        if (result.additionalUserInfo && result.additionalUserInfo.isNewUser) {
          window.fathom?.trackGoal(fathomEventAccountRegistration, 0)
        }

        form.confirming = false
        form.confirmed = true

        localStorage.setItem('octo/welcome/v1', 'done')
        store.commit('SET_SHOW_WELCOME', false)

        return true
      }).catch((error) => {
        form.confirming = false

        if (error.code === 'auth/invalid-email') {
          form.error = 'This email is incorrect or invalid'

          return false
        }

        if (error.code === 'auth/invalid-action-code') {
          form.error = 'This magic link has expired or is invalid'

          return false
        }

        form.error = 'An unknown error occurred'

        return false
      })
    },
  }
}

export const useSocial = () => {
  const route = useRoute()
  const router = useRouter()

  return {
    redirectToSocial: async ({ provider: type, tier }: { provider: AuthProviderType, tier: Tier }) => {
      const provider = providers[type]

      router.push({
        ...route,
        query: {
          ...route.query,
          flow: 'social',
          tier: tier.name,
        },
      })

      return signInWithRedirect(getAuth(), provider())
    },
    signInWithSocial: async (form: Ref<AuthSocialForm>) => {
      return getRedirectResult(getAuth()).then((result) => {
        if (!result) {
          return false as const
        }

        return result
      }).catch((error) => {
        if (error.code === 'auth/account-exists-with-different-credential') {
          form.value.error = 'This email address is already linked to an account.'

          return false
        }

        // Unknown error
        console.warn({ error })

        return false as const
      })
    },
  }
}

export const useSubscription = () => {
  const user = useUser()
  const isSubscribed = computed(() => {
    return user.value.roles.includes('ambassador') || user.value.roles.includes('subscriber')
  })

  return {
    isSubscribed,
    user,
  }
}

export const useUser = () => {
  return inject<Ref<User>>('user')!
}
