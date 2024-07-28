<template>
  <div class="border border-gray-300 relative mx-auto h-fit w-full rounded-lg overflow-hidden">
    <div class="bg-gray-300 p-2">
      <div class="flex items-center gap-2">
        <div class="rounded-full bg-red-400 sq-3" />
        <div class="rounded-full bg-yellow-400 sq-3" />
        <div class="rounded-full bg-green-400 sq-3" />
      </div>
    </div>
    <div class="aspect-[16/9] w-full overflow-hidden">
      <CoreScaler class="@container bg-gray-100 h-full w-full overflow-hidden">
        <CoreDeviceViewport :height="900" :width="1600">
          <slot />
        </CoreDeviceViewport>
      </CoreScaler>
    </div>
  </div>
</template>
