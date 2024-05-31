import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primeflex/primeflex.css"; // css utility
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";

ReactDOM.render(
  <App />,

  document.getElementById("root")
);
