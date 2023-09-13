import { addMatchImageSnapshotPlugin } from '@simonsmith/cypress-image-snapshot/plugin'
import { defineConfig } from 'cypress'

export default defineConfig({
  downloadsFolder: 'test/cypress/downloads',
  e2e: {
    baseUrl: 'http://localhost:8888',
    modifyObstructiveCode: false,
    setupNodeEvents(on) {
      addMatchImageSnapshotPlugin(on)

      // https://github.com/cypress-io/cypress/issues/495#issuecomment-472723434
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--window-size=1920,1080')
          launchOptions.args.push('--force-device-scale-factor=1')
        }

        if (browser.name === 'electron') {
          // launchOptions.args.push('--width=1920')
          // launchOptions.args.push('--height=1080')
          // launchOptions.args.push('--resizable=false')

          launchOptions.args['width'] = 1920
          launchOptions.args['height'] = 1080
          launchOptions.args['resizable'] = false
        }

        if (browser.name === 'firefox') {
          launchOptions.args.push('--width=1920')
          launchOptions.args.push('--height=1080')
        }

        return launchOptions
      })
    },
    specPattern: 'test/cypress/e2e/**/*.cy.{ts,tsx}',
    supportFile: 'test/cypress/support/e2e.{ts,tsx}',
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
  experimentalWebKitSupport: true,
  fixturesFolder: 'test/fixtures',
  retries: {
    runMode: 1,
  },
  screenshotsFolder: 'test/cypress/screenshots',
  video: false,
  videosFolder: 'test/cypress/videos',
  viewportHeight: 1080,
  viewportWidth: 1920,
})
