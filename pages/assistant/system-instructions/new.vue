<script lang="ts" setup>
const description = ref('')
const systemInstructions = ref('')

const addSavedInstructions = async () => {

}
</script>

<template>
  <CoreScrollable v-slot="{ element }" class="flex-grow flex-shrink min-h-0">
    <div :ref="element" class="flex flex-col flex-grow gap-4 m-auto max-w-prose p-2 w-full">
      <div>
        <h2 class="text-4xl">New Saved Instructions</h2>
        <p class="mt-2 text-layer-muted">Manage your saved system instructions.</p>
      </div>
      <div>
        <form class="flex flex-col gap-4" @submit.prevent="addSavedInstructions">
          <CoreInput
            v-model="description"
            label="Description"
            placeholder="Describe your instructions..."
          />

          <CoreLayer>
            <AssistantEditor
              v-model="systemInstructions"
              class="rounded border border-layer"
              placeholder="You are a rubber duck debugging partner. When I explain ideas to you, reflect them back to me in different ways and ask me to explain things you do not fully understand."
            />
          </CoreLayer>

          <CoreLayer>
            <CoreButton>Save Instructions</CoreButton>
          </CoreLayer>
        </form>
      </div>
    </div>
  </CoreScrollable>
</template>
