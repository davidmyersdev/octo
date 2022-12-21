import { initializeApp } from 'firebase/app'
import { connectAuthEmulator, getAuth } from 'firebase/auth'
import { connectFirestoreEmulator, getFirestore, initializeFirestore, setLogLevel } from 'firebase/firestore'
import { connectStorageEmulator, getStorage } from 'firebase/storage'
import { updateGlobalConfig } from '/src/global'

// firebase config
const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
}

const verifyConfig = () => {
  const missingKeys = Object.keys(config).filter(key => !config[key])

  if (missingKeys.length > 0) {
    console.warn(
      `Skipping Firebase initialization. Missing keys: [${missingKeys.join(', ')}]`
    )

    return false
  }

  return true
}

export const init = () => {
  if (!verifyConfig()) { return }

  // init firebase
  const app = initializeApp(config)

  initializeFirestore(app, {
    experimentalAutoDetectLongPolling: true
  })

  setLogLevel(import.meta.env.VITE_FIREBASE_LOG_LEVEL || 'error')

  // use emulators in development
  if (location.hostname === 'localhost' && !import.meta.env.VITE_FIREBASE_EMULATOR_BYPASS) {
    connectAuthEmulator(
      getAuth(),
      import.meta.env.VITE_FIREBASE_EMULATOR_AUTH,
      {
        disableWarnings: true,
      }
    )

    connectFirestoreEmulator(
      getFirestore(),
      import.meta.env.VITE_FIREBASE_EMULATOR_FIRESTORE_HOST,
      import.meta.env.VITE_FIREBASE_EMULATOR_FIRESTORE_PORT,
    )

    connectStorageEmulator(
      getStorage(),
      import.meta.env.VITE_FIREBASE_EMULATOR_STORAGE_HOST,
      import.meta.env.VITE_FIREBASE_EMULATOR_STORAGE_PORT,
    )
  }

  updateGlobalConfig({ supportsFirebase: true })
}
