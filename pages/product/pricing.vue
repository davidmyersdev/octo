<script lang="ts" setup>
definePageMeta({ layout: 'minimal' })
useHead({ title: 'Pricing' })
</script>

<template>
  <div class="text-lg flex flex-col gap-4">
    <section class="p-4 lg:p-8 container mx-auto">
      <div class="max-w-4xl mx-auto">
        <CoreProse>
          <h2>You deserve a calm mind</h2>
          <p>
            In a world buzzing with information, carving out moments of clear-headed focus has become increasingly difficult. We understand this deeply personal struggle. To support your quest for clarity, <strong>we are committed to maintaining free access</strong> to core functionality for individuals.
          </p>
        </CoreProse>
      </div>
    </section>
    <section class="p-4 lg:p-8 container mx-auto">
      <div class="max-w-4xl mx-auto">
        <AuthTiers />
        <p class="text-gray-500 mt-2"><small>By signing in, you acknowledge that you have read and agree to Octo's <CoreLink :to="{ path: '/privacy-policy' }" class="underline">Privacy Policy</CoreLink> and <CoreLink :to="{ path: '/terms-and-conditions' }" class="underline">Terms &amp; Conditions</CoreLink>.</small></p>
      </div>
    </section>
  </div>
</template>
