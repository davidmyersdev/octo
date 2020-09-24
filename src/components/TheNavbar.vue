<template>
  <nav class="navbar d-md-none py-2 px-3">
    <router-link class="navbar-brand" :to="{ name: 'dashboard' }">
      <TheLogo/>
    </router-link>
    <div class="buttons d-flex">
      <div v-if="offline" class="btn btn-link disabled">
        offline
      </div>
      <router-link class="btn btn-secondary" :to="{ name: 'tags' }">
        <span class="action">tags</span>
      </router-link>
      <router-link class="btn btn-primary d-flex justify-content-between align-items-center ml-2" :to="menuLink" role="button" aria-haspopup="true" aria-expanded="false">
        <svg v-if="menuActive" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dash-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
        </svg>
        <svg v-else width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
        <span>menu</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
import TheLogo from '@/components/TheLogo';

export default {
  name: 'TheNavbar',
  components: {
    TheLogo,
  },
  computed: {
    offline() {
      return !this.$store.state.online;
    },
    menuActive() {
      return this.$route.name === 'menu';
    },
    menuLink() {
      return {
        name: this.menuActive ? 'dashboard' : 'menu',
      };
    },
  },
};
</script>
