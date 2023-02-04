<script lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/24/solid'
import { type PropType, defineComponent } from 'vue'
import Button from './CoreButton.vue'
import FormText from '/components/FormText.vue'
import { type AuthMagicLinkForm } from '/composables'

export default defineComponent({
  components: {
    Button,
    EnvelopeIcon,
    FormText,
  },
  props: {
    form: {
      default: () => ({
        confirmed: false,
        confirming: false,
        email: '',
        error: '',
      }),
      type: Object as PropType<AuthMagicLinkForm>
    },
  },
  emits: ['send'],
  setup(props, { emit }) {
    const send = () => {
      props.form.confirming = true

      emit('send', props.form)
    }

    return {
      send,
    }
  },
})
</script>

<template>
  <form @submit.prevent="send" class="flex flex-col gap-2">
    <FormText v-model="form.email" placeholder="Enter your email address" type="email">
      <template #icon>
        <EnvelopeIcon class="h-5 w-5" />
      </template>
    </FormText>
    <Button type="submit">
      <span>Send me a <strong>magic link</strong></span>
    </Button>
    <p v-if="form.error" class="text-red-500">{{ form.error }}</p>
    <p v-else-if="form.confirming || form.confirmed">
      <span>Sending your magic link... <strong v-if="form.confirmed">email sent</strong></span>
    </p>
  </form>
</template>
