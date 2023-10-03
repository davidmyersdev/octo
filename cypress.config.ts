import { defineConfig } from 'cypress'

export default defineConfig({
  downloadsFolder: 'test/cypress/downloads',
  e2e: {
    baseUrl: 'http://localhost:8888',
    modifyObstructiveCode: false,
    specPattern: 'test/cypress/e2e/**/*.cy.{ts,tsx}',
    supportFile: 'test/cypress/support/e2e.{ts,tsx}',
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
  experimentalModifyObstructiveThirdPartyCode: false,
  fixturesFolder: 'test/fixtures',
  modifyObstructiveCode: false,
  retries: {
    runMode: 1,
  },
  screenshotsFolder: 'test/cypress/screenshots',
  video: true,
  videosFolder: 'test/cypress/videos',
})
