<template>
  <Base>
    <InfoIcon :size="iconSize" />
    <div class="flex-grow">
      <slot></slot>
    </div>
  </Base>
</template>

<script>
import Base from '@/components/labels/Base';
import InfoIcon from '@/components/icons/Info';

export default {
  name: 'Info',
  props: {
    iconSize: String,
  },
  components: {
    Base,
    InfoIcon,
  },
};
</script>
