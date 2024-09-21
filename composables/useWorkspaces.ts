import { cloneDeep } from 'lodash-es'
import type { Workspace } from '/src/db'

export const useWorkspaces = () => {
  const { db } = useDatabase()
  const { result: workspaces } = useQuery(() => db.workspaces.orderBy('name').toArray(), [])

  const createWorkspace = async (workspace: Workspace) => {
    return db.workspaces.add(cloneDeep(workspace))
  }

  const destroyWorkspace = async (id: string) => {
    return db.workspaces.delete(id)
  }

  return {
    createWorkspace,
    destroyWorkspace,
    workspaces,
  }
}
