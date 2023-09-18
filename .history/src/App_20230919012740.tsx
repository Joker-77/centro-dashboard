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
import theme from "./assets/theme/index";
import { prefixer } from "stylis";
import Sidenav from "examples/Sidenav";

function App() {
  const [rtlCache, setRtlCache] = useState<any>(null);
  const { pathname } = useLocation();

  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin, prefixer],
    });
    setRtlCache(cacheRtl);
  }, []);
  useEffect(() => {
    document.documentElement!.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  }, [pathname]);

  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={theme}>
      <Sidenav
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brandName="My"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
