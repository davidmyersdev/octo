<template>
  <div class="text-gray-100 text-lg overflow-auto home">
    <section class="p-4 lg:p-8 container mx-auto">
      <div class="max-w-[100ch] mx-auto mb-8">
        <div class="flex flex-col">
          <h1 class="text-4xl lg:text-6xl text-brand font-semibold text-center mt-20 lg:mt-40">Build your knowledge base</h1>
          <p class="text-xl lg:text-4xl text-gray-600 text-center mt-8">Access your information anywhere, anytime</p>

          <div class="flex flex-col gap-4 items-center text-center mt-16">
            <a @click="trackCtaSignUpNow" href="#pricing" class="button-base bg-blue-600 shadow whitespace-nowrap justify-center gap-3 text-blue-100 text-xl py-2 px-8">
              <span class="flex items-center gap-3 align-center">
                <span>Get started for free</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="p-4 lg:p-8">
      <div class="container mx-auto mb-8 lg:mt-20">
        <div class="aspect-w-16 aspect-h-9 w-full">
          <img src="/img/screenshot.png" class="w-full" />
        </div>
      </div>
    </section>
    <section class="p-4 lg:p-8 container mx-auto">
      <div class="max-w-[100ch] mx-auto mb-8">
        <h2 class="text-2xl lg:text-4xl font-bold">Experience Something Different</h2>
        <div class="grid lg:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 class="text-xl lg:text-2xl text-gray-400">Better for focus</h3>
            <p class="lg:text-xl mt-2">Markdown has become a widespread format for note-taking, but most editors still leave much to be desired. The effect is friction in writing down your thoughts which leads to interruptions in your concentration.</p>
            <p class="lg:text-xl mt-2">We have crafted a beautiful new editor that bridges the gap between plain-text and <a class="underline" href="https://en.wikipedia.org/wiki/WYSIWYG" target="_blank" rel="noopener noreferrer">WYSIWYG</a>, and we are constantly improving it with your feedback.</p>
          </div>
          <div>
            <h3 class="text-xl lg:text-2xl text-gray-400">Always available</h3>
            <p class="lg:text-xl mt-2">Your information should be available to you anywhere, anytime. Whether you are on a plane, at home, or using an incognito tab on a temporary device, you should have access to your information.</p>
            <p class="lg:text-xl mt-2">Using modern technologies, Octo takes an offline-first approach by storing <strong>everything</strong> in your browser. If <a class="underline" href="https://aws.amazon.com/message/41926/" target="_blank" rel="noopener noreferrer">your entire region of the internet goes out</a>, you will still be able to open Octo and access your docs.</p>
          </div>
          <div>
            <h3 class="text-xl lg:text-2xl text-gray-400">Native spellcheck &amp; Grammarly support</h3>
            <p class="lg:text-xl mt-2">Improve your spelling, grammar, and overall readability with your favorite tools. Since Octo is a Progressive Web App built on <a class="underline" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable" target="_blank" rel="noopener noreferrer">contenteditable</a>, you can use all of your favorite browser extensions, Grammarly included.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="p-4 lg:p-8 container mx-auto">
      <div class="max-w-[100ch] mx-auto mb-8">
        <h2 class="text-2xl lg:text-4xl font-bold">Open Source</h2>
        <div class="grid lg:grid-cols-2 gap-8 mt-4">
          <div>
            <h3 class="text-xl lg:text-2xl text-gray-400">Transparency</h3>
            <p class="lg:text-xl mt-2">You get full visibility of the <a class="underline" href="https://github.com/writewithocto/octo" target="_blank" rel="noopener noreferrer">codebase</a> that powers Octo. This means you can participate in feature discussions, track bugs, and collaborate with the developer community that relies on us.</p>
          </div>
          <div>
            <h3 class="text-xl lg:text-2xl text-gray-400">Security &amp; Reliability</h3>
            <p class="lg:text-xl mt-2">We have a lot of eyes on our code, so you can hold us accountable when something is not up to your standards. We strive to uphold best practices, and we will always listen to feedback from our community.</p>
          </div>
          <div>
            <h3 class="text-xl lg:text-2xl text-gray-400">Community</h3>
            <p class="lg:text-xl mt-2">We love to connect with our community of developers and writers. Whether you want to collaborate on improving Octo itself or you want to meet other knowledge workers, creators, or enthusiasts, you can connect with us on <a class="underline" :href="discordInviteLink" target="_blank" rel="noopener noreferrer">Discord</a>.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="p-4 lg:p-8 container mx-auto">
      <div class="max-w-[100ch] mx-auto mb-8">
        <h2 class="text-2xl lg:text-4xl font-bold">Privacy Focused</h2>
        <div class="grid lg:grid-cols-2 gap-8 mt-4">
          <div>
            <h3 class="text-xl lg:text-2xl text-gray-400">End-to-End Encryption (E2EE)</h3>
            <p class="lg:text-xl mt-2"><strong class="font-semibold">Trust is earned</strong>, yet many organizations expect it from you in order to use their services. We support end-to-end encryption, because <strong class="font-semibold">we believe you deserve to make that choice</strong>. Whether you are end-to-end encrypted or not, we will always use best practices to secure your data.</p>
          </div>
          <div>
            <h3 class="text-xl lg:text-2xl text-gray-400">Transparent Analytics</h3>
            <p class="lg:text-xl mt-2">We use privacy-first tools to ensure we only track a minimal amount of basic analytics, and all of that information is available to view on our <a class="underline" href="https://app.usefathom.com/share/npcchoaz/octo.app" target="_blank" rel="noopener noreferrer">public dashboard</a>. <strong class="font-semibold">We sell software, not data.</strong></p>
          </div>
          <div>
            <h3 class="text-xl lg:text-2xl text-gray-400">No Cookies</h3>
            <p class="lg:text-xl mt-2">You heard that right! No annoying cookie banners are necessary since we do not use them. We use token-based authentication and cookieless third-party integrations.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="p-4 lg:p-8 bg-gray-900">
      <div class="container mx-auto">
        <div class="max-w-[100ch] mx-auto mb-8">
          <h2 id="pricing" class="text-2xl lg:text-4xl font-bold">Pricing</h2>
          <Subscriptions class="bg-gray-900 rounded mt-4" />
        </div>
      </div>
    </section>
    <footer class="text-gray-500 p-4 lg:p-8 container mx-auto">
      <div class="max-w-[100ch] mx-auto mb-8">
        <div class="flex flex-col items-center lg:items-start gap-2">
          <div class="flex flex-col items-center lg:flex-row gap-2 lg:gap-4">
            <router-link :to="{ name: 'privacy_policy' }" class="font-semibold">Privacy Policy</router-link>
            <router-link :to="{ name: 'terms_and_conditions' }" class="font-semibold">Terms &amp; Conditions</router-link>
            <div class="flex items-center gap-2 mt-1 lg:mt-0">
              <a href="https://twitter.com/writewithocto" target="_blank" rel="noopener noreferrer"><TwitterIcon class="h-6 lg:h-4" /></a>
              <a href="https://github.com/writewithocto" target="_blank" rel="noopener noreferrer"><GitHubIcon class="h-6 lg:h-4" /></a>
            </div>
          </div>
          <p class="mt-4">&copy; 2022 Octo</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import GitHubIcon from '/src/components/icons/GitHub.vue'
import TwitterIcon from '/src/components/icons/Twitter.vue'
import Subscriptions from '/src/components/Subscriptions.vue'
import TheLogo from '/src/components/TheLogo.vue'

export default {
  name: 'Home',
  components: {
    GitHubIcon,
    TwitterIcon,
    Subscriptions,
    TheLogo,
  },
  computed: {
    discordInviteLink() {
      return import.meta.env.VITE_DISCORD_INVITE_LINK
    },
  },
  methods: {
    trackCtaSignUpNow() {
      window.fathom.trackGoal(import.meta.env.VITE_FATHOM_EVENT_CTA_SIGN_UP_NOW, 0)
    },
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
