/* eslint-disable */
import Icon from "@mui/material/Icon";
import React from "react";
// const Users = React.Lazy(() => import("./views/users/index"));
import Users from './'
const routes = [
  {
    type: "collapse",
    name: "Home",
    ar_name: "الصفحة الرئيسية",
    key: "home",
    icon: null, //<Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <> </>, //<Dashboard />,
    isPrivate: false,
  },
  {
    type: "collapse",
    name: "Users",
    ar_name: "الأعضاء والصلاحيات",
    key: "users",
    icon: null, //<Icon fontSize="small">dashboard</Icon>,
    route: "/users",
    component: <Users />, //<Dashboard />,
    isPrivate: false,
  },
  {
    type: "collapse",
    name: "Places",
    ar_name: "المناطق والأماكن",
    key: "places",
    icon: null, //<Icon fontSize="small">dashboard</Icon>,
    route: "/places",
    component: <> </>, //<Dashboard />,
    isPrivate: false,
  },
];

export default routes;
