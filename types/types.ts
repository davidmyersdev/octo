export interface AddCheckoutParams {
  userId: string
}

export interface AddDocParams {
  doc: object
  ownerId: string
}

export interface FetchDocParams {
  docId: string
}

export interface FetchDocsParams {
  ownerId: string
  syncedAfter: Date
}

export interface UpdateDocParams {
  doc: object
  docId: string
}

export interface Subscription {
  pro: boolean
}
