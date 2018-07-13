import cors from 'cors';
import express from 'express';
import * as place from './api/place';

// Note: import doesn't work on firebase functions, need to be required.
const functions = require('firebase-functions');

const app = express();
const corsOptions = {
  origin: '*',
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

/** *****************************************************
 * ENDPOINTS
 ****************************************************** */

app.get('/places', place.getPlaces);

exports.api = functions.https.onRequest(app);
