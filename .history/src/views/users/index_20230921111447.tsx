import React from "react";
import UserCard from "./userCard";
import PageLayout from "../layouts/index";
import DashboardLayouts from "../layouts/DashboardLayouts/index";
interface UsersProps {}

const Users: React.FC<UsersProps> = () => {
  return (
    <DashboardLayouts>
      <UserCard />
    </DashboardLayouts>
  );
};

export default Users;
