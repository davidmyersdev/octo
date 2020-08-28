<template>
  <div class="dashboard">
    <div class="side-nav d-none d-md-flex">
      <div class="side-nav-spacer">
        <div class="other-actions">
          <div class="item search">
            <router-link class="btn btn-secondary w-100" :to="{ name: 'documents' }">
              <svg width="0.9em" height="0.9em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
              </svg>
              <span>search</span>
            </router-link>
          </div>
          <h6 class="dropdown-header">quick filters</h6>
          <div class="item-divider"></div>
          <router-link class="item" :to="{ name: 'actionable' }">
            <TaskLabel>actionable</TaskLabel>
          </router-link>
          <router-link class="item" :to="{ name: 'recent' }">
            <TimelyLabel>recent</TimelyLabel>
          </router-link>
          <router-link class="item" :to="{ name: 'untagged' }">
            <DocumentLabel>untagged</DocumentLabel>
          </router-link>
          <router-link class="item" :to="{ name: 'discarded' }">
            <DiscardLabel>discarded</DiscardLabel>
          </router-link>
        </div>
        <div ref="tags" class="tags">
          <h6 class="dropdown-header">tags</h6>
          <div class="item-divider"></div>
          <Tag class="item" v-for="tag in tags" :key="tag" :tag="tag"></Tag>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import DiscardLabel from '@/components/labels/Discard';
import DocumentLabel from '@/components/labels/Document';
import Tag from '@/components/Tag';
import TaskLabel from '@/components/labels/Task';
import TimelyLabel from '@/components/labels/Timely';

export default {
  name: 'dashboard',
  components: {
    DiscardLabel,
    DocumentLabel,
    Tag,
    TaskLabel,
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
.dashboard {
  align-items: stretch;
  display: flex;
  position: relative;
}

.side-nav {
  border-right: 1px solid #222;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  float: left;
  align-items: stretch;
  overflow: hidden auto;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  width: 12rem;
}

.side-nav-spacer {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
}

.side-nav .tags {
  margin-top: 0.25rem;
}

.side-nav .item {
  align-items: center;
  color: #aaa;
  display: flex;
  padding: 0.3rem 1rem;
  padding-right: 3rem;
}

.side-nav .item.search {
  margin-bottom: 0.5rem;
  padding-right: 1rem;
}

.side-nav .item:first-child {
  margin-top: -0.25rem;
}

.side-nav .item-divider {
  background-color: #222;
  height: 1px;
  margin: 0 1rem 0.5rem 1rem;
}

.side-nav .dropdown-header {
  margin-left: 0.25rem;
}

svg {
  margin-right: 0.5rem;
}
</style>
