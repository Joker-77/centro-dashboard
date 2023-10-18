// @ts-nocheck
import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MDButton from "../../../components/MDButton/index";
import MDBox from "../../../components/MDBox/index";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import CloseIcon from "@mui/icons-material/Close";
const UserDetails: React.FC<any> = ({
  open,
  user,
  toggleDrawer,
  toggleClose,
}) => {
  return (
    <Drawer
      className="user-drawer"
      open={open}
      onClose={toggleDrawer(false)}
      sx={({ breakpoints }) => ({
        [breakpoints.down("md")]: {},
        [breakpoints.up("md")]: {
          width: "35rem !important",
        },
      })}
    >
      <Grid container md={12} xs={12} p={5}>
        <Grid
          container
          md={12}
          xs={12}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            md={8}
            xs={8}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              width="200"
              height="100"
              alt="العضو"
              src={user?.profilePicture}
            />
          </Grid>
          <Grid item md={2} style={{ display: "flex", justifyContent: "end" }}>
            <CloseIcon style={{ cursor: "pointer" }} onClick={toggleClose} />
          </Grid>
        </Grid>
        <Grid item md={12} style={{ display: "flex", height: "0" }}>
          <Typography>رقم الهاتف:</Typography>
          <Typography ml={{ md: 4, xs: 2 }} color="primary">
            {user?.mobileNumber}
          </Typography>
        </Grid>
        <Grid item md={12} style={{ display: "flex", height: "0" }}>
          <Typography> البريد الإلكتروني:</Typography>
          <Typography ml={{ md: 4, xs: 1 }} color="primary">
            {user?.userName}
          </Typography>
        </Grid>
        <Grid item md={12} style={{ display: "flex", height: "0" }}>
          <Typography>دولة العضو:</Typography>
          <Typography ml={{ md: 4, xs: 2 }} color="primary">
            {user?.userName}
          </Typography>
        </Grid>
        <Grid item md={12} xs={12} style={{ display: "flex", height: "0" }}>
          <Typography>جهة العضو:</Typography>
          <Typography ml={{ md: 4, xs: 2 }} color="primary">
            {user?.memberSide}
          </Typography>
        </Grid>
        <Grid item md={12} xs={12} style={{ display: "flex", height: "0" }}>
          <Typography>رمز وكود العضو:</Typography>
          <Typography>{user?.code}</Typography>
        </Grid>
        <Grid item md={12} xs={12} style={{ display: "flex", height: "0" }}>
          <Typography>نبذة عن العضو:</Typography>
          <Typography>{user?.brief}</Typography>
        </Grid>
        <Grid item md={12} xs={12} style={{ display: "flex", height: "0" }}>
          <Typography>صلاحيات العضو:</Typography>
          <Typography>{user?.permissions}</Typography>
        </Grid>
        <Grid
          item
          md={12}
          xs={12}
          style={{ display: "flex", justifyContent: "center", height: "0" }}
        >
          <MDButton color="primary" style={{ width: "17em" }}>
            محادثة
          </MDButton>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default UserDetails;
