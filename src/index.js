import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Providers
import ThemeProvider from "./state/ThemeProvider";

// Components
import Sibling from "./Sibling";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      <Sibling />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
