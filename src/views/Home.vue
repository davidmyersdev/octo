<template>
  <div class="bg-darkest text-gray-100 text-lg p-4 overflow-auto">
    <section class="py-4 lg:py-8">
      <div class="container mx-auto mb-8">
        <div class="flex flex-col">
          <h1 class="text-4xl lg:text-6xl text-brand font-bold uppercase">Supercharge your writing</h1>
          <p class="text-xl text-gray-600 font-semibold uppercase">Octo is Made for Technical Writers</p>
        </div>
        <div class="aspect-w-3 aspect-h-4 lg:aspect-w-16 lg:aspect-h-9 w-full mt-8">
          <iframe class="bg-gray-900 rounded shadow-lg" src="https://octo.app/example" sandbox="allow-scripts allow-same-origin" loading="lazy" />
        </div>
        <div class="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4 mt-8">
          <router-link :to="{ name: 'account' }" class="button-base button-size-medium bg-blue-600 shadow w-full lg:w-auto whitespace-nowrap justify-center gap-3 text-xl">
            <span class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Sign Up Now</span>
            </span>
          </router-link>
          <router-link :to="{ name: 'dashboard' }" class="button-base button-size-medium bg-gray-900 text-gray-500 shadow w-full lg:w-auto whitespace-nowrap justify-center gap-3 text-xl">
            <span class="flex items-center gap-3">
              <span>Open App</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </router-link>
        </div>
      </div>
    </section>
    <section class="py-4 lg:py-8">
      <div class="container mx-auto mb-8">
        <h2 class="text-2xl lg:text-4xl text-brand font-bold uppercase">Open Source</h2>
        <div class="grid lg:grid-cols-2 gap-4 mt-4">
          <div>
            <h2 class="text-xl lg:text-2xl text-gray-400 uppercase">Transparency</h2>
            <p class="lg:text-xl mt-2">You get full visibility of the codebase that powers Octo. This means you can participate in feature discussions, track bugs, and collaborate with the developer community that relies on us.</p>
          </div>
          <div>
            <h2 class="text-xl lg:text-2xl text-gray-400 uppercase">Security &amp; Reliability</h2>
            <p class="lg:text-xl mt-2">We have a lot of eyes on our code, so you can hold us accountable when something is not up to your standards. We strive to uphold best practices, and we will always listen to feedback from our community.</p>
          </div>
          <div>
            <h2 class="text-xl lg:text-2xl text-gray-400 uppercase">Community</h2>
            <p class="lg:text-xl mt-2">We love to connect with our community of developers and writers. Whether you want to collaborate on improving Octo itself or you want to meet others interested in technical writing, you can connect with them on GitHub Discussions or Discord.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-4 lg:py-8">
      <div class="container mx-auto mb-8">
        <h2 class="text-2xl lg:text-4xl text-brand font-bold uppercase">Privacy Focused</h2>
        <div class="grid lg:grid-cols-2 gap-4 mt-4">
          <div>
            <h2 class="text-xl lg:text-2xl text-gray-400 uppercase">End-to-End Encryption</h2>
            <p class="lg:text-xl mt-2"><strong class="font-semibold">Trust is earned</strong>, yet many organizations expect it from you in order to use their services. We support end-to-end encryption, because <strong class="font-semibold">we believe you deserve to make that choice</strong>. Whether you are end-to-end encrypted or not, we will always use best practices to secure your data.</p>
          </div>
          <div>
            <h2 class="text-xl lg:text-2xl text-gray-400 uppercase">Transparent Analytics</h2>
            <p class="lg:text-xl mt-2">We use privacy-first tools to ensure we only track a minimal amount of basic analytics, and all of that information is available to view on our public dashboard. <strong class="font-semibold">We sell software, not data.</strong></p>
          </div>
          <div>
            <h2 class="text-xl lg:text-2xl text-gray-400 uppercase">No Cookies</h2>
            <p class="lg:text-xl mt-2">You heard that right! No annoying cookie banners are necessary since we do not use them. We use token-based authentication and cookieless third-party integrations.</p>
          </div>
        </div>
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
}
</script>
