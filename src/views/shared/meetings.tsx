// @ts-nocheck
import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import logo from "./../../assets/images/centro-white.png";
import MDButton from "../../components/MDButton/index";
interface IProps {}

const Meetings: React.FC<IProps> = () => {
  return (
    <Grid item md={12} mt={2}>
      <Card
        sx={{
          maxWidth: 440,
          width: "100%",
          height: "12em",
          backgroundColor: "#13714D",
        }}
      >
        <Grid
          container
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            md={12}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            mt={3}
          >
            <img alt="logo" width="200" height="70" src={logo} />
          </Grid>
          <Grid
            item
            md={12}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MDButton color="primary" style={{ width: "70%" }}>
              عرض الاجتماعات
            </MDButton>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default Meetings;
