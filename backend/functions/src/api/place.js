import * as api from './_base';
import * as controller from '../controllers/place';

/**
 * Returns the overview of an artist. The artist is searched based on the id or handler params.
 * @param {Request} request Request object from express. Receives:
 *  - params.id: The id or the handler of the artist.
 *  - query.lang: The language in which the texts will be localised.
 * @param {Response} response  Response object from express.
 */
export const getPlaces = (request, response) => {
  controller
    .getPlaces()
    .then(places => api.success(response, { places }))
    .catch((err) => {
      api.error(response, err);
    });
};

export const getPlaces2 = (request, response) => {
  controller
    .getPlaces()
    .then(places => api.success(response, { places }))
    .catch((err) => {
      api.error(response, err);
    });
};
