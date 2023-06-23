import React from "react";
import ReactDOM from "react-dom";
import { Proviser } from "react-redux";
import { createStore } from "redux";
import uiReducer, { initialState } from "./reducers/uiReducer";
import { Map } from "immutable";
import App from "./App/App";

const store = createStore(uiReducer, Map(initialState));

ReactDOM.render(
    <React.StrictMode>
       <App />
    </React.StrictMode>,
    document.getElementById("root")
);