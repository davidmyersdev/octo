<template>
  <div>
    <component v-for="component in prependable" :key="component.name" :is="component.name"></component>
    <slot></slot>
    <component v-for="component in appendable" :key="component.name" :is="component.name"></component>
  </div>
</template>

<script>
export default {
  name: 'Extendable',
  props: {
    scope: String,
  },
  computed: {
    appendable() {
      // package manager is not yet reactive
      return this.$packageManager.getComponents(this.scope, 'append')
    },
    prependable() {
      // package manager is not yet reactive
      return this.$packageManager.getComponents(this.scope, 'prepend')
    },
  },
  created() {
    [...this.appendable, ...this.prependable].forEach((component) => {
      // dynamically register the component
      this.$options.components[component.name] = component
    })
  },
}
</script>
