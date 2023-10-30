import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App_CMS from "./BACKEND-CMS/App_CMS";
import reportWebVitals from "./reportWebVitals";
import App_Website from "./WEBSITE/App-Website";

const isCMSMode = true;

const App = isCMSMode ? <App_CMS/> : <App_Website/>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {App}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
