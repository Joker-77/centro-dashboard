// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import DashboardLayout from "../../layouts/index";
import DailyCalender from "../../shared/dailyCalendar";
import MDTypography from "../../../components/MDTypography/index";
import { DateHelper } from "../../../Helpers/DateHelper";
import Meetings from "../../shared/meetings";
import { RequestCard } from "./requestCard";
import MDButton from "../../../components/MDButton/index";
import CreateMeeting from "./createMeeting";
interface IProps {}

export const MeetingsRequests: React.FC<IProps> = () => {
  const [date, setDate] = useState("");
  const [clicked, setClicked] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  useEffect(() => {
    let day = DateHelper.getDay(new Date().getDay());
    let date = new Date().toLocaleDateString();
    setDate(`${day}، ${date}`);
  }, []);
  const handleClick = () => {
    setClicked(true);
  };
  const createMeeting = (event) => {
    setIsCreate(true);
  };
  return (
    <DashboardLayout>
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
        <Grid container md={8} style={{ height: "8em" }} spacing={2}>
          <Grid item md={9} height={".1em"} mb={5}>
            {!isCreate ? (
              <MDTypography fontSize="14px">الاجتماعات</MDTypography>
            ) : (
              <MDTypography fontSize="18px">إنشاء اجتماع جديد</MDTypography>
            )}
          </Grid>
          <Grid
            md={3}
            height={".1em"}
            style={{ display: "flex", justifyContent: "end", marginTop: "1em" }}
          >
            {!isCreate && (
              <MDButton
                onClick={(event) => createMeeting(event)}
                color="primary"
              >
                إنشاء اجتماع
              </MDButton>
            )}
          </Grid>
          {!isCreate ? (
            <Grid container spacing={2}>
              <Grid md={8}></Grid>
            </Grid>
          ) : (
            <CreateMeeting />
          )}
        </Grid>
        <Grid container md={3} mr={8}>
          <DailyCalender date={date} />
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          position: "relative",
          top: "4em",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "250px",
          }}
        >
          <Grid container md={8} />
          <Grid container md={3} mr={8}>
            <Meetings />
          </Grid>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};
