<script lang="ts">
import { useStore } from 'vuex'
import IconGitHub from '#root/assets/github.svg?component'
import IconTwitter from '#root/assets/twitter.svg?component'
import SceneCommunity from '#root/assets/scene-community.svg?component'
import SceneOSS from '#root/assets/scene-oss.svg?component'
import ScenePortable from '#root/assets/scene-portable.svg?component'
import SceneSecure from '#root/assets/scene-secure.svg?component'
import SceneSurveillance from '#root/assets/scene-surveillance.svg?component'

if (globalThis.isNuxt) {
  definePageMeta({
    layout: 'bare',
  })
}

export default defineComponent({
  components: {
    IconGitHub,
    IconTwitter,
    SceneCommunity,
    SceneOSS,
    ScenePortable,
    SceneSecure,
    SceneSurveillance,
  },
  setup() {
    const store = useStore()
    const user = useUser()
    const { public: { appSubtitle, appTitle, discordInviteLink, fathomEventCtaSignUpNow, firebaseDisabled } } = useConfig()
    const isCtaRelevant = computed(() => !(user.value.id || firebaseDisabled))

    const ctaLabel = computed(() => isCtaRelevant.value ? 'Get started for free' : 'Open the app')
    const ctaRoute = computed(() => isCtaRelevant.value ? { hash: '#pricing' } : { path: '/docs/new' })
    const ctaHandler = () => () => {
      if (isCtaRelevant.value) {
        window.fathom?.trackGoal(fathomEventCtaSignUpNow, 0)
      }
    }

    store.commit('SET_SHOW_WELCOME', false)

    return {
      appSubtitle,
      appTitle,
      ctaHandler,
      ctaLabel,
      ctaRoute,
      discordInviteLink,
      firebaseDisabled,
      user,
    }
  },
})
</script>

