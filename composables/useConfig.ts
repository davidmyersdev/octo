export const useConfig = () => {
  const { isNuxt } = useIsNuxt()

  if (isNuxt) {
    return useRuntimeConfig()
  }

  return {
    public: {
      cdnUrl: import.meta.env.NUXT_PUBLIC_CDN_URL,
      discordInviteLink: import.meta.env.NUXT_PUBLIC_DISCORD_INVITE_LINK,
      fathomEventAccountRegistration: import.meta.env.NUXT_PUBLIC_FATHOM_EVENT_ACCOUNT_REGISTRATION,
      fathomEventCtaContinueWithPro: import.meta.env.NUXT_PUBLIC_FATHOM_EVENT_CTA_CONTINUE_WITH_PRO,
      fathomEventCtaModalUpgrade: import.meta.env.NUXT_PUBLIC_FATHOM_EVENT_CTA_MODAL_UPGRADE,
      fathomEventCtaOpenApp: import.meta.env.NUXT_PUBLIC_FATHOM_EVENT_CTA_OPEN_APP,
      fathomEventCtaSaveDocs: import.meta.env.NUXT_PUBLIC_FATHOM_EVENT_CTA_SAVE_DOCS,
      fathomEventCtaSettingsUpgrade: import.meta.env.NUXT_PUBLIC_FATHOM_EVENT_CTA_SETTINGS_UPGRADE,
      fathomEventCtaSignUpNow: import.meta.env.NUXT_PUBLIC_FATHOM_EVENT_CTA_SIGN_UP_NOW,
      fathomEventCtaTryItOut: import.meta.env.NUXT_PUBLIC_FATHOM_EVENT_CTA_TRY_IT_OUT,
      fathomEventCtaUpgradeToPro: import.meta.env.NUXT_PUBLIC_FATHOM_EVENT_CTA_UPGRADE_TO_PRO,
      fathomSiteId: import.meta.env.NUXT_PUBLIC_FATHOM_SITE_ID,
      fathomSiteUrl: import.meta.env.NUXT_PUBLIC_FATHOM_SITE_URL,
      firebaseApiKey: import.meta.env.NUXT_PUBLIC_FIREBASE_API_KEY,
      firebaseAppId: import.meta.env.NUXT_PUBLIC_FIREBASE_APP_ID,
      firebaseAuthDomain: import.meta.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      firebaseDatabaseUrl: import.meta.env.NUXT_PUBLIC_FIREBASE_DATABASE_URL,
      firebaseEmulatorAuth: import.meta.env.NUXT_PUBLIC_FIREBASE_EMULATOR_AUTH,
      firebaseEmulatorBypass: import.meta.env.NUXT_PUBLIC_FIREBASE_EMULATOR_BYPASS,
      firebaseEmulatorFirestoreHost: import.meta.env.NUXT_PUBLIC_FIREBASE_EMULATOR_FIRESTORE_HOST,
      firebaseEmulatorFirestorePort: import.meta.env.NUXT_PUBLIC_FIREBASE_EMULATOR_FIRESTORE_PORT,
      firebaseEmulatorFunctionsHost: import.meta.env.NUXT_PUBLIC_FIREBASE_EMULATOR_FUNCTIONS_HOST,
      firebaseEmulatorFunctionsPort: import.meta.env.NUXT_PUBLIC_FIREBASE_EMULATOR_FUNCTIONS_PORT,
      firebaseEmulatorStorageHost: import.meta.env.NUXT_PUBLIC_FIREBASE_EMULATOR_STORAGE_HOST,
      firebaseEmulatorStoragePort: import.meta.env.NUXT_PUBLIC_FIREBASE_EMULATOR_STORAGE_PORT,
      firebaseLogLevel: import.meta.env.NUXT_PUBLIC_FIREBASE_LOG_LEVEL,
      firebaseMessagingSenderId: import.meta.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      firebaseProjectId: import.meta.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
      firebaseStorageBucket: import.meta.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      stripeMonthlyPrice: import.meta.env.NUXT_PUBLIC_STRIPE_MONTHLY_PRICE,
    },
  }
}
