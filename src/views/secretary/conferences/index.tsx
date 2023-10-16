// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import DashboardLayout from "../../layouts";
import DailyCalender from "../../shared/dailyCalendar";
import MDTypography from "../../../components/MDTypography";
import Meetings from "../../shared//meetings";
import { DateHelper } from "../../../helpers/dateHelper";
import { ConferenceCard } from "./ConferenceCard";
import user3 from "../../../assets/images/climate.jpg";
import { Conference } from "./Conference";
interface IProps {}
export const ConferencesPage: React.FC<IProps> = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <DashboardLayout>
      {!clicked ? (
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
            <Grid
              item
              md={12}
              sx={({ breakpoints }) => ({
                [breakpoints.up("md")]: {
                  height: "18em",
                },
              })}
            >
              <Grid container md={12} xs={12}>
                <Grid item md={6} xs={12}>
                  <ConferenceCard
                    imageUrl={user3}
                    title={"مؤتمر المناخ 2022"}
                    text={"مصر"}
                    goDate={"نوفمبر 14, 2021"}
                    returnDate={"نوفمبر 17, 2021"}
                    tripOfficial={"عبدالله الاحمدي"}
                    onClick={handleClick}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <ConferenceCard
                    imageUrl={user3}
                    title={"مؤتمر المناخ 2022"}
                    text={"مصر"}
                    goDate={"نوفمبر 14, 2021"}
                    returnDate={"نوفمبر 17, 2021"}
                    tripOfficial={"عبدالله الاحمدي"}
                    onClick={handleClick}
                  />
                </Grid>
              </Grid>
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
      ) : (
        <Conference onClick={handleClick} />
      )}
    </DashboardLayout>
  );
};
