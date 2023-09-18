import React, { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "./logo.svg";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import rtlPlugin from "stylis-plugin-rtl";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

function App() {
  const [rtlCache, setRtlCache] = useState<any>(null);
  const { pathname } = useLocation();

  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });
    setRtlCache(cacheRtl);
  }, []);
  // const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement!.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  }, [pathname]);
  
  return (
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  );
}

export default App;
