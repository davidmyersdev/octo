import { initializeApp } from 'firebase/app'
import { connectAuthEmulator, getAuth } from 'firebase/auth'
import { connectFirestoreEmulator, getFirestore, initializeFirestore, setLogLevel } from 'firebase/firestore'
import { connectStorageEmulator, getStorage } from 'firebase/storage'

const verifyConfig = (config) => {
  const missingKeys = Object.keys(config).filter(key => !config[key])

  if (missingKeys.length > 0) {
    console.warn(
      `Skipping Firebase initialization. Missing keys: [${missingKeys.join(', ')}]`,
    )

    return false
  }

  return true
}

export const init = () => {
  const { public: publicConfig } = useConfig()

  // firebase config
  const config = {
    apiKey: publicConfig.firebaseApiKey,
    appId: publicConfig.firebaseAppId,
    authDomain: publicConfig.firebaseAuthDomain,
    databaseURL: publicConfig.firebaseDatabaseUrl,
    messagingSenderId: publicConfig.firebaseMessagingSenderId,
    projectId: publicConfig.firebaseProjectId,
    storageBucket: publicConfig.firebaseStorageBucket,
  }

  if (!verifyConfig(config)) return

  // init firebase
  const app = initializeApp(config)

  initializeFirestore(app, {
    experimentalAutoDetectLongPolling: true,
  })

  setLogLevel(publicConfig.firebaseLogLevel || 'error')

  if (publicConfig.firebaseEmulatorBypass) return

  if (location.hostname === 'localhost') {
    // https://github.com/firebase/firebase-js-sdk/issues/6958
    console.warn('Firebase auth does not work on localhost. Use 127.0.0.1 instead.')
  }

  // use emulators in development
  if (location.hostname === '127.0.0.1') {
    connectAuthEmulator(
      getAuth(),
      publicConfig.firebaseEmulatorAuth,
      {
        disableWarnings: true,
      },
    )

    connectFirestoreEmulator(
      getFirestore(),
      publicConfig.firebaseEmulatorFirestoreHost,
      publicConfig.firebaseEmulatorFirestorePort,
    )

    connectStorageEmulator(
      getStorage(),
      publicConfig.firebaseEmulatorStorageHost,
      publicConfig.firebaseEmulatorStoragePort,
    )
  }
}
