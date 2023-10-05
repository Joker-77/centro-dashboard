/* eslint-disable */
import Icon from "@mui/material/Icon";
import React from "react";
import Users from "./views/users/index.tsx";
import SignIn from "./views/authentication/sign-in.tsx";
import Dashboard from "./views/dashboard/index.tsx";
import Dashboard2 from "./views/dashboard2/index.tsx";

const routes = [
  {
    type: "collapse",
    name: "sign-in",
    ar_name: "تسجيل الدخول",
    key: "sign-in",
    icon: null, //<Icon fontSize="small">dashboard</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />, //<Dashboard />,
    isPrivate: false,
  },
  {
    type: "collapse",
    name: "Home",
    ar_name: "الرئيسية",
    key: "home",
    icon: null, //<Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />, //<Dashboard />,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Users",
    ar_name: "الأعضاء والصلاحيات",
    key: "users",
    icon: null, //<Icon fontSize="small">dashboard</Icon>,
    route: "/users",
    component: <Users />, //<Dashboard />,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Places",
    ar_name: "المناطق والأماكن",
    key: "places",
    icon: null, //<Icon fontSize="small">dashboard</Icon>,
    route: "/authentication/sign-in",
    component: <> </>, //<Dashboard />,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Home2",
    ar_name: "الرئيسية 2",
    key: "home2",
    icon: null, //<Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard2",
    component: <Dashboard2 />, //<Dashboard />,
    isPrivate: true,
  },
];

export default routes;
