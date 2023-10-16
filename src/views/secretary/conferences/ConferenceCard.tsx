// @ts-nocheck
import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

export const ConferenceCard = ({
  imageUrl,
  title,
  text,
  goDate,
  returnDate,
  tripOfficial,
  onClick,
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{ cursor: "pointer" }}
      mx={{ md: 1 }}
      my={{ xs: 1 }}
    >
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="Card image"
        />
        <CardContent>
          <Box
            mb={2}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h5" fontSize={16} color={"#13714d"}>
              {title}
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
            >
              <img
                src={imageUrl}
                alt="user_photo"
                style={{ width: 20, height: 20 }}
              />
              <Typography variant="body2" fontSize={10} color={"#a32323"}>
                {text}
              </Typography>
            </Box>
          </Box>

          <Box
            gap={2}
            display="flex"
            justifyContent="space-evenly"
            alignItems={"center"}
          >
            <Box>
              <Typography mb={1} variant="body1" fontSize={12}>
                تاريخ الذهاب
              </Typography>
              <Typography variant="body2" fontSize={12} color={"#9d9d9d"}>
                {goDate}
              </Typography>
            </Box>
            <Box>
              <Typography mb={1} variant="body1" fontSize={12}>
                تاريخ العودة
              </Typography>
              <Typography variant="body2" fontSize={12} color={"#9d9d9d"}>
                {returnDate}
              </Typography>
            </Box>
            <Box>
              <Typography
                mb={1}
                variant="body1"
                fontSize={12}
                color={"#98adbc"}
              >
                مسؤول الرحلة
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={1}
              >
                <img
                  src={imageUrl}
                  alt="user_photo"
                  style={{
                    border: 1,
                    borderRadius: "50%",
                    width: 20,
                    height: 20,
                  }}
                />
                <Typography variant="body2" fontSize={12}>
                  {tripOfficial}
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
