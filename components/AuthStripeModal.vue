<script lang="ts">
import { defineComponent } from 'vue'
import Modal from '/components/Modal.vue'

export default defineComponent({
  components: {
    Modal,
  },
  props: {
    error: {
      type: String,
    },
  },
  emits: ['close'],
  setup(_props, { emit }) {
    const close = () => {
      emit('close')
    }

    return {
      close,
    }
  },
})
</script>

<template>
  <Modal @close="close">
    <template #header>
      <span>Complete subscription at Stripe</span>
    </template>
    <div>
      <p v-if="error" class="mt-1 text-red-500">{{ error }}</p>
      <div v-else class="flex flex-col gap-4">
        <p>You will be redirected to Stripe in just a moment...</p>
      </div>
    </div>
  </Modal>
</template>
