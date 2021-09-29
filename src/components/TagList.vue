<template>
  <div class="flex flex-col p-4 md:p-2">
    <Tag class="sidebar-link mb-2" v-for="tag in tags" :key="tag" :tag="tag"></Tag>
  </div>
</template>

<script>
import Tag from '/src/components/Tag.vue';

export default {
  name: 'TagList',
  components: {
    Tag,
  },
  computed: {
    tags() {
      return this.$store.getters.tags;
    },
  },
};
</script>

<style scoped>
.tag {
  align-items: center;
  display: flex;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
}

.tag:first-child {
  margin-top: 1rem;
}

.hr {
  background-color: var(--gray-dark, grey);
  height: 0.125rem;
  margin: 0.75rem 0.75rem 0.75rem 1rem;
}
</style>
