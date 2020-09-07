<template>
  <div class="container context mt-3 mt-md-5">
    <div>
      <h3 class="card-title">Settings</h3>
      <h6 class="card-subtitle text-muted font-weight-normal mb-3">Make yourself comfortable</h6>
      <section>
        <h4 class="font-weight-normal mt-3 mt-md-5">Editor</h4>
        <hr>
        <div class="form-group">
          <label for="config-tab-size">Tab length</label>
          <input v-model="tabSize" type="number" min="2" id="config-tab-size" class="form-control">
          <small class="text-muted">Number of spaces per tab (minimum: 2)</small>
        </div>
      </section>
      <section>
        <h4 class="font-weight-normal mt-3 mt-md-5">Client-side Encryption</h4>
        <hr>
        <div class="form-group">
          <label for="tags-search">Documents are encrypted using a <a href="https://en.wikipedia.org/wiki/Hybrid_cryptosystem" target="_blank">hybrid cryptosystem</a>. You may provide your own keys or generate a new set here. If you choose to generate a new set, be sure to <strong>make a secure backup of your keys</strong>. If you lose your private key, you will not be able to recover any data that is encrypted.</label>
        </div>
        <div class="form-group">
          <div>
            <label class="btn btn-primary btn-toggle">
              <div class="custom-control custom-checkbox d-flex align-items-center">
                <input v-model="cryptoEnabled" :disabled="!allowCrypto" type="checkbox" class="custom-control-input d-flex">
                <span class="custom-control-label d-flex">Enable Encryption</span>
              </div>
            </label>
          </div>
          <small v-if="!allowCrypto" class="text-muted">Note: Enabling encryption <strong>requires</strong> private/public keys. Generate or supply them below to enable.</small>
        </div>
        <div class="form-group">
          <label for="tags-search">Private Key</label>
          <textarea v-model="privateKey" class="form-control" rows="5" placeholder="Private key" autocomplete="off"></textarea>
          <small class="text-muted">This key is used to <em>decrypt</em> documents. It <strong>will not</strong> be synced across devices when signed in.</small>
        </div>
        <div class="form-group">
          <label for="tags-search">Public Key</label>
          <textarea v-model="publicKey" class="form-control" rows="5" placeholder="Public key" autocomplete="off"></textarea>
          <small class="text-muted">This key is used to <em>encrypt</em> documents. It <strong>will</strong> be synced across devices when signed in.</small>
        </div>
        <div class="form-group">
          <button @click="generateKeys" class="btn btn-secondary">Generate Keys</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { generateKeyPair } from '@/common/crypto/asymmetric';

import {
  SET_CRYPTO_ENABLED,
  SET_CRYPTO_KEYS,
  SET_EDITOR_TAB_SIZE,
} from '@/store/modules/settings';

export default {
  name: 'TheSettings',
  data() {
    return {
      // nothing yet
    };
  },
  computed: {
    allowCrypto() {
      return this.privateKey && this.publicKey;
    },
    cryptoEnabled: {
      get() {
        return this.$store.state.settings.crypto.enabled;
      },
      set(value) {
        this.$store.dispatch(SET_CRYPTO_ENABLED, value);
      },
    },
    privateKey: {
      get() {
        return this.$store.state.settings.crypto.privateKey;
      },
      set(value) {
        this.$store.dispatch(SET_CRYPTO_KEYS, {
          privateKey: value,
        });
      },
    },
    publicKey: {
      get() {
        return this.$store.state.settings.crypto.publicKey;
      },
      set(value) {
        this.$store.dispatch(SET_CRYPTO_KEYS, {
          publicKey: value,
        });
      },
    },
    tabSize: {
      get() {
        return this.$store.state.settings.editor.tabSize;
      },
      set(value) {
        this.$store.dispatch(SET_EDITOR_TAB_SIZE, parseInt(value) || 2);
      },
    },
  },
  methods: {
    async generateKeys() {
      const keys = await generateKeyPair();

      this.privateKey = keys.privateKey;
      this.publicKey = keys.publicKey;
    },
  },
};
</script>
