import { expect, test } from '@playwright/test'

test.describe('auth', () => {
  test.skip('google', async ({ page }) => {
    await page.goto('https://accounts.google.com/')

    const emailInput = page.locator('input[type="email"]')

    await emailInput.fill(process.env.GOOGLE_TEST_USER_EMAIL!)
    await emailInput.press('Enter')

    const passwordInput = page.locator('input[type="password"]')

    await passwordInput.fill(process.env.GOOGLE_TEST_USER_PASSWORD!)
    await passwordInput.press('Enter')

    await page.waitForLoadState('networkidle')
    await page.goto('/')

    const signInLink = page.getByText('Sign In')

    await signInLink.click()

    const googleLink = page.getByText('Continue with Google')

    await googleLink.click()

    await page.waitForLoadState('networkidle')

    expect(page.url()).toMatch(/\/docs\/new$/)
  })
})

test('sets the max-width of the editor to the readability max-width setting', async ({ page }) => {
  await page.goto('/docs/new')

  await page.waitForLoadState('networkidle')

  const inkContainers = await page.locator('.ink-mde-container').all()

  expect(inkContainers).toHaveLength(3)

  for (const inkContainer of inkContainers) {
    await expect(inkContainer).toHaveCSS('max-width', '1000px')
  }
})
