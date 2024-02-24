import { expect, test } from '@playwright/test'

test.describe('auth', () => {
  test('GitHub', async ({ page }) => {
    await page.goto('/')
    await page.waitForSelector('[data-is-mounted="true"]')

    const signInLink = page.getByText('Sign In')

    await signInLink.click()

    const socialLink = page.getByText('Continue with GitHub')

    await socialLink.click()

    await page.waitForURL(/\/emulator\/auth\/handler/)

    const addAccountButton = page.locator('button', { hasText: /Add new account/ })

    await addAccountButton.click()

    const autogenButton = page.locator('button', { hasText: /Auto-generate user information/ })

    await autogenButton.click()

    const signInButton = page.locator('button', { hasText: /Sign in/ })

    await signInButton.click()

    await page.waitForURL(/\/docs\/new$/)

    expect(page.url()).toMatch(/\/docs\/new$/)
  })

  test('Google', async ({ page }) => {
    await page.goto('/')
    await page.waitForSelector('[data-is-mounted="true"]')

    const signInLink = page.getByText('Sign In')

    await signInLink.click()

    const socialLink = page.getByText('Continue with Google')

    await socialLink.click()

    await page.waitForURL(/\/emulator\/auth\/handler/)

    const addAccountButton = page.locator('button', { hasText: /Add new account/ })

    await addAccountButton.click()

    const autogenButton = page.locator('button', { hasText: /Auto-generate user information/ })

    await autogenButton.click()

    const signInButton = page.locator('button', { hasText: /Sign in/ })

    await signInButton.click()

    await page.waitForURL(/\/docs\/new$/)

    expect(page.url()).toMatch(/\/docs\/new$/)
  })
})
