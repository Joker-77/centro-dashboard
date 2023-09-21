import React from "react";
import UserCard from "./userCard";
import PageLayout from "../layouts/index";
import DashboardLayouts from "../layouts/index";
import DefaultNavbar from '../../components/Navbars/DefaultNavbar/'
interface UsersProps {}

const Users: React.FC<UsersProps> = () => {
  return (
    <DashboardLayouts>
      <DefaultNavbar />
      <UserCard />
    </DashboardLayouts>
  );
};

export default Users;
