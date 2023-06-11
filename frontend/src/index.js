import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Inicio from "./inicio";

const root = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Inicio />
  </React.StrictMode>,
  root
);

reportWebVitals();
