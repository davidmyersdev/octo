export const save = async (fileName: string, data: Blob) => {
  const { saveAs } = await import('file-saver')

  saveAs(data, fileName)
}

export const zip = async (archiveName: string) => {
  const { default: jsZip } = await import('jszip')
  const zipper = new jsZip()
  const zipArchive = zipper.folder(archiveName)

  const addFile = (path: string, content: string) => {
    zipArchive?.file(path, content)
  }

  const generate = async () => {
    return await zipper.generateAsync({ type: 'blob' })
  }

  return {
    addFile,
    generate,
  }
}
