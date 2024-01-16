<script>
export default {
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

<template>
  <div>
    <component :is="component.name" v-for="component in prependable" :key="component.name" />
    <slot />
    <component :is="component.name" v-for="component in appendable" :key="component.name" />
  </div>
</template>
