<template>
  <div class="container context d-flex flex-column mt-3 mt-md-5">
    <div>
      <h5 class="card-title">Set Context</h5>
      <h6 class="card-subtitle text-muted font-weight-normal mb-3">
        This will apply a global filter to only show documents that include at least one of the selected context tags.
      </h6>
      <div class="form-group">
        <label for="tags-search">Add some tags to set the context</label>
        <div class="d-flex align-items-bottom">
          <div class="flex-grow-1">
            <input v-model="input" @input="first" @keydown.space.prevent="toggleTag" @keydown.enter.exact="toggleTag" @keydown.221.prevent="down" @keydown.down.prevent="down" @keydown.219.prevent="up" @keydown.up.prevent="up" ref="input" type="text" class="form-control" id="tag-search" placeholder="Start typing to filter the list..." autocomplete="off">
            <small class="form-text text-muted mt-2 d-none d-md-block">Navigate the list below with <span class="key">up</span> or <span class="key">down</span> and toggle tags with <span class="key">space</span> or <span class="key">enter</span></small>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div ref="tagsContainer" class="dropdown-menu d-block mt-0">
          <div v-if="filtered.length">
            <div v-for="(tag, index) in filtered" @click="selectTag(tag)" ref="tags" class="dropdown-item d-flex justify-content-between" :class="{ active: (index === activeIndex), selected: isSelected(tag) }">
              <span>{{ tag }}</span>
              <span v-if="isSelected(tag)">selected</span>
            </div>
          </div>
          <div v-else class="dropdown-item">No results...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SET_CONTEXT_TAGS,
} from '@/store/actions';

export default {
  name: 'Context',
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

      this.$refs.tagsContainer.scroll(0, 0);
    },
    focusInput() {
      this.$refs.input.focus();
    },
    scroll() {
      const tagsContainer = this.$refs.tagsContainer;
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
  overflow: auto;
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
}

.label {
  background-color: #557bab;
  border: none;
  padding: 0.25rem 0.75rem;
}
</style>
