import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/functions'

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

// init firebase
firebase.initializeApp(config)

// legacy utils
export const authInstance = firebase.auth()
export const authNamespace = firebase.auth
export const firestoreInstance = firebase.firestore()
export const firestoreNamespace = firebase.firestore

// use emulators in development
if (location.hostname === 'localhost' && !import.meta.env.VITE_FIREBASE_EMULATOR_BYPASS) {
  firebase.auth().useEmulator(
    import.meta.env.VITE_FIREBASE_EMULATOR_AUTH,
    {
      disableWarnings: true,
    }
  )

  firebase.firestore().useEmulator(
    import.meta.env.VITE_FIREBASE_EMULATOR_FIRESTORE_HOST,
    import.meta.env.VITE_FIREBASE_EMULATOR_FIRESTORE_PORT,
  )

  firebase.functions().useEmulator(
    import.meta.env.VITE_FIREBASE_EMULATOR_FUNCTIONS_HOST,
    import.meta.env.VITE_FIREBASE_EMULATOR_FUNCTIONS_PORT,
  )
}

// export firebase instance
export default firebase
