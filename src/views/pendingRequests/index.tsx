// @ts-nocheck
import React, { useEffect, useState } from "react";
import DashboardLayouts from "./../layouts/index";
import { Grid } from "@mui/material";
import MDTypography from "./../../components/MDTypography/index";
import DailyCalender from "../shared/dailyCalendar";
import { DateHelper } from "./../../Helpers/DateHelper";
import Meetings from "../shared/meetings";
import { Link } from "react-router-dom";

interface IProps {}

const PendingRequests: React.FC<IProps> = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    let day = DateHelper.getDay(new Date().getDay());
    let date = new Date().toLocaleDateString();
    setDate(`${day}، ${date}`);
  }, []);
  return (
    <DashboardLayouts>
      <Grid
        container
        spacing={2}
        style={{
          position: "relative",
          top: "2em",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid container md={8}>
          <Grid item md={12} height={".1em"}>
            <MDTypography fontSize="14px">الطلبات المعلّقة</MDTypography>
          </Grid>
        </Grid>
        <Grid container md={3} mr={8}>
          <DailyCalender date={date} />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        style={{
          position: "relative",
          top: "4em",
          height: "13em",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid container md={8}>
          <Grid
            container
            md={12}
            style={{ display: "flex", justifyContent: "space-between" }}
          ></Grid>
        </Grid>
        <Grid container md={3} mr={8}>
          <Meetings />
        </Grid>
      </Grid>
    </DashboardLayouts>
  );
};

export default PendingRequests;
