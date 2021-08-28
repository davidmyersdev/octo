<template>
  <section class="bg-blue-300 dark:bg-blue-400 text-gray-900 shadow rounded p-2">
    <div class="lg:flex items-center justify-between">
      <div class="lg:flex items-center text-gray-900">
        <strong class="inline-flex items-center">
          <div class="bg-gray-900 bg-opacity-25 rounded p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <span class="whitespace-nowrap ml-2 xl:ml-4">Exploring the Depths</span>
        </strong>
        <br>
        <div class="whitespace-nowrap lg:ml-2 xl:ml-4">The Official Blog for Octo</div>
      </div>
      <div class="flex items-center justify-end mt-4 lg:mt-0">
        <a @click="trackNewsletterCta" href="https://by.octo.app" target="_blank" rel="noopener noreferrer" class="button button-size-medium w-full bg-gray-100 whitespace-nowrap lg:ml-2">Read Now</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Newsletter',
  methods: {
    trackNewsletterCta() {
      window.fathom.trackGoal(process.env.VUE_APP_FATHOM_GOAL_CTA_NEWSLETTER, 0)
    },
  },
}
</script>
