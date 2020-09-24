<template>
  <Base>
    <DocumentIcon :size="iconSize" />
    <div class="flex-grow-1">
      <slot></slot>
    </div>
  </Base>
</template>

<script>
import Base from '@/components/labels/Base';
import DocumentIcon from '@/components/icons/Document';

export default {
  name: 'Timely',
  props: {
    iconSize: String,
  },
  components: {
    Base,
    DocumentIcon,
  },
};
</script>
