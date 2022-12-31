import { getAuth } from 'firebase/auth'
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import mime from 'mime-types'
import { nanoid } from 'nanoid'

export const addFile = async (file: File) => {
  const user = getAuth().currentUser

  if (user) {
    const fileExtension = resolveExtension(file)
    const fileName = [nanoid(10), fileExtension].join('.')
    const storageRef = ref(getStorage())
    const fileRef = ref(storageRef, fileName)
    const metadata = {
      contentType: file.type,
      customMetadata: {
        ownerId: user.uid,
      },
    }

    return uploadBytes(fileRef, file, metadata).then((_snapshot) => {
      const { public: { cdnUrl } } = useConfig()

      return {
        extension: fileExtension,
        mimeType: file.type,
        url: `${cdnUrl}/${fileName}`,
      }
    })
  }
}

export const resolveExtension = (file: File) => {
  return mime.extension(file.type)
}
