<template>
  <div class="container">
    <Tag class="tag btn btn-secondary" v-for="tag in tags" :key="tag" :tag="tag"></Tag>
  </div>
</template>

<script>
import Tag from '@/components/Tag.vue';

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
  border: 1px solid #222;
  color: #aaa;
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
