<script lang="ts">
import { GithubAuthProvider, GoogleAuthProvider, getAuth, getRedirectResult, linkWithRedirect } from 'firebase/auth'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const { user } = useUser()
    const github = computed(() => user.value.providers.find(({ providerId: id }) => id === 'github.com'))
    const google = computed(() => user.value.providers.find(({ providerId: id }) => id === 'google.com'))

    getRedirectResult(getAuth()).catch((error) => {
      console.warn({ error })
    })

    const linkGitHub = () => {
      const authUser = getAuth().currentUser

      if (authUser) {
        linkWithRedirect(authUser, new GithubAuthProvider())
      }
    }

    const linkGoogle = () => {
      const authUser = getAuth().currentUser

      if (authUser) {
        linkWithRedirect(authUser, new GoogleAuthProvider())
      }
    }

    const signOut = () => {
      getAuth().signOut()
    }

    return {
      github,
      google,
      linkGitHub,
      linkGoogle,
      signOut,
    }
  },
})
</script>

<template>
  <section class="flex flex-col gap-4">
    <div>
      <div v-if="github" class="mb-4">
        <div class="flex items-center">
          <Icon name="BrandGitHub" />
          <span class="font-bold text-lg ml-3">GitHub</span>
          <span class="border border-layer text-base font-normal px-1 rounded ml-2">Linked</span>
        </div>
        <p>{{ github.email }}</p>
      </div>

      <div v-if="google" class="mb-4">
        <div class="flex items-center">
          <Icon name="BrandGoogle" />
          <span class="font-bold text-lg ml-3">Google</span>
          <span class="border border-layer text-base font-normal px-1 rounded ml-2">Linked</span>
        </div>
        <p>{{ google.email }}</p>
      </div>
    </div>

    <CoreLayer class="flex flex-col gap-2 lg:max-w-xs">
      <CoreButton v-if="!github" class="w-full lg:w-auto whitespace-nowrap justify-start" @click="linkGitHub">
        <Icon name="BrandGitHub" />
        <span>Link GitHub</span>
      </CoreButton>

      <CoreButton v-if="!google" class="w-full lg:w-auto whitespace-nowrap justify-start" @click="linkGoogle">
        <Icon name="BrandGoogle" />
        <span>Link Google</span>
      </CoreButton>

      <CoreButton class="w-full lg:w-auto whitespace-nowrap justify-start text-red-400" @click="signOut">
        <Icon name="LogOut" />
        <span class="action">Sign Out</span>
      </CoreButton>
    </CoreLayer>
  </section>
</template>
