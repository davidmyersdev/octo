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
