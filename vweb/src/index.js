import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import App from "./App";
import rootReducer from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
