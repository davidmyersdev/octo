<script lang="ts" setup>
import { isClient } from '#helpers/environment'
import CoreLink from '~/components/CoreLink.vue'

definePageMeta({ layout: 'minimal' })

const { isDark, isLight } = useAppearance()

const { user } = useUser()
const { public: { fathomEventCtaSignUpNow, firebaseDisabled } } = useConfig()
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
              <h1 class="text-4xl lg:text-5xl font-bold">
                Your home for <span class="text-blue-600">deep work</span>
              </h1>
              <p class="text-xl lg:text-2xl">
                We swim in an ocean of knowledge.<br>Discover its pearls of wisdom with Octo.
              </p>
              <CoreButton :as="CoreLink" :to="ctaRoute" class="bg-blue-700 hover:bg-blue-700 transition whitespace-nowrap justify-center gap-3 mt-1 text-white text-xl py-2 px-8 hover:scale-110 focus:scale-110" @click="ctaHandler">
                <span class="flex items-center gap-3 align-center">
                  <span>{{ ctaLabel }}</span>
                  <Icon name="ArrowRight" />
                </span>
              </CoreButton>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero">
      <section class="p-4 lg:p-8">
        <div class="container mx-auto max-w-6xl">
          <picture v-if="isDark">
            <source alt="The powerful web-based, responsive note-taking app, Octo, with an open markdown document being edited." media="(orientation: portrait)" srcset="~/assets/screenshot-mobile-dark.png" width="1080" height="2400">
            <img alt="The powerful web-based, responsive note-taking app, Octo, with an open markdown document being edited." src="~/assets/screenshot-desktop-dark.png" width="1600" height="900" class="w-full">
          </picture>
          <picture v-else-if="isLight">
            <source alt="The powerful web-based, responsive note-taking app, Octo, with an open markdown document being edited." media="(orientation: portrait)" srcset="~/assets/screenshot-mobile-light.png" width="1080" height="2400">
            <img alt="The powerful web-based, responsive note-taking app, Octo, with an open markdown document being edited." src="~/assets/screenshot-desktop-light.png" width="1600" height="900" class="w-full">
          </picture>
          <picture v-else>
            <!-- mobile -->
            <source alt="The powerful web-based, responsive note-taking app, Octo, with an open markdown document being edited." media="(orientation: portrait) and (prefers-color-scheme: dark)" srcset="~/assets/screenshot-mobile-dark.png" width="1080" height="2400">
            <source alt="The powerful web-based, responsive note-taking app, Octo, with an open markdown document being edited." media="(orientation: portrait) and (prefers-color-scheme: light)" srcset="~/assets/screenshot-mobile-light.png" width="1080" height="2400">
            <!-- desktop -->
            <source alt="The powerful web-based, responsive note-taking app, Octo, with an open markdown document being edited." media="(prefers-color-scheme: dark)" srcset="~/assets/screenshot-desktop-dark.png" width="1600" height="900">
            <source alt="The powerful web-based, responsive note-taking app, Octo, with an open markdown document being edited." media="(prefers-color-scheme: light)" srcset="~/assets/screenshot-desktop-light.png" width="1600" height="900">
            <!-- fallback -->
            <img alt="The powerful web-based, responsive note-taking app, Octo, with an open markdown document being edited." src="~/assets/screenshot-desktop-dark.png" width="1600" height="900" class="w-full">
          </picture>
        </div>
      </section>
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
                  <Icon name="ArrowRight" />
                </span>
              </CoreButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.hero {
  background-image: url('~/assets/waves.svg');
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100% 100%;
}
</style>
