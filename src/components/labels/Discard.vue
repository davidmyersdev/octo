<template>
  <Base>
    <DiscardIcon :size="iconSize" />
    <div>
      <slot></slot>
    </div>
  </Base>
</template>

<script>
import Base from '@/components/labels/Base';
import DiscardIcon from '@/components/icons/Discard';

export default {
  name: 'Discard',
  props: {
    iconSize: String,
  },
  components: {
    Base,
    DiscardIcon,
  },
};
</script>
