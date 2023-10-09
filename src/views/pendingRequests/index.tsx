// @ts-nocheck
import React, { useEffect, useState } from "react";
import DashboardLayouts from "./../layouts/index";
import { Grid } from "@mui/material";
import MDTypography from "./../../components/MDTypography/index";
import DailyCalender from "../shared/dailyCalendar";
import { DateHelper } from "./../../Helpers/DateHelper";
import Meetings from "../shared/meetings";
import { Link } from "react-router-dom";
import Request from "./../dashboard/request";

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
