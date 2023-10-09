<template>
  <article>
    <header class="px-4 py-2 mb-8 border-b border-layer-2">
      <nav>
        <CoreContainer>
          <div class="flex items-center justify-between">
            <CoreLink :to="{ path: '/' }" class="flex gap-4 items-center p-2 -ml-2 rounded">
              <CoreAssetLogo class="h-8" />
              <span class="font-bold text-lg text-black dark:text-white">Octo</span>
            </CoreLink>
            <div class="flex items-center gap-2 -mr-2">
              <CoreButtonLink :layer="0" :to="{ path: '/product/pricing' }">
                Pricing
              </CoreButtonLink>
              <div class="w-px bg-layer-2">
                &nbsp;
              </div>
              <CoreButtonLink :layer="0" :to="{ path: '/authenticate' }">
                Sign In
              </CoreButtonLink>
            </div>
          </div>
        </CoreContainer>
      </nav>
    </header>
    <slot />
    <footer class="border-t border-layer-2 p-4 lg:p-8 w-full mt-8">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col lg:flex-row lg:justify-between gap-8">
          <!-- Links -->
          <div class="flex justify-between lg:justify-start gap-8 lg:gap-16">
            <!-- Column 1 -->
            <div class="flex flex-col gap-8">
              <div class="flex flex-col items-start gap-2">
                <small class="text-gray-500">Resources</small>
                <CoreLink :to="{ path: '/product/pricing' }" class="hover:underline">
                  Pricing
                </CoreLink>
              </div>
              <div class="flex flex-col items-start gap-2">
                <small class="text-gray-500">Policies</small>
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
                <small class="text-gray-500">Community</small>
                <CoreLink to="https://github.com/davidmyersdev/octo" class="hover:underline">
                  GitHub
                </CoreLink>
                <CoreLink to="https://twitter.com/octowiki" class="hover:underline">
                  Twitter
                </CoreLink>
              </div>
            </div>
          </div>
          <!-- Copyright -->
          <div class="lg:text-right">
            <p><small>We do not sell or share your data</small></p>
            <p><small>&copy; 2023 Octo</small></p>
          </div>
        </div>
      </div>
    </footer>
  </article>
</template>
