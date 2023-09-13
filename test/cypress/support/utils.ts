// Inspired by https://medium.com/geekculture/how-i-filtered-tests-with-cypress-io-9c7a85460a1d
export const withTags = (testTags: string[], run: () => void) => {
  const allowedTags = Cypress.env('tags')?.split(',') || []
  const skippedTags = Cypress.env('skipTags')?.split(',') || []

  // If the test includes skipped tags, do not run the test.
  for (const testTag of testTags) {
    if (skippedTags.includes(testTag)) {
      return
    }
  }

  // If no tags are provided, run the test.
  if (allowedTags.length === 0) {
    return run()
  }

  // Otherwise, if any tags are allowed, run the test.
  for (const testTag of testTags) {
    if (allowedTags.includes(testTag)) {
      return run()
    }
  }
}
