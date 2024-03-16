<script lang="ts">
import { type PropType, computed, defineComponent } from 'vue'
import LocalGitHubIcon from '#root/assets/github.svg?component'
import LocalGoogleIcon from '#root/assets/google.svg?component'
import { type AuthSocialForm } from '#composables/useAuth'

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
    LocalGitHubIcon,
    LocalGoogleIcon,
  },
  props: {
    form: {
      default: () => ({
        confirmed: false,
        confirming: false,
        error: '',
      }),
      type: Object as PropType<AuthSocialForm>,
    },
    providers: {
      default: () => ['github', 'google'],
      type: Array,
    },
  },
  emits: ['provider'],
  setup(props, { emit }) {
    const allowGitHub = computed(() => props.providers.includes('github'))
    const allowGoogle = computed(() => props.providers.includes('google'))
    const clickProvider = (provider: string) => {
      props.form.confirmed = false
      props.form.confirming = true
      props.form.error = ''

      emit('provider', provider)
    }

    return {
      allowGitHub,
      allowGoogle,
      clickProvider,
    }
  },
})
</script>

<template>
  <section class="flex flex-col gap-3">
    <CoreButton
      v-if="allowGitHub"
      :layer="1"
      data-test-auth-social-github
      data-test-id="sign-in-with-github"
      @click="clickProvider('github')"
    >
      <LocalGitHubIcon class="h-5 w-5" />
      <span>Continue with GitHub</span>
    </CoreButton>
    <CoreButton
      :layer="1"
      data-test-auth-social-google
      data-test-id="sign-in-with-google"
      @click="clickProvider('google')"
    >
      <LocalGoogleIcon class="h-5 w-5" />
      <span>Continue with Google</span>
    </CoreButton>
    <p v-if="form.error" class="text-red-500">
      {{ form.error }}
    </p>
    <p v-else-if="form.confirming">
      <span>Redirecting to your provider...</span>
    </p>
  </section>
</template>
