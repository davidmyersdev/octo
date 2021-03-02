<template>
  <Base>
    <CodeIcon :size="iconSize" />
    <div class="flex-grow">
      <slot></slot>
    </div>
  </Base>
</template>

<script>
import Base from '@/components/labels/Base';
import CodeIcon from '@/components/icons/Code';

export default {
  name: 'Code',
  props: {
    iconSize: String,
  },
  components: {
    Base,
    CodeIcon,
  },
};
</script>
