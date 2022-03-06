<template>
  <div class="hidden md:flex items-center">
    <Key :class="{ 'text-gray-400 dark:text-gray-800': active }">{{this.$store.state.modKey}}</Key>
    <Key :class="{ 'text-gray-400 dark:text-gray-800': active }" class="ml-1">K</Key>
  </div>
</template>

<script>
import Key from '/src/components/Key.vue';

export default {
  name: 'ModK',
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
