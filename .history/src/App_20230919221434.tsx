import React, { useState, useMemo, useEffect } from "react";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import logo from "./logo.svg";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import rtlPlugin from "stylis-plugin-rtl";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import themeRTL from "./assets/theme/theme-rtl";
import { prefixer } from "stylis";
import Sidenav from "./components/Sidenav/index";
import DashboardNavbar from "./components/Navbars/DashboardNavbar";

function App() {
  const [rtlCache, setRtlCache] = useState<any>(null);
  const [onMouseEnter, setOnMouseEnter] = useState(false);
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

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    // if (miniSidenav && !onMouseEnter) {
    //   setMiniSidenav(dispatch, false);
    //   setOnMouseEnter(true);
    // }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    // if (onMouseEnter) {
    //   setMiniSidenav(dispatch, true);
    //   setOnMouseEnter(false);
    // }
  };
  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Sidenav
          color={"info"}
          brand={null}
          brandName=""
          routes={[]}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        />
        <DashboardNavbar />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
