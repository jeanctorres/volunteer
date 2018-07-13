import { combineReducers } from "redux";

import goodActions from "./goodActions";
import app from "./app";

const rootReducer = combineReducers({
  goodActions,
  app
});

export default rootReducer;
