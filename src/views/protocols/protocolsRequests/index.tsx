// @ts-nocheck
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import DashboardLayouts from "../../layouts/index";
import MDButton from "../../../components/MDButton";
import UserService from "../../../services/UserService";
import { AddProtocol } from "./AddProtocol";
import { UserInfoCard } from "./UserInfoCard";
import { toast } from "react-toastify";
import MDTypography from "../../../components/MDTypography";
import { CircularProgress, Skeleton } from "@mui/material";
import { MeetingsAttachment } from "./MeetingsAttachment";
interface IProps {}
export const Protocols: React.FC<IProps> = () => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<any>([]);

  const addUser = () => {
    setIsAdd(!isAdd);
  };

  useEffect(() => {
    setLoading(true);
    UserService.getUsers()
      .then((resp) => {
        setUsers(resp);
        setLoading(false);
      })
      .catch((e) => {
        toast.error(e);
        setLoading(false);
      });
  }, []);
  return (
    <DashboardLayouts>
      {!isAdd && (
        <MeetingsAttachment />
        // <>
        //   <Grid container mt={5}>
        //     <Grid item>
        //       <MDButton
        //         style={{
        //           background: "linear-gradient(45deg, #88cb60,darkgreen)",
        //           color: "white",
        //         }}
        //         onClick={addUser}
        //       >
        //         إضاف الأن
        //       </MDButton>
        //     </Grid>
        //   </Grid>
        //   <Grid container spacing={3} mt={5} justifyContent="center">
        //     {loading ? (
        //       <Grid
        //         item
        //         md={4}
        //         xs={12}
        //         sx={{ display: "flex", mt: 20, justifyContent: "center" }}
        //       >
        //         <CircularProgress />
        //       </Grid>
        //     ) : users.length > 0 ? (
        //       <Grid container spacing={3} justifyContent="start">
        //         {users.slice(3, 10).map((user: any) => (
        //           <Grid key={user?.id} item md={2} xs={6}>
        //             {user ? (
        //               <UserInfoCard key={user?.id} user={user} />
        //             ) : (
        //               <Skeleton
        //                 variant="rectangular"
        //                 width={210}
        //                 height={118}
        //               />
        //             )}
        //           </Grid>
        //         ))}
        //       </Grid>
        //     ) : (
        //       <Grid item md={6} xs={12} my={1}>
        //         <MDTypography>لا توجد عناصر لعرضها</MDTypography>
        //       </Grid>
        //     )}
        //   </Grid>
        // </>
      )}
      {isAdd && <AddProtocol onClick={addUser} />}
    </DashboardLayouts>
  );
};
