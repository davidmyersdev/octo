<script lang="ts">
import AuthMagicLinkModal from '#root/components/AuthMagicLinkModal.vue'
import AuthStripeModal from '#root/components/AuthStripeModal.vue'
import AuthTier from '#root/components/AuthTier.vue'
import CheckList from '#root/components/CheckList.vue'
import CheckListItem from '#root/components/CheckListItem.vue'

export default defineComponent({
  components: {
    AuthMagicLinkModal,
    AuthStripeModal,
    AuthTier,
    CheckList,
    CheckListItem,
  },
  setup() {
    const {
      isMagicLinkFlow,
      isMagicLinkModalClosed,
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
    } = useAuth()

    return {
      isMagicLinkFlow,
      isMagicLinkModalClosed,
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
    <AuthStripeModal v-else-if="isRedirectingToStripe && !isStripeModalClosed" :error="stripeError" @close="onStripeModalClose" />
  </section>
</template>
