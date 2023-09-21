import React from "react";
import UserCard from "./userCard";
import PageLayout from "../layouts/index";
interface UsersProps {}

const Users: React.FC<UsersProps> = () => {
  return (
    <PageLayout>
      <UserCard />
    </PageLayout>
  );
};

export default Users;
