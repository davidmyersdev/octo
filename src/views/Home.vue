<template>
  <div class="text-gray-100 text-lg p-4 overflow-auto home">
    <section class="py-4 lg:py-8">
      <div class="container mx-auto mb-8">
        <div class="flex flex-col">
          <h1 class="text-4xl lg:text-6xl text-brand font-bold uppercase text-center mt-20 lg:mt-40">Enhance Your Writing Workflow</h1>
          <p class="text-xl lg:text-2xl text-gray-600 uppercase text-center mt-8">Octo is a Lightweight <span class="font-semibold">Word Processor</span> for <span class="font-semibold">Technical Writers</span></p>

          <div class="flex flex-col gap-4 items-center text-center mt-16">
            <router-link @click.native="trackCtaSignUpNow" :to="{ name: 'account' }" class="button-base bg-blue-600 shadow w-full lg:w-auto whitespace-nowrap justify-center gap-3 text-blue-100 text-2xl py-4 px-10">
              <span class="flex items-center gap-3 align-center">
                <span>Get started for free</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </router-link>
            <router-link @click.native="trackCtaOpenApp" :to="{ name: 'dashboard' }" class="button-base button-size-medium text-gray-500 w-full lg:w-auto whitespace-nowrap justify-center gap-3 text-xl">
              <span class="flex items-center gap-3">
                <span>Take me to the app</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </router-link>
          </div>
        </div>
        <div class="aspect-w-3 aspect-h-4 lg:aspect-w-16 lg:aspect-h-9 w-full relative mt-20 lg:mt-40">
          <iframe class="bg-gray-900 rounded shadow-lg" src="/example" sandbox="allow-scripts allow-same-origin" loading="lazy" />
          <div @click="tapFrame" :class="{ 'hidden': tapped }" class="flex items-center justify-center absolute z-50 top-0 left-0 right-0 bottom-0 rounded cursor-pointer bg-opacity-50 bg-gray-900">
            <p class="bg-gray-900 py-2 px-4 rounded">
              {{ clickOrTap }} to try it out
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-4 lg:py-8">
      <div class="container mx-auto mb-8">
        <h2 class="text-2xl lg:text-4xl text-brand font-bold uppercase">Tools for Writers</h2>
        <div class="grid lg:grid-cols-2 gap-8 mt-4">
          <div>
            <h2 class="text-xl lg:text-2xl text-gray-400 uppercase">Spellcheck &amp; Grammarly Support</h2>
            <p class="lg:text-xl mt-2">Improve your spelling, grammar, and overall readability with your favorite tools. Since Octo is a Progressive Web App, you can use native browser extensions such as Grammarly. These features are also configurable, so you can disable them when you need to.</p>
          </div>
          <div>
            <h2 class="text-xl lg:text-2xl text-gray-400 uppercase">Improved Focusability</h2>
            <p class="lg:text-xl mt-2">Markdown is the preferred markup language for technical writers, but most editors require the use of separate edit and preview panes. This often leads to interruptions in your focus. Instead, we have built a custom hybrid editor that renders formatting, embeds, and syntax highlighting in real time without requiring you to break focus just to see what your content will look like to your users.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-4 lg:py-8">
      <div class="container mx-auto mb-8">
        <h2 class="text-2xl lg:text-4xl text-brand font-bold uppercase">Open Source</h2>
        <div class="grid lg:grid-cols-2 gap-8 mt-4">
          <div>
            <h2 class="text-xl lg:text-2xl text-gray-400 uppercase">Transparency</h2>
            <p class="lg:text-xl mt-2">You get full visibility of the <a class="underline" href="https://github.com/writewithocto/octo" target="_blank" rel="noopener noreferrer">codebase</a> that powers Octo. This means you can participate in feature discussions, track bugs, and collaborate with the developer community that relies on us.</p>
          </div>
          <div>
            <h2 class="text-xl lg:text-2xl text-gray-400 uppercase">Security &amp; Reliability</h2>
            <p class="lg:text-xl mt-2">We have a lot of eyes on our code, so you can hold us accountable when something is not up to your standards. We strive to uphold best practices, and we will always listen to feedback from our community.</p>
          </div>
          <div>
            <h2 class="text-xl lg:text-2xl text-gray-400 uppercase">Community</h2>
            <p class="lg:text-xl mt-2">We love to connect with our community of developers and writers. Whether you want to collaborate on improving Octo itself or you want to meet others interested in technical writing, you can connect with us on <a class="underline" :href="discordInviteLink" target="_blank" rel="noopener noreferrer">Discord</a>.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-4 lg:py-8">
      <div class="container mx-auto mb-8">
        <h2 class="text-2xl lg:text-4xl text-brand font-bold uppercase">Privacy Focused</h2>
        <div class="grid lg:grid-cols-2 gap-8 mt-4">
          <div>
            <h2 class="text-xl lg:text-2xl text-gray-400 uppercase">End-to-End Encryption</h2>
            <p class="lg:text-xl mt-2"><strong class="font-semibold">Trust is earned</strong>, yet many organizations expect it from you in order to use their services. We support end-to-end encryption, because <strong class="font-semibold">we believe you deserve to make that choice</strong>. Whether you are end-to-end encrypted or not, we will always use best practices to secure your data.</p>
          </div>
          <div>
            <h2 class="text-xl lg:text-2xl text-gray-400 uppercase">Transparent Analytics</h2>
            <p class="lg:text-xl mt-2">We use privacy-first tools to ensure we only track a minimal amount of basic analytics, and all of that information is available to view on our <a class="underline" href="https://app.usefathom.com/share/npcchoaz/octo.app" target="_blank" rel="noopener noreferrer">public dashboard</a>. <strong class="font-semibold">We sell software, not data.</strong></p>
          </div>
          <div>
            <h2 class="text-xl lg:text-2xl text-gray-400 uppercase">No Cookies</h2>
            <p class="lg:text-xl mt-2">You heard that right! No annoying cookie banners are necessary since we do not use them. We use token-based authentication and cookieless third-party integrations.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-4 lg:py-8">
      <div class="container mx-auto mb-8 text-center">
        <router-link @click.native="trackCtaSignUpNow" :to="{ name: 'account' }" class="button-base bg-blue-600 shadow w-full lg:w-auto whitespace-nowrap justify-center gap-3 text-blue-100 text-2xl py-4 px-10">
          <span class="flex items-center gap-3 align-center">
            <span>Get started for free</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </router-link>
      </div>
    </section>
    <footer class="text-gray-500 py-4 lg:py-8">
      <div class="container mx-auto mb-8">
        <div class="flex flex-col items-center lg:items-start gap-2">
          <div class="flex flex-col items-center lg:flex-row gap-2 lg:gap-4">
            <router-link :to="{ name: 'privacy_policy' }" class="font-semibold">Privacy Policy</router-link>
            <router-link :to="{ name: 'terms_and_conditions' }" class="font-semibold">Terms &amp; Conditions</router-link>
            <div class="flex items-center gap-2 mt-1 lg:mt-0">
              <a href="https://twitter.com/writewithocto" target="_blank" rel="noopener noreferrer"><TwitterIcon class="h-6 lg:h-4" /></a>
              <a href="https://github.com/writewithocto" target="_blank" rel="noopener noreferrer"><GitHubIcon class="h-6 lg:h-4" /></a>
            </div>
          </div>
          <p class="mt-4">&copy; 2021 Octo</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import GitHubIcon from '/src/components/icons/GitHub.vue'
