<script lang="ts">
import AuthMagicLinkModal from '/components/AuthMagicLinkModal.vue'
import AuthStripeModal from '/components/AuthStripeModal.vue'
import AuthTier from '/components/AuthTier.vue'
import CheckList from '/components/CheckList.vue'
import CheckListItem from '/components/CheckListItem.vue'
import { type AuthMagicLinkForm, type AuthProviderType, type Tier, useAuthFlow, useAuthForm, useMagicLink, useSocial, useStripe, useTiers } from '/composables'

export default defineComponent({
  components: {
    AuthMagicLinkModal,
    AuthStripeModal,
    AuthTier,
    CheckList,
    CheckListItem,
  },
  setup() {
    const isMagicLinkModalClosed = ref(false)
    const isStripeModalClosed = ref(false)
    const isRedirecting = ref(false)
    const stripeError = ref('')
    const router = useRouter()
    const { isMagicLinkFlow, isSocialFlow } = useAuthFlow()
    const modalForm = useAuthForm()
    const { emailAddress, isMagicLink, isOriginalClient, sendMagicLinkEmail, signInWithMagicLink } = useMagicLink()
    const { active: activeTier, personal: personalTier, pro: proTier } = useTiers()
    const { redirectToSocial, signInWithSocial } = useSocial()
    const { redirectToStripe } = useStripe()

    if (activeTier) {
      const flowSocialForm = isSocialFlow.value ? activeTier.value.forms.social : undefined

      if (flowSocialForm) {
        signInWithSocial(flowSocialForm).then((result) => {
          if (!result) {
            flowSocialForm.error = 'You were not signed in. Please try again.'

            return false
          }

          flowSocialForm.confirmed = true

          if (activeTier.value.isPaying) {
            isRedirecting.value = true

            redirectToStripe().then((isValid) => {
              if (!isValid) {
                stripeError.value = 'An unexpected error occurred while communicating with Stripe.'
              }
            })
          }
        }).catch((error) => {
          console.warn({ error })
        })
      }
    }

    if (isMagicLinkFlow.value) {
      if (isOriginalClient.value && emailAddress.value) {
        modalForm.email = emailAddress.value

        signInWithMagicLink(modalForm).then((isSignedIn) => {
          if (isSignedIn) {
            isMagicLinkModalClosed.value = true

            if (activeTier?.value.isPaying) {
              isRedirecting.value = true

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
          isRedirecting.value = true

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
      isRedirecting.value = true

      redirectToStripe().then((isValid) => {
        if (!isValid) {
          stripeError.value = 'An unexpected error occurred while communicating with Stripe.'
        }
      })
    }

    return {
      isMagicLink,
      isMagicLinkFlow,
      isMagicLinkModalClosed,
      isOriginalClient,
      isRedirecting,
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
  },
})
</script>

<template>
  <section class="flex flex-col justify-center lg:flex-row gap-4">
    <AuthTier
      :tier="personalTier"
      @magic-link="onMagicLink"
      @social-link="onSocialLink"
      @upgrade="onUpgrade"
      data-test-auth-tier-personal
    >
      <template #perks>
        <CheckList>
          <CheckListItem>Unlimited private docs</CheckListItem>
          <CheckListItem>Unlimited syncing across devices</CheckListItem>
          <CheckListItem>Automatic backups and retention</CheckListItem>
          <CheckListItem>Client-side encryption</CheckListItem>
        </CheckList>
      </template>
    </AuthTier>
    <AuthTier
      :tier="proTier"
      @magic-link="onMagicLink"
      @social-link="onSocialLink"
      @upgrade="onUpgrade"
      data-test-auth-tier-pro
    >
      <template #price>
        <span><small class="font-normal text-base align-text-top">$</small>{{ proTier.price }}</span>
      </template>
      <template #perks>
        <CheckList>
          <CheckListItem>Everything in <strong>Personal</strong></CheckListItem>
          <CheckListItem>Unlimited public docs</CheckListItem>
          <CheckListItem>Unlimited file attachments</CheckListItem>
          <CheckListItem>Realtime collaboration (coming soon)</CheckListItem>
          <CheckListItem>1% of revenue <a href="https://stripe.com/climate" target="_blank" rel="noopener noreferrer" class="text-primary">funds carbon removal</a></CheckListItem>
        </CheckList>
      </template>
    </AuthTier>
    <AuthMagicLinkModal v-if="isMagicLinkFlow && !isMagicLinkModalClosed" :form="modalForm" @close="onMagicLinkModalClose" @confirm="onMagicLinkConfirm" />
    <AuthStripeModal v-else-if="isRedirecting && !isStripeModalClosed" :error="stripeError" @close="onStripeModalClose" />
  </section>
</template>
