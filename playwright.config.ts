import { defineConfig } from '@playwright/test'

const baseUrl = process.env.BASE_URL || 'http://127.0.0.1:8888'
const command = process.env.COMMAND || 'pnpm dev:full'
const isCi = !!process.env.CI

export default defineConfig({
  forbidOnly: !!isCi,
  fullyParallel: true,
  retries: isCi ? 2 : 0,
  testDir: './test/e2e',
  use: {
    baseURL: baseUrl,
    testIdAttribute: 'data-test-id',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
  },
  webServer: {
    command,
    reuseExistingServer: !isCi,
    url: baseUrl,
  },
})
