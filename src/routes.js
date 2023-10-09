/* eslint-disable */
import Icon from "@mui/material/Icon";
import React from "react";
import Users from "./views/users/index.tsx";
import PendingRequests from "./views/pendingRequests/index.tsx";
import SignIn from "./views/authentication/sign-in.tsx";
import Dashboard from "./views/dashboard/index.tsx";
import Dashboard2 from "./views/dashboard2/index.tsx";
import { Protocols } from "./views/protocols";
import Calendar from "./views/calendar/index.tsx";
import { Dashboard3 } from "./views/dashboard3";
import { MeetingsRequests } from "./views/meetings";

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
    name: "Calendar",
    ar_name: "التقويم",
    key: "calendar",
    icon: null, //<Icon fontSize="small">dashboard</Icon>,
    route: "/calendar",
    component: <Calendar />, //<Dashboard />,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Places",
    ar_name: "المناطق والأماكن",
    key: "places",
    icon: null, //<Icon fontSize="small">dashboard</Icon>,
    route: "/places",
    component: <> </>, //<Dashboard />,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "pendingRequests",
    ar_name: "الطلبات المعلّقة",
    key: "pendingRequests",
    icon: null, //<Icon fontSize="small">dashboard</Icon>,
    route: "/pendingRequests",
    component: <PendingRequests />, //<Dashboard />,
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
  {
    type: "collapse",
    name: "Home3",
    ar_name: "الرئيسية 3",
    key: "home3",
    icon: null, //<Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard3",
    component: <Dashboard3 />, //<Dashboard />,
    isPrivate: true,
  },
  // {
  //   type: "collapse",
  //   name: "calendar",
  //   ar_name: "التقويم",
  //   key: "calendar",
  //   icon: null, //<Icon fontSize="small">dashboard</Icon>,
  //   route: "/calendar",
  //   component: <Calendar />, //<Dashboard />,
  //   isPrivate: true,
  // },
  {
    type: "collapse",
    name: "Protocols",
    ar_name: "طلبات البروتوكول",
    key: "protocols",
    icon: null, //<Icon fontSize="small">dashboard</Icon>,
    route: "/protocols",
    component: <Protocols />, //<Dashboard />,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "MeetingsRequests",
    ar_name: "طلبات الاجتماعات",
    key: "meetings_requests",
    icon: null,
    route: "/meetings",
    component: <MeetingsRequests />,
    isPrivate: true,
  },
];

export default routes;
