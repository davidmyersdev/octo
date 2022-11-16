<template>
  <div class="md:container md:mx-auto flex flex-col p-4 md:px-16 md:py-8">
    <h2 class="text-2xl mb-3">Quick Actions</h2>
    <h6 class="font-normal mb-5">The Quick Action button is always visible, and its function changes depending on what you are doing.</h6>
    <div class="mb-8">
      <h3 class="flex items-center text-xl mb-2">
        <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="ml-3">Info</span>
      </h3>
      <p>This button appears on an active doc. It will take you to the doc meta page.</p>
    </div>
    <div class="mb-8">
      <h3 class="flex items-center text-xl mb-2">
        <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <span class="ml-3">Close</span>
      </h3>
      <p>This button shows up on all non-doc screens. It will take you back to the editor.</p>
    </div>
    <div class="mb-8">
      <h4 class="flex items-center text-xl mb-2">
        <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="ml-3">Help</span>
      </h4>
      <p>This button is visible on the dashboard, and it takes you to this page.</p>
    </div>
  </div>
</template>
