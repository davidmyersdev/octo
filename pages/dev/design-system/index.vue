<script lang="ts" setup>
const showBar = ref(true)
const showContentAside = ref(true)
const showContentMenu = ref(true)
const showMainMenu = ref(true)
const showMainAside = ref(true)
</script>

<template>
  <div class="flex flex-col gap-4 p-4 bg-yellow-300">
    <CoreSwitch v-model="showBar" label="Toggle bar" />
    <CoreSwitch v-model="showContentAside" label="Toggle content aside" />
    <CoreSwitch v-model="showContentMenu" label="Toggle content menu" />
    <CoreSwitch v-model="showMainAside" label="Toggle main aside" />
    <CoreSwitch v-model="showMainMenu" label="Toggle main menu" />
    <div class="flex flex-col gap-2">
      <section class="@container">
        <CoreNavbarLayout invert-at="lg">
          <template #nav>
            <CoreButton>Nav</CoreButton>
          </template>

          <p>Some text</p>
        </CoreNavbarLayout>
      </section>
      <section>
        <CoreDeviceDesktop>
          <CoreLayoutDashboard
            :bar="showBar"
            :content-aside="showContentAside"
            :content-menu="showContentMenu"
            :main-aside="showMainAside"
            :main-menu="showMainMenu"
            class="h-full w-full"
          >
            <p>Some text</p>
            <template #main-aside>
              <DashboardPanel class="bg-layer flex-grow">
                <template #header>
                  <h3>Assistant</h3>
                </template>
                <Assistant class="-m-1" />
              </DashboardPanel>
            </template>
          </CoreLayoutDashboard>
        </CoreDeviceDesktop>
      </section>
      <section>
        <CoreDeviceMobile>
          <CoreLayoutDashboard
            :bar="showBar"
            :content-aside="showContentAside"
            :content-menu="showContentMenu"
            :main-aside="showMainAside"
            :main-menu="showMainMenu"
          >
            <p>Some text</p>
          </CoreLayoutDashboard>
        </CoreDeviceMobile>
      </section>
    </div>
  </div>
</template>
