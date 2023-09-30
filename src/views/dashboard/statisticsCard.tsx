// @ts-nocheck
import * as React from "react";
import Grid from "@mui/material/Grid";
import MDTypography from "./../../components/MDTypography/index";
interface IProps {
  style?: any;
  color?: string;
}

const StatisticCard: React.FC<IProps> = ({ name, value, svg, ...props }) => {
  return (
    <Grid container md={11} mt={2} {...props}>
      <Grid container md={10}>
        <Grid item md={2}>
          {svg}
        </Grid>
        <Grid
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
          item
          md={3}
        >
          <MDTypography
            style={{
              color: "#03314B",
            }}
          >
            {name}
          </MDTypography>
        </Grid>
      </Grid>
      <Grid
        item
        md={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: props.bgLeftColor,
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
      >
        <MDTypography
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          {value}
        </MDTypography>
      </Grid>
    </Grid>
  );
};

export default StatisticCard;
