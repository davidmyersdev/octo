import { useStore } from 'vuex'
import { getSettings } from '/src/databases/legacy'
import { main } from '/src/databases/main'
import { type Doc, unpack } from '/src/models/doc'

const filterByDiscarded = (docs: MaybeRef<Doc[]>) => {
  return toValue(docs).filter((doc) => {
    return !!doc.discardedAt
  })
}

const filterByKept = (docs: MaybeRef<Doc[]>) => {
  return toValue(docs).filter((doc) => {
    return !doc.discardedAt
  })
}

const filterByTag = (docs: MaybeRef<Doc[]>, tag: string) => {
  return filterByTags(docs, [tag])
}

const filterByTags = (docs: MaybeRef<Doc[]>, tags: string[]) => {
  return toValue(docs).filter((doc) => {
    return tags.some((tag) => doc.tags.includes(tag))
  })
}

const filterByTasks = (docs: MaybeRef<Doc[]>) => {
  return toValue(docs).filter((doc) => {
    return doc.tasks.length > 0
  })
}

const filterByUntagged = (docs: MaybeRef<Doc[]>) => {
  return toValue(docs).filter((doc) => {
    return doc.tags.length === 0
  })
}

const filterByWorkspace = (docs: MaybeRef<Doc[]>, workspace: { active: boolean, tags: string[] }) => {
  if (!workspace.active) {
    return toValue(docs)
  }

  return filterByTags(docs, workspace.tags)
}

const sortByRecent = (docs: MaybeRef<Doc[]>) => {
  return toValue(docs).sort((a, b) => {
    // Reverse chronological order.
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  })
}

export const useDocs = ({ filter }: { filter?: MaybeRef<string | undefined> } = {}) => {
  const store = useStore()
  const router = useRouter()

  const allDocs = ref<Doc[]>([])

  onMounted(async () => {
    const docs = await main.docs.orderBy('updatedAt').reverse().toArray()
    const settings = await getSettings()
    const { privateKey } = settings?.crypto ?? {}

    for (const doc of docs) {
      const unpacked = await unpack(doc, { privateKey })

      allDocs.value.push(unpacked)
    }
  })

  // const allDocs = computed<Doc[]>(() => store.state.documents.all)
  const decryptedDocs = computed(() => allDocs.value.filter(doc => !doc.encrypted))
  const sortedDocs = computed(() => sortByRecent(decryptedDocs))
  const workspaceDocs = computed(() => filterByWorkspace(sortedDocs, store.state.context))
  const keptDocs = computed(() => filterByKept(workspaceDocs))
  const discardedDocs = computed(() => filterByDiscarded(workspaceDocs.value))
  const taskDocs = computed(() => filterByTasks(keptDocs))
  const untaggedDocs = computed(() => filterByUntagged(keptDocs))

  const docs = computed(() => {
    const filterValue = toValue(filter)

    if (filterValue?.startsWith('#')) {
      return filterByTag(keptDocs, filterValue.slice(1))
    }

    if (filterValue === 'tasks') {
      return taskDocs.value
    }

    if (filterValue === 'discarded') {
      return discardedDocs.value
    }

    if (filterValue === 'untagged') {
      return untaggedDocs.value
    }

    return keptDocs.value
  })

  const doc = computed(() => decryptedDocs.value.find((doc: Doc) => doc.id === router.currentRoute.value.params.docId))

  return {
    allDocs,
    decryptedDocs,
    doc,
    docs,
    filterByTag,
    filterByTasks,
    filterByUntagged,
    keptDocs,
    sortedDocs,
    workspaceDocs,
  }
}
