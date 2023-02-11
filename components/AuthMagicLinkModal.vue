<script lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/24/solid'
import { type PropType, defineComponent } from 'vue'
import Modal from '#root/components/Modal.vue'
import { type AuthMagicLinkForm } from '#root/composables'

export default defineComponent({
  components: {
    EnvelopeIcon,
    Modal,
  },
  props: {
    form: {
      default: () => ({
        email: '',
        error: '',
        confirmed: false,
        confirming: false,
      }),
      type: Object as PropType<AuthMagicLinkForm>
    },
  },
  emits: ['close', 'confirm'],
  setup(props, { emit }) {
    const close = () => {
      emit('close')
    }

    const confirm = () => {
      props.form.confirming = true

      emit('confirm', props.form)
    }

    return {
      close,
      confirm,
    }
  },
})
</script>

<template>
  <Modal @close="close">
    <template #header>
      <span>Complete <strong>magic link</strong> sign-in</span>
    </template>
    <div>
      <p>For your security, please confirm your email address.</p>
      <label class="flex items-center gap-3 cursor-text rounded px-3 py-2 shadow outline-none mt-4 border">
        <EnvelopeIcon class="h-5 w-5" />
        <input v-model="form.email" class="bg-transparent flex-grow outline-none" placeholder="Email address" type="email">
      </label>
      <p v-if="form.error" class="mt-1 text-red-500">{{ form.error }}</p>
      <p v-else-if="form.confirming || form.confirmed" class="mt-1">
        <span>Verifying your email... <strong v-if="form.confirmed">email verified</strong></span>
      </p>
    </div>
    <template #footer>
      <div class="flex items-center justify-end gap-2">
        <button type="submit" class="button-flat button-size-medium" @click="confirm">Confirm</button>
      </div>
    </template>
  </Modal>
</template>
