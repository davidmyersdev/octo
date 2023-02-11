import { type AuthMagicLinkForm, type AuthSocialForm, useAuthForm, useSubscription, useUser } from '#root/composables/useAuth'
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
  const route = useRoute()
  const personal = usePersonalTier()
  const pro = useProTier()
  const active = personal.value.active || route.query.tier === 'personal' ? personal
    : pro.value.active || route.query.tier === 'pro' ? pro
    : undefined

  return {
    active,
    personal,
    pro,
  }
}

export const usePersonalTier = () => {
  const route = useRoute()
  const { isSubscribed, user } = useSubscription()

  return computed<Tier>(() => {
    return {
      active: !!user.value.id && !isSubscribed.value,
      allowSignUp: !user.value.id,
      allowUpgrade: false,
      description: 'For individuals who want to maintain a personal knowledge base',
      displayName: 'Personal',
      forms: {
        magicLink: useAuthForm(),
        social: useAuthForm(),
      },
      isPaying: false,
      isTier: route.query.tier === 'personal',
      name: 'personal',
      price: 'Free',
      priceFrequency: 'forever',
    }
  })
}

export const useProTier = () => {
  const route = useRoute()
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
      isPaying: route.query.tier === 'pro',
      isTier: route.query.tier === 'pro',
      name: 'pro',
      price: '4',
      priceFrequency: 'monthly',
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
