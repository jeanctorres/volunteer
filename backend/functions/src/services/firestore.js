import constants from '../constants';
import { firestore } from '../fbStore';

const firestoreDB = firestore;

export const NO_LIMIT = undefined;
export const DESC = 'desc';
export const ASC = 'asc';

/**
 * Returns the artist referred to by the specified handler.
 * @param {String} artistHandler  The handler of the artist.
 * @returns {Promise} A Firestore promise.
 */
export const getDocumentByHandler = (handler, collectionName) => {
  const noExists = { exists: false };
  if (handler === undefined) {
    return noExists;
  }

  return firestoreDB
    .collection(collectionName)
    .where(constants.FIELDS_PATHS.ALL.HANDLER, '==', handler)
    .limit(1)
    .get()
    .then((results) => {
      // If the result set is not empty, return the first one and only one document.
      if (!results.empty) {
        return results.docs[0];
      }
      return noExists;
    });
};

/**
 * Returns the document referred to by the specified id.
 * @param {String} id  The id of the document.
 * @returns {Promise} A Firestore promise.
 */
export const getDocumentById = (id, collectionName) => {
  if (id === undefined) {
    return undefined;
  }
  return firestoreDB
    .collection(collectionName)
    .doc(id)
    .get();
};

/**
 * Gets a subcollection of artist.
 * @param {String} artistId The id of the artist.
 * @param {String} subCollection The name of the sub collection.
 * @param {Integer} limit The max number of documents to return.
 * @param {String} direction Optional direction to sort by ('asc' or 'desc'). If
 * not specified, order will be ascending.
 * @returns Up to the specified number of documents from the subcollection specified.
 */
export const getSubCollectionDocuments = (
  collectionName,
  id,
  subCollection,
  limit,
  direction = ASC,
  orderByCriterion = constants.FIELDS_PATHS.ALL.CREATED_AT,
) => {
  const documents = [];
  let ref = firestoreDB
    .collection(collectionName)
    .doc(id)
    .collection(subCollection)
    .orderBy(orderByCriterion, direction);

  if (limit) {
    ref = ref.limit(limit);
  }
  return ref.get().then((snapshot) => {
    snapshot.forEach((element) => {
      documents.push(element.data());
    });
    return documents;
  });
};

export const getDocument = (collectionName, documentId) =>
  firestoreDB
    .collection(collectionName)
    .doc(documentId)
    .get();

export const getDocuments = (collectionName) => {
  const documents = [];
  return firestoreDB
    .collection(collectionName)
    .get()
    .then((snapshot) => {
      snapshot.forEach((element) => {
        documents.push(element.data());
      });
      return documents;
    });
};

/**
 * Searchs an artist based on the id or handler specified.
 * @param {String} identifier The id or the handler of the artist.
 * @returns A Promise.
 */
export const searchDocument = (collectionName, id) => {
  const getByHandlerPromise = getDocumentByHandler(id, collectionName);
  const getByIdPromise = getDocumentById(id, collectionName);
  return Promise.all([getByHandlerPromise, getByIdPromise]).then((firestoreResponses) => {
    const [byHandlerResult, byIdResult] = firestoreResponses;

    // If no artist was found using either the id nor the handler, return an error.
    if (!byHandlerResult.exists && !byIdResult.exists) {
      return Promise.reject(constants.ERROR_MESSAGES.NOT_FOUND);
    }

    // At this point one of the two response has to be different than undefined, then use either.
    const data = byHandlerResult.exists ? byHandlerResult.data() : byIdResult.data();

    return data;
  });
};

/**
 * Returns a reference to a subcollection in the specified document.
 * @param {String} collectionName The name of the collection where the root document belongs to.
 * @param {String} documentId The id of the document
 * @param {String} subCollectionName The name of the subcollection
 */
export const getSubCollectionRef = (collectionName, documentId, subCollectionName) =>
  firestoreDB
    .collection(collectionName)
    .doc(documentId)
    .collection(subCollectionName);

/**
 * Returns a reference to a document in a subcollection
 * @param {String} collectionName The name of the collection where the parent document belongs to.
 * @param {String} parentDocumentId The id of the parent document
 * @param {String} subCollectionName The name of the subcollection
 * @param {String} documentId The id of the document
 */
export const getDocumentSubCollectionRef = (
  collectionName,
  parentDocumentId,
  subCollectionName,
  documentId,
) =>
  firestoreDB
    .collection(collectionName)
    .doc(parentDocumentId)
    .collection(subCollectionName)
    .doc(documentId);

/**
 * Returns a reference to a document in the specified collection.
 * @param {String} collectionName The name of the collection
 * @param {String} documentId The id of the document
 */
export const getDocumentRef = (collectionName, documentId) =>
  firestoreDB.collection(collectionName).doc(documentId);

/**
 * Returns a reference to a subcollection in the specified document.
 * @param {String} collectionName The name of the collection where the root document belongs to.
 * @param {String} documentId The id of the document
 * @param {String} subCollectionName The name of the subcollection
 */
export const getCollectionRef = collectionName => firestoreDB.collection(collectionName);
