<template>
  <div class="md:flex items-center">
    <Key v-if="active"><slot/></Key>
  </div>
</template>

<script>
import Key from '#root/components/Key.vue';

export default {
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
