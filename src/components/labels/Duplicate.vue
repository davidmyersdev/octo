<template>
  <Base>
    <DuplicateIcon :size="iconSize" />
    <div class="flex-grow">
      <slot></slot>
    </div>
  </Base>
</template>

<script>
import Base from '@/components/labels/Base';
import DuplicateIcon from '@/components/icons/Duplicate';

export default {
  name: 'Duplicate',
  props: {
    iconSize: String,
  },
  components: {
    Base,
    DuplicateIcon,
  },
};
</script>
