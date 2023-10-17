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
const UserCard = ({ user, toggleUser, editUser, hasbuttons }) => {
  return (
    <Card sx={{ maxWidth: 350, width: "250px" }}>
      <CardMedia
        sx={{ height: 140 }}
        style={{
          width: "50%",
          margin: "auto",
          borderRadius: "100px",
          marginTop: "1em",
        }}
        image={user?.profilePicture}
        title="test"
      />
      <CardContent>
        <MDTypography style={{ textAlign: "center", height: "2em" }}>
          {user?.name}
        </MDTypography>
        <MDTypography
          style={{
            margin: "auto",
            textAlign: "center",
            fontSize: "12px",
            height: "3em",
          }}
        >
          منصب العضو
          <MDTypography variant="caption" ml={1} style={{ color: "orange" }}>
            (عضو داخلي)
          </MDTypography>
        </MDTypography>
        <MDTypography
          style={{
            margin: "auto",
            textAlign: "center",
            fontSize: "12px",
            height: "3em",
          }}
        >
          رقم الهاتف:
          <MDTypography variant="caption" ml={1} style={{ color: "orange" }}>
            {user?.mobileNumber}
          </MDTypography>
        </MDTypography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {hasbuttons && (
          <>
            <MDButton
              onClick={toggleUser(user, true)}
              style={{
                backgroundColor: "darkgreen",
                width: "50%",
                color: "white",
              }}
            >
              محادثة
            </MDButton>
            <MDButton
              onClick={(event) => editUser(event, user)}
              color="primary"
              style={{ width: "50%" }}
            >
              تعديل
            </MDButton>
          </>
        )}
      </CardActions>
    </Card>
  );
};

export default UserCard;
