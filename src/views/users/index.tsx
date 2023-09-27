// @ts-nocheck
import React, { useState, useEffect } from "react";
import UserCard from "./userCard";
import DashboardLayouts from "../layouts/index";
import Grid from "@mui/material/Grid";
import MDBox from "../../components/MDBox/index";
import MDTypography from "../../components/MDTypography/index";
import MDButton from "../../components/MDButton/index";
import CreateUser from "./createUser";
import UserDetails from "./userDetails";
import Drawer from "@mui/material/Drawer";
import UserService from "./../../services/UserService";
import { toast } from "react-toastify";
import Skeleton from "@mui/material/Skeleton";
import CircularProgress from "@mui/material/CircularProgress";

interface UsersProps {}

const Users: React.FC<UsersProps> = ({}) => {
  const [open, setOpen] = React.useState(false);
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<any>([]);
  const [user, setUser] = useState(null);
  const addUser = () => {
    setIsCreate(true);
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

  const toggleDrawer =
    (user, inOpen: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpen(inOpen);
    };

  return (
    <DashboardLayouts>
      <UserDetails open={open} toggleDrawer={toggleDrawer}></UserDetails>
      {!isCreate && (
        <>
          <Grid container spacing={2} my={{ sx: 1, md: 2 }}>
            <Grid item xs={8}>
              <MDBox
                color="inherit"
                mb={{ xs: 1, md: 0 }}
                sx={{ height: "25%" }}
                //sx={(theme) => navbarRow(theme, { isMini })}
              >
                <MDTypography>الأعضاء والصلاحيات</MDTypography>
              </MDBox>
            </Grid>
            <Grid item xs={4}>
              <MDButton
                style={{
                  background: "linear-gradient(45deg, #88cb60,darkgreen)",
                  color: "white",
                }}
                onClick={addUser}
              >
                إضافة عضو جديد
              </MDButton>
            </Grid>
          </Grid>
          <Grid
            container
            spaceing={2}
            sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
              p: 3,
              position: "relative",
              [breakpoints.down("md")]: {
                display: "flex",
                justifyContent: "start",
                transition: transitions.create(
                  ["margin-left", "margin-right"],
                  {
                    easing: transitions.easing.easeInOut,
                    duration: transitions.duration.standard,
                  }
                ),
              },
              [breakpoints.up("md")]: {
                display: "flex",
                justifyContent: "start",
                transition: transitions.create(
                  ["margin-left", "margin-right"],
                  {
                    easing: transitions.easing.easeInOut,
                    duration: transitions.duration.standard,
                  }
                ),
              },
              [breakpoints.up("xl")]: {
                display: "flex",
                justifyContent: "start",
                transition: transitions.create(
                  ["margin-left", "margin-right"],
                  {
                    easing: transitions.easing.easeInOut,
                    duration: transitions.duration.standard,
                  }
                ),
              },
            })}
          >
            {loading ? (
              <>
                <Grid item md={4} />
                <Grid
                  item
                  md={4}
                  xs={12}
                  sx={{ display: "flex", mt: 20, justifyContent: "center" }}
                >
                  <CircularProgress />
                </Grid>
              </>
            ) : users.length > 0 ? (
              users.map((item: any, index) => {
                return (
                  <Grid key={index} item md={3} xs={12} my={1}>
                    {item ? (
                      <UserCard
                        key={index}
                        user={item}
                        toggleUser={toggleDrawer}
                      />
                    ) : (
                      <Skeleton
                        variant="rectangular"
                        width={210}
                        height={118}
                      />
                    )}
                  </Grid>
                );
              })
            ) : (
              <Grid item md={6} xs={12} my={1}>
                <MDTypography>لا توجد عناصر لعرضها</MDTypography>
              </Grid>
            )}
          </Grid>
        </>
      )}
      {isCreate && <CreateUser />}
    </DashboardLayouts>
  );
};

export default Users;
