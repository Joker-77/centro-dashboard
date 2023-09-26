// @ts-nocheck
import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MDButton from "./../../components/MDButton/index";
import MDBox from "./../../components/MDBox/index";
import Drawer from "@mui/material/Drawer";
const UserDetails: React.FC<any> = ({ open, toggleDrawer, user }) => {
  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      <Grid>
        <Grid md={4}>
          <Typography>رقم الهاتف</Typography>
          <Typography>{user?.phone}</Typography>
        </Grid>
        <Grid md={4}>
          <Typography>البريد الالكتروني</Typography>
          <Typography>{user?.email}</Typography>
        </Grid>
        <Grid md={4}>
          <Typography>دولة العضو</Typography>
          <Typography>{user?.country}</Typography>
        </Grid>
        <Grid md={4}>
          <Typography>جهة العضو</Typography>
          <Typography>{user?.side}</Typography>
        </Grid>
        <Grid md={4}>
          <Typography>رمز وكود العضو</Typography>
          <Typography>{user?.code}</Typography>
        </Grid>
        <Grid md={4}>
          <Typography> نبذة عن العضو</Typography>
          <Typography>{user?.brief}</Typography>
        </Grid>
        <Grid md={4}>
          <Typography>صلاحيات العضو</Typography>
          <Typography>{user?.permissions}</Typography>
        </Grid>
        <Grid md={4}>
          <MDButton>محادثة</MDButton>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default UserDetails;
