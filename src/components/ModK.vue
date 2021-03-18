<template>
  <div class="hidden md:flex items-center">
    <Key :class="{ active: active }" class="bg-gray-200 dark:bg-gray-900">{{this.$store.state.modKey}}</Key>
    <Key :class="{ active: active }" class="bg-gray-200 dark:bg-gray-900 ml-1">K</Key>
  </div>
</template>

<script>
import Key from '@/components/Key';

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

<style scoped>
.key.active {
  border-color: #111;
  color: #222;
}

.light .key.active {
  border-color: #ccc;
  color: #aaa;
}
</style>
