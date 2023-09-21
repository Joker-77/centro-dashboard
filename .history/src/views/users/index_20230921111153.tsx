import React from "react";
import UserCard from "./userCard";
interface UsersProps {}

const Users: React.FC<UsersProps> = () => {
  return (
    <Container>
      <UserCard />
    </Container>
  );
};

export default Users;
