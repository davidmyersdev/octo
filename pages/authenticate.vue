<script lang="ts" setup>
if (globalThis.isNuxt) {
  definePageMeta({
    layout: 'minimal',
  })
}

const {
  basicTier,
  isMagicLinkFlow,
  isMagicLinkModalClosed,
  modalForm,
  onMagicLink,
  onMagicLinkConfirm,
  onMagicLinkModalClose,
  onSocialLink,
} = useAuth()
</script>

<template>
  <div class="flex flex-col gap-8 m-auto max-w-md mt-8 md:mt-20 p-4 text-center w-full">
    <h1 class="text-3xl text-center font-semibold">Sign In</h1>
    <div class="m-auto max-w-sm w-full">
      <AuthTier
        :tier="basicTier"
        @magic-link="onMagicLink"
        @social-link="onSocialLink"
        data-test-auth-tier-personal
      />
    </div>
    <p class="text-gray-500"><small>By signing in, you acknowledge that you have read and agree to Octo's <CoreLink :to="{ path: '/privacy-policy' }" class="underline">Privacy Policy</CoreLink> and <CoreLink :to="{ path: '/terms-and-conditions' }" class="underline">Terms &amp; Conditions</CoreLink>.</small></p>
    <AuthMagicLinkModal v-if="isMagicLinkFlow && !isMagicLinkModalClosed" :form="modalForm" @close="onMagicLinkModalClose" @confirm="onMagicLinkConfirm" />
  </div>
</template>
