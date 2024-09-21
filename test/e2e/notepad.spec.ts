import { expect, test } from '@playwright/test'
import moment from 'moment'

test.describe('nodepad', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/notepad')
    await page.waitForSelector('[data-is-mounted="true"]')
    await page.waitForTimeout(1000)
  })

  test('is focused', async ({ page }) => {
    const classes = await page.evaluate(() => {
      return Array.from(document.activeElement?.classList || [])
    })

    expect(classes).toContain('ink-mde-editor-content')
  })

  test('has some default text', async ({ page }) => {
    const date = moment().format('dddd, MMMM Do, YYYY')

    const doc = await page.evaluate(() => {
      return window.inkMde.getDoc()
    })

    expect(doc).toMatch(new RegExp(`^#daily\n\n# ${date}\n\n`))
  })
})
