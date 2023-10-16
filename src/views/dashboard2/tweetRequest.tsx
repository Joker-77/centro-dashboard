// @ts-nocheck
import * as React from "react";
import Grid from "@mui/material/Grid";

import DashboardLayout from "../layouts/index";

import MDTyporgraphy from "../../components/MDTypography/index";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import TweetCard from "./tweetCard";

interface IProps {}

const TweetRequest: React.FC<IProps> = () => {
  return (
    <DashboardLayout>
      <Grid
        container
        id="allTweets"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <MDTyporgraphy>مرحباً بك مرة أخرى...</MDTyporgraphy>

        <MDTyporgraphy>احدث واخر الطلبات</MDTyporgraphy>
        <Grid
          container
          spacing={2}
          // direction="row"
          style={{
            display: "grid",
            gridTemplateColumns: " 1fr 1fr",
            width: "100%",
            // gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {/* <Grid item xs style={{ maxWidth: "50%" }}>
            <Box
              style={{
                textAlign: "start",
                padding: "2px",
              }}
            >
              <Card>
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1em",
                  }}
                >
                  <Typography sx={{ fontSize: 14 }} color="blue" gutterBottom>
                    # نرحب ب "أكوا باور"
                  </Typography>
                  <Typography variant="h5" component="div">
                    كراعٍ بلاتيني ل # معرض_الصناعات_السعودي_العماني. حيث نهدف
                    لتسلي ،
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "12px",
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <div>حالة التغريدة:</div>
                      <div style={{ color: "blue" }}>في حالة الانتظار</div>
                    </div>

                    <div style={{ display: "flex", gap: "6px" }}>
                      <div>ديسمبر،11،2022</div>
                      <div>11:19 ص</div>
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid> */}
          <TweetCard
            tweetInfo={{
              tweetTitle: ` # نرحب ب "أكوا باور"`,
              tweetDetails: `  كراعٍ بلاتيني ل # معرض_الصناعات_السعودي_العماني. حيث نهدف
              لتسلي ،`,
              tweetStatus: "في حالة الانتظار",
              tweetDate: "ديسمبر،11،2022",
              tweetTime: "11:19 ص",
            }}
          />
          <TweetCard
            tweetInfo={{
              tweetTitle: ` # نرحب ب "أكوا باور"`,
              tweetDetails: `  كراعٍ بلاتيني ل # معرض_الصناعات_السعودي_العماني. حيث نهدف
              لتسلي ،`,
              tweetStatus: "في حالة الانتظار",
              tweetDate: "ديسمبر،11،2022",
              tweetTime: "11:19 ص",
            }}
          />{" "}
          <TweetCard
            tweetInfo={{
              tweetTitle: ` # نرحب ب "أكوا باور"`,
              tweetDetails: `  كراعٍ بلاتيني ل # معرض_الصناعات_السعودي_العماني. حيث نهدف
            لتسلي ،`,
              tweetStatus: "في حالة الانتظار",
              tweetDate: "ديسمبر،11،2022",
              tweetTime: "11:19 ص",
            }}
          />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default TweetRequest;
