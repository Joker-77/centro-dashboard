import React from "react";
import UserCard from "./userCard";
import PageLayout from '../layouts/index';
import PageLayout from '../../../.history/src/views/layouts/index_20230921105439';
interface UsersProps {}

const Users: React.FC<UsersProps> = () => {
  return (
    <PageLayout>
      <UserCard />
    </PageLayout>
  );
};

export default Users;
