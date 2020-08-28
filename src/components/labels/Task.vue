<template>
  <Base>
    <TaskIcon :size="iconSize" />
    <div>
      <slot></slot>
    </div>
  </Base>
</template>

<script>
import Base from '@/components/labels/Base';
import TaskIcon from '@/components/icons/Task';

export default {
  name: 'Task',
  props: {
    iconSize: String,
  },
  components: {
    Base,
    TaskIcon,
  },
};
</script>
