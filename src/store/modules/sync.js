import { firestoreInstance, firestoreNamespace } from '/src/firebase';
import { parseTags } from '/src/common/parsers';
import { pack, unpack } from '/src/models/doc';

import {
  ADD_DOCUMENT,
  MERGE_DOCUMENT,
  SYNC,
} from '/src/store/actions';

// local actions
const PULL_DOCUMENT = 'PULL_DOCUMENT';
const PULL_DOCUMENTS = 'PULL_DOCUMENTS';
const PUSH_DOCUMENT = 'PUSH_DOCUMENT';
const PUSH_DOCUMENTS = 'PUSH_DOCUMENTS';

const findDoc = (state, id) => {
  return state.documents.all.find(doc => doc.id === id);
};

export default {
  state: () => ({
    // this module does not need local state
  }),
  getters: {
    lastSyncedAt(_state, _getters, globalState) {
      return new Date(Math.max(0, ...globalState.documents.all.map(doc => doc.syncedAt)));
    },
  },
  actions: {
    async [PULL_DOCUMENT] (context, doc) {
      const found = findDoc(context.rootState, doc.id);

      if (found) {
        // file exists on client
        if (found.updatedAt < doc.updatedAt) {
          // client needs updated
          return context.dispatch(MERGE_DOCUMENT, doc);
        } else if (found.updatedAt > doc.updatedAt) {
          // server needs updated
          // will be taken care of in next step of sync
        } else {
          // in sync...
          // probably just need to update syncedAt
          if (!found.syncedAt || found.syncedAt < doc.syncedAt) {
            // updating with entire object
            // might only need to update syncedAt directly 🤷
            return context.dispatch(MERGE_DOCUMENT, doc);
          }
        }
      } else {
        // file does not exist on client
        return context.dispatch(ADD_DOCUMENT, doc);
      }
    },
    async [PULL_DOCUMENTS] (context) {
      const collection = await firestoreInstance
        .collection('documents')
        .where('ownerId', '==', context.rootState.auth.user.uid)
        .where('syncedAt', '>', context.getters.lastSyncedAt)
        .get();

      return Promise.all(
        collection.docs.map(async (docRef) => {
          const serverDoc = docRef.data();
          const packed = {
            ...serverDoc,
            id: (serverDoc.id || serverDoc.clientId),
            firebaseId: docRef.id,
            textKey: (serverDoc.textKey || serverDoc.dataKey),
            createdAt: (serverDoc.createdAt ? serverDoc.createdAt.toDate() : null),
            discardedAt: (serverDoc.discardedAt ? serverDoc.discardedAt.toDate() : null),
            updatedAt: (serverDoc.updatedAt ? serverDoc.updatedAt.toDate() : null),
            touchedAt: (serverDoc.touchedAt ? serverDoc.touchedAt.toDate() : null),
            syncedAt: serverDoc.syncedAt.toDate(),
          };

          const doc = await unpack(packed, { privateKey: context.rootState.settings.crypto.privateKey });

          return context.dispatch(PULL_DOCUMENT, doc);
        })
      );
    },
    async [PUSH_DOCUMENT] (context, doc) {
      if (context.rootState.settings.crypto.enabled && !doc.encrypted && !doc.public) {
        var packed = await pack(doc, { publicKey: context.rootState.settings.crypto.publicKey });
      } else {
        var packed = await pack(doc, { secure: false });
      }

      if (!packed.syncedAt) {
        return firestoreInstance.collection('documents').add({
          ...packed,
          // this value is always set by the server
          syncedAt: firestoreNamespace.FieldValue.serverTimestamp(),
          // set the owner as the current user
          ownerId: context.rootState.auth.user.uid,
        }).then((thing) => {
          // added
        });
      } else if (packed.updatedAt > packed.syncedAt || packed.touchedAt > packed.syncedAt) {
        return firestoreInstance.collection('documents').doc(packed.firebaseId).update({
          ...packed,
          // this value is always set by the server
          syncedAt: firestoreNamespace.FieldValue.serverTimestamp(),
        });
      }
    },
    async [PUSH_DOCUMENTS] (context) {
      // todo: batch this shit
      // https://stackoverflow.com/questions/46618601/how-to-create-update-multiple-documents-at-once-in-firestore
      await Promise.all(
        context.rootState.documents.all.map(doc => context.dispatch(PUSH_DOCUMENT, doc))
      );
    },
    async [SYNC] (context) {
      // pull from firebase
      await context.dispatch(PULL_DOCUMENTS);

      // push to firebase
      await context.dispatch(PUSH_DOCUMENTS);

      // pull from firebase again (for syncedAt)
      await context.dispatch(PULL_DOCUMENTS);
    },
  },
};
