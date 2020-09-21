<template>
  <Base>
    <HashIcon :size="iconSize" />
    <div class="flex-grow-1">
      <slot></slot>
    </div>
  </Base>
</template>

<script>
import Base from '@/components/labels/Base';
import HashIcon from '@/components/icons/Hash';

export default {
  name: 'Tag',
  props: {
    iconSize: String,
  },
  components: {
    Base,
    HashIcon,
  },
};
</script>
