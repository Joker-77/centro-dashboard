// @ts-nocheck
import * as React from "react";
import Grid from "@mui/material/Grid";
import MDTypography from "./../../components/MDTypography/index";
interface IProps {}

const StatisticCard: React.FC<IProps> = ({
  num,
  svg,
  value,
  name,
  fontSize,
  ...props
}) => {
  console.log(props);
  return (
    <Grid
      container
      md={11}
      mt={num > 0 ? 4 : 0}
      {...props}
      style={{ backgroundColor: "white" }}
      {...props.style}
    >
      <Grid container md={10}>
        <Grid
          item
          md={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {svg}
        </Grid>
        <Grid
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
          item
          md={5}
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
            fontSize: fontSize,
          }}
        >
          {value}
        </MDTypography>
      </Grid>
    </Grid>
  );
};

export default StatisticCard;
