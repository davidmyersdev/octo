<template>
  <div class="core-form-control-group basis-full md:basis-auto flex flex-wrap gap-2 grow md:grow-0 items-center">
    <slot />
  </div>
</template>

<style scoped>
:where(.core-form-control-group > :deep(*)) {
  flex-grow: 1;
}
</style>
