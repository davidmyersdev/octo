import { expect, test } from '@playwright/test'

test.describe('editor', () => {
  test('is focused by default', async ({ page }) => {
    await page.goto('/docs/new')
    await page.waitForSelector('[data-is-mounted="true"]')

    await expect(page.locator('.ink-mde-editor-content')).toBeFocused()
  })

  test('is editable', async ({ page }) => {
    await page.goto('/docs/new')
    await page.waitForSelector('[data-is-mounted="true"]')

    await page.keyboard.type('# Hello, World!\n\nWhat is going on?')
    const inkMde = await page.evaluateHandle(() => window.inkMde)
    expect(await inkMde.evaluate((inkMde) => inkMde.getDoc())).toBe('# Hello, World!\n\nWhat is going on?')
  })

  test('redirects to /docs/:docId after typing anything', async ({ page }) => {
    await page.goto('/docs/new')
    await page.waitForSelector('[data-is-mounted="true"]')

    await page.keyboard.type('a')
    expect(page.url()).not.toMatch(/\/docs\/new$/)
    expect(page.url()).toMatch(/\/docs\/[\w-]+$/)
  })
})
