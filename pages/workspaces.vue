<template>
  <CorePage>
    <div>
      <h2 class="text-2xl">Workspaces</h2>
      <p class="mt-1 text-gray-500">
        A Workspace allows you to focus on what's important now by filtering your docs down to just a handful of relevant tags.
      </p>
      <div class="mt-4">
        <label for="context-name">Name it and save it (optional)</label>
        <div class="flex items-center mt-2">
          <input v-model="contextName" type="text" class="form-text w-full shadow" id="context-name" placeholder="Give this Workspace a name...">
          <button @click="save" :disabled="!(tags.length && contextName)" class="button button-size-medium button-color-gray disabled:text-gray-900 ml-2">Save</button>
        </div>
        <small class="text-gray-700 mt-1 hidden md:block">You must add at least one tag and give the context a name in order to save it.</small>
      </div>
      <div class="mt-4">
        <label for="tags-search">Choose some tags</label>
        <input v-model="input" @input="first" @keydown.space.prevent="toggleTag" @keydown.enter.exact="toggleTag" @keydown.221.prevent="down" @keydown.down.prevent="down" @keydown.219.prevent="up" @keydown.up.prevent="up" ref="input" type="text" class="form-text w-full mt-2" id="tag-search" placeholder="Start typing to filter the list..." autocomplete="off">
        <small class="text-gray-700 mt-1 hidden md:block">Navigate the list below with <span class="key">up</span> or <span class="key">down</span> and toggle tags with <span class="key">space</span> or <span class="key">enter</span></small>
      </div>
      <CoreScrollable ref="tagsContainer" class="border rounded mt-4 max-h-[20rem] bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
        <div>
          <div v-if="filtered.length" class="flex flex-col gap-1 p-2">
            <CoreButton v-for="(tag, index) in filtered" @click="selectTag(tag)" :key="tag" ref="tags" class="flex justify-between cursor-pointer p-6 md:p-3 focus-within:ring" :class="{ 'bg-gray-200 dark:bg-gray-700': isSelected(tag), 'bg-blue-300 dark:bg-blue-500': (index === activeIndex) }">
              <Tag>{{ tag }}</Tag>
              <span v-if="isSelected(tag)">selected</span>
            </CoreButton>
          </div>
          <div v-else class="flex justify-between p-3">No results...</div>
        </div>
      </CoreScrollable>
      <div class="mt-4">
        <h3 class="text-xl mb-4">Workspaces</h3>
        <div class="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <div v-for="context in contexts" :key="context.id" class="shadow relative flex flex-col min-w-0 rounded p-4 bg-gray-100 dark:bg-gray-800 dark:text-gray-300">
            <div class="flex items-center justify-between mb-4">
              <h4 class="text-lg flex items-center">
                <WorkspaceIcon class="w-5" />
                <span class="ml-2">{{ context.name }}</span>
              </h4>
              <button @click="discard(context)" class="button-flat button-size-medium text-sm text-red-500 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700">
                <TrashIcon class="w-5" />
                <span class="ml-2">Discard</span>
              </button>
            </div>
            <div class="flex items-center flex-wrap gap-4">
              <Tag v-for="tag in context.tags" :key="tag">{{ tag }}</Tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </CorePage>
</template>

<script>
import { TrashIcon, Square2StackIcon as WorkspaceIcon } from '@heroicons/vue/24/outline'
import { nanoid } from 'nanoid'
import CoreButton from '/components/CoreButton.vue'
import Tag from '/components/Tag.vue'

import {
  SET_CONTEXT_TAGS,
} from '/src/store/actions.js';

import {
  ADD_CONTEXT,
  REMOVE_CONTEXT,
} from '/src/store/modules/contexts.js'

export default {
  components: {
    CoreButton,
    Tag,
    TrashIcon,
    WorkspaceIcon,
  },
  data() {
    return {
      activeIndex: 0,
      contextName: '',
      input: '',
    };
  },
  computed: {
    availableTags() {
      return this.$store.getters.allTags;
    },
    contexts() {
      return this.$store.getters.sortedContexts
    },
    filtered() {
      return this.availableTags.filter((tag) => {
        return tag.startsWith(this.input.toLowerCase());
      });
    },
    selected() {
      return this.tags.sort();
    },
    tags() {
      return this.$store.state.context.tags;
    },
  },
  methods: {
    discard(context) {
      this.$store.commit(REMOVE_CONTEXT, context)
    },
    down() {
      if (this.activeIndex < (this.filtered.length - 1)) {
        this.activeIndex += 1;

        this.scroll();
      }
    },
    first() {
      this.activeIndex = 0;

      this.$refs.tagsContainer.scrollElement.scroll(0, 0);
    },
    focusInput() {
      this.$refs.input.focus();
    },
    save() {
      this.$store.commit(ADD_CONTEXT, {
        id: nanoid(),
        name: this.contextName,
        tags: this.tags,
      })

      this.contextName = ''
      this.$store.dispatch(SET_CONTEXT_TAGS, { context: { tags: [] } })
    },
    scroll() {
      const tagsContainer = this.$refs.tagsContainer.scrollElement;
      const tag = this.$refs.tags[this.activeIndex];

      const scrolltop = tagsContainer.scrollTop;
      const offsetheight = tagsContainer.offsetHeight;
      const offsettop = tag.offsetTop;
      const height = tag.offsetHeight;

      if (((offsettop + height) - scrolltop) > offsetheight) {
        // need to scroll down
        const scrolloffset = (offsettop - offsetheight) + height;

        tagsContainer.scroll(0, scrolloffset);
      } else if (offsettop < scrolltop) {
        // need to scroll up?
        tagsContainer.scroll(0, offsettop);
      }
    },
    selectTag(tag) {
      this.activeIndex = this.filtered.findIndex(t => t === tag);

      this.toggleTag();
    },
    isSelected(tag) {
      return this.tags.includes(tag);
    },
    toggleTag() {
      const tag = this.filtered[this.activeIndex];

      if (tag) {
        let tags = this.tags;

        if (tags.includes(tag)) {
          tags = tags.filter(t => t !== tag);
        } else {
          tags = tags.concat([tag]);
        }

        this.$store.dispatch(SET_CONTEXT_TAGS, {
          context: {
            tags,
          }
        });
      }
    },
    up() {
      if (this.activeIndex > 0) {
        this.activeIndex -= 1;

        this.scroll();
      }
    },
  },
  mounted() {
    // todo use action
    this.$store.state.context.editing = true;
    this.focusInput();
  },
  beforeUnmount() {
    this.$store.state.context.editing = false;
  },
};
</script>

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
