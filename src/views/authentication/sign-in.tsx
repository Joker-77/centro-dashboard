// @ts-nocheck
import * as React from "react";
import AuthLayout from "../layouts/auth/index";
import bgImage from "../../assets/images/auth-bg.png";
import Grid from "@mui/material/Grid";
import MDBox from "../../components/MDBox/index";
import MDButton from "../../components/MDButton/index";
import MDTypography from "../../components/MDTypography/index";

import bgLogo from "../../assets/images/bgLogo.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import BasicTabs from "./authTapPanel";
interface Props {}
const SignIn: React.FC<Props> = (props) => {
  return (
    <AuthLayout image={bgImage}>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid
          sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
            zIndex: "999",
            ml: 20,
            mt: 20,
            height: "50%",
            display: "flex",
            alignItems: "center",
            [breakpoints.down("md")]: {
              display: "none",
            },
          })}
          item
          md={6}
          xs={12}
        >
          <img height="150" alt="bg-log" src={bgLogo} />
        </Grid>
        <Grid
          sx={{
            zIndex: "999",
            mt: 5,
            display: "flex",
            justifyContent: "end",
          }}
          item
          md={4}
          xs={12}
        >
          <Card sx={{ width: 400, mr: 10, mt: 3, height: "95%" }}>
            <CardContent>
              <MDTypography
                style={{ textAlign: "center", fontSize: "16px" }}
                mt={2}
                px={1}
              >
                {`مرحبا بك في بوابة دخول وزارة الاستثمار`}
              </MDTypography>
              <BasicTabs />
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            ></CardActions>
          </Card>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};

export default SignIn;
