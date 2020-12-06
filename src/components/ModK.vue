<template>
  <div class="d-none d-md-flex align-items-center">
    <Key :class="{ active: active }">{{this.$store.state.modKey}}</Key>
    <Key :class="{ active: active }" class="ml-1">K</Key>
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
.key {
  border-color: #333;
  font-size: 1em;
}

.key.active {
  border-color: #111;
  color: #222;
}
</style>
