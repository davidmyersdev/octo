import { useOnline } from '@vueuse/core'
import { type AuthProvider, type UserInfo as ProviderInfo, getAuth, getRedirectResult, GithubAuthProvider, GoogleAuthProvider, isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink, signInWithRedirect, TwitterAuthProvider } from 'firebase/auth'
import { type Ref } from 'vue'
import { useStore } from 'vuex'
import { type Tier } from '#composables/useTiers'
import { track } from '#helpers/analytics'

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

export const useAuth = () => {
  const isMagicLinkModalClosed = ref(false)
  const isStripeModalClosed = ref(false)
  const isRedirectingToStripe = ref(false)
  const stripeError = ref('')
  const router = useRouter()
  const { isMagicLinkFlow, isSocialFlow } = useAuthFlow()
  const modalForm = useAuthForm()
  const { emailAddress, isMagicLink, isOriginalClient, sendMagicLinkEmail, signInWithMagicLink } = useMagicLink()
  const { active: activeTier, basic: basicTier, personal: personalTier, pro: proTier } = useTiers()
  const { redirectToSocial, signInWithSocial } = useSocial()
  const { redirectToStripe } = useStripe()

  if (isSocialFlow.value) {
    const flowSocialForm = computed({
      get: () => {
        return activeTier.value.forms.social
      },
      set: (value) => {
        activeTier.value.forms.social = value
      },
    })

    signInWithSocial(flowSocialForm).then((result) => {
      if (!result) {
        if (!flowSocialForm.value.error) {
          flowSocialForm.value.error = 'You were not signed in. Please try again.'
        }

        return false
      }

      flowSocialForm.value.confirmed = true

      if (activeTier.value.isPaying) {
        isRedirectingToStripe.value = true

        redirectToStripe().then((isValid) => {
          if (!isValid) {
            stripeError.value = 'An unexpected error occurred while communicating with Stripe.'
          }
        })
      } else {
        router.push({ path: '/docs/new' })
      }
    }).catch((error) => {
      console.warn({ error })
    })
  }

  if (isMagicLinkFlow.value) {
    if (isOriginalClient.value && emailAddress.value) {
      modalForm.email = emailAddress.value

      signInWithMagicLink(modalForm).then((isSignedIn) => {
        if (isSignedIn) {
          isMagicLinkModalClosed.value = true

          if (activeTier?.value.isPaying) {
            isRedirectingToStripe.value = true

            redirectToStripe().then((isValid) => {
              if (!isValid) {
                stripeError.value = 'An unexpected error occurred while communicating with Stripe.'
              }
            })
          } else {
            router.push({ path: '/docs/new' })
          }
        }
      })
    }
  }

  const onMagicLinkModalClose = () => {
    isMagicLinkModalClosed.value = true
  }

  const onStripeModalClose = () => {
    isStripeModalClosed.value = true
  }

  const onMagicLink = ({ form, tier  }: { form: AuthMagicLinkForm, tier: Tier }) => {
    sendMagicLinkEmail({ form, tier })
  }

  const onMagicLinkConfirm = async (form: AuthMagicLinkForm) => {
    const isSignedIn = await signInWithMagicLink(form)

    if (isSignedIn) {
      isMagicLinkModalClosed.value = true

      if (activeTier?.value.isPaying) {
        isRedirectingToStripe.value = true

        redirectToStripe().then((isValid) => {
          if (!isValid) {
            stripeError.value = 'An unexpected error occurred while communicating with Stripe.'
          }
        })
      } else {
        router.push({ path: '/docs/new' })
      }
    }
  }

  const onSocialLink = ({ provider, tier }: { provider: AuthProviderType, tier: Tier }) => {
    redirectToSocial({ provider, tier })
  }

  const onUpgrade = () => {
    isRedirectingToStripe.value = true

    redirectToStripe().then((isValid) => {
      if (!isValid) {
        stripeError.value = 'An unexpected error occurred while communicating with Stripe.'
      }
    })
  }

  return {
    basicTier,
    isMagicLink,
    isMagicLinkFlow,
    isMagicLinkModalClosed,
    isOriginalClient,
    isRedirectingToStripe,
    isStripeModalClosed,
    modalForm,
    onMagicLink,
    onMagicLinkConfirm,
    onMagicLinkModalClose,
    onSocialLink,
    onStripeModalClose,
    onUpgrade,
    personalTier,
    proTier,
    stripeError,
  }
}

export const useAuthFlow = () => {
  const router = useRouter()
  const route = computed(() => router.currentRoute.value)
  const isMagicLinkFlow = computed(() => route.value.query.flow === 'magic-link')
  const isSocialFlow = computed(() => route.value.query.flow === 'social')

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
          track(fathomEventAccountRegistration)
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
  const router = useRouter()
  const route = computed(() => router.currentRoute.value)

  return {
    redirectToSocial: async ({ provider: type, tier }: { provider: AuthProviderType, tier: Tier }) => {
      const provider = providers[type]

      try {
        await router.push({
          ...route,
          query: {
            ...route.value.query,
            flow: 'social',
            tier: tier.name,
          },
        })
      } catch (error) {
        console.error(error)
      }

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
