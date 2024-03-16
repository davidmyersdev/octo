<script lang="ts" setup>
const { user } = useUser()
const year = ref('2024')

onMounted(() => {
  year.value = new Date().getFullYear().toString()
})
</script>

<template>
  <article>
    <header class="px-4 py-2 mb-8 border-b border-layer">
      <nav>
        <CoreContainer>
          <div class="flex items-center justify-between">
            <CoreLink :to="{ path: '/' }" class="flex gap-2 items-center p-2 -ml-2 rounded">
              <CoreAsset type="Logo" class="sq-8" />
              <span class="font-bold text-lg">Octo</span>
            </CoreLink>
            <div class="flex items-center gap-2 -mr-2">
              <CoreButtonLink :layer="0" :to="{ path: '/product/pricing' }">
                Pricing
              </CoreButtonLink>
              <CoreDivider vertical />
              <CoreButtonLink v-if="user.id" :layer="0" :to="{ path: '/docs/new' }">
                App
              </CoreButtonLink>
              <CoreButtonLink v-else data-test-id="sign-in" :layer="0" :to="{ path: '/authenticate' }">
                Sign In
              </CoreButtonLink>
            </div>
          </div>
        </CoreContainer>
      </nav>
    </header>
    <slot />
    <footer class="border-t border-layer p-4 lg:p-8 w-full mt-8">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col lg:flex-row lg:justify-between gap-8">
          <!-- Links -->
          <div class="flex justify-between lg:justify-start gap-8 lg:gap-16">
            <!-- Column 1 -->
            <div class="flex flex-col gap-8">
              <div class="flex flex-col items-start gap-2">
                <small class="text-layer-muted">Resources</small>
                <CoreLink to="https://octo.canny.io/" class="hover:underline">
                  Feedback
                </CoreLink>
                <CoreLink :to="{ path: '/product/pricing' }" class="hover:underline">
                  Pricing
                </CoreLink>
              </div>
              <div class="flex flex-col items-start gap-2">
                <small class="text-layer-muted">Policies</small>
                <CoreLink :to="{ path: '/privacy-policy' }" class="hover:underline">
                  Privacy Policy
                </CoreLink>
                <CoreLink :to="{ path: '/terms-and-conditions' }" class="hover:underline">
                  Terms &amp; Conditions
                </CoreLink>
              </div>
            </div>
            <!-- Column 2 -->
            <div class="flex flex-col gap-4">
              <div class="flex flex-col items-start gap-2">
                <small class="text-layer-muted">Community</small>
                <CoreLink to="https://github.com/davidmyersdev/octo" class="hover:underline">
                  GitHub
                </CoreLink>
              </div>
            </div>
          </div>
          <!-- Copyright -->
          <div class="lg:text-right">
            <p><small>We do not sell or share your data</small></p>
            <p><small>&copy; {{ year }} Octo</small></p>
          </div>
        </div>
      </div>
    </footer>
  </article>
</template>
