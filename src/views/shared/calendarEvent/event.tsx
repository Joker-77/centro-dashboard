// @ts-nocheck
import React from "react";
import Grid from "@mui/material/Grid";
import MDTypography from "../../../components/MDTypography/index";
import logo from "../../../assets/images/user1.jpg";
import Avatar from "@mui/material/Avatar";
const EventComponent: React.FC<any> = ({ event, ...props }) => {
  return (
    <Grid
      container
      md={12}
      style={{
        borderRight: `5px solid ${event.color}`,
        padding: ".5em",
        backgroundColor: event.bgColor,
      }}
    >
      <Grid md={12}>
        <Avatar alt="logo" src={logo} width="50" height="50" />
      </Grid>
      <Grid md={12}>
        <MDTypography style={{ textAlign: "start" }} fontSize="9px">
          {event.title}
        </MDTypography>
      </Grid>
      <Grid md={12}>
        <MDTypography style={{ textAlign: "start" }} fontSize="9px">
          {event.desc}
        </MDTypography>
      </Grid>
    </Grid>
  );
};
export default EventComponent;
