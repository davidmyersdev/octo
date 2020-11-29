<template>
  <div>
    <div class="side-nav d-flex flex-grow-1 flex-column align-items-stretch">
      <div class="d-flex my-3">
        <router-link class="d-none d-md-flex navbar-brand mx-auto" :to="{ name: 'dashboard' }">
          <TheLogo size="2em" />
        </router-link>
      </div>
      <div class="side-nav-spacer d-flex flex-column flex-grow-1 pb-3">
        <div class="other-actions">
          <div class="item px-3 search">
            <router-link class="btn btn-secondary d-flex align-items-center justify-content-between w-100" :to="{ name: 'documents' }">
              <SearchLabel>Search</SearchLabel>
              <span class="d-none d-md-flex">
                <Key :toggleable="false">{{this.$store.state.modKey}}</Key>
                <Key class="ml-1" :toggleable="false">shift</Key>
                <Key class="ml-1" :toggleable="false">f</Key>
              </span>
            </router-link>
          </div>
          <h6 class="dropdown-header mx-0 mt-3 px-3 d-flex justify-content-between">
            <span>Actions</span>
            <span class="keybinding d-flex">
              <ModK/>
            </span>
          </h6>
          <div class="item-divider mx-3 mb-2"></div>
          <router-link class="item px-3 py-2 py-md-1 d-flex align-items-center" :to="{ name: 'dashboard' }">
            <svg class="bi bi-file-earmark-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h5v-1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5v2.5A1.5 1.5 0 0 0 10.5 6H13v2h1V6L9 1z"/>
              <path fill-rule="evenodd" d="M13.5 10a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/>
              <path fill-rule="evenodd" d="M13 12.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z"/>
            </svg>
            <span class="action d-flex flex-grow-1 align-items-center justify-content-between">
              <span class="action">Add Document</span>
              <span class="keybinding d-flex">
                <ModKKey>n</ModKKey>
              </span>
            </span>
          </router-link>
          <router-link class="item px-3 py-2 py-md-1" :to="{ name: 'context' }">
            <svg class="bi bi-shuffle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M12.646 1.146a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.793 4l-2.147-2.146a.5.5 0 0 1 0-.708zm0 8a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.793 12l-2.147-2.146a.5.5 0 0 1 0-.708z"/>
              <path fill-rule="evenodd" d="M0 4a.5.5 0 0 1 .5-.5h2c3.053 0 4.564 2.258 5.856 4.226l.08.123c.636.97 1.224 1.865 1.932 2.539.718.682 1.538 1.112 2.632 1.112h2a.5.5 0 0 1 0 1h-2c-1.406 0-2.461-.57-3.321-1.388-.795-.755-1.441-1.742-2.055-2.679l-.105-.159C6.186 6.242 4.947 4.5 2.5 4.5h-2A.5.5 0 0 1 0 4z"/>
              <path fill-rule="evenodd" d="M0 12a.5.5 0 0 0 .5.5h2c3.053 0 4.564-2.258 5.856-4.226l.08-.123c.636-.97 1.224-1.865 1.932-2.539C11.086 4.93 11.906 4.5 13 4.5h2a.5.5 0 0 0 0-1h-2c-1.406 0-2.461.57-3.321 1.388-.795.755-1.441 1.742-2.055 2.679l-.105.159C6.186 9.758 4.947 11.5 2.5 11.5h-2a.5.5 0 0 0-.5.5z"/>
            </svg>
            <span class="action d-flex flex-grow-1 align-items-center justify-content-between">
              <span class="action">Change Context</span>
              <ModKKey>c</ModKKey>
            </span>
          </router-link>
          <router-link class="item px-3 py-2 py-md-1" :to="{ name: 'settings' }">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-gear" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"/>
              <path fill-rule="evenodd" d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"/>
            </svg>
            <span class="action d-flex flex-grow-1 align-items-center justify-content-between">
              <span>Editor Settings</span>
              <ModKKey>e</ModKKey>
            </span>
          </router-link>
          <a class="item px-3 py-2 py-md-1" target="_blank" href="https://github.com/voraciousdev/octo/issues">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bug" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6H4a3.99 3.99 0 0 1 1.333-2.982A3.983 3.983 0 0 1 8 2c1.025 0 1.959.385 2.666 1.018A3.989 3.989 0 0 1 12 6z"/>
            </svg>
            <span class="action d-flex flex-grow-1 align-items-center justify-content-between">
              <span>Report Issue</span>
              <ModKKey>i</ModKKey>
            </span>
          </a>
          <h6 class="dropdown-header mx-0 mt-3 px-3 d-flex justify-content-between">
            <span>Quick Filters</span>
            <span class="keybinding d-flex">
              <ModK/>
            </span>
          </h6>
          <div class="item-divider mx-3 mb-2"></div>
          <router-link class="item px-3 py-2 py-md-1 d-flex" :to="{ name: 'actionable' }">
            <TaskLabel class="flex-grow-1">
              <span class="d-flex align-items-center justify-content-between">
                <span>Actionable</span>
                <ModKKey>a</ModKKey>
              </span>
            </TaskLabel>
          </router-link>
          <router-link class="item px-3 py-2 py-md-1 d-flex" :to="{ name: 'recent' }">
            <TimelyLabel class="flex-grow-1">
              <span class="d-flex align-items-center justify-content-between">
                <span>Recent</span>
                <ModKKey>r</ModKKey>
              </span>
            </TimelyLabel>
          </router-link>
          <router-link class="item px-3 py-2 py-md-1 d-flex" :to="{ name: 'untagged' }">
            <DocumentLabel class="flex-grow-1">
              <span class="d-flex align-items-center justify-content-between">
                <span>Untagged</span>
                <ModKKey>u</ModKKey>
              </span>
            </DocumentLabel>
          </router-link>
          <router-link class="item px-3 py-2 py-md-1 d-flex" :to="{ name: 'discarded' }">
            <DiscardLabel class="flex-grow-1">
              <span class="d-flex align-items-center justify-content-between">
                <span>Discarded</span>
                <ModKKey>d</ModKKey>
              </span>
            </DiscardLabel>
          </router-link>
        </div>
        <div ref="tags" class="tags">
          <h6 class="dropdown-header mx-0 mt-3 px-3 d-flex justify-content-between">
            <span>Tags</span>
          </h6>
          <div class="item-divider mx-3 mb-2"></div>
          <Tag class="item px-3 py-2 py-md-1" v-for="tag in tags" :key="tag" :tag="tag"></Tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DiscardLabel from '@/components/labels/Discard';
import DocumentLabel from '@/components/labels/Document';
import Key from '@/components/Key';
import ModK from '@/components/ModK';
import ModKKey from '@/components/ModKKey';
import SearchLabel from '@/components/labels/Search';
import Tag from '@/components/Tag';
import TaskLabel from '@/components/labels/Task';
import TheLogo from '@/components/TheLogo';
import TimelyLabel from '@/components/labels/Timely';

export default {
  name: 'dashboard',
  components: {
    DiscardLabel,
    DocumentLabel,
    Key,
    ModK,
    ModKKey,
    SearchLabel,
    Tag,
    TaskLabel,
    TheLogo,
    TimelyLabel,
  },
  computed: {
    tags() {
      return this.$store.getters.tags;
    },
  },
};
</script>

<style scoped>
.side-nav {
  background-color: #050505;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: stretch;
  overflow: hidden auto;
  position: sticky;
  top: 0;
}

.side-nav .item {
  align-items: center;
  color: #aaa;
  display: flex;
}

.side-nav .item.search .key {
  border-color: #333;
  color: #555;
}

.side-nav .item:first-child {
  margin-top: -0.25rem;
}

.keybinding {
  color: #444;
}
</style>
