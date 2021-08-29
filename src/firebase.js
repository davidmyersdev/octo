import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// firebase config
const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
}

// init firebase
firebase.initializeApp(config)

// utils
export const authInstance = firebase.auth()
export const authNamespace = firebase.auth
export const firestoreInstance = firebase.firestore()
export const firestoreNamespace = firebase.firestore

// use emulators in development
if (location.hostname === 'localhost') {
  authInstance.useEmulator(
    process.env.VUE_APP_FIREBASE_EMULATOR_AUTH,
    {
      disableWarnings: true,
    }
  )

  firestoreInstance.useEmulator(
    process.env.VUE_APP_FIREBASE_EMULATOR_FIRESTORE_HOST,
    process.env.VUE_APP_FIREBASE_EMULATOR_FIRESTORE_PORT,
  )
}

// export firebase instance
export default {
  authInstance,
  authNamespace,
  firestoreInstance,
  firestoreNamespace,
}
