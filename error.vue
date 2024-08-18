<script lang="ts" setup>
import type { NuxtError } from 'nuxt/app'

defineProps({
  error: Object as () => NuxtError,
})

const { public: { appName } } = useConfig()

useHead({
  titleTemplate: () => `Error Page | ${appName}`,
})

const handle = () => {
  clearError({
    redirect: '/',
  })
}
</script>

<template>
  <AppLayout name="minimal">
    <div class="flex flex-col items-center gap-8">
      <template v-if="error">
        <template v-if="error?.statusCode === 404">
          <h1 class="font-bold text-2xl text-center">404</h1>
          <p v-if="error">
            {{ error.message }}
          </p>
        </template>
        <template v-else>
          <h1 class="font-bold text-2xl text-center">Unknown error</h1>
        </template>
      </template>
      <CoreButton class="border border-layer" @click="handle">Home</CoreButton>
    </div>
  </AppLayout>
</template>
