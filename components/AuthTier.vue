<script lang="ts">
import { ArrowUpCircleIcon } from '@heroicons/vue/24/outline'
import { type PropType, defineComponent } from 'vue'
import AuthMagicLink from '#root/components/AuthMagicLink.vue'
import AuthSocialLinks from '#root/components/AuthSocialLinks.vue'
import CoreButton from '#root/components/CoreButton.vue'
import CorePanel from '#root/components/CorePanel.vue'
import { type AuthMagicLinkForm, type Tier } from '#root/composables'

export default defineComponent({
  components: {
    ArrowUpCircleIcon,
    AuthMagicLink,
    AuthSocialLinks,
    CoreButton,
    CorePanel,
  },
  props: {
    tier: {
      default: () => ({
        active: false,
        allowUpgrade: false,
        price: undefined,
        priceFrequency: undefined,
      }),
      type: Object as PropType<Tier>,
    },
  },
  emits: ['magicLink', 'socialLink', 'upgrade'],
  setup(props, { emit }) {
    const onMagicLink = (form: AuthMagicLinkForm) => {
      emit('magicLink', {
        form,
        tier: props.tier,
      })
    }
    const onSocialLink = (provider: string) => {
      emit('socialLink', {
        provider,
        tier: props.tier,
      })
    }
    const onUpgrade = () => {
      emit('upgrade', {
        tier: props.tier,
      })
    }

    return {
      onMagicLink,
      onSocialLink,
      onUpgrade,
    }
  },
})
</script>

<template>
  <CorePanel class="flex-shrink flex-basis-1/2">
    <slot name="alert" />
    <h3 class="text-3xl flex flex-col gap-2 lg:flex-row justify-between">
      <span class="font-bold flex items-center">
        <span><slot name="displayName">{{ tier.displayName }}</slot></span>
        <span v-if="tier.active" class="bg-gray-200 dark:bg-gray-900 text-base font-normal py-0.5 px-2 rounded ml-2">Active</span>
      </span>
      <span class="font-semibold" v-if="tier.price && tier.priceFrequency"><span><slot name="price">{{ tier.price }}</slot></span> <span class="text-base font-normal"><slot name="priceFrequency">{{ tier.priceFrequency }}</slot></span></span>
    </h3>
    <p><slot name="description">{{ tier.description }}</slot></p>
    <section v-if="tier.allowUpgrade" class="flex flex-col gap-2">
      <CoreButton @click="onUpgrade" class="text-primary">
        <ArrowUpCircleIcon class="h-6" />
        <span>Upgrade Subscription</span>
      </CoreButton>
    </section>
    <section v-else-if="tier.allowSignUp" class="flex flex-col gap-2">
      <AuthMagicLink :form="tier.forms.magicLink" @send="onMagicLink" />
      <div class="text-center my-2">&mdash; or &mdash;</div>
      <AuthSocialLinks :form="tier.forms.social" @provider="onSocialLink" />
    </section>
    <p class="font-semibold">This is what you get</p>
    <slot name="perks" />
  </CorePanel>
</template>
