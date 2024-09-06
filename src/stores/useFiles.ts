import { defineStore } from 'pinia'

interface File {
  id: string,
  handle: FileSystemFileHandle,
}

interface FileSystemWritableFileStream extends WritableStream {
  write(data: FileSystemWriteChunkType): Promise<void>,
  seek(position: number): Promise<void>,
  truncate(size: number): Promise<void>,
}

type FileSystemWriteChunkType = BufferSource | Blob | string | WriteParams

type WriteParams =
  | { type: 'write', position?: number | undefined, data: BufferSource | Blob | string }
  | { type: 'seek', position: number }
  | { type: 'truncate', size: number }

export const useFiles = defineStore('files', {
  state: () => ({
    files: <File[]>[],
  }),
  actions: {
    add(file: File) {
      this.files.push(file)
    },
  },
})
