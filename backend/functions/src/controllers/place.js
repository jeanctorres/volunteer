import * as firestore from '../services/firestore';
import constants from '../constants';
import getPlace from '../models/place';
import transformList from '../utils/transformList';

// const emptyResponse = () => Promise.resolve([]);

const { PLACES } = constants.COLLECTIONS;

export const getPlaces = () =>
  firestore.getDocuments(PLACES).then(places => transformList(places, place => getPlace(place)));

export const getPlaces2 = () =>
  firestore.getDocuments(PLACES).then(places => transformList(places, place => getPlace(place)));
