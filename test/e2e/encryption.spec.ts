import { readFileSync } from 'node:fs'
import { expect, test } from '@playwright/test'

const publicKey = readFileSync('./test/fixtures/encryption/test-key.public').toString()
const privateKey = readFileSync('./test/fixtures/encryption/test-key.private').toString()

test.describe('encryption', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.evaluate(async () => {
      // Allow the file to be processed by Vite.
      await import('/_nuxt/test/e2e/seed-encrypted-docs')
    })
  })

  test('does not show docs that cannot be decrypted', async ({ page }) => {
    await page.goto('/docs')
    await page.waitForSelector('[data-is-mounted="true"]')

    expect(await page.locator('[data-test-doc]').count()).toEqual(0)
  })

  test('shows docs that can be decrypted', async ({ page }) => {
    await page.goto('/settings')
    await page.waitForSelector('[data-is-mounted="true"]')

    await page.locator('[data-test-public-key] [data-core-input]').fill(publicKey.trim())
    await page.locator('[data-test-private-key] [data-core-input]').fill(privateKey.trim())
    await page.locator('[data-test-toggle-crypto]:not([disabled])').click()

    await page.goto('/docs')
    await page.waitForSelector('[data-is-mounted="true"]')

    expect(await page.locator('[data-test-doc]').count()).toEqual(3)
  })
})
