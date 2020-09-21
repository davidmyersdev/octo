<template>
  <Base>
    <TimelyIcon :size="iconSize" />
    <div class="flex-grow-1">
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
