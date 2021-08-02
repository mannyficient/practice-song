import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./Components/App.jsx";
import { rootReducers } from "./Redux/Reducers/reducers";

ReactDOM.render(
  <Provider store={createStore(rootReducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
