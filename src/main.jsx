//In React Redux, the <Provider> component acts as a central hub for 
//making the Redux store accessible to all nested components within your application


import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./redux/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
