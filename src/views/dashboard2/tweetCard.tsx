// @ts-nocheck
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const TweetCard = ({ tweetInfo }) => {
  return (
    <Grid item>
      {/* <Grid item xs style={{ maxWidth: "50%" }}> */}

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
              {tweetInfo ? tweetInfo.tweetTitle : ""}
            </Typography>
            <Typography variant="h5" component="div">
              {tweetInfo ? tweetInfo.tweetDetails : ""}
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
                <div style={{ color: "blue" }}>
                  {tweetInfo ? tweetInfo.tweetStatus : ""}
                </div>
              </div>

              <div style={{ display: "flex", gap: "6px" }}>
                <div>{tweetInfo ? tweetInfo.tweetDate : ""}</div>
                <div>{tweetInfo ? tweetInfo.tweetTime : ""}</div>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};
export default TweetCard;
