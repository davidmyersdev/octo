<script lang="ts">
import { type PropType, defineComponent } from 'vue'
import AuthMagicLink from '#root/components/AuthMagicLink.vue'
import AuthSocialLinks from '#root/components/AuthSocialLinks.vue'
import CoreButton from '#root/components/CoreButton.vue'
import CoreCard from '#root/components/CoreCard.vue'
import { type AuthMagicLinkForm } from '#composables/useAuth'
import { type Tier } from '#composables/useTiers'

export default defineComponent({
  components: {
    AuthMagicLink,
    AuthSocialLinks,
    CoreButton,
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
      CoreCard,
      onMagicLink,
      onSocialLink,
      onUpgrade,
    }
  },
})
</script>

<template>
  <CoreLayer :as="CoreCard" class="flex flex-col gap-4" outline>
    <slot v-if="$slots.alert" name="alert" />
    <h3 v-if="tier.displayName || tier.price" class="text-3xl flex gap-2 justify-between">
      <span v-if="tier.displayName" class="font-bold flex items-center">
        <span><slot name="displayName">{{ tier.displayName }}</slot></span>
        <span v-if="tier.active" class="border border-layer text-base font-normal py-0.5 px-2 rounded ml-2">Active</span>
      </span>
      <span class="font-semibold"><span><slot name="price">{{ tier.price }}</slot></span> <span class="text-base font-normal"><slot name="priceFrequency">{{ tier.priceFrequency }}</slot></span></span>
    </h3>
    <p v-if="$slots.description"><slot name="description">{{ tier.description }}</slot></p>
    <section v-if="tier.allowUpgrade" class="flex flex-col gap-2">
      <CoreButton class="text-primary" @click="onUpgrade">
        <Icon name="ArrowUpCircle" />
        <span>Upgrade Subscription</span>
      </CoreButton>
    </section>
    <section v-else-if="tier.allowSignUp" class="flex flex-col gap-2">
      <AuthMagicLink :form="tier.forms.magicLink" @send="onMagicLink" />
      <div class="text-center my-2">&mdash; or &mdash;</div>
      <AuthSocialLinks :form="tier.forms.social" @provider="onSocialLink" />
    </section>
    <p v-if="$slots.perks">
      <slot name="perks-description">This is what you get</slot>
    </p>
    <slot name="perks" />
  </CoreLayer>
</template>
