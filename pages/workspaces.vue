<script lang="ts" setup>
import { TrashIcon } from '@heroicons/vue/24/outline'
import { nanoid } from 'nanoid'
import CoreButton from '#root/components/CoreButton.vue'
import Tag from '#root/components/Tag.vue'
import { ADD_CONTEXT, REMOVE_CONTEXT } from '#root/src/store/modules/contexts'

const query = ref('')
const selectedTags = ref<string[]>([])
const workspaceName = ref('')
const { store } = useVuex()

const filteredTags = computed(() => {
  return store.getters.allTags.filter((tag: string) => {
    return tag.toLowerCase().includes(query.value.toLowerCase())
  })
})

const workspaces = computed(() => {
  return store.getters.sortedContexts
})

useHead({ title: 'Workspaces' })

const isTagSelected = (tag: string) => {
  return selectedTags.value.includes(tag)
}

const removeWorkspace = (workspace: any) => {
  store.commit(REMOVE_CONTEXT, workspace)
}

const saveWorkspace = () => {
  store.commit(ADD_CONTEXT, {
    id: nanoid(),
    name: workspaceName.value,
    tags: selectedTags.value,
  })

  query.value = ''
  selectedTags.value = []
  workspaceName.value = ''
}

onMounted(() => {
  store.state.context.editing = true
})

onUnmounted(() => {
  store.state.context.editing = false
})
</script>

<template>
  <CorePage width-prose>
    <div class="flex flex-col gap-4">
      <div>
        <h2 class="text-3xl">Workspaces</h2>
        <p class="mt-1 text-layer-muted">
          A Workspace allows you to focus on what's important now by filtering your docs down to just a handful of relevant tags.
        </p>
      </div>
      <div v-if="workspaces.length">
        <h3 class="text-2xl mb-4">Your Workspaces</h3>
        <CoreLayer class="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <CoreCard v-for="workspace in workspaces" :key="workspace.id" class="flex flex-col gap-4 relative">
            <h4 class="text-lg">
              {{ workspace.name }}
            </h4>
            <div class="flex items-center flex-wrap gap-2">
              <Tag v-for="tag in workspace.tags" :key="tag" class="p-2 rounded border border-layer">{{ tag }}</Tag>
            </div>
            <CoreButton class="absolute top-4 right-4" @click="removeWorkspace(workspace)">
              <TrashIcon class="w-5" />
            </CoreButton>
          </CoreCard>
        </CoreLayer>
      </div>
      <div>
        <h3 class="text-2xl mb-4">Create a Workspace</h3>
        <label>Workspace Name</label>
        <div class="flex items-center mt-2 gap-2">
          <CoreInput
            v-model="workspaceName"
            placeholder="Give this Workspace a name..."
            class="flex-grow"
          />
          <CoreLayer>
            <CoreButton :disabled="!(selectedTags.length && workspaceName)" @click="saveWorkspace">Save</CoreButton>
          </CoreLayer>
        </div>
        <small class="text-layer-muted mt-1 hidden md:block">You must add at least one tag and give the context a name in order to save it.</small>
      </div>
      <div class="flex flex-col gap-2">
        <label>Workspace Tags</label>
        <CoreLayer v-if="selectedTags.length" class="flex flex-wrap items-center gap-2">
          <Tag v-for="tag in selectedTags" :key="tag" class="p-2 rounded bg-layer">{{ tag }}</Tag>
        </CoreLayer>
        <CoreCombobox v-model="selectedTags">
          <CoreComboboxInput
            id="workspaces-combobox-input"
            v-model="query"
            :display-value="(tag: string) => tag"
          />
          <CoreComboboxOptions id="workspaces-combobox-options">
            <CoreComboboxOption v-for="tag in filteredTags" :key="tag" :value="tag">
              <Tag>{{ tag }}</Tag>
              <span v-if="isTagSelected(tag)">selected</span>
            </CoreComboboxOption>
          </CoreComboboxOptions>
        </CoreCombobox>
      </div>
    </div>
  </CorePage>
</template>

<style scoped>
.dropdown-menu {
  float: none;
  max-height: 20rem;
  padding: 0;
  position: relative;
  z-index: auto;
}

.dropdown-item {
  cursor: pointer;
}

.dropdown-item.selected:not(.active) {
  background-color: rgba(255, 255, 255, 0.1);
}

.dropdown-item:hover:not(.active) {
  background-color: #3f3f3f;
}

.form-control {
  border: none;
  height: auto;
}

.key {
  border: 1px solid;
  border-radius: 0.125rem;
  padding: 0 0.25rem;
  text-transform: uppercase;
}

.label {
  background-color: #557bab;
  border: none;
  padding: 0.25rem 0.75rem;
}
</style>
