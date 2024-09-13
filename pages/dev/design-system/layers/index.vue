<script lang="ts" setup>
import DesignSystemLayerManager from '~/lib/components/DesignSystemLayerManager.vue'
import CoreEditor from '~/components/CoreEditor.vue'

const text = '```js\nconst thing = () => \'hi\'\n```'
</script>

<template>
  <div class="flex flex-col gap-4 p-4">
    <DesignSystemLayerManager :index="0" />
    <DesignSystemLayerManager :index="1" />
    <DesignSystemLayerManager :index="2" />
    <DesignSystemLayerManager :index="3" />
    <DesignSystemLayerManager :index="4" />
    <CoreEditor :model-value="text" />
  </div>
</template>
