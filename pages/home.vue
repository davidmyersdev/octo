<script lang="ts">
import { useStore } from 'vuex'
import IconGitHub from '#root/assets/github.svg?component'
import LogoIcon from '#root/assets/logo-icon.svg?component'
import IconTwitter from '#root/assets/twitter.svg?component'
import SceneCommunity from '#root/assets/scene-community.svg?component'
import SceneOSS from '#root/assets/scene-oss.svg?component'
import ScenePortable from '#root/assets/scene-portable.svg?component'
import SceneSecure from '#root/assets/scene-secure.svg?component'
import SceneSurveillance from '#root/assets/scene-surveillance.svg?component'

definePageMeta({ layout: 'minimal' })

export default defineComponent({
  components: {
    IconGitHub,
    IconTwitter,
    LogoIcon,
    SceneCommunity,
    SceneOSS,
    ScenePortable,
    SceneSecure,
    SceneSurveillance,
  },
  setup() {
    const { isAuto, isDark, isLight } = useAppearance()

    const store = useStore()
    const user = useUser()
    const { public: { appSubtitle, appTitle, appName, discordInviteLink, fathomEventCtaSignUpNow, firebaseDisabled } } = useConfig()
    const isCtaRelevant = computed(() => !(user.value.id || firebaseDisabled))

    const ctaLabel = computed(() => isCtaRelevant.value ? 'Get started for free' : 'Open the app')
    const ctaRoute = computed(() => isCtaRelevant.value ? { path: '/authenticate' } : { path: '/docs/new' })

    const ctaHandler = () => () => {
      if (isCtaRelevant.value) {
        window.fathom?.trackGoal(fathomEventCtaSignUpNow, 0)
      }
    }

    useHead({
      titleTemplate: (title) => `${appName} - ${title}`,
    })

    store.commit('SET_SHOW_WELCOME', false)

    return {
      appSubtitle,
      appTitle,
      ctaHandler,
      ctaLabel,
      ctaRoute,
      discordInviteLink,
      firebaseDisabled,
      isAuto,
      isDark,
      isLight,
      user,
    }
  },
})
</script>

