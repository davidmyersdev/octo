<script lang="ts">
import { exportKeys, generateKeys } from '#root/src/common/crypto/asymmetric'
import { TOUCH_DOCUMENT } from '#root/src/store/actions'
import { SET_CRYPTO_ENABLED, SET_CRYPTO_KEYS } from '#root/src/store/modules/settings'

export default {
  setup() {
    const { store } = useVuex()

    return {
      store,
    }
  },
  data() {
    return {
      togglingCrypto: false,
    }
  },
  computed: {
    allowCrypto() {
      return !!(this.privateKey && this.publicKey)
    },
    privateKey: {
      get() {
        return this.store.state.settings.crypto.privateKey ?? ''
      },
      set(value: string) {
        this.store.commit(SET_CRYPTO_KEYS, {
          privateKey: value.trim(),
        })
      },
    },
    publicKey: {
      get() {
        return this.store.state.settings.crypto.publicKey ?? ''
      },
      set(value: string) {
        this.store.commit(SET_CRYPTO_KEYS, {
          publicKey: value.trim(),
        })
      },
    },
    toggleCrypto: {
      get() {
        return this.store.state.settings.crypto.enabled
      },
      async set(value: boolean) {
        this.togglingCrypto = true

        await this.store.dispatch(SET_CRYPTO_ENABLED, value)
        await Promise.all(
          this.store.getters.decrypted.map((doc: any) => {
            return this.store.dispatch(TOUCH_DOCUMENT, doc)
          }),
        )

        this.togglingCrypto = false
      },
    },
  },
  methods: {
    async generateKeys() {
      const keys = await generateKeys()
      const { privateKey, publicKey } = await exportKeys(keys)

      this.privateKey = privateKey
      this.publicKey = publicKey
    },
  },
}
</script>

<template>
  <CorePageSection title="Client-side Encryption">
    <div class="flex flex-col gap-4">
      <div class="mb-4">
        <label for="tags-search">Documents are encrypted using a <a href="https://en.wikipedia.org/wiki/Hybrid_cryptosystem" target="_blank" rel="noopener noreferrer">hybrid cryptosystem</a>. You may provide your own keys or generate a new set here. If you choose to generate a new set, be sure to <strong>make a secure backup of your keys</strong>. If you lose your private key, you will not be able to recover any data that is encrypted.</label>
      </div>
      <div>
        <CoreLayer>
          <CoreButton as="label">
            <input
              v-model="toggleCrypto"
              :disabled="!allowCrypto || togglingCrypto"
              type="checkbox"
              class="checkbox"
              data-test-toggle-crypto
            >
            <span>Enable Encryption</span>
          </CoreButton>
        </CoreLayer>
        <small class="text-layer-muted">Note: Toggling encryption will encrypt/decrypt all existing documents. <span v-if="!allowCrypto">Enabling encryption <strong>requires</strong> private/public keys. Generate or supply them below to enable.</span></small>
      </div>
      <div>
        <CoreInput
          v-model="privateKey"
          autocomplete="off"
          label="Private key"
          :lines="5"
          multiline
          placeholder="Private key"
          private
          data-test-private-key
        />
        <small class="text-layer-muted">This key is used to <em>decrypt</em> documents. It <strong>will not</strong> be synced across devices when signed in.</small>
      </div>
      <div>
        <CoreInput
          v-model="publicKey"
          autocomplete="off"
          label="Public key"
          :lines="5"
          multiline
          placeholder="Public key"
          private
          data-test-public-key
        />
        <small class="text-layer-muted">This key is used to <em>encrypt</em> documents. It <strong>will</strong> be synced across devices when signed in.</small>
      </div>
      <div>
        <CoreLayer>
          <CoreButton @click="generateKeys">
            <span>Generate Keys</span>
          </CoreButton>
        </CoreLayer>
      </div>
    </div>
  </CorePageSection>
</template>
