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
        title="green iguana"
      />
      <CardContent>
        <MDTypography gutterBottom variant="h5" component="div">
          {`Lizard`}
        </MDTypography>
        <MDTypography variant="body2">
          {`Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`}
        </MDTypography>
      </CardContent>
      <CardActions>
        <MDButton>Share</MDButton>
        <MDButton>Learn More</MDButton>
      </CardActions>
    </Card>
  );
};

export default UserCard;
