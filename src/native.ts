/* eslint-disable no-console */
import { app } from '@tauri-apps/api'
import { check } from '@tauri-apps/plugin-updater'
import { relaunch } from '@tauri-apps/plugin-process'
import { ask } from '@tauri-apps/plugin-dialog'

export const init = async (): Promise<void> => {
  console.log('Checking for updates...')

  try {
    console.log('Current app version:', await app.getVersion())

    const update = await check()

    console.log('Update response:', update)

    if (!update) {
      return
    }

    console.log(
      `Found update ${update.version} from ${update.date} with notes ${update.body}.`,
    )

    let downloaded = 0
    let contentLength = 0
    // alternatively we could also call update.download() and update.install() separately
    await update.downloadAndInstall((event) => {
      switch (event.event) {
        case 'Started':
          contentLength = event.data.contentLength!
          console.log(`started downloading ${event.data.contentLength} bytes`)
          break
        case 'Progress':
          downloaded += event.data.chunkLength
          console.log(`downloaded ${downloaded} from ${contentLength}`)
          break
        case 'Finished':
          console.log('download finished')
          break
      }
    })

    console.log('update installed')

    // Create a Yes/No dialog
    const shouldRelaunch = await ask('An update to Octo has been installed. Reload to complete the update.', {
      title: 'Updater',
      kind: 'info',
      okLabel: 'Reload Now',
      cancelLabel: 'Later',
    })

    if (shouldRelaunch) {
      await relaunch()
    }
  } catch (error) {
    console.error('error checking for updates:', error)
  }
}