<template>
  <div class="home text-lg flex flex-col gap-12">
    <section class="p-4 lg:p-8 container mx-auto">
      <div class="max-w-[100ch] mx-auto">
        <div class="flex items-center lg:items-stretch text-center gap-8 lg:gap-16 py-8 lg:py-16">
          <div class="w-full flex flex-col lg:flex-row-reverse justify-between gap-12">
            <TheLogo class="h-24 lg:h-48 text-brand" />
            <div class="flex flex-col items-center lg:items-start gap-8 lg:text-left w-full">
              <h1 class="text-4xl lg:text-5xl font-semibold">{{ appTitle }}</h1>
              <p v-html="appSubtitle" class="text-2xl lg:text-2xl"></p>
              <CoreLink :to="ctaRoute" @click="ctaHandler" class="button-base bg-brand transition shadow whitespace-nowrap justify-center gap-3 mt-1 text-layer-0 text-xl py-2 px-8 lg:origin-left hover:scale-110 focus:scale-110">
                <span class="flex items-center gap-3 align-center">
                  <span>{{ ctaLabel }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </CoreLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="p-4 lg:p-8">
      <div class="container mx-auto max-w-[100ch]">
        <img src="~/assets/screenshot.png" alt="The Octo editor with an in-progress Markdown document in focus." width="1600" height="900" class="w-full" />
      </div>
    </section>
    <section class="p-4 lg:p-8">
      <div class="container mx-auto max-w-[100ch] grid grid-flow-row lg:grid-cols-2 gap-8">
        <blockquote class="bg-layer-1 border-l-8 border-layer-3 rounded p-4 flex flex-col gap-2 justify-between">
          <p>So I've just come across Octo (having seen them in conversation with Fathom Analytics) and it's exactly the notes app I've been looking for!</p>
          <p>- Ed</p>
        </blockquote>
        <blockquote class="bg-layer-1 border-l-8 border-layer-3 rounded p-4 flex flex-col gap-2 justify-between">
          <p>[An app] you might be interested in is Octo. It's a bit more security focused and does client-side encryption, but because of that, you can sync your docs without worrying about them being "out there".</p>
          <p>- Peter</p>
        </blockquote>
      </div>
    </section>
    <section>
      <section class="p-4 lg:p-8 container mx-auto">
        <div class="max-w-[100ch] mx-auto flex flex-col items-stretch lg:flex-row-reverse lg:items-center justify-between gap-12 mb-4">
          <ScenePortable class="h-20 lg:h-40" />
          <div class="flex flex-col gap-4">
            <h2 class="text-2xl lg:text-4xl">Portable</h2>
            <p class="lg:text-xl mt-2 max-w-[40ch]">Nobody wants to be locked into a single tool. Import or export your entire knowledge base as plain-text Markdown files, and take your work with you wherever you choose to go.</p>
          </div>
        </div>
      </section>
      <section class="p-4 lg:p-8 container mx-auto">
        <div class="max-w-[100ch] mx-auto flex flex-col items-stretch lg:flex-row lg:text-right lg:items-center justify-between gap-12 mb-4">
          <SceneOSS class="h-20 lg:h-40" />
          <div class="flex flex-col gap-4">
            <h2 class="text-2xl lg:text-4xl">Open Source</h2>
            <p class="lg:text-xl mt-2 max-w-[40ch]">It's hard to know what closed source software is doing with your data. We are committed to a level of transparency that only open source software can provide.</p>
          </div>
        </div>
      </section>
      <section class="p-4 lg:p-8 container mx-auto">
        <div class="max-w-[100ch] mx-auto flex flex-col items-stretch lg:flex-row-reverse lg:items-center justify-between gap-12 mb-4">
          <SceneCommunity class="h-20 lg:h-40" />
          <div class="flex flex-col gap-4">
            <h2 class="text-2xl lg:text-4xl">Community-driven</h2>
            <p class="lg:text-xl mt-2 max-w-[40ch]">We are knowledge workers just like you. Join the <a class="underline" :href="discordInviteLink" target="_blank" rel="noopener noreferrer">Voracious Community</a> on Discord to help shape Octo into a tool we all love.</p>
          </div>
        </div>
      </section>
      <section class="p-4 lg:p-8 container mx-auto">
        <div class="max-w-[100ch] mx-auto flex flex-col items-stretch lg:flex-row lg:text-right lg:items-center justify-between gap-12 mb-4">
          <SceneSecure class="h-20 lg:h-40" />
          <div class="flex flex-col gap-4">
            <h2 class="text-2xl lg:text-4xl">Secure</h2>
            <p class="lg:text-xl mt-2 max-w-[40ch]"><strong class="font-semibold">Trust is earned</strong>, yet many organizations expect you to give it away freely. With client-side (end-to-end) encryption, <strong class="font-semibold">you decide</strong> whether you trust us with your information.</p>
          </div>
        </div>
      </section>
      <section class="p-4 lg:p-8 container mx-auto">
        <div class="max-w-[100ch] mx-auto flex flex-col items-stretch lg:flex-row-reverse lg:items-center justify-between gap-12 mb-4">
          <SceneSurveillance class="h-20 lg:h-40" />
          <div class="flex flex-col gap-4">
            <h2 class="text-2xl lg:text-4xl">Private</h2>
            <p class="lg:text-xl mt-2 max-w-[40ch]">In a world of surveillance, we choose to protect you with privacy-first analytics. No cookies. No data scraping. Just simple, anonymous metrics which are available for anyone to view on our <a class="underline" href="https://app.usefathom.com/share/npcchoaz/octo.app" target="_blank" rel="noopener noreferrer">public analytics dashboard</a>.</p>
          </div>
        </div>
      </section>
    </section>
    <section v-if="!firebaseDisabled" class="p-4 lg:p-8">
      <div class="container mx-auto">
        <div class="max-w-[100ch] mx-auto mb-8">
          <h2 id="pricing" class="text-2xl lg:text-4xl font-bold">Pricing</h2>
          <p class="my-4">Accounts are recommended, but they are not required. Feel free to just <CoreLink :to="{ path: '/docs/new' }" class="underline">open the app</CoreLink> instead.</p>
          <AuthTiers />
        </div>
      </div>
    </section>
    <footer class="text-gray-500 p-4 lg:p-8 container mx-auto">
      <div class="max-w-[100ch] mx-auto mb-8">
        <div class="flex flex-col items-center lg:items-start gap-2">
          <div class="flex flex-col items-center lg:flex-row gap-2 lg:gap-4">
            <CoreLink :to="{ path: '/privacy-policy' }">Privacy Policy</CoreLink>
            <CoreLink :to="{ path: '/terms-and-conditions' }">Terms &amp; Conditions</CoreLink>
            <div class="flex items-center gap-2 mt-1 lg:mt-0">
              <a href="https://twitter.com/octowiki" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><IconTwitter class="h-6 lg:h-4" /></a>
              <a href="https://github.com/davidmyersdev/octo" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><IconGitHub class="h-6 lg:h-4" /></a>
            </div>
          </div>
          <p class="mt-4">&copy; 2023 <CoreLink to="https://voraciouslabs.com">Voracious Labs</CoreLink></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.home {
  background: radial-gradient(var(--colors-layer-1), 10%, transparent 10%) max(1vw, 1vh) max(1vw, 1vh);
  background-size: max(1vw, 1vh) max(1vw, 1vh);
}
</style>
