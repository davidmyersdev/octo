<template>
  <simplebar class="p-4 md:p-2">
    <div class="hidden md:flex justify-center my-3 pb-2">
      <router-link class="flex p-2" :to="{ name: 'dashboard' }">
        <TheLogo size="2.5rem" />
      </router-link>
    </div>
    <div class="side-nav-spacer flex flex-col flex-grow pb-3">
      <div class="other-actions">
        <div class="search">
          <router-link :to="{ name: 'documents' }" class="sidebar-button">
              <div class="flex items-center">
                <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span class="ml-6 md:ml-3">Search</span>
              </div>
              <span class="hidden md:flex text-gray-500">
                <Key :toggleable="false">{{this.$store.state.modKey}}</Key>
                <Key class="ml-1" :toggleable="false">⇧ shift</Key>
                <Key class="ml-1" :toggleable="false">f</Key>
              </span>
          </router-link>
        </div>
        <h6 class="sidebar-label">
          <span>Actions</span>
          <ModK/>
        </h6>
        <router-link :to="{ name: 'dashboard' }" class="sidebar-link">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span class="action">New Doc</span>
            <ModKKey>N</ModKKey>
          </span>
        </router-link>
        <router-link :to="{ name: 'daily' }" class="sidebar-link">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>Daily Notepad</span>
            <ModKKey>P</ModKKey>
          </span>
        </router-link>
        <router-link :to="{ name: 'context' }" class="sidebar-link">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span class="action">Context Switching</span>
            <ModKKey>C</ModKKey>
          </span>
        </router-link>
        <router-link :to="{ name: 'graph' }" class="sidebar-link">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>Data Explorer</span>
            <ModKKey>E</ModKKey>
          </span>
        </router-link>
        <a class="sidebar-link" href="https://github.com/writewithocto/octo/discussions" target="_blank" rel="noopener noreferrer">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <div class="flex-grow ml-6 md:ml-3">Discuss</div>
        </a>
        <router-link :to="{ name: 'settings' }" class="sidebar-link">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>Settings</span>
            <ModKKey>S</ModKKey>
          </span>
        </router-link>
        <router-link v-if="authIsEvaluated && !user" @click.native="trackCta" :to="{ name: 'settings' }" class="sidebar-link text-brand">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>Sync Docs</span>
          </span>
        </router-link>
        <h6 class="sidebar-label">
          <span>Quick Filters</span>
          <span class="flex">
            <ModK/>
          </span>
        </h6>
        <router-link :to="{ name: 'recent' }" class="sidebar-link">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>Recent Docs</span>
            <ModKKey>R</ModKKey>
          </span>
        </router-link>
        <router-link :to="{ name: 'actionable' }" class="sidebar-link">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>Tasks</span>
            <ModKKey>T</ModKKey>
          </span>
        </router-link>
        <router-link :to="{ name: 'untagged' }" class="sidebar-link">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>Untagged</span>
            <ModKKey>U</ModKKey>
          </span>
        </router-link>
        <router-link :to="{ name: 'discarded' }" class="sidebar-link">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>Discarded</span>
            <ModKKey>D</ModKKey>
          </span>
        </router-link>
        <h6 v-if="contexts.length" class="sidebar-label">
          <span>Contexts</span>
        </h6>
        <button v-for="context in contexts" :key="context.id" @click="setContext(context)" class="sidebar-link w-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>{{ context.name }}</span>
          </span>
        </button>
      </div>
      <div>
        <h6 class="sidebar-label">
          <span>Tags</span>
        </h6>
        <router-link class="sidebar-link md:hidden" :to="{ name: 'tags' }">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          <span class="ml-6 flex-grow">Tags</span>
        </router-link>
        <div v-if="mediumPlus">
          <Tag v-for="tag in tags" :key="tag" :tag="tag" class="sidebar-link"></Tag>
        </div>
      </div>
      <div>
        <h6 class="sidebar-label">
          <span>Agreements</span>
        </h6>
        <router-link :to="{ name: 'privacy_policy' }" class="sidebar-link">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>Privacy Policy</span>
          </span>
        </router-link>
        <router-link :to="{ name: 'terms_and_conditions' }" class="sidebar-link">
          <svg height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span class="action flex flex-grow items-stretch justify-between ml-6 md:ml-3">
            <span>Terms &amp; Conditions</span>
          </span>
        </router-link>
      </div>
    </div>
  </simplebar>
</template>

<script>
import simplebar from 'simplebar-vue'

import Key from '@/components/Key'
import ModK from '@/components/ModK'
import ModKKey from '@/components/ModKKey'
import Tag from '@/components/Tag'
import TheLogo from '@/components/TheLogo'

import {
  SET_CONTEXT_TAGS,
} from '@/store/actions'

export default {
  name: 'TheLeftSidebar',
  components: {
    simplebar,
    Key,
    ModK,
    ModKKey,
    Tag,
    TheLogo,
  },
  computed: {
    authIsEvaluated() {
      return this.$store.state.auth.isEvaluated
    },
    contexts() {
      return this.$store.state.contexts.all
    },
    document() {
      return this.$store.getters.currentDoc
    },
    mediumPlus() {
      return ['md', 'lg', 'xl'].includes(this.$mq)
    },
    tags() {
      return this.$store.getters.tags
    },
    user() {
      return this.$store.state.auth.user
    },
  },
  methods: {
    trackCta() {
      window.fathom.trackGoal(process.env.VUE_APP_FATHOM_GOAL_CTA_SYNC_DOCS, 0)
    },
  },
  methods: {
    setContext(context) {
      this.$store.dispatch(SET_CONTEXT_TAGS, { context })
    },
  },
}
</script>
