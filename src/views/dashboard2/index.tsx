// @ts-nocheck
import * as React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import DashboardLayout from "./../layouts/index";

import MDTyporgraphy from "./../../components/MDTypography/index";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface IProps {}

const Dashboard2: React.FC<IProps> = () => {
  return (
    <DashboardLayout>
      <Grid
        direction="column"
        container
        rowSpacing={8}
        // spacing={2}
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

        <Grid
          rowSpacing={1}
          container
          spacing={4}
          style={{
            position: "relative",
            top: "2em",
            display: "flex",
            gap: "2em",
            // justifyContent: "space-around",
          }}
        >
          <Box style={{ textAlign: "center" }}>
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  التغريدات
                </Typography>
                <Typography variant="h5" component="div">
                  6520
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  تغريدة
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box style={{ textAlign: "center" }}>
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  الطلبات
                </Typography>
                <Typography variant="h5" component="div">
                  6
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  طلبات
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box style={{ textAlign: "center" }}>
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  المرفوضة
                </Typography>
                <Typography variant="h5" component="div">
                  3
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  طلبات
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ minWidth: 275 }} style={{ textAlign: "center" }}>
            <Card
              sx={{
                color: "white",
                background: "linear-gradient(to left ,  #43A047 ,#66BB6A)",
              }}
              //   style={{
              //     background:
              //       "linearGradient(to right, gradients.primary, gradients.secondary)",
              //   }}
            >
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
                  Icon
                </Typography>
                <Typography variant="h5" component="div">
                  إضافة تغريدة جديدة
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid
          item
          md={8}
          style={{ display: "flex", flexDirection: "column", fontSize: "12px" }}
        >
          <MDTyporgraphy>احدث واخر الطلبات</MDTyporgraphy>
          <Grid container spacing={2} direction="row">
            <Grid item xs style={{ maxWidth: "50%" }}>
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
            </Grid>
            {/*  */}
            <Grid item xs style={{ maxWidth: "50%" }}>
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

                      <div style={{ display: "flex", gap: "2" }}>
                        <div>ديسمبر،11،2022</div>
                        <div>11:19 ص</div>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>{" "}
            <Grid item xs style={{ maxWidth: "50%" }}>
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

                      <div style={{ display: "flex", gap: "2" }}>
                        <div>ديسمبر،11،2022</div>
                        <div>11:19 ص</div>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>{" "}
            <Grid item xs style={{ maxWidth: "50%" }}>
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

                      <div style={{ display: "flex", gap: "2" }}>
                        <div>ديسمبر،11،2022</div>
                        <div>11:19 ص</div>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid item xs style={{ maxWidth: "50%" }}>
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

                      <div style={{ display: "flex", gap: "2" }}>
                        <div>ديسمبر،11،2022</div>
                        <div>11:19 ص</div>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard2;
