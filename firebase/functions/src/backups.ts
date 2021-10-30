import * as functions from 'firebase-functions'
import * as firestore from '@google-cloud/firestore'

const bucket = 'gs://octo-firestore-backup'
const client = new firestore.v1.FirestoreAdminClient()
const database = '(default)'

export const dailyBackup = functions.pubsub.schedule('every 24 hours').onRun((_context) => {
  const projectId = process.env.GCP_PROJECT || process.env.GCLOUD_PROJECT || ''
  const databaseName = client.databasePath(projectId, database)

  return client.exportDocuments({
    name: databaseName,
    outputUriPrefix: bucket,
    collectionIds: [], // leave this empty to export all collections
  })
  .then((responses) => {
    const response = responses[0]

    console.log(`Operation Name: ${response['name']}`)

    return response
  })
  .catch((err: Error) => {
    console.error(err)

    throw new Error('Export operation failed')
  })
})
