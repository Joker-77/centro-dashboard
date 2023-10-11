// @ts-nocheck
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import MDTypography from "../../../components/MDTypography";

interface UserInfoCardProps {
  user: any;
}

export const UserInfoCard: React.FC<UserInfoCardProps> = ({ user }) => {
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState("خارجي");
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
    setText(event.target.checked ? "داخلي" : "خارجي");
  };
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 140 }}
        style={{
          width: "50%",
          borderRadius: "100px",
          marginTop: "1em",
        }}
        image={user?.profilePicture}
        title="test"
      />
      <CardContent>
        <MDTypography style={{ textAlign: "center" }} fontSize="12px">
          {user?.name}
        </MDTypography>
        <MDTypography
          style={{
            margin: "auto",
            textAlign: "center",
            fontSize: "12px",
            color: "#1e7856",
          }}
        >
          منصب العضو
        </MDTypography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row-reverse",
        }}
      >
        <Checkbox
          checked={checked}
          onChange={handleCheckboxChange}
          sx={{
            color: "#13714d",
            "& .MuiSvgIcon-root": {
              borderRadius: "50%",
            },
            "&.Mui-checked": {
              color: "green",
              "& .MuiSvgIcon-root": {
                color: "#13714d",
                backgroundColor: "#13714d",
                borderRadius: "50%",
                borderColor: "#13714d",
                borderWidth: 3,
              },
            },
          }}
        />
        <MDTypography
          variant="h6"
          style={{
            color: checked ? "#4ab3ff" : "#ff9216",
            paddingRight: 6,
          }}
        >
          {text}
        </MDTypography>
      </CardActions>
    </Card>
  );
};
