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

  test('shows direct link suggestions', async ({ page }) => {
    await page.goto('/docs/new')
    await page.waitForSelector('[data-is-mounted="true"]')

    await page.keyboard.type('# My Test Doc')

    // Wait for the data to be persisted.
    await page.waitForTimeout(200)

    await page.goto('/docs/new')
    await page.waitForSelector('[data-is-mounted="true"]')

    await page.keyboard.type('Check out [[My ')

    await expect(page.locator('.cm-tooltip-autocomplete')).toBeVisible()
    await expect(page.locator('.cm-tooltip-autocomplete')).toContainText(/My Test Doc/)
    await expect(page.locator('.ink-mde-editor-content')).toHaveText('Check out [[My ]]')
  })

  test('shows direct link suggestions after an existing direct link', async ({ page }) => {
    await page.goto('/docs/new')
    await page.waitForSelector('[data-is-mounted="true"]')

    await page.keyboard.type('# My Test Doc')

    // Wait for the data to be persisted.
    await page.waitForTimeout(200)

    await page.goto('/docs/new')
    await page.waitForSelector('[data-is-mounted="true"]')

    await page.keyboard.type('Check out [[link]] and [[My ')

    await expect(page.locator('.cm-tooltip-autocomplete')).toBeVisible()
    await expect(page.locator('.cm-tooltip-autocomplete')).toContainText(/My Test Doc/)
    await expect(page.locator('.ink-mde-editor-content')).toHaveText('Check out [[link]] and [[My ]]')
  })

  test('shows direct link suggestions before an existing direct link', async ({ page }) => {
    await page.goto('/docs/new')
    await page.waitForSelector('[data-is-mounted="true"]')

    await page.keyboard.type('# My Test Doc')

    // Wait for the data to be persisted.
    await page.waitForTimeout(200)

    await page.goto('/docs/new')
    await page.waitForSelector('[data-is-mounted="true"]')

    await page.keyboard.type('Check out [[link]]')

    await page.keyboard.press('ArrowLeft')
    await page.keyboard.press('ArrowLeft')
    await page.keyboard.press('ArrowLeft')
    await page.keyboard.press('ArrowLeft')
    await page.keyboard.press('ArrowLeft')
    await page.keyboard.press('ArrowLeft')
    await page.keyboard.press('ArrowLeft')
    await page.keyboard.press('ArrowLeft')
    await page.keyboard.press('ArrowLeft')

    await page.keyboard.type('[[My ')

    await expect(page.locator('.cm-tooltip-autocomplete')).toBeVisible()
    await expect(page.locator('.cm-tooltip-autocomplete')).toContainText(/My Test Doc/)
    await expect(page.locator('.ink-mde-editor-content')).toHaveText('Check out[[My ]] [[link]]')
  })

  test('shows references in the sidebar', async ({ page }) => {
    await page.goto('/docs/new')
    await page.waitForSelector('[data-is-mounted="true"]')

    await page.keyboard.type('# My Test Doc')

    // Wait for the data to be persisted.
    await page.waitForTimeout(200)

    await page.goto('/docs/new')
    await page.waitForSelector('[data-is-mounted="true"]')

    await page.keyboard.type('Check out [[link]] and [[My \n', { delay: 100 })

    await page.getByTestId('toggle-sidebars').click()

    await expect(page.getByTestId('doc-references').getByRole('link')).toHaveText('My Test Doc')
  })

  test('shows backlinks in the sidebar', async ({ page }) => {
    await page.goto('/docs/new')
    await page.waitForSelector('[data-is-mounted="true"]')

    await page.keyboard.type('# My Test Doc')

    // Wait for the data to be persisted.
    await page.waitForTimeout(200)

    await page.goto('/docs/new')
    await page.waitForSelector('[data-is-mounted="true"]')

    await page.keyboard.type('# Test 2\n\nCheck out [[link]] and [[My \n', { delay: 100 })

    await page.getByTestId('toggle-sidebars').click()
    await page.getByTestId('doc-references').getByRole('link').click()

    await expect(page.getByTestId('doc-backlinks').getByRole('link')).toHaveText('Test 2')
  })
})
