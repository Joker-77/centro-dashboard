// @ts-nocheck
import * as React from "react";
import AuthLayout from "../layouts/auth/index";
import bgImage from "../../assets/images/auth-bg.png";
import Grid from "@mui/material/Grid";
import MDBox from "../../components/MDBox/index";
import MDButton from "../../components/MDButton/index";
import MDTypography from "../../components/MDTypography/index";

import bgLogo from "../../assets/images/centro-white.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import BasicTabs from "./authTapPanel";
import { Link, Navigate } from "react-router-dom";
import { useAuthState, useAuthDispatch } from "./../../context/Auth";
import { toast } from "react-toastify";

interface Props {}
const SignIn: React.FC<Props> = (props) => {
  let userState = useAuthState();
  const userDetails = JSON.parse(localStorage.getItem("currentUser")!);
  const dispatch = useAuthDispatch();
  if (!!userDetails && userDetails?.isLoggedIn) {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    return <Navigate to="/dashboard" />;
  }
  if (userState?.errorMessage != null) {
    toast.error(userState.errorMessage?.response?.data[0].errorMessage);
  }
  return (
    <AuthLayout image={bgImage}>
      <Grid container spacing={1} sx={{ height: "100%" }}>
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
        >
          <img height="150" alt="bg-log" src={bgLogo} />
        </Grid>
        <Grid
          sx={({
            palette: { transparent, transparentColor, white, background },
            functions: { rgba },
            breakpoints,
          }) => ({
            zIndex: "999",
            mt: 5,
            display: "flex",
            justifyContent: "center",
            [breakpoints.down("md")]: {
              // padding: "0 1em",
              paddingLeft: "21px",
              paddingRight: "0px !important",
            },
            [breakpoints.up("md")]: {},
            [breakpoints.up("lg")]: {},
          })}
          item
          md={12}
          lg={6}
          xs={12}
        >
          <Card
            sx={({
              palette: { transparent, transparentColor, white, background },
              functions: { rgba },
              breakpoints,
            }) => ({
              [breakpoints.down("md")]: {
                margin: "0 1.2em",
              },
              [breakpoints.up("md")]: {
                width: 400,
                height: "95%",
              },
            })}
          >
            <CardContent>
              <MDTypography
                style={{ textAlign: "center", fontSize: "16px" }}
                mt={2}
                px={1}
              >
                {`مرحبا بك في Centro`}
              </MDTypography>
              <BasicTabs dispatch={dispatch} />
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
