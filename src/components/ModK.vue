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
  font-size: 1em;
}

.key.active {
  border-color: #111;
  color: #222;
}

.light .key.active {
  border-color: #ccc;
  color: #aaa;
}
</style>
