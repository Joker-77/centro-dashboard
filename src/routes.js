/* eslint-disable */
import Icon from "@mui/material/Icon";
import React from "react";
// Admin
import Users from "./views/admin/users/index.tsx";
import Dashboard from "./views/admin/dashboard/index.tsx";
// Secretary
import { MeetingsRequests } from "./views/secretary/meetings/index.tsx";
// Protocol
import PendingRequests from "./views/pendingRequests/index.tsx";
import { Protocols } from "./views/protocols/protocolsRequests/index.tsx";
// Information

// Shared
import Calendar from "./views/calendar/index.tsx";
import SignIn from "./views/authentication/sign-in.tsx";
import Dashboard2 from "./views/dashboard2/index.tsx";
import TweetRequest from "./views/dashboard2/tweetRequest.tsx";
import { Dashboard3 } from "./views/dashboard3";
import { ConferencesPage } from "./views/secretary/conferences/index.tsx";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import FileCopyIcon from "@mui/icons-material/FileCopy";
const appRoles = [
  "All",
  "Administrator",
  "Secretary",
  "InformationCommunication",
  "Protocol",
];
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
    roles: appRoles[0],
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
    roles: appRoles[0],
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
    roles: appRoles[1],
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
    roles: appRoles[2],
  },
  {
    type: "collapse",
    name: "pendingRequests",
    ar_name: "الطلبات المعلّقة",
    key: "pendingRequests",
    icon: <PendingActionsIcon />, //<Icon fontSize="small">dashboard</Icon>,
    route: "/pendingRequests",
    component: <PendingRequests />, //<Dashboard />,
    isPrivate: true,
    roles: appRoles[2],
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
    roles: appRoles[0],
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
    roles: appRoles[0],
  },
  {
    type: "collapse",
    name: "Protocols",
    ar_name: "طلبات البروتوكول",
    key: "protocols",
    icon: <FileCopyIcon />, //<Icon fontSize="small">dashboard</Icon>,
    route: "/protocols",
    component: <Protocols />, //<Dashboard />,
    isPrivate: true,
    roles: appRoles[4],
  },
  {
    type: "collapse",
    name: "MeetingsRequests",
    ar_name: "طلبات الاجتماعات",
    key: "meetings_requests",
    icon: <Diversity3Icon />,
    route: "/meetings",
    component: <MeetingsRequests />,
    isPrivate: true,
    roles: appRoles[4],
  },
];
export const adminRoutes = [
  {
    type: "collapse",
    name: "sign-in",
    ar_name: "تسجيل الدخول",
    key: "sign-in",
    icon: null, //<Icon fontSize="small">dashboard</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />, //<Dashboard />,
    isPrivate: false,
    roles: appRoles[0],
  },
  {
    type: "collapse",
    name: "Home",
    ar_name: "الرئيسية",
    key: "home",
    icon: <HomeIcon />, //<Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />, //<Dashboard />,
    isPrivate: true,
    roles: appRoles[0],
  },
  {
    type: "collapse",
    name: "Users",
    ar_name: "الأعضاء والصلاحيات",
    key: "users",
    icon: <PeopleIcon />, //<Icon fontSize="small">dashboard</Icon>,
    route: "/users",
    component: <Users />, //<Dashboard />,
    isPrivate: true,
    roles: appRoles[1],
  },
  {
    type: "collapse",
    name: "Places",
    ar_name: "المناطق والأماكن",
    key: "places",
    icon: <PlaceIcon />, //<Icon fontSize="small">dashboard</Icon>,
    route: "/places",
    component: <> </>, //<Dashboard />,
    isPrivate: true,
    roles: appRoles[1],
  },
];
export const secretaryRoutes = [
  {
    type: "collapse",
    name: "Home",
    ar_name: "الرئيسية",
    key: "home",
    icon: <HomeIcon />, //<Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />, //<Dashboard />,
    isPrivate: true,
    roles: appRoles[0],
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
    roles: appRoles[2],
  },
  {
    type: "collapse",
    name: "pendingRequests",
    ar_name: "الطلبات المعلّقة",
    key: "pendingRequests",
    icon: <PendingActionsIcon />, //<Icon fontSize="small">dashboard</Icon>,
    route: "/pendingRequests",
    component: <PendingRequests />, //<Dashboard />,
    isPrivate: true,
    roles: appRoles[2],
  },
  {
    type: "collapse",
    name: "MeetingsRequests",
    ar_name: "طلبات الاجتماعات",
    key: "meetings_requests",
    icon: <Diversity3Icon />,
    route: "/meetings",
    component: <MeetingsRequests />,
    isPrivate: true,
    roles: appRoles[4],
  },
  {
    type: "collapse",
    name: "conferences",
    ar_name: "رحلات السفر",
    key: "conferences",
    icon: null,
    route: "/conferences",
    component: <ConferencesPage />,
    isPrivate: true,
    roles: appRoles[4],
  },
];
export const protocolRoutes = [
  {
    type: "collapse",
    name: "Home",
    ar_name: "الرئيسية",
    key: "home",
    icon: <HomeIcon />, //<Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard3 />, //<Dashboard />,
    isPrivate: true,
    roles: appRoles[0],
  },
  {
    type: "collapse",
    name: "Calendar",
    ar_name: "التقويم",
    key: "calendar",
    icon: <CalendarMonthIcon />, //<Icon fontSize="small">dashboard</Icon>,
    route: "/calendar",
    component: <Calendar />, //<Dashboard />,
    isPrivate: true,
    roles: appRoles[2],
  },
  {
    type: "collapse",
    name: "Protocols",
    ar_name: "طلبات البروتوكول",
    key: "protocols",
    icon: <FileCopyIcon />, //<Icon fontSize="small">dashboard</Icon>,
    route: "/protocols",
    component: <Protocols />, //<Dashboard />,
    isPrivate: true,
    roles: appRoles[4],
  },
  {
    type: "collapse",
    name: "MeetingsRequests",
    ar_name: "طلبات الاجتماعات",
    key: "meetings_requests",
    icon: <Diversity3Icon />,
    route: "/meetings",
    component: <MeetingsRequests />,
    isPrivate: true,
    roles: appRoles[4],
  },
];
export const InformationCommunicationRoutes = [
  {
    type: "collapse",
    name: "Home9",
    ar_name: "الرئيسية ",
    key: "home9",
    icon: <HomeIcon />, //<Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard2",
    component: <Dashboard2 />, //<Dashboard />,
    isPrivate: true,
    roles: appRoles[0],
  },
  {
    type: "collapse",
    name: "tweetRequest",
    ar_name: "طلبات التغريدات ",
    key: "tweetRequest",
    icon: null, //<Icon fontSize="small">dashboard</Icon>,
    route: "/tweetRequest",
    component: <TweetRequest />, //<Dashboard />,
    isPrivate: true,
    roles: appRoles[3],
  },
];

export const MinistryRoutes = [
  {
    type: "collapse",
    name: "sign-in",
    ar_name: "تسجيل الدخول",
    key: "sign-in",
    icon: null, //<Icon fontSize="small">dashboard</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />, //<Dashboard />,
    isPrivate: false,
    roles: appRoles[0],
  },
  {
    type: "collapse",
    name: "Home",
    ar_name: "الرئيسية",
    key: "home",
    icon: <HomeIcon />, //<Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />, //<Dashboard />,
    isPrivate: true,
    roles: appRoles[0],
  },
  {
    type: "collapse",
    name: "Users",
    ar_name: "الأعضاء والصلاحيات",
    key: "users",
    icon: <PeopleIcon />, //<Icon fontSize="small">dashboard</Icon>,
    route: "/users",
    component: <Users />, //<Dashboard />,
    isPrivate: true,
    roles: appRoles[1],
  },
  {
    type: "collapse",
    name: "Places",
    ar_name: "المناطق والأماكن",
    key: "places",
    icon: <PlaceIcon />, //<Icon fontSize="small">dashboard</Icon>,
    route: "/places",
    component: <> </>, //<Dashboard />,
    isPrivate: true,
    roles: appRoles[1],
  },
];
export default routes;
