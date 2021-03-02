<template>
  <div class="container flex flex-col mx-auto p-4 md:px-16 md:py-8">
    <div>
      <h2 class="text-2xl">Set Context</h2>
      <p class="mt-1 text-gray-500">
        This will apply a global filter to only show documents that include at least one of the selected context tags.
      </p>
      <div class="mt-4">
        <label for="tags-search">Add some tags to set the context</label>
        <input v-model="input" @input="first" @keydown.space.prevent="toggleTag" @keydown.enter.exact="toggleTag" @keydown.221.prevent="down" @keydown.down.prevent="down" @keydown.219.prevent="up" @keydown.up.prevent="up" ref="input" type="text" class="form-text w-full mt-2" id="tag-search" placeholder="Start typing to filter the list..." autocomplete="off">
        <small class="block mt-1 text-gray-700 mt-2 hidden md:block">Navigate the list below with <span class="key">up</span> or <span class="key">down</span> and toggle tags with <span class="key">space</span> or <span class="key">enter</span></small>
      </div>
      <simplebar ref="tagsContainer" class="border rounded mt-4 overflow-hidden bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
        <div>
          <div v-if="filtered.length">
            <div v-for="(tag, index) in filtered" @click="selectTag(tag)" :key="tag" ref="tags" class="flex justify-between cursor-pointer p-6 md:p-3 focus-within:ring" :class="{ 'bg-gray-200 dark:bg-gray-700': isSelected(tag), 'bg-blue-300 dark:bg-blue-500': (index === activeIndex) }">
              <div class="flex items-center">
                <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi bi-tag" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M2 2v4.586l7 7L13.586 9l-7-7H2zM1 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2z"/>
                  <path fill-rule="evenodd" d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                </svg>
                <span class="ml-6 md:ml-3 flex-grow">{{ tag }}</span>
              </div>
              <span v-if="isSelected(tag)">selected</span>
            </div>
          </div>
          <div v-else class="flex justify-between p-3">No results...</div>
        </div>
      </simplebar>
    </div>
  </div>
</template>

<script>
import simplebar from 'simplebar-vue'

import Tag from '@/components/Tag'

import {
  SET_CONTEXT_TAGS,
} from '@/store/actions';

export default {
  name: 'Context',
  components: {
    simplebar,
    Tag,
  },
  data() {
    return {
      activeIndex: 0,
      input: '',
    };
  },
  computed: {
    availableTags() {
      return this.$store.getters.allTags;
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
      this.focusInput();
      this.scroll();
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
  beforeDestroy() {
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
