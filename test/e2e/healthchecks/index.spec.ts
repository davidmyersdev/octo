import { expect, test } from '@playwright/test'

test('sets the max-width of the editor to the readability max-width setting', async ({ page }) => {
  await page.goto('/docs/new')

  await page.waitForLoadState('networkidle')

  const inkContainers = await page.locator('.ink-mde-container').all()

  expect(inkContainers).toHaveLength(3)

  for (const inkContainer of inkContainers) {
    await expect(inkContainer).toHaveCSS('max-width', '1000px')
  }
})
