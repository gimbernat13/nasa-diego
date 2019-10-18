import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk"
const logger = store => {
  return next => {
    return action => {
      console.log("[Middleware] Dispatching: ", action);
      const result = next(action);
      console.log("[Middleware] Next State is: ", store.getState());
      return result;
    };
  };
};

const store = createStore(reducer, applyMiddleware(logger, thunk) ,);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
