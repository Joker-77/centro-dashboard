import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { MaterialUIControllerProvider } from "./context/index";
import { AuthProvider } from "./context/Auth";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <MaterialUIControllerProvider>
          <App />
        </MaterialUIControllerProvider>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
