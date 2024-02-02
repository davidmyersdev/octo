<script lang="ts" setup>
const { layer } = useLayers()
</script>

<template>
  <div class="max-w-none prose prose-inherit prose-img:rounded prose-h1:font-normal prose-h1:text-2xl prose-ul:pl-5 prose-li:pl-1">
    <slot />
  </div>
</template>

<style scoped>
:deep(li:has(input[type=checkbox])) {
  /* Invert the default list style. */
  list-style: none;
  margin-left: -1.25rem;
  padding-left: 0;
}

:deep(li input[type=checkbox]) {
  @apply checkbox;

  margin-bottom: 0.05rem;
}

:deep(:is(code, pre)) {
  background-color: rgb(v-bind('layer.bgCssVar'));
  color: rgb(v-bind('layer.textCssVar'));
}

:deep(code) {
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
}
</style>
