// @ts-nocheck
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  CheckCircleOutline,
  Circle,
  KeyboardArrowLeft,
  PanoramaFishEye,
} from "@mui/icons-material";
import user3 from "../../../assets/images/climate.jpg";
import Grid from "@mui/material/Grid";
import DashboardLayout from "../../layouts/index";

export const Conference = ({ onClick }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const theme = createTheme({
    direction: "rtl",
  });
  return (
    <Grid
      my={{ sx: 2, md: 3 }}
      gap={9}
      style={{
        position: "relative",
        top: "2em",
        right: ".8em",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box display={"flex"} flexDirection={"row"} gap={5}>
        <img
          src={user3}
          alt="trip_photo"
          style={{ border: 1, borderRadius: 15, width: 400, height: 200 }}
        />
        <Box display={"flex"} flexDirection={"column"} width={"100%"} gap={5}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h5" color={"#13714d"}>
              مؤتمر المناخ 2022
            </Typography>
            <Box display={"flex"} onClick={onClick} sx={{ cursor: "pointer" }}>
              <Typography color={"#e54562"} fontSize={"small"}>
                عودة
              </Typography>
              <KeyboardArrowLeft sx={{ color: "#e54562" }} />
            </Box>
          </Box>
          <Box gap={10} display="flex" alignItems={"center"}>
            <Box>
              <Typography mb={1} variant="h6" fontSize={12}>
                تاريخ الذهاب
              </Typography>
              <Typography variant="body2" fontSize={12} color={"#9d9d9d"}>
                نوفمبر 14, 2021
              </Typography>
            </Box>
            <Box>
              <Typography mb={1} variant="h6" fontSize={12}>
                تاريخ العودة
              </Typography>
              <Typography variant="body2" fontSize={12} color={"#9d9d9d"}>
                نوفمبر 17, 2021
              </Typography>
            </Box>
            <Box>
              <Typography mb={1} variant="h6" fontSize={12}>
                عدد الأيام
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={1}
              >
                <Typography variant="body2" fontSize={12} color={"#9d9d9d"}>
                  5 أيام
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography variant="h6" mb={1} fontSize={12}>
              المكان
            </Typography>
            <Box display={"flex"} gap={1}>
              <img
                src={user3}
                alt="user_photo"
                style={{ width: 20, height: 20 }}
              />
              <Typography color={"#e54562"} fontSize={"small"}>
                جمهورية مصر العربية
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box width={"80%"}>
        <Typography variant="h6" mb={1} fontSize={16}>
          سبب الرحلة
        </Typography>
        <Typography variant="body2" fontSize={12} color={"#9d9d9d"}>
          هذا النص هو مثال لنص يمكن أن يستبدل مي نفس المساحة، لفد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق إذا كنت
          تحتاج إلي عدد أكبر من الفقرات يتيح لك مولد النص العربي
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" mb={1} fontSize={16}>
          برتوكول الرحلة
        </Typography>
        <ThemeProvider theme={theme}>
          <FormControl component="fieldset">
            <RadioGroup
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            >
              {["طيارة", "فنادق", "سيارة"].map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={
                    <Radio
                      icon={
                        <PanoramaFishEye
                          style={{ color: "#b5c5d1", fontSize: 24 }}
                        />
                      }
                      checkedIcon={
                        <CheckCircleOutline
                          style={{ color: "#13714d", fontSize: 24 }}
                        />
                      }
                    />
                  }
                  label={
                    <Box mr={10} display={"flex"} alignItems={"center"} gap={1}>
                      <Circle
                        sx={{
                          fontSize: "10px",
                          color:
                            selectedValue === option ? "#c6e37b" : "#d3dde4",
                        }}
                      />
                      <Typography
                        fontSize={16}
                        sx={{
                          color: selectedValue === option ? "#000" : "#d3dde4",
                        }}
                      >
                        {option}
                      </Typography>
                    </Box>
                  }
                  labelPlacement="start"
                />
              ))}
            </RadioGroup>
          </FormControl>
        </ThemeProvider>
      </Box>
    </Grid>
  );
};
