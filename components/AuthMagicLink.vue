<script lang="ts">
import { type PropType, defineComponent } from 'vue'
import FormText from '#root/components/FormText.vue'
import { type AuthMagicLinkForm } from '#composables/useAuth'

export default defineComponent({
  components: {
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
      type: Object as PropType<AuthMagicLinkForm>,
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
  <form class="flex flex-col gap-3" @submit.prevent="send">
    <FormText v-model="form.email" label="Email" placeholder="Enter your email address..." type="email">
      <template #icon>
        <Icon name="Email" />
      </template>
    </FormText>
    <div class="flex flex-col gap-1">
      <CoreButton type="submit">
        <span>Send me a <strong>magic link</strong></span>
      </CoreButton>
      <p v-if="form.error" class="text-red-500">{{ form.error }}</p>
      <p v-else-if="form.confirming || form.confirmed">
        <span>Sending your magic link... <strong v-if="form.confirmed">email sent</strong></span>
      </p>
    </div>
  </form>
</template>
