<template>
  <div class="md:flex items-center">
    <Key v-if="active" class="bg-gray-200 dark:bg-gray-900"><slot/></Key>
  </div>
</template>

<script>
import Key from '@/components/Key';

export default {
  name: 'ModKKey',
  components: {
    Key,
  },
  computed: {
    active() {
      return this.$store.state.keybindings.listening;
    },
  },
}
</script>
