<script lang="ts" setup>
defineProps<{ show: boolean, size: number }>()
</script>

<template>
  <Transition name="gutter">
    <div v-show="show" class="gutter flex flex-shrink-0 overflow-hidden">
      <div class="gutter-content flex flex-grow flex-shrink flex-col w-full">
        <slot />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.gutter {
  width: calc(v-bind('size') * 1px);
}

.gutter-content {
  width: calc(v-bind('size') * 1px);
  flex-shrink: 0;
}

.gutter-enter-active,
.gutter-leave-active {
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.gutter-enter-from,
.gutter-leave-to {
  width: 0;
}
</style>
