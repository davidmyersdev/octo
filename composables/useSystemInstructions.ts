import { type SystemInstruction } from '/src/db'

export type { SystemInstruction }

export const useSystemInstructions = ({ id }: { id?: Ref<string> } = {}) => {
  const { db } = useDatabase()
  const { result: systemInstruction } = useQuery(() => db.systemInstructions.get(id?.value ?? ''))
  const { result: systemInstructions } = useQuery(() => db.systemInstructions.reverse().sortBy('createdAt'), [])

  const addSystemInstruction = async (systemInstruction: SystemInstruction) => {
    await db.systemInstructions.add(systemInstruction)
  }

  const removeSystemInstruction = async (id: string) => {
    await db.systemInstructions.delete(id)
  }

  return {
    systemInstruction,
    systemInstructions,
    addSystemInstruction,
    removeSystemInstruction,
  }
}
