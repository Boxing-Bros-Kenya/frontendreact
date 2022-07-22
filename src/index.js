import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import "./css/icon-font.css";
import "./css/icon-font-1.css";
import "./css/style.comp.css";
import "./css/style.concat.css";
import "./css/style.css";
import "./css/style.prefix.css";
import Home from "./Home";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
