// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import DashboardLayout from "../../layouts/index";
import DailyCalender from "../../shared/dailyCalendar";
import MDTypography from "../../../components/MDTypography/index";
import Meetings from "../../shared/meetings";
import { RequestCard } from "./requestCard";
import MDButton from "../../../components/MDButton/index";
import CreateMeeting from "./createMeeting";

interface IProps {}

export const MeetingsRequests: React.FC<IProps> = () => {
  const [date, setDate] = useState("");
  const [clicked, setClicked] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
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
        md={12}
        xs={12}
        style={{
          position: "relative",
          top: "2em",
          right: ".8em",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid
          container
          md={9}
          xs={12}
          sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
            [breakpoints.down("md")]: {},
            [breakpoints.up("md")]: {
              p: 3,
            },
          })}
        >
          <Grid item md={8} xs={9} height={".1em"} mb={5}>
            {!isCreate ? (
              <MDTypography fontSize="14px">الاجتماعات</MDTypography>
            ) : (
              <MDTypography fontSize="18px">إنشاء اجتماع جديد</MDTypography>
            )}
          </Grid>
          <Grid
            item
            md={4}
            xs={3}
            height={".1em"}
            style={{ display: "flex", justifyContent: "end" }}
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
          <Grid item md={12}>
            {isCreate ? <CreateMeeting /> : <> </>}
          </Grid>
        </Grid>
        <Grid
          container
          md={3}
          mt={3}
          xs={12}
          style={{
            display: "flex",
            justifyContent: "start",
          }}
        >
          <DailyCalender />
          <Meetings />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};
