// @ts-nocheck
import React from "react";
import MDButton from "./../../components/MDButton/index";
import MDTypography from "./../../components/MDTypography/index";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
const UserCard = ({}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="test"
      />
      <CardContent>
        <MDTypography></MDTypography>
        <MDTypography>

        </MDTypography>
      </CardContent>
      <CardActions>
        <MDButton></MDButton>
        <MDButton></MDButton>
      </CardActions>
    </Card>
  );
};

export default UserCard;
