<template>
  <Base>
    <SearchIcon :size="iconSize" />
    <div class="flex-grow">
      <slot></slot>
    </div>
  </Base>
</template>

<script>
import Base from '@/components/labels/Base';
import SearchIcon from '@/components/icons/Search';

export default {
  name: 'Search',
  props: {
    iconSize: String,
  },
  components: {
    Base,
    SearchIcon,
  },
};
</script>
