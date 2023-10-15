// @ts-nocheck
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import MDTypography from "./../../components/MDTypography/index";
import Grid from "@mui/material/Grid";
import Calender from "./calender";
import { DateHelper } from "./../../helpers/dateHelper";
interface IProps {}
const DailyCalendar: React.FC<IProps> = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    let day = DateHelper.getDay(new Date().getDay());
    let date = new Date().toLocaleDateString();
    setDate(`${day}، ${date}`);
  }, []);
  return (
    <Grid item md={12} xs={12}>
      <Grid item md={12} xs={12}>
        <MDTypography fontSize="14px">التقويم اليومي ومواعيدك</MDTypography>
      </Grid>
      <Grid item md={12} xs={12}>
        <Card style={{ marginTop: "1em" }}>
          <Grid container xs={12} md={12}>
            <Grid item xs={1} md={1} p={1} mt={0.5}>
              <svg width="18.008" height="18" viewBox="0 0 18.008 18">
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="0.161"
                    y1="-0.447"
                    x2="1"
                    y2="1.232"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stop-color="#13714d" />
                    <stop offset="1" stop-color="#88cb60" />
                  </linearGradient>
                </defs>
                <g
                  id="calendar_3_"
                  data-name="calendar (3)"
                  transform="translate(0 -0.114)"
                >
                  <path
                    id="Path_354"
                    data-name="Path 354"
                    d="M14.531,1.5H13.86V.817a.7.7,0,0,0-1.406,0V1.5h-6.9V.817a.7.7,0,0,0-1.406,0V1.5H3.477A3.481,3.481,0,0,0,0,4.974v9.664a3.481,3.481,0,0,0,3.477,3.477H14.531a3.481,3.481,0,0,0,3.477-3.477V4.974A3.481,3.481,0,0,0,14.531,1.5ZM3.477,2.9h.672V4.274a.7.7,0,0,0,1.406,0V2.9h6.9V4.274a.7.7,0,1,0,1.406,0V2.9h.672a2.073,2.073,0,0,1,2.07,2.07v.672H1.406V4.974A2.073,2.073,0,0,1,3.477,2.9Zm11.054,13.8H3.477a2.073,2.073,0,0,1-2.071-2.071V7.051H16.6v7.586a2.073,2.073,0,0,1-2.071,2.071ZM6.246,9.817a.7.7,0,0,1-.7.7H4.16a.7.7,0,1,1,0-1.406H5.543A.7.7,0,0,1,6.246,9.817Zm8.3,0a.7.7,0,0,1-.7.7H12.465a.7.7,0,0,1,0-1.406h1.383A.7.7,0,0,1,14.551,9.817Zm-4.156,0a.7.7,0,0,1-.7.7H8.309a.7.7,0,1,1,0-1.406H9.691A.7.7,0,0,1,10.395,9.817ZM6.246,13.966a.7.7,0,0,1-.7.7H4.16a.7.7,0,1,1,0-1.406H5.543A.7.7,0,0,1,6.246,13.966Zm8.3,0a.7.7,0,0,1-.7.7H12.465a.7.7,0,0,1,0-1.406h1.383A.7.7,0,0,1,14.551,13.966Zm-4.156,0a.7.7,0,0,1-.7.7H8.309a.7.7,0,0,1,0-1.406H9.691A.7.7,0,0,1,10.395,13.966Z"
                    transform="translate(0)"
                    fill="url(#linear-gradient)"
                  />
                </g>
              </svg>
            </Grid>
            <Grid item md={8} xs={8} p={1}>
              <MDTypography variant="span" fontSize={14}>
                {date}
              </MDTypography>
            </Grid>
            <Grid
              item
              md={3}
              xs={3}
              style={{
                backgroundColor: "#13714D",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                paddingRight: ".6em",
                paddingTop: ".3em",
              }}
            >
              <MDTypography variant="span" fontSize={14} color="white">
                تقويمي
              </MDTypography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item md={12} mt={2}>
        <Card style={{ width: "100%" }}>
          <Calender />
        </Card>
      </Grid>
    </Grid>
  );
};

export default DailyCalendar;
