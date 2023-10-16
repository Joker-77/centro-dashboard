// @ts-nocheck
import React, { useEffect, useState } from "react";
import DashboardLayout from "./../layouts/index";
import { Grid } from "@mui/material";
import MDTypography from "./../../components/MDTypography/index";
import DailyCalender from "../shared/dailyCalendar";
import Meetings from "../shared/meetings";
import { Link } from "react-router-dom";
import Request from "../admin/dashboard/request";

interface IProps {}

const PendingRequests: React.FC<IProps> = () => {
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
              display: "flex",
              p: 3,
              height: ".1em",
            },
          })}
        >
          <Grid item md={12} height={".1em"} mb={5}>
            <MDTypography fontSize="14px">مرحباً بك مرّة أخرى</MDTypography>
          </Grid>
          <Grid container md={12} xs={12}>
            <Request
              num={0}
              type="غير محدد"
              title="اجتماع"
              dateRange={"2/12-10/12"}
              subTitle="اجتماع لجنة الطاقة"
              subject="اسم الموضوع أو نوع الموضوع الخاص بالحدث"
              color="#0095FF"
            />
            <Request
              num={0}
              type="غير محدد"
              title="اجتماع"
              dateRange={"2/12-10/12"}
              subTitle="اجتماع لجنة الطاقة"
              subject="اسم الموضوع أو نوع الموضوع الخاص بالحدث"
              color="#0095FF"
            />
            <Request
              num={0}
              type="غير محدد"
              title="اجتماع"
              dateRange={"2/12-10/12"}
              subTitle="اجتماع لجنة الطاقة"
              subject="اسم الموضوع أو نوع الموضوع الخاص بالحدث"
              color="#0095FF"
            />
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
          sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
            [breakpoints.down("md")]: {
              marginTop: "1em",
            },
          })}
        >
          <DailyCalender />
          <Meetings />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default PendingRequests;
