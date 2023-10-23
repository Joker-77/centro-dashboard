// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Meetings from "../../shared/meetings";
import DailyCalender from "../../shared/dailyCalendar";
import MDTypography from "../../../components/MDTypography/index";
import "moment/locale/ar";
import moment from "moment";
export interface IProps {
  start: string;
  end: string;
}

export const MeetingsAttachment: React.FC<IProps> = ({ start, end }) => {
  if (!start && !end) {
    start = `${moment().locale("ar").format("MMMM Do ,yyyy")}`;
    end = `${moment().locale("ar").format("MMMM Do ,yyyy")}`;
  }
  return (
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
        sx={({ breakpoints, transitions }) => ({
          [breakpoints.down("md")]: {},
          [breakpoints.up("md")]: {
            p: 3,
            height: ".1em",
          },
        })}
      >
        <Grid item md={12} xs={9} height={".1em"} mb={5}>
          <MDTypography fontSize="12px">مرفقات محضر اجتماع</MDTypography>
        </Grid>
        <Grid item md={12} xs={9} height={".1em"} mb={5}>
          <MDTypography fontSize="18px">اجتماع لجنة طاقة</MDTypography>
        </Grid>
        <Grid
          item
          md={8}
          xs={9}
          height={".1em"}
          mt={3}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid md={6}>
            <MDTypography fontSize="13px" style={{ color: "orange" }}>
              بداية الاجتماع
            </MDTypography>
            <MDTypography fontSize="12px">{start}</MDTypography>
          </Grid>
          <Grid md={6}>
            <MDTypography fontSize="13px" style={{ color: "orange" }}>
              نهاية الاجتماع
            </MDTypography>
            <MDTypography fontSize="12px">{end}</MDTypography>
          </Grid>
        </Grid>
        <Grid
          item
          md={12}
          xs={9}
          height={".1em"}
          mt={3}
          style={{
            position: "relative",
            top: "3em",
          }}
        >
          <MDTypography fontSize="16px">وصف الاجتماع</MDTypography>
          <MDTypography fontSize="12px" style={{ color: "grey" }}>
            {`
                هذا النص هو مثال لنص يمكن أن يستبدل مي نفس المساحة، لفد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها
                التطبيق إذا كنت تحتاج إلي عدد أكبر من الفقرات يتيح لك مولد النص
                العربي`}
          </MDTypography>
        </Grid>
      </Grid>
      <Grid
        container
        md={3}
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
  );
};