import TwitterIcon from '/src/components/icons/Twitter.vue'

export default {
  name: 'Home',
  components: {
    GitHubIcon,
    TwitterIcon,
  },
  data() {
    return {
      supportsTouch: false,
      tapped: false,
    }
  },
  computed: {
    clickOrTap() {
      return this.supportsTouch ? 'Tap' : 'Click'
    },
    discordInviteLink() {
      return import.meta.env.VITE_DISCORD_INVITE_LINK
    },
  },
  methods: {
    tapFrame() {
      window.fathom.trackGoal(import.meta.env.VITE_FATHOM_EVENT_CTA_TRY_IT_OUT, 0)

      this.tapped = true
    },
    trackCtaOpenApp() {
      window.fathom.trackGoal(import.meta.env.VITE_FATHOM_EVENT_CTA_OPEN_APP, 0)
    },
    trackCtaSignUpNow() {
      window.fathom.trackGoal(import.meta.env.VITE_FATHOM_EVENT_CTA_SIGN_UP_NOW, 0)
    },
  },
  created() {
    this.supportsTouch = (
      ('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0)
    )
  },
}
</script>

<style scoped>
.home {
  background: radial-gradient(rgba(23, 23, 23, 1) 10%, transparent 10%) max(1vw, 1vh) max(1vw, 1vh);
  background-color: #121212;
  background-size: max(1vw, 1vh) max(1vw, 1vh);
}
</style>
