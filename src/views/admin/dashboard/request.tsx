// @ts-nocheck
import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDTypography from "../../../components/MDTypography/index";
interface IProps {
  num: number;
  title: string;
  type: string;
  dateRange: string;
  subTitle: string;
  subject: string;
}

const Request: React.FC<IProps> = ({
  num,
  title,
  type,
  dateRange,
  subTitle,
  subject,
  color,
}) => {
  return (
    <Grid
      item
      md={4}
      xs={12}
      sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        [breakpoints.down("md")]: {
          display: "flex",
          justifyContent: "center",
          mt: 2,
        },
        [breakpoints.up("md")]:
          num === 2
            ? { display: "flex", justifyContent: "end" }
            : num === 1
            ? { display: "flex", justifyContent: "center" }
            : {},
      })}
    >
      <Card
        sx={{ maxWidth: 240, height: "10em" }}
        style={{ padding: "1em", backgroundColor: "beige" }}
      >
        <Grid container md={12} xs={12}>
          <Grid item mt={1} md={12} xs={12}>
            <MDTypography style={{ color: "#4C677B" }} fontSize="14px">
              {type}
            </MDTypography>
          </Grid>
          <Grid item mt={1} md={8} xs={6}>
            <MDTypography style={{ color: color }} fontSize="13px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                style={{ margin: "0 .3em" }}
              >
                <circle
                  id="Oval_Copy"
                  data-name="Oval Copy"
                  cx="5"
                  cy="5"
                  r="5"
                  fill={color}
                />
              </svg>
              {title}
            </MDTypography>
          </Grid>
          <Grid item mt={1} md={4} xs={6}>
            <MDTypography fontSize="12px" color="error">
              {dateRange}
            </MDTypography>
          </Grid>
          <Grid item mt={1} md={10} xs={12}>
            <MDTypography fontSize="14px">{subTitle}</MDTypography>
          </Grid>
          <Grid item mt={1} md={12} xs={12}>
            <MDTypography fontSize="10px">{subject}</MDTypography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default Request;
