import { type AuthMagicLinkForm, type AuthSocialForm, useAuthForm, useSubscription, useUser } from '#composables/useAuth'
import { addCheckout } from '#root/src/firebase/firestore'

export interface Tier {
  active: boolean,
  allowSignUp: boolean,
  allowUpgrade: boolean,
  description: string,
  displayName: string,
  forms: { magicLink: AuthMagicLinkForm, social: AuthSocialForm },
  isPaying: boolean,
  isTier: boolean,
  name: string,
  price: string,
  priceFrequency: string,
}

export const useTiers = () => {
  const router = useRouter()
  const route = computed(() => router.currentRoute.value)
  const basic = useBasicTier()
  const personal = usePersonalTier()
  const pro = useProTier()
  const active = (personal.value.active || route.value.query.tier === 'personal')
    ? personal
    : (pro.value.active || route.value.query.tier === 'pro')
        ? pro
        : basic

  return {
    active,
    basic,
    personal,
    pro,
  }
}

export const useBasicTier = () => {
  const router = useRouter()
  const route = computed(() => router.currentRoute.value)
  const { isSubscribed, user } = useSubscription()

  return computed<Tier>(() => {
    return {
      active: !!user.value.id && !isSubscribed.value,
      allowSignUp: !user.value.id,
      allowUpgrade: false,
      description: '',
      displayName: '',
      forms: {
        magicLink: useAuthForm(),
        social: useAuthForm(),
      },
      isPaying: false,
      isTier: route.value.query.tier === 'basic',
      name: 'basic',
      price: '',
      priceFrequency: '',
    }
  })
}

export const usePersonalTier = () => {
  const router = useRouter()
  const route = computed(() => router.currentRoute.value)
  const { isSubscribed, user } = useSubscription()

  return computed<Tier>(() => {
    return {
      active: !!user.value.id && !isSubscribed.value,
      allowSignUp: !user.value.id,
      allowUpgrade: false,
      description: 'For individuals who want to maintain a personal knowledge base',
      displayName: 'Free',
      forms: {
        magicLink: useAuthForm(),
        social: useAuthForm(),
      },
      isPaying: false,
      isTier: route.value.query.tier === 'personal',
      name: 'personal',
      price: '',
      priceFrequency: 'forever',
    }
  })
}

export const useProTier = () => {
  const router = useRouter()
  const route = computed(() => router.currentRoute.value)
  const { isSubscribed, user } = useSubscription()

  return computed<Tier>(() => {
    return {
      active: !!user.value.id && isSubscribed.value,
      allowSignUp: !user.value.id,
      allowUpgrade: !!user.value.id && !isSubscribed.value,
      description: 'For professionals who want to collaborate on documentation and more',
      displayName: 'Pro',
      forms: {
        magicLink: useAuthForm(),
        social: useAuthForm(),
      },
      isPaying: route.value.query.tier === 'pro',
      isTier: route.value.query.tier === 'pro',
      name: 'pro',
      price: '4',
      priceFrequency: '/month',
    }
  })
}

export const useStripe = () => {
  const user = useUser()

  return {
    redirectToStripe: async () => {
      if (user.value.id) {
        const checkoutRef = await addCheckout({ userId: user.value.id })
        const data = checkoutRef.data()

        if (data?.error) {
          console.warn({ error: data.error })

          return false
        }

        window.location.assign(data?.url)

        return true
      }

      return false
    },
  }
}
