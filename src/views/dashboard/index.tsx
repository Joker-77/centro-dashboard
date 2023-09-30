// @ts-nocheck
import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import DashboardLayout from "./../layouts/index";
import StatisticCard from "./statisticsCard";
import Calender from "./calender";
import MDTyporgraphy from "./../../components/MDTypography/index";
interface IProps {}

const Dashboard: React.FC<IProps> = () => {
  return (
    <DashboardLayout>
      <Grid
        container
        spacing={2}
        style={{
          position: "relative",
          top: "1em",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid item md={8}>
          <MDTyporgraphy>مرحباً بك مرة أخرى...</MDTyporgraphy>
        </Grid>
        <Grid item md={4}>
          <MDTyporgraphy> التقويم اليومي ومواعيدك</MDTyporgraphy>
        </Grid>
      </Grid>
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
          <StatisticCard
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
            name="رحلات السفر"
            value={32}
            bgLeftColor={"#655DC6"}
            style={{ border: "1px solid #0095FF", borderRadius: "10px" }}
          />
          <StatisticCard
            name="الاجتماعات القادمة"
            value={32}
            bgLeftColor={"#73C3D5"}
            style={{ border: "1px solid #0095FF", borderRadius: "10px" }}
          />
          <StatisticCard
            name="طلبات الاستدعاء"
            value={32}
            bgLeftColor={"#0095FF"}
            style={{ border: "1px solid #0095FF", borderRadius: "10px" }}
          />
        </Grid>
        <Grid container md={3} mr={8} mt={1}>
          <Card style={{ width: "100%" }}>
            <Calender />
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
