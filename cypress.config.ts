import { defineConfig } from 'cypress'

export default defineConfig({
  downloadsFolder: 'test/cypress/downloads',
  e2e: {
    baseUrl: 'http://localhost:8888',
    specPattern: 'test/cypress/e2e/**/*.cy.{ts,tsx}',
    supportFile: 'test/cypress/support/e2e.{ts,tsx}',
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
  fixturesFolder: 'test/fixtures',
  screenshotsFolder: 'test/cypress/screenshots',
  videosFolder: 'test/cypress/videos',
})
