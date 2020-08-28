<template>
  <Base>
    <TimelyIcon :size="iconSize" />
    <div>
      <slot></slot>
    </div>
  </Base>
</template>

<script>
import Base from '@/components/labels/Base';
import TimelyIcon from '@/components/icons/Timely';

export default {
  name: 'Timely',
  props: {
    iconSize: String,
  },
  components: {
    Base,
    TimelyIcon,
  },
};
</script>
