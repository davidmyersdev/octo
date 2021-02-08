<template>
  <nav class="navbar z-index-10 d-md-none p-3 w-100">
    <router-link class="navbar-brand d-flex justify-content-between align-items-center" :to="{ name: 'dashboard' }">
      <TheLogo size="1.5em"/>
    </router-link>
    <div class="d-flex align-items-stretch position-fixed top-3 right-3">
      <router-link class="btn btn-secondary d-flex justify-content-between align-items-center" :to="{ name: 'tags' }">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-tag" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M2 2v4.586l7 7L13.586 9l-7-7H2zM1 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2z"/>
          <path fill-rule="evenodd" d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        </svg>
        <span class="action">Tags</span>
      </router-link>
      <router-link class="btn btn-secondary d-flex justify-content-between align-items-center ml-2" :to="{ name: 'menu' }" role="button" aria-haspopup="true" aria-expanded="false">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-menu-button" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8A1.5 1.5 0 0 1 11 1.5v2A1.5 1.5 0 0 1 9.5 5h-8A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-8zM14 7H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM2 6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H2z"/>
          <path fill-rule="evenodd" d="M15 11H1v-1h14v1zM2 12.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
          <path d="M7.823 2.823l-.396-.396A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0z"/>
        </svg>
        <span>Menu</span>
      </router-link>
      <router-link v-if="isDashboard" :to="{ name: 'quick-action' }" class="btn btn-secondary d-flex justify-content-between align-items-center ml-2">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-question-circle m-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg>
      </router-link>
      <router-link v-else-if="isDocument" :to="{ name: 'document-meta', params: { id: document.id } }" class="btn btn-secondary d-flex justify-content-between align-items-center ml-2">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-menu-button m-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
          <circle cx="8" cy="4.5" r="1"/>
        </svg>
      </router-link>
      <button v-else @click="close" class="btn btn-secondary d-flex justify-content-between align-items-center ml-2">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle m-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
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
    document() {
      return this.$store.getters.currentDoc;
    },
    isDocument() {
      return this.document && this.$route.name === 'document';
    },
    isDashboard() {
      return this.$route.name === 'dashboard';
    },
  },
  methods: {
    close() {
      if (this.document) {
        return this.$router.push({
          name: 'document',
          params: {
            id: this.document.id,
          },
        });
      }

      this.$router.push({ name: 'dashboard' });
    },
  },
};
</script>

<style scoped>
.dark .btn.btn-secondary {
  box-shadow: 0 0 0 0.125rem #111 !important;
}

.light .btn.btn-secondary {
  box-shadow: 0 0 0 0.125rem #eee !important;
}
</style>
