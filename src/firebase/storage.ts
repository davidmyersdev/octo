import { getAuth } from 'firebase/auth'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import mime from 'mime-types'
import { nanoid } from 'nanoid'

export const createName = (file: File): string => {
  const name = nanoid()
  const extension = mime.extension(file.type)

  return [name, extension].join('.')
}

export const addFile = async (file: File) => {
  const user = getAuth().currentUser

  if (user) {
    const fileName = createName(file)
    const storageRef = ref(getStorage())
    const filesRef = ref(storageRef, `files/v1/${user.uid}`)
    const fileRef = ref(filesRef, fileName)
    const metadata = {
      contentType: file.type,
    }

    return uploadBytes(fileRef, file, metadata).then((snapshot) => {
      return getDownloadURL(snapshot.ref)
    })
  }
}
