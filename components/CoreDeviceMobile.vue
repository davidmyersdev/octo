<template>
  <div class="relative mx-auto px-1 h-fit w-fit">
    <div class="h-[2rem] w-1 border border-gray-400 bg-gray-200 absolute left-px top-[4.5rem] rounded-s-lg" />
    <div class="h-[3rem] w-1 border border-gray-400 bg-gray-200 absolute left-px top-[8rem] rounded-s-lg" />
    <div class="h-[3rem] w-1 border border-gray-400 bg-gray-200 absolute left-px top-[11.5rem] rounded-s-lg" />
    <div class="h-[4rem] w-1 border border-gray-400 bg-gray-200 absolute right-px top-[9rem] rounded-e-lg" />
    <div class="border-gray-400 border rounded-[2.6rem] h-fit w-fit">
      <div class="border-gray-200 border rounded-[2.5rem] h-fit w-fit">
        <div class="bg-gray-800 p-[0.5rem] rounded-[2.45rem] h-fit w-fit overflow-hidden">
          <div class="rounded-[2rem] h-fit w-fit overflow-hidden">
            <CoreScaler class="overflow-hidden aspect-[1/2] w-[16rem] bg-white">
              <CoreDeviceViewport device="mobile">
                <slot />
              </CoreDeviceViewport>
            </CoreScaler>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
