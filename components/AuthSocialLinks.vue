<script lang="ts">
import { format } from 'path'
import { type PropType, computed, defineComponent } from 'vue'
import Button from './CoreButton.vue'
import LocalGitHubIcon from '/components/LocalIcons/GitHub.vue'
import LocalGoogleIcon from '/components/LocalIcons/Google.vue'
import LocalTwitterIcon from '/components/LocalIcons/Twitter.vue'
import { type AuthSocialForm } from '/composables'

/**
 * @example
 *
 * <AuthSocialLinks
 *   :providers="['github', 'google']"
 *   @action="onAction"
 * />
 */
export default defineComponent({
  components: {
    Button,
    LocalGitHubIcon,
    LocalGoogleIcon,
    LocalTwitterIcon,
  },
  emits: ['provider'],
  props: {
    form: {
      default: () => ({
        confirmed: false,
        confirming: false,
        error: '',
      }),
      type: Object as PropType<AuthSocialForm>
    },
    providers: {
      default: () => ['github', 'google', 'twitter'],
      type: Array,
    },
  },
  setup(props, { emit }) {
    const allowGitHub = computed(() => props.providers.includes('github'))
    const allowGoogle = computed(() => props.providers.includes('google'))
    const allowTwitter = computed(() => props.providers.includes('twitter'))
    const clickProvider = (provider: string) => {
      props.form.confirmed = false
      props.form.confirming = true
      props.form.error = ''

      emit('provider', provider)
    }

    return {
      allowGitHub,
      allowGoogle,
      allowTwitter,
      clickProvider,
    }
  },
})
</script>

<template>
  <section class="flex flex-col gap-2">
    <Button v-if="allowGitHub" @click="clickProvider('github')">
      <LocalGitHubIcon class="h-5 w-5" />
      <span>Continue with GitHub</span>
    </Button>
    <Button @click="clickProvider('google')">
      <LocalGoogleIcon class="h-5 w-5" />
      <span>Continue with Google</span>
    </Button>
    <Button @click="clickProvider('twitter')">
      <LocalTwitterIcon class="h-5 w-5" />
      <span>Continue with Twitter</span>
    </Button>
    <p v-if="form.error" class="text-red-500">{{ form.error }}</p>
    <p v-else-if="form.confirming">
      <span>Redirecting to your provider...</span>
    </p>
  </section>
</template>
