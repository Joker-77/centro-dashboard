// @ts-nocheck
import React from "react";
import Grid from "@mui/material/Grid";
import DashboardLayout from "../../layouts/index";
import StatisticCard from "../../shared/statisticsCard";
import DailyCalender from "../../shared/dailyCalendar";
import MDTypography from "../../../components/MDTypography/index";
import { Link } from "react-router-dom";
import Request from "./request";
import Meetings from "../../shared/meetings";
interface IProps {}
const Dashboard: React.FC<IProps> = () => {
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
              px: 2,
            },
          })}
        >
          <Grid
            item
            md={12}
            xs={12}
            sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
              [breakpoints.down("md")]: {},
              [breakpoints.up("md")]: {
                height: ".1em",
              },
            })}
          >
            <MDTypography fontSize="14px">مرحباً بك مرّة أخرى</MDTypography>
          </Grid>
          <StatisticCard
            num={0}
            bgLeftColor={"#FF8900"}
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29.5"
                height="32"
                viewBox="0 0 29.5 32"
              >
                <path
                  id="order"
                  d="M17.63,2.575V13.418h5.437V2.575a2.719,2.719,0,0,0-5.437,0ZM4.258,7.308A.937.937,0,0,1,5.584,5.982L6.1,6.5l1.66-1.66A2.9,2.9,0,1,0,8.8,6.442L6.761,8.485a.938.938,0,0,1-1.326,0ZM9.09,3.5l1.177-1.177a.937.937,0,1,1,1.326,1.326L10.254,4.991A4.779,4.779,0,1,1,9.09,3.5ZM.13,23.106a.938.938,0,1,0,.938.938A.938.938,0,0,0,.13,23.106Zm3.75,1.875a.938.938,0,0,1,0-1.875h9.063a.938.938,0,0,1,0,1.875ZM.13,19.356a.937.937,0,1,0,.938.937A.937.937,0,0,0,.13,19.356Zm3.75,1.875a.937.937,0,1,1,0-1.875h9.063a.937.937,0,1,1,0,1.875Zm13.75-5.938v13.75a.937.937,0,0,1-.937.937H-3.62a.937.937,0,0,1-.937-.937V2.481a4.507,4.507,0,0,1,4.5-4.5H20.349a4.6,4.6,0,0,1,4.594,4.594V14.356a.938.938,0,0,1-.938.938ZM16.651-.144a4.567,4.567,0,0,0-.9,2.719V28.106H-2.682V2.481A2.632,2.632,0,0,1-.057-.144ZM.13,15.606a.938.938,0,1,0,.938.937A.937.937,0,0,0,.13,15.606Zm3.75,1.875h9.063a.938.938,0,0,0,0-1.875H3.88a.938.938,0,0,0,0,1.875Zm0,0"
                  transform="translate(4.557 2.019)"
                  fill="#ff8900"
                  fill-rule="evenodd"
                />
              </svg>
            }
            name="طلبات معلقة"
            value={32}
            style={{ border: "1px solid #FF8900", borderRadius: "10px" }}
          />
          <StatisticCard
            num={1}
            name="رحلات السفر"
            value={32}
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51.437"
                height="32"
                viewBox="0 0 51.437 32"
              >
                <path
                  id="Path_142512"
                  data-name="Path 142512"
                  d="M51.178,104.113a4.268,4.268,0,0,0-2.222-2.424,15.452,15.452,0,0,0-11.893-.519l-4.079,1.485L21.342,96.892a1.508,1.508,0,0,0-1.184-.065l-6.951,2.53a1.507,1.507,0,0,0-.364,2.64l7.377,5.3L9.968,111.031l-3.8-3.085A1.507,1.507,0,0,0,4.7,107.7L.992,109.051a1.507,1.507,0,0,0-.9,1.932l2.361,6.488a8.411,8.411,0,0,0,10.78,5.027l9.032-3.287-1.948,7.648a1.507,1.507,0,0,0,1.976,1.788l6.951-2.53a1.507,1.507,0,0,0,.865-.811l4.667-10.648,13.834-5.035A4.3,4.3,0,0,0,51.178,104.113Zm-34.26-2.9,3.666-1.334,8.486,4.2-5.421,1.973Zm30.662,5.575-14.44,5.256a1.507,1.507,0,0,0-.865.811L27.608,123.5l-3.666,1.334,1.948-7.648a1.507,1.507,0,0,0-1.976-1.788L12.2,119.664a5.4,5.4,0,0,1-6.917-3.226l-1.846-5.071,1.489-.542,3.8,3.085a1.508,1.508,0,0,0,1.465.246L38.094,104a12.458,12.458,0,0,1,9.589.419,1.283,1.283,0,0,1-.1,2.368Z"
                  transform="translate(-0.001 -96.736)"
                  fill="#655dc6"
                />
              </svg>
            }
            bgLeftColor={"#655DC6"}
            style={{ border: "1px solid #0095FF", borderRadius: "10px" }}
          />
          <StatisticCard
            num={2}
            name="الاجتماعات القادمة"
            value={32}
            svg={
              <svg
                id="Group_26660"
                data-name="Group 26660"
                xmlns="http://www.w3.org/2000/svg"
                width="31.998"
                height="32"
                viewBox="0 0 31.998 32"
              >
                <path
                  id="Path_142505"
                  data-name="Path 142505"
                  d="M31.975,23.038l0-.014L30.6,15.53a2.8,2.8,0,0,0-2.773-2.343H22.57v-1A6.565,6.565,0,0,0,18.806,6.25a3.75,3.75,0,1,0-5.585,0,6.571,6.571,0,0,0-3.77,5.938v1H4.2A2.8,2.8,0,0,0,1.423,15.53L.054,23.023l0,.014A2.851,2.851,0,0,0,2.609,26.3a6.637,6.637,0,0,0-.658,2.889v1.875A.938.938,0,0,0,2.888,32h11.25a.932.932,0,0,0,.931-.937V29.188a6.66,6.66,0,0,0-.644-2.881H17.6a6.665,6.665,0,0,0-.651,2.881v1.875a.938.938,0,0,0,.938.937h11.25a.932.932,0,0,0,.931-.937V29.188a6.632,6.632,0,0,0-.652-2.889A2.851,2.851,0,0,0,31.975,23.038ZM16.013,1.875A1.875,1.875,0,1,1,14.138,3.75,1.877,1.877,0,0,1,16.013,1.875ZM11.32,12.188a4.691,4.691,0,0,1,9.381,0v1H11.32v-1ZM13.2,30.125H3.82v-.938a4.691,4.691,0,1,1,9.381,0ZM6.638,20.688a1.875,1.875,0,1,1,1.875,1.875A1.877,1.877,0,0,1,6.638,20.688ZM28.2,30.125H18.82v-.938a4.691,4.691,0,1,1,9.381,0Zm-6.563-9.438a1.875,1.875,0,1,1,1.875,1.875A1.877,1.877,0,0,1,21.638,20.688Zm7.5,3.75H28.083A6.589,6.589,0,0,0,26.3,23.191a3.75,3.75,0,1,0-5.578,0,6.589,6.589,0,0,0-1.781,1.246H13.083A6.589,6.589,0,0,0,11.3,23.191a3.75,3.75,0,1,0-5.577,0,6.591,6.591,0,0,0-1.781,1.246H2.888A.983.983,0,0,1,1.9,23.352L3.268,15.86l0-.014a.935.935,0,0,1,.925-.783H27.831a.935.935,0,0,1,.925.783l0,.014,1.368,7.491A.983.983,0,0,1,29.138,24.438Z"
                  transform="translate(-0.014 0)"
                  fill="#73c3d5"
                />
              </svg>
            }
            bgLeftColor={"#73C3D5"}
            style={{ border: "1px solid #0095FF", borderRadius: "10px" }}
          />
          <StatisticCard
            num={3}
            name="طلبات الاستدعاء"
            value={32}
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  id="conversation"
                  d="M27.7,23.292a5.168,5.168,0,1,0-8.659,0,8.6,8.6,0,0,0-4.3,7.457A1.25,1.25,0,0,0,16,32H30.75A1.25,1.25,0,0,0,32,30.749,8.6,8.6,0,0,0,27.7,23.292Zm-4.329-5.485a2.668,2.668,0,1,1-2.668,2.668A2.671,2.671,0,0,1,23.375,17.807Zm-6,11.692a6.138,6.138,0,0,1,3.666-4.414,5.149,5.149,0,0,0,4.664,0A6.137,6.137,0,0,1,29.374,29.5ZM1.25,16.691H16a1.25,1.25,0,0,0,1.25-1.25,8.6,8.6,0,0,0-4.3-7.457,5.168,5.168,0,1,0-8.659,0A8.6,8.6,0,0,0,0,15.441,1.25,1.25,0,0,0,1.25,16.691ZM8.625,2.5A2.668,2.668,0,1,1,5.958,5.167,2.671,2.671,0,0,1,8.625,2.5ZM6.293,9.776a5.149,5.149,0,0,0,4.664,0,6.137,6.137,0,0,1,3.666,4.414h-12A6.138,6.138,0,0,1,6.293,9.776Zm6.841,17.106L9.776,30.241a1.25,1.25,0,1,1-1.768-1.768l1.225-1.225H1.25A1.25,1.25,0,0,1,0,26v-6.25a1.25,1.25,0,0,1,2.5,0v5H9.233L8.008,23.524a1.25,1.25,0,1,1,1.768-1.768l3.359,3.359a1.252,1.252,0,0,1,0,1.768ZM32,4.608v6.25a1.25,1.25,0,1,1-2.5,0v-5H22.768l1.225,1.225A1.25,1.25,0,0,1,22.225,8.85L18.867,5.492a1.252,1.252,0,0,1,0-1.768L22.225.365a1.25,1.25,0,0,1,1.768,1.768L22.768,3.358H30.75A1.25,1.25,0,0,1,32,4.608Zm0,0"
                  transform="translate(0 0.001)"
                  fill="#0095ff"
                />
              </svg>
            }
            bgLeftColor={"#0095FF"}
            style={{ border: "1px solid #0095FF", borderRadius: "10px" }}
          />
          <Grid
            container
            style={{
              position: "relative",
              top: "2em",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid container md={12} xs={12} mb={{ xs: 5 }}>
              <Grid item style={{ margin: "0 0 .5em 0" }} md={10} xs={9}>
                <MDTypography fontSize="12px">أحدث الطلبات</MDTypography>
              </Grid>
              <Grid
                item
                md={2}
                xs={3}
                style={{ display: "flex", justifyContent: "end" }}
              >
                <Link>
                  <MDTypography
                    style={{ textDecoration: "underline" }}
                    fontSize="12px"
                  >
                    عرض الكل
                  </MDTypography>
                </Link>
              </Grid>
              <Grid
                container
                md={12}
                xs={12}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
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
                  num={1}
                  type="غير محدد"
                  title="اجتماع"
                  dateRange={"2/12-10/12"}
                  subTitle="اجتماع لجنة الطاقة"
                  subject="اسم الموضوع أو نوع الموضوع الخاص بالحدث"
                  color="#0095FF"
                />
                <Request
                  num={2}
                  type="غير محدد"
                  title="اجتماع"
                  dateRange={"2/12-10/12"}
                  subTitle="اجتماع لجنة الطاقة"
                  subject="اسم الموضوع أو نوع الموضوع الخاص بالحدث"
                  color="#0095FF"
                />
              </Grid>
            </Grid>
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

export default Dashboard;
