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

  test('preserves input when the URL changes', async ({ page }) => {
    await page.goto('/docs/new')
    await page.waitForSelector('[data-is-mounted="true"]')

    await page.keyboard.type('hello')

    expect(page.url()).not.toMatch(/\/docs\/new$/)
    expect(page.url()).toMatch(/\/docs\/[\w-]+$/)

    await expect(page.locator('.ink-mde-editor-content')).toHaveText('hello')
  })

  test('preserves input when the page refreshes', async ({ page }) => {
    await page.goto('/docs/new')
    await page.waitForSelector('[data-is-mounted="true"]')

    await page.keyboard.type('hello')

    // Wait for the data to be persisted.
    await page.waitForTimeout(200)

    await page.reload()
    await page.waitForSelector('[data-is-mounted="true"]')

    await expect(page.locator('.ink-mde-editor-content')).toHaveText('hello')
  })
})
