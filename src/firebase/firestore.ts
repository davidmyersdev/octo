import * as db from 'firebase/firestore'

import type { AddCheckoutParams, AddDocParams, FetchDocParams, FetchDocsParams, UpdateDocParams } from '/types/types'

export const addCheckout = async ({ userId }: AddCheckoutParams) => {
  const addRef = await db.addDoc(
    db.collection(
      db.doc(
        db.collection(
          db.getFirestore(),
          'customers'
        ),
        userId
      ),
      'checkout_sessions'
    ),
    {
      cancel_url: window.location.href,
      // @ts-ignore
      price: import.meta.env.VITE_STRIPE_MONTHLY_PRICE,
      success_url: window.location.href,
    }
  )

  return await new Promise<db.DocumentSnapshot<db.DocumentData>>((resolve, reject) => {
    db.onSnapshot(addRef, (snapshot) => {
      if (snapshot.data()?.url) {
        resolve(snapshot)
      }
    }, (error) => {
      reject(error)
    })
  })
}

export const addDoc = async ({ doc, ownerId }: AddDocParams) => {
  const addRef = await db.addDoc(
    db.collection(
      db.getFirestore(),
      'documents'
    ),
    {
      ...doc,
      // set the owner as the current user
      ownerId,
      // this value is always set by the server
      syncedAt: db.serverTimestamp(),
    }
  )

  return new Promise<db.DocumentSnapshot<db.DocumentData>>((resolve, reject) => {
    db.onSnapshot(addRef, (fullRef) => {
      resolve(fullRef)
    }, (error) => {
      reject(error)
    })
  })
}

export const fetchDocs = async ({ ownerId, syncedAfter }: FetchDocsParams) => {
  const querySnapshot = await db.getDocs(
    db.query(
      db.collection(db.getFirestore(), 'documents'),
      db.where('ownerId', '==', ownerId),
      db.where('syncedAt', '>', syncedAfter)
    )
  )

  return querySnapshot.docs
}

export const fetchSharedDoc = async ({ docId }: FetchDocParams) => {
  const querySnapshot = await db.getDocs(
    db.query(
      db.collection(
        db.getFirestore(),
        'documents'
      ),
      db.where('public', '==', true),
      db.where('id', '==', docId)
    )
  )

  return querySnapshot.docs[0]
}

export const updateDoc = async ({ doc, docId }: UpdateDocParams) => {
  return db.updateDoc(
    db.doc(
      db.collection(
        db.getFirestore(),
        'documents'
      ),
      docId
    ),
    {
      ...doc,
      // this value is always set by the server
      syncedAt: db.serverTimestamp(),
    }
  )
}
