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
            <svg class="bi bi-check2-square" width="0.9em" height="0.9em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              <path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z"/>
            </svg>
            <span>actionable</span>
          </router-link>
          <router-link class="item" :to="{ name: 'recent' }">
            <svg class="bi bi-clock-history" width="0.9em" height="0.9em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
              <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
              <path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
            </svg>
            <span>recent</span>
          </router-link>
          <router-link class="item" :to="{ name: 'untagged' }">
            <svg class="bi bi-file-earmark" width="0.9em" height="0.9em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 1h5v1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6h1v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"/>
              <path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 0 1 9 4.5z"/>
            </svg>
            <span>untagged</span>
          </router-link>
          <router-link class="item" :to="{ name: 'discarded' }">
            <svg class="bi bi-trash2" width="0.9em" height="0.9em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3.18 4l1.528 9.164a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836L12.82 4H3.18zm.541 9.329A2 2 0 0 0 5.694 15h4.612a2 2 0 0 0 1.973-1.671L14 3H2l1.721 10.329z"/>
              <path d="M14 3c0 1.105-2.686 2-6 2s-6-.895-6-2 2.686-2 6-2 6 .895 6 2z"/>
              <path fill-rule="evenodd" d="M12.9 3c-.18-.14-.497-.307-.974-.466C10.967 2.214 9.58 2 8 2s-2.968.215-3.926.534c-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466zM8 5c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2z"/>
            </svg>
            <span>discarded</span>
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
import Tag from '@/components/Tag.vue';

export default {
  name: 'dashboard',
  components: {
    Tag,
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
  overflow: auto;
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
