// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// https://github.com/cypress-io/cypress/issues/702#issuecomment-587127275
Cypress.on('window:before:load', (window) => {
  // @ts-expect-error Disable service workers for our test suite.
  delete window.navigator.__proto__.serviceWorker
})
