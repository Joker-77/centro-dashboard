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
import twitter from "../../assets/images/twitter.svg";
import twitter2 from "../../assets/images/twitter2.svg";
import TextField from "@mui/material/TextField";
import addImage from "../../assets/images/addImage.svg";

interface IProps {}

const Dashboard2: React.FC<IProps> = () => {
  let addNew = () => {
    let doc = document.getElementById("allTweets");
    doc.style.display = "none";
    let doc2 = document.getElementById("newTweet");
    doc2.style.display = "flex";
  };

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
          container
          id="allTweets"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "space-around",
          }}
        >
          <Grid
            rowSpacing={1}
            container
            // spacing={4}
            style={{
              position: "relative",
              top: "2em",
              display: "flex",
              gap: "2em",
              // justifyContent: "space-around",
            }}
          >
            <Box
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <Card
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "6em",
                  width: "8em",
                  margin: "auto",
                  textAlign: "center",
                  padding: "0px",
                }}
              >
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

            <Box
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <Card
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "6em",
                  width: "8em",
                  margin: "auto",
                  textAlign: "center",
                  padding: "0px",
                }}
              >
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

            <Box
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <Card
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "6em",
                  width: "8em",
                  margin: "auto",
                  textAlign: "center",
                  padding: "0px",
                }}
              >
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

            <Box
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <Card
                onClick={() => addNew()}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "6em",
                  width: "20em",
                  margin: "auto",
                  textAlign: "center",
                  padding: "0px",
                  cursor: "pointer",
                }}
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
                    <img src={twitter} alt="" style={{ height: "20px" }} />
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    style={{ color: "white" }}
                  >
                    إضافة تغريدة جديدة
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid
            item
            // md={8}
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "12px",
              marginTop: "4em",
            }}
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
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="blue"
                        gutterBottom
                      >
                        # نرحب ب "أكوا باور"
                      </Typography>
                      <Typography variant="h5" component="div">
                        كراعٍ بلاتيني ل # معرض_الصناعات_السعودي_العماني. حيث
                        نهدف لتسلي ،
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
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="blue"
                        gutterBottom
                      >
                        # نرحب ب "أكوا باور"
                      </Typography>
                      <Typography variant="h5" component="div">
                        كراعٍ بلاتيني ل # معرض_الصناعات_السعودي_العماني. حيث
                        نهدف لتسلي ،
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
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="blue"
                        gutterBottom
                      >
                        # نرحب ب "أكوا باور"
                      </Typography>
                      <Typography variant="h5" component="div">
                        كراعٍ بلاتيني ل # معرض_الصناعات_السعودي_العماني. حيث
                        نهدف لتسلي ،
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
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="blue"
                        gutterBottom
                      >
                        # نرحب ب "أكوا باور"
                      </Typography>
                      <Typography variant="h5" component="div">
                        كراعٍ بلاتيني ل # معرض_الصناعات_السعودي_العماني. حيث
                        نهدف لتسلي ،
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
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="blue"
                        gutterBottom
                      >
                        # نرحب ب "أكوا باور"
                      </Typography>
                      <Typography variant="h5" component="div">
                        كراعٍ بلاتيني ل # معرض_الصناعات_السعودي_العماني. حيث
                        نهدف لتسلي ،
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
        <Grid
          container
          id="newTweet"
          style={{
            display: "none",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "space-around",
          }}
        >
          <Grid
            item
            // md={8}
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "12px",
              marginTop: "4em",
            }}
          >
            <MDTyporgraphy>انشاء تغريدة جديدة</MDTyporgraphy>
            <Grid
              style={{
                marginTop: "50px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Grid
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <img src={twitter2} alt="" style={{ height: "16px" }} />
                <div style={{ fontSize: "15px", fontWeight: "lighter" }}>
                  تغريدة جديدة
                </div>
              </Grid>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                style={{ position: "relative" }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  //   label=""
                  variant="outlined"
                  style={{ width: "100%", background: "white" }}
                />
                {/* must edit this */}
                <TextField
                  id="outlined-multiline-flexible"
                  //   label="...تفاصيل التغريدة"
                  placeholder="تفاصيل التغريدة..."
                  //   multiline
                  maxRows={5}
                  minRows={5}
                  style={{ width: "100%", background: "white" }}
                />
              </Box>
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  //   margin: "auto",
                  width: "100%",
                  gap: "2em",
                  //   paddingLeft: "8px",
                  //   paddingRight: "15px",
                  //   justifyItems: "center",
                }}
              >
                <Box
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    justifyItems: "center",
                    position: "relative",
                    width: "33.333333%",
                  }}
                >
                  <Card
                    style={{
                      background: "#ced4da",
                      display: "flex",
                      justifyContent: "center",
                      height: "20em",
                      width: "100%",
                      margin: "auto",
                      textAlign: "center",
                      padding: "0px",
                    }}
                  >
                    <CardContent>
                      <img src={addImage} alt="" style={{ height: "20px" }} />

                      <div color="text.secondary">إضافة صورة</div>
                    </CardContent>
                  </Card>
                </Box>
                <Box
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    justifyItems: "center",
                    position: "relative",
                    width: "33.333333%",
                  }}
                >
                  <Card
                    style={{
                      background: "#ced4da",
                      display: "flex",
                      justifyContent: "center",
                      height: "20em",
                      //   width: "33.333333%",
                      width: "100%",

                      margin: "auto",
                      textAlign: "center",
                      padding: "0px",
                    }}
                  >
                    <CardContent>
                      <img src={addImage} alt="" style={{ height: "20px" }} />

                      <div color="text.secondary">إضافة صورة</div>
                    </CardContent>
                  </Card>
                </Box>
                <Box
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    justifyItems: "center",
                    position: "relative",
                    width: "33.333333%",
                  }}
                >
                  <Card
                    style={{
                      background: "#ced4da",
                      display: "flex",
                      justifyContent: "center",
                      height: "20em",
                      //   width: "33.333333%",
                      width: "100%",

                      margin: "auto",
                      textAlign: "center",
                      padding: "0px",
                    }}
                  >
                    <CardContent>
                      <img src={addImage} alt="" style={{ height: "20px" }} />

                      <div color="text.secondary">إضافة صورة</div>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
              <Box
                style={{
                  textAlign: "center",
                  //   display: "flex",
                  //   justifyContent: "center",
                  //   justifyItems: "center",
                }}
              >
                <Card
                  onClick={() => addNew()}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "6em",
                    width: "20em",
                    margin: "auto",
                    textAlign: "center",
                    padding: "0px",
                    cursor: "pointer",
                  }}
                  sx={{
                    color: "white",
                    background: "linear-gradient(to left ,  #43A047 ,#66BB6A)",
                  }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      //   gutterBottom
                      style={{ color: "white" }}
                    >
                      ارسال الطلب
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
