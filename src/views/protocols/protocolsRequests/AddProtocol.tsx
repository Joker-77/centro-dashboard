// @ts-nocheck
import { Grid, Typography, Button } from "@mui/material";
import React, { useMemo } from "react";
import MDButton from "../../../components/MDButton";
import { Add, KeyboardArrowLeft } from "@mui/icons-material";
import MDTypography from "../../../components/MDTypography";
import { Form, Formik } from "formik";
import MDInput from "../../../components/MDInput";
import user3 from "../../../assets/images/user1.jpg";
import MDBox from "../../../components/MDBox";
import { CheckCircle } from "@mui/icons-material";

export const AddProtocol = ({ onClick }) => {
  const initialValues = useMemo(() => {
    return {};
  }, []);
  const submitCreate = (values, setSubmitting) => {
    // console.log(values);
  };
  return (
    <Grid
      container
      style={{
        position: "relative",
        top: "2em",
        right: ".8em",
        display: "flex",
        justifyContent: "space-between",
      }}
      spacing={2}
      my={{ sx: 1, md: 2 }}
    >
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <MDTypography>إضافة بروتكول للرحلة</MDTypography>
        <Grid
          item
          xs={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={onClick}
        >
          <Typography color={"#e54562"} fontSize={"small"}>
            عودة
          </Typography>
          <KeyboardArrowLeft sx={{ color: "#e54562" }} />
        </Grid>
      </Grid>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) =>
          submitCreate(values, setSubmitting)
        }
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <Form
              style={{
                width: "100%",
                padding: "inherit",
                display: "flex",
                flexDirection: "column",
                marginRight: "1rem",
              }}
            >
              <MDInput
                label={""}
                name="name"
                value={values.type}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.type || touched.type}
                sx={{
                  marginTop: 3,
                  width: "75%",
                  "& .MuiFormHelperText-root": {
                    color: "red",
                  },
                  "& .MuiOutlinedInput-input": {
                    backgroundColor: "white",
                  },
                }}
                InputProps={{
                  style: {
                    backgroundColor: "white",
                  },
                }}
              />
              <Grid
                item
                xs={9}
                mt={2}
                sx={{
                  border: 1,
                  borderColor: "#88cb60",
                  borderRadius: 2,
                  padding: 1.5,
                }}
              >
                هذا النص هو مثال لنص يمكن أن يستبدل مي نفس المساحة، لفد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها
                التطبيق إذا كنت تحتاج إلي عدد أكبر من الفقرات يتيح لك مولد النص
                العربي
              </Grid>
              <Grid item xs={12} mt={3}>
                <MDTypography fontSize={"large"}>إضافة ملف</MDTypography>
                <Grid container xs={12} md={6} gap={1} mt={3}>
                  <Grid
                    item
                    xs={3}
                    md={2}
                    sx={{
                      border: 1,
                      borderColor: "#cc4b4c",
                      borderRadius: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 2,
                    }}
                  >
                    Image
                    <Typography
                      style={{ textAlign: "center" }}
                      fontSize={"medium"}
                      color="#cc4b4c"
                    >
                      ملف PDF
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    md={2}
                    sx={{
                      border: 1,
                      borderColor: "#659c35",
                      borderRadius: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 2,
                    }}
                  >
                    Image
                    <Typography
                      style={{ textAlign: "center" }}
                      fontSize={"medium"}
                      color="#659c35"
                    >
                      ملف PNG
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    md={2}
                    sx={{
                      border: 1,
                      borderColor: "#7d6599",
                      borderRadius: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 2,
                    }}
                  >
                    Image
                    <Typography
                      style={{ textAlign: "center" }}
                      fontSize={"medium"}
                      color="#7d6599"
                    >
                      ملف MP3
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    md={2}
                    sx={{
                      border: 1,
                      borderColor: "#f2d45b",
                      borderRadius: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 2,
                    }}
                  >
                    Image
                    <Typography
                      style={{ textAlign: "center" }}
                      fontSize={"medium"}
                      color="#f2d45b"
                    >
                      إرفاق ملف
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={9}
                mt={3}
                sx={{
                  borderTop: 1,
                  borderBottom: 1,
                  borderStyle: "dashed",
                  borderColor: "#0095ff",
                  borderLeft: 0,
                  borderRight: 0,
                  paddingY: 3,
                }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{
                    border: 1,
                    borderColor: "#659c35",
                    borderRadius: 2,
                    padding: 2,
                    bgcolor: "#fff",
                  }}
                >
                  <Typography fontSize={"medium"}>
                    Image ملف البند .pdf
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  mt={2}
                  sx={{
                    border: 1,
                    borderColor: "#659c35",
                    borderRadius: 2,
                    padding: 2,
                    bgcolor: "#fff",
                  }}
                >
                  <Typography fontSize={"medium"}>
                    Image ملف البند .avi
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  mt={2}
                  sx={{
                    border: 1,
                    borderColor: "#659c35",
                    borderRadius: 2,
                    padding: 2,
                    bgcolor: "#fff",
                  }}
                >
                  <Typography fontSize={"medium"}>
                    Image ملف البند .doc
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                xs={12}
                mt={2}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <MDTypography fontSize={"medium"}>
                  إضافة الشخص المسؤول عن البروتوكول
                </MDTypography>
                <MDButton
                  style={{
                    borderRadius: 10,
                  }}
                  color="primary"
                >
                  <Add style={{ color: "white" }} />
                </MDButton>
              </Grid>
              <Grid container xs={9}>
                <Grid
                  item
                  xs={12}
                  mt={2}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <MDBox gap={2} sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={user3}
                      alt="user_photo"
                      style={{ border: 1, borderRadius: "50%", width: 40 }}
                    />
                    <MDTypography fontSize={"small"}>
                      عبدالله الاحمدي
                    </MDTypography>
                    <CheckCircle sx={{ color: "#13714d" }} />
                  </MDBox>
                  <Typography
                    color={"#e54562"}
                    sx={{ textDecoration: "underline" }}
                    fontSize={"small"}
                  >
                    حذف الشخص
                  </Typography>
                </Grid>
              </Grid>
              <Grid item md={9} mt={3}>
                <MDButton
                  style={{
                    marginLeft: 25,
                    background: "linear-gradient(270deg, #88cb60,darkgreen)",
                    color: "white",
                  }}
                  color="primary"
                >
                  ارسال للمسؤول
                </MDButton>
                <Button
                  sx={{
                    color: "#479956",
                    border: 1,
                    borderColor: "#479956",
                    backgroundColor: "#FFF",
                  }}
                  color="success"
                >
                  اعتماد البروتوكول
                </Button>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Grid>
  );
};
