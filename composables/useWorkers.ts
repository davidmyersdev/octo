import { nanoid } from 'nanoid'
import DocsWorker from '/src/workers/docs?worker'
import MarkdownWorker from '/src/workers/markdown?worker'

export const workersKey = Symbol('toasts') as InjectionKey<ReturnType<typeof buildWorkers>>

const buildWorkers = () => {
  const docsWorker = ref<Worker>()
  const markdownWorker = ref<Worker>()

  const markdownToHtml = async (markdown: string) => {
    const id = nanoid()

    return new Promise<string>((resolve) => {
      const handler = ({ data }: MessageEvent) => {
        if (data.id === id) {
          resolve(data.html)

          markdownWorker.value?.removeEventListener('message', handler)
        }
      }

      markdownWorker.value?.addEventListener('message', handler)
      markdownWorker.value?.postMessage({ id, markdown })
    })
  }

  onMounted(() => {
    docsWorker.value = new DocsWorker()
    markdownWorker.value = new MarkdownWorker()
  })

  onUnmounted(() => {
    docsWorker.value?.terminate()
    markdownWorker.value?.terminate()
  })

  return {
    markdownToHtml,
    markdownWorker,
  }
}

export const useWorkers = () => {
  const {
    markdownToHtml,
    markdownWorker,
  } = injectOrProvide(workersKey, buildWorkers)

  return {
    markdownToHtml,
    markdownWorker,
  }
}
