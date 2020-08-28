<template>
  <router-link :to="tagRoute">
    <TagLabel>{{ tag }}</TagLabel>
  </router-link>
</template>

<script>
import TagLabel from '@/components/labels/Tag';

export default {
  name: 'Tag',
  props: {
    tag: String,
  },
  components: {
    TagLabel,
  },
  computed: {
    tagRoute() {
      return { name: 'tag', params: { tag: this.tag } };
    },
  },
};
</script>
