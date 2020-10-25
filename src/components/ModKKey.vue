<template>
  <div class="d-md-flex align-items-center">
    <Key v-if="active"><slot/></Key>
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
