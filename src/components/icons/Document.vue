<template>
  <BaseSvg :size="size">
    <path d="M4 1h5v1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6h1v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"/>
    <path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 0 1 9 4.5z"/>
  </BaseSvg>
</template>

<script>
import BaseSvg from '@/components/icons/BaseSvg';

export default {
  name: 'Document',
  props: {
    size: String,
  },
  components: {
    BaseSvg,
  },
};
</script>
