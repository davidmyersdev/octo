export const useDocVersions = () => {
  const router = useRouter()
  const { db } = useDatabase()
  const { doc } = useDocs()
  const { result: docVersions } = useQuery(() => db.docs.where({ parentId: doc.value?.id || '' }).reverse().sortBy('updatedAt'), [])
  const docVersion = computed(() => docVersions.value.find(version => version.id === router.currentRoute.value.params.versionId))

  return {
    docVersion,
    docVersions,
  }
}
