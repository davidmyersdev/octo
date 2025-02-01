import { type Page, expect, test } from '@playwright/test'
import type * as appEvents from '/helpers/app'

const waitUntil = async (page: Page, type: appEvents.AppEventType) => {
  await page.evaluate(async (type) => {
    return new Promise<void>((resolve) => {
      const stopWatching = window.appEvents.watchEvents(() => {
        if (window.appEvents.isLogged(type)) {
          stopWatching()
          resolve()
        }
      })
    })
  }, type)
}

test.describe('sharing', () => {
  test('can create a shared doc and view it from a new session', async ({ page }) => {
    await page.goto('/account?ci=true')
    await page.waitForSelector('[data-is-mounted="true"]')

    await page.locator('[data-test-auth-tier-personal] [data-test-auth-social-google]').click()
    await page.waitForLoadState('domcontentloaded')
    await page.getByRole('button', { name: /add new account/i }).click()
    await page.locator('#autogen-button').click()
    await page.locator('#sign-in').click()

    await page.waitForSelector('[data-is-mounted="true"]')

    await waitUntil(page, 'user_signed_in')

    await page.goto('/docs/new?ci=true')
    await page.waitForSelector('[data-is-mounted="true"]')

    await page.keyboard.type('hello')

    await page.locator('[data-test-toggle-meta]:visible').click()
    await page.locator('[data-test-share-doc]').click()

    const value = await page.locator('[data-test-public-url]').inputValue()

    await waitUntil(page, 'network_docs_synced')
    await page.goto(value)
    await page.waitForSelector('[data-is-mounted="true"]')
    await waitUntil(page, 'network_doc_loaded')

    const doc = await page.evaluate(() => {
      return window.inkMde.getDoc()
    })

    expect(doc).toEqual('hello')
  })
})
