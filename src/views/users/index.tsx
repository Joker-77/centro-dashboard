// @ts-nocheck
import React, { useState } from "react";
import UserCard from "./userCard";
import DashboardLayouts from "../layouts/index";
import Grid from "@mui/material/Grid";
import MDBox from "../../components/MDBox/index";
import MDTypography from "../../components/MDTypography/index";
import MDButton from "../../components/MDButton/index";
import CreateUser from "./createUser";

interface UsersProps {}

const Users: React.FC<UsersProps> = ({}) => {
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const addUser = () => {
    setIsCreate(true);
  };
  return (
    <DashboardLayouts>
      {!isCreate && (
        <>
          {" "}
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
            <Grid item md={3} xs={12} my={1}>
              <UserCard />
            </Grid>
            <Grid item md={3} xs={12} my={1}>
              <UserCard />
            </Grid>
            <Grid item md={3} xs={12} my={1}>
              <UserCard />
            </Grid>
            <Grid item md={3} xs={12} my={1}>
              <UserCard />
            </Grid>
            <Grid item md={3} xs={12} my={1}>
              <UserCard />
            </Grid>
          </Grid>{" "}
        </>
      )}
      {isCreate && <CreateUser />}
    </DashboardLayouts>
  );
};

export default Users;
