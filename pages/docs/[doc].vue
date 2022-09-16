<template>
  <CustomizedEditor :disabled="false" :id="id"></CustomizedEditor>
</template>

<script lang="ts" setup>
const route = useRoute()
const doc = route.params.doc as string
const id = doc === 'new' ? undefined : doc

definePageMeta({
  key: (route) => {
    const key = (route.query.key || route.params.doc) as string

    console.log({ key })

    return key
  },
})
</script>
