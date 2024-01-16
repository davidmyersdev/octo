<script lang="ts" setup>
import { isClient } from '#helpers/environment'
import CoreLink from '~/components/CoreLink.vue'

definePageMeta({ layout: 'minimal' })

const { isDark, isLight } = useAppearance()

const user = useUser()
const { public: { appSubtitle, appTitle, appName, fathomEventCtaSignUpNow, firebaseDisabled } } = useConfig()
const isCtaRelevant = computed(() => !(user.value.id || firebaseDisabled))

const ctaLabel = computed(() => isCtaRelevant.value ? 'Get started for free' : 'Open the app')
const ctaRoute = computed(() => isCtaRelevant.value ? { path: '/authenticate' } : { path: '/docs/new' })

const ctaHandler = () => () => {
  if (isClient) {
    if (isCtaRelevant.value) {
      window.fathom?.trackGoal(fathomEventCtaSignUpNow, 0)
    }
  }
}

useHead({
  titleTemplate: (title) => `${appName} - ${title}`,
})

onMounted(() => {
  window.localStorage.setItem('octo/welcome/v1', '1')
})
</script>

<template>
  <div class="text-lg flex flex-col gap-12">
    <section class="p-4 lg:p-8 container mx-auto">
      <div class="max-w-4xl mx-auto">
        <div class="flex items-center text-center gap-8 lg:gap-16 py-8 lg:py-16">
          <div class="w-full flex flex-col justify-between gap-12">
            <div class="flex flex-col items-center gap-8 w-full">
              <div class="flex flex-col gap-4">
                <h1 class="text-4xl lg:text-5xl font-semibold">
                  {{ appTitle }}
                </h1>
                <p class="text-2xl lg:text-2xl" v-html="appSubtitle" />
              </div>
              <CoreButton :as="CoreLink" :to="ctaRoute" class="bg-brand hover:bg-brand transition whitespace-nowrap justify-center gap-3 mt-1 text-black text-xl py-2 px-8 hover:scale-110 focus:scale-110" @click="ctaHandler">
                <span class="flex items-center gap-3 align-center">
                  <span>{{ ctaLabel }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </CoreButton>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="p-4 lg:p-8">
      <div class="container mx-auto max-w-6xl">
        <picture v-if="isDark">
          <source alt="The powerful web-based, responsive note-taking app, Octo, with an open markdown document being edited." media="(orientation: portrait)" srcset="~/assets/screenshot-mobile-dark.png" width="1080" height="2400">
          <img alt="The powerful web-based, responsive note-taking app, Octo, with an open markdown document being edited." src="~/assets/screenshot-dark.png" width="1600" height="900" class="max-lg:bg-black max-lg:border-8 max-lg:border-black max-lg:overflow-hidden max-lg:rounded-2xl w-full">
        </picture>
        <picture v-else-if="isLight">
          <source alt="The powerful web-based, responsive note-taking app, Octo, with an open markdown document being edited." media="(orientation: portrait)" srcset="~/assets/screenshot-mobile-light.png" width="1080" height="2400">
          <img alt="The powerful web-based, responsive note-taking app, Octo, with an open markdown document being edited." src="~/assets/screenshot-light.png" width="1600" height="900" class="max-lg:bg-black max-lg:border-8 max-lg:border-black max-lg:overflow-hidden max-lg:rounded-2xl w-full">
        </picture>
        <picture v-else>
          <!-- mobile -->
          <source alt="The powerful web-based, responsive note-taking app, Octo, with an open markdown document being edited." media="(orientation: portrait) and (prefers-color-scheme: dark)" srcset="~/assets/screenshot-mobile-dark.png" width="1080" height="2400">
          <source alt="The powerful web-based, responsive note-taking app, Octo, with an open markdown document being edited." media="(orientation: portrait) and (prefers-color-scheme: light)" srcset="~/assets/screenshot-mobile-light.png" width="1080" height="2400">
          <!-- desktop -->
          <source alt="The powerful web-based, responsive note-taking app, Octo, with an open markdown document being edited." media="(prefers-color-scheme: dark)" srcset="~/assets/screenshot-dark.png" width="1600" height="900">
          <source alt="The powerful web-based, responsive note-taking app, Octo, with an open markdown document being edited." media="(prefers-color-scheme: light)" srcset="~/assets/screenshot-light.png" width="1600" height="900">
          <!-- fallback -->
          <img alt="The powerful web-based, responsive note-taking app, Octo, with an open markdown document being edited." src="~/assets/screenshot-dark.png" width="1600" height="900" class="max-lg:bg-black max-lg:border-8 max-lg:border-black max-lg:overflow-hidden max-lg:rounded-2xl w-full">
        </picture>
      </div>
    </section>
    <section>
      <CoreContainer class="p-4 lg:p-8">
        <CoreCard outline>
          <CoreProse class="max-w-none">
            <h2>We care about privacy</h2>
            <p>In today's hyper-connected world, your privacy matters more than ever. Octo has been built from the ground up with privacy as a core tenet. We use the Web Crypto API to support client-side (end-to-end) encryption so that your data can be securely and privately synced across all of your devices. That means that no one, not even people on our team, can access your data.</p>
          </CoreProse>
        </CoreCard>
      </CoreContainer>
      <CoreContainer class="p-4 lg:p-8">
        <CoreCard outline>
          <CoreProse class="max-w-none">
            <h2>Your second brain is always accessible</h2>
            <p>Thanks to modern browser APIs, such as Service Workers and IndexedDB, web apps can be made to function entirely offline just as native apps can. Octo takes advantage of these APIs to make sure you always have access to your second brain. All you need is a device with a web browser.</p>
            <p>We understand the pain of vendor lock-in, so we maintain import and export tools to help you move your data into or out of Octo.</p>
          </CoreProse>
        </CoreCard>
      </CoreContainer>
      <CoreContainer class="p-4 lg:p-8">
        <CoreCard outline>
          <CoreProse class="max-w-none">
            <h2>Transparency over trust</h2>
            <p>Building sustainable open-source software is a difficult problem to solve, but we believe in fostering a level of transparency that is only possible when the source code is freely available. Verify our claims and feel confident that your knowledge management tool will not suddenly disappear.</p>
          </CoreProse>
        </CoreCard>
      </CoreContainer>
    </section>
    <section class="p-4 lg:p-8 container mx-auto">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col gap-4">
          <p class="lg:text-xl text-center">
            Sign up today to discover how Octo can transform your productivity.
          </p>
        </div>
        <div class="flex items-center text-center gap-8 lg:gap-16 py-8 lg:py-16">
          <div class="w-full flex flex-col justify-between gap-12">
            <div class="flex flex-col items-center gap-8 w-full">
              <CoreButton :as="CoreLink" :to="ctaRoute" class="bg-brand hover:bg-brand transition whitespace-nowrap justify-center gap-3 mt-1 text-black text-xl py-2 px-8 hover:scale-110 focus:scale-110" @click="ctaHandler">
                <span class="flex items-center gap-3 align-center">
                  <span>{{ ctaLabel }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </CoreButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
