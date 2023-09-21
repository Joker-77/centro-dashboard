// @ts-nocheck
import React from "react";
import MDButton from "./../../components/MDButton/index";
import MDTypography from "./../../components/MDTypography/index";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import user1 from "./../../assets/images/user1.jpg";
const UserCard = ({}) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 140 }}
        style={{
          width: "50%",
          margin: "auto",
          borderRadius: "100px",
          marginTop: "1em",
        }}
        image={user1}
        title="test"
      />
      <CardContent>
        <MDTypography style={{ textAlign: "center" }}>
          محمد مصطفى علي
        </MDTypography>
        <MDTypography
          style={{ margin: "auto", textAlign: "center", fontSize: "12px" }}
        >
          منصب العضو{" "}
          <MDTypography variant="caption" style={{ color: "orange" }}>
            (عضو داخلي)
          </MDTypography>
        </MDTypography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <MDButton
          style={{ backgroundColor: "darkgreen", width: "50%", color: "white" }}
        >
          محادثة
        </MDButton>
        <MDButton color="primary" style={{ width: "50%" }}>
          تعديل
        </MDButton>
      </CardActions>
    </Card>
  );
};

export default UserCard;
