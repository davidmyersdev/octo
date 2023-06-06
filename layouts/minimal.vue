<template>
  <header class="bg-layer-1 flex justify-center gap-4 p-2 w-full">
    <nav class="flex gap-4 max-w-4xl w-full">
      <CoreLink :to="{ path: '/home' }" class="flex gap-4 items-center p-2">
        <AssetLogo class="h-8" />
        <span class="font-semibold text-lg text-darkest dark:text-gray-50">Octo</span>
      </CoreLink>
    </nav>
  </header>
  <slot />
</template>
