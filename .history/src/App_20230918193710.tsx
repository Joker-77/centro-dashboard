import React, { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import logo from "./logo.svg";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [rtlCache, setRtlCache] = useState(null);
  useMemo(() => {
    const cacheRtl = 
  })
  // const { pathname } = useLocation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
