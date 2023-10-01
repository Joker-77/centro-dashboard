import React, { useState, useMemo, useEffect } from "react";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
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
import DefaultNavbar from "./components/Navbars/DefaultNavbar/index";
import "@fontsource/readex-pro"; // Defaults to weight 400
import "@fontsource/readex-pro/400.css"; // Specify weight
import routes from "./routes";
import logo from "./assets/images/logo.png";
import {
  useMaterialUIController,
  setMiniSidenav,
  setOpenConfigurator,
} from "./context/index";
import { useAuthState } from "./context/Auth";

function App() {
  const [controller, dispatch] = useMaterialUIController();
  const { direction } = controller;

  const [rtlCache, setRtlCache] = useState<any>(null);
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();
  let userState = useAuthState();
  const userDetails =
    JSON.parse(localStorage.getItem("currentUser")!) || userState?.userDetails;

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

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  const getRoutes = (allRoutes: any) =>
    allRoutes.map((route: any) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route.route) {
        return (
          <Route
            path={route.route}
            element={
              route.isPrivate && !userDetails?.isLoggedIn ? (
                <Navigate replace to={"/authentication/sign-in"} />
              ) : (
                route.component
              )
            }
            key={route.key}
          />
        );
      }

      return null;
    });
  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={themeRTL}>
        <CssBaseline />
        {pathname.split("/")[1] !== "authentication" && (
          <>
            <Sidenav
              color={"info"}
              brand={logo}
              brandName=""
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <DefaultNavbar />
          </>
        )}
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
