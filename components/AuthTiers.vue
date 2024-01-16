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
      class="flex-shrink basis-1/2"
      data-test-auth-tier-personal
      @magic-link="onMagicLink"
      @social-link="onSocialLink"
      @upgrade="onUpgrade"
    >
      <template #perks-description>
        <span>You get</span>
      </template>
      <template #perks>
        <CheckList>
          <CheckListItem>Unlimited private docs</CheckListItem>
          <CheckListItem>Unlimited syncing across all your devices</CheckListItem>
          <CheckListItem>Client-side encryption</CheckListItem>
          <CheckListItem>7 days of backups and retention</CheckListItem>
        </CheckList>
      </template>
    </AuthTier>
    <AuthTier
      :tier="proTier"
      class="flex-shrink basis-1/2"
      data-test-auth-tier-pro
      @magic-link="onMagicLink"
      @social-link="onSocialLink"
      @upgrade="onUpgrade"
    >
      <template #price>
        <span><small class="font-normal text-base align-text-top">$</small>{{ proTier.price }}</span>
      </template>
      <template #perks-description>
        <span>You get everything in <strong class="font-semibold">Free</strong>, and</span>
      </template>
      <template #perks>
        <CheckList>
          <CheckListItem>Unlimited public docs</CheckListItem>
          <CheckListItem>Unlimited attachments</CheckListItem>
          <CheckListItem>30 days of backups and retention</CheckListItem>
          <CheckListItem>Early access to new features</CheckListItem>
          <CheckListItem>1% of revenue <a href="https://stripe.com/climate" target="_blank" rel="noopener noreferrer" class="text-primary">funds carbon removal</a></CheckListItem>
        </CheckList>
      </template>
    </AuthTier>
    <AuthMagicLinkModal
      v-if="isMagicLinkFlow && !isMagicLinkModalClosed"
      :form="modalForm"
      @close="onMagicLinkModalClose"
      @confirm="onMagicLinkConfirm"
    />
    <AuthStripeModal v-else-if="isRedirectingToStripe && !isStripeModalClosed" :error="stripeError" @close="onStripeModalClose" />
  </section>
</template>
