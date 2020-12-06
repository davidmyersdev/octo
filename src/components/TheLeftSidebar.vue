<template>
  <simplebar class="p-3 p-md-2">
    <div class="d-flex my-3 pb-2">
      <router-link class="d-none d-md-flex navbar-brand mx-auto" :to="{ name: 'dashboard' }">
        <TheLogo size="2em" />
      </router-link>
    </div>
    <div class="side-nav-spacer d-flex flex-column flex-grow-1 pb-3">
      <div class="other-actions">
        <div class="search">
          <router-link class="search-button btn-block btn-secondary rounded d-flex align-items-center justify-content-between p-3 p-md-2" :to="{ name: 'documents' }">
            <div class="d-flex align-items-center">
              <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi bi-search m-2 m-md-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
              </svg>
              <span class="ml-3">Search</span>
            </div>
            <span class="d-none d-md-flex">
              <Key :toggleable="false">{{this.$store.state.modKey}}</Key>
              <Key class="ml-1" :toggleable="false">SHIFT</Key>
              <Key class="ml-1" :toggleable="false">F</Key>
            </span>
          </router-link>
        </div>
        <h6 class="dropdown-header mx-0 mt-3 p-3 px-md-2 d-flex justify-content-between">
          <span class="text-muted">Actions</span>
          <span class="d-flex">
            <ModK/>
          </span>
        </h6>
        <router-link :to="{ name: 'dashboard' }" class="item rounded p-3 my-1 px-md-2 py-md-1 d-flex align-items-center">
          <div class="icon-wrapper d-flex align-items-center justify-content-center rounded-circle">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
              <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z"/>
              <path fill-rule="evenodd" d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
            </svg>
          </div>
          <span class="action d-flex flex-grow-1 align-items-stretch justify-content-between ml-3">
            <span class="action">Add Document</span>
            <ModKKey>N</ModKKey>
          </span>
        </router-link>
        <router-link :to="{ name: 'context' }" class="item rounded p-3 my-1 px-md-2 py-md-1">
          <div class="icon-wrapper d-flex align-items-center justify-content-center rounded-circle">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-repeat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
              <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
            </svg>
          </div>
          <span class="action d-flex flex-grow-1 align-items-stretch justify-content-between ml-3">
            <span class="action">Change Context</span>
            <ModKKey>C</ModKKey>
          </span>
        </router-link>
        <router-link :to="{ name: 'settings' }" class="item rounded p-3 my-1 px-md-2 py-md-1">
          <div class="icon-wrapper d-flex align-items-center justify-content-center rounded-circle">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-gear" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"/>
              <path fill-rule="evenodd" d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"/>
            </svg>
          </div>
          <span class="action d-flex flex-grow-1 align-items-stretch justify-content-between ml-3">
            <span>Editor Settings</span>
            <ModKKey>E</ModKKey>
          </span>
        </router-link>
        <a class="item rounded p-3 my-1 px-md-2 py-md-1" target="_blank" href="https://github.com/voraciousdev/octo/issues">
          <div class="icon-wrapper d-flex align-items-center justify-content-center rounded-circle">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bug" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6H4a3.99 3.99 0 0 1 1.333-2.982A3.983 3.983 0 0 1 8 2c1.025 0 1.959.385 2.666 1.018A3.989 3.989 0 0 1 12 6z"/>
            </svg>
          </div>
          <span class="action d-flex flex-grow-1 align-items-stretch justify-content-between ml-3">
            <span>Report Issue</span>
            <ModKKey>I</ModKKey>
          </span>
        </a>
        <h6 class="dropdown-header mx-0 mt-3 p-3 px-md-2 d-flex justify-content-between">
          <span>Quick Filters</span>
          <span class="d-flex">
            <ModK/>
          </span>
        </h6>
        <router-link :to="{ name: 'actionable' }" class="item rounded p-3 my-1 px-md-2 py-md-1 d-flex">
          <div class="icon-wrapper d-flex align-items-center justify-content-center rounded-circle">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              <path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z"/>
            </svg>
          </div>
          <span class="action d-flex flex-grow-1 align-items-stretch justify-content-between ml-3">
            <span>Actionable</span>
            <ModKKey>A</ModKKey>
          </span>
        </router-link>
        <router-link :to="{ name: 'recent' }" class="item rounded p-3 my-1 px-md-2 py-md-1 d-flex">
          <div class="icon-wrapper d-flex align-items-center justify-content-center rounded-circle">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
              <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
              <path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
            </svg>
          </div>
          <span class="action d-flex flex-grow-1 align-items-stretch justify-content-between ml-3">
            <span>Recent</span>
            <ModKKey>R</ModKKey>
          </span>
        </router-link>
        <router-link :to="{ name: 'untagged' }" class="item rounded p-3 my-1 px-md-2 py-md-1 d-flex">
          <div class="icon-wrapper d-flex align-items-center justify-content-center rounded-circle">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
              <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z"/>
            </svg>
          </div>
          <span class="action d-flex flex-grow-1 align-items-stretch justify-content-between ml-3">
            <span>Untagged</span>
            <ModKKey>U</ModKKey>
          </span>
        </router-link>
        <router-link :to="{ name: 'discarded' }" class="item rounded p-3 my-1 px-md-2 py-md-1 d-flex">
          <div class="icon-wrapper d-flex align-items-center justify-content-center rounded-circle">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </div>
          <span class="action d-flex flex-grow-1 align-items-stretch justify-content-between ml-3">
            <span>Discarded</span>
            <ModKKey>D</ModKKey>
          </span>
        </router-link>
      </div>
      <div ref="tags" class="d-none d-md-block">
        <h6 class="dropdown-header mx-0 mt-3 p-3 px-md-2 d-flex justify-content-between">
          <span>Tags</span>
        </h6>
        <div v-for="tag in tags" class="d-flex align-items-center justify-content-between item rounded p-3 my-1 px-md-2 py-md-1 cursor-pointer">
          <Tag :key="tag" :tag="tag"></Tag>
        </div>
      </div>
    </div>
  </simplebar>
</template>

<script>
import simplebar from 'simplebar-vue';

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
  name: 'TheLeftSidebar',
  components: {
    simplebar,
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
    document() {
      return this.$store.getters.currentDoc;
    },
    tags() {
      return this.$store.getters.tags;
    },
  },
  methods: {
    isRoute(name) {
      return this.$route.name === name;
    },
  },
};
</script>

<style scoped>
svg {
  margin: 0;
}

.item.search .key {
  border-color: #333;
  color: #555;
}
</style>