<template>
  <div class="home text-lg flex flex-col gap-12">
    <section class="p-4 lg:p-8 container mx-auto">
      <div class="max-w-4xl mx-auto">
        <div class="flex items-center text-center gap-8 lg:gap-16 py-8 lg:py-16">
          <div class="w-full flex flex-col justify-between gap-12">
            <div class="flex flex-col items-center gap-8 w-full">
              <div class="flex flex-col gap-4">
                <h1 class="text-4xl lg:text-5xl font-semibold">{{ appTitle }}</h1>
                <p v-html="appSubtitle" class="text-2xl lg:text-2xl"></p>
              </div>
              <CoreLink :to="ctaRoute" @click="ctaHandler" class="button-base bg-brand transition shadow whitespace-nowrap justify-center gap-3 mt-1 text-layer-0 text-xl py-2 px-8 hover:scale-110 focus:scale-110">
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
      <div class="container mx-auto max-w-6xl">
        <picture v-if="isDark">
          <source alt="Shows the Octo app with an open tab containing a markdown document." media="(orientation: portrait)" srcset="~/assets/screenshot-mobile-dark.png" width="1080" height="2400" class="bg-black border-8 border-black overflow-hidden rounded-2xl w-full">
          <img alt="Shows the Octo app with an open tab containing a markdown document." src="~/assets/screenshot-dark.png" width="1600" height="900" class="w-full">
        </picture>
        <picture v-else-if="isLight">
          <source alt="Shows the Octo app with an open tab containing a markdown document." media="(orientation: portrait)" srcset="~/assets/screenshot-mobile-light.png" width="1080" height="2400" class="bg-black border-8 border-black overflow-hidden rounded-2xl w-full">
          <img alt="Shows the Octo app with an open tab containing a markdown document." src="~/assets/screenshot-light.png" width="1600" height="900" class="w-full">
        </picture>
        <picture v-else>
          <!-- mobile -->
          <source alt="Shows the Octo app with an open tab containing a markdown document." media="(orientation: portrait) and (prefers-color-scheme: dark)" srcset="~/assets/screenshot-mobile-dark.png" width="1080" height="2400">
          <source alt="Shows the Octo app with an open tab containing a markdown document." media="(orientation: portrait) and (prefers-color-scheme: light)" srcset="~/assets/screenshot-mobile-light.png" width="1080" height="2400">
          <!-- desktop -->
          <source alt="Shows the Octo app with an open tab containing a markdown document." media="(prefers-color-scheme: dark)" srcset="~/assets/screenshot-dark.png" width="1600" height="900" class="w-full">
          <source alt="Shows the Octo app with an open tab containing a markdown document." media="(prefers-color-scheme: light)" srcset="~/assets/screenshot-light.png" width="1600" height="900" class="w-full">
          <!-- fallback -->
          <img alt="Shows the Octo app with an open tab containing a markdown document." src="~/assets/screenshot-dark.png" width="1600" height="900" class="max-lg:bg-black max-lg:border-8 max-lg:border-black max-lg:overflow-hidden max-lg:rounded-2xl w-full">
        </picture>
      </div>
    </section>
    <section>
      <section class="p-4 lg:p-8 container mx-auto">
        <div class="max-w-4xl mx-auto">
          <div class="flex flex-col gap-4">
            <h2 class="text-2xl lg:text-4xl">Portable</h2>
            <p class="lg:text-xl">Import or export your entire knowledge base as plain-text Markdown files, and take your work with you wherever you choose to go.</p>
          </div>
        </div>
      </section>
      <section class="p-4 lg:p-8 container mx-auto">
        <div class="max-w-4xl mx-auto">
          <div class="flex flex-col gap-4">
            <h2 class="text-2xl lg:text-4xl">Transparent</h2>
            <p class="lg:text-xl">It's hard to know what closed source software is doing with your data. We are committed to a level of transparency that only open source software can provide.</p>
          </div>
        </div>
      </section>
      <section class="p-4 lg:p-8 container mx-auto">
        <div class="max-w-4xl mx-auto">
          <div class="flex flex-col gap-4">
            <h2 class="text-2xl lg:text-4xl">Private</h2>
            <p class="lg:text-xl">In a world of surveillance, we choose to protect you with privacy-first tools. From offline-first data storage to end-to-end encryption (e2ee), you can rest assured that your data remains private.</p>
          </div>
        </div>
      </section>
    </section>
    <section class="p-4 lg:p-8 container mx-auto">
      <div class="max-w-4xl mx-auto">
        <div class="flex items-center text-center gap-8 lg:gap-16 py-8 lg:py-16">
          <div class="w-full flex flex-col justify-between gap-12">
            <div class="flex flex-col items-center gap-8 w-full">
              <CoreLink :to="ctaRoute" @click="ctaHandler" class="button-base bg-brand transition shadow whitespace-nowrap justify-center gap-3 mt-1 text-layer-0 text-xl py-2 px-8 hover:scale-110 focus:scale-110">
                <span class="flex items-center gap-3 align-center">
                  <span>Try Octo for free</span>
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
    <footer class="bg-layer-1 p-4 lg:p-8 w-full">
      <div class="max-w-4xl mx-auto">
        <div class="flex items-start justify-between gap-4">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col">
              <small class="hidden lg:block text-gray-500">Policies</small>
              <CoreLink :to="{ path: '/privacy-policy' }" class="underline">Privacy Policy</CoreLink>
              <CoreLink :to="{ path: '/terms-and-conditions' }" class="underline">Terms &amp; Conditions</CoreLink>
            </div>
            <div class="flex items-center gap-2">
              <CoreLink to="https://twitter.com/octowiki" aria-label="Twitter"><IconTwitter class="h-4" /></CoreLink>
              <span>&nbsp;</span>
              <CoreLink to="https://github.com/davidmyersdev/octo" aria-label="GitHub"><IconGitHub class="h-4" /></CoreLink>
            </div>
          </div>
          <p>&copy; 2023 Octo</p>
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
