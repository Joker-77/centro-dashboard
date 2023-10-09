// @ts-nocheck
import React, { useState, useMemo } from "react";
import { Grid, FormControlLabel } from "@mui/material";
import MDTypography from "../../../components/MDTypography/index";
import * as yup from "yup";
import MDInput from "../../../components/MDInput/index";
import MDButton from "../../../components/MDButton/index";
import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import "../../../assets/main.css";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
interface IProps {
  meeting: any;
}
const CreateMeeting: React.FC<IProps> = ({ meeting }) => {
  const [files, setFiles] = useState([]);
  const validationSchema = yup.object({
    subject: yup.string("اكتب هنا...").required("حقل العنوان مطلوب"),
    priority: yup.string("اكتب هنا...").required("حقل الأولوية مطلوب"),
    date: yup.string("اكتب هنا...").required("حقل التاريخ مطلوب"),
    type: yup.string("اكتب هنا...").required("حقل النوع مطلوب"),
    time: yup.string("اكتب هنا...").required("حقل الوقت مطلوب"),
    brief: yup.string("اكتب هنا...").required("هذا الحقل مطلوب"),
    place: yup.boolean(),
    security: yup.boolean(),
  });
  const _label = "اكتب هنا..";
  const initialValues = useMemo(() => {
    return {
      subject: "",
      date: "",
      priority: "",
      type: "",
      time: "",
      brief: "",
      place: false,
      security: false,
    };
  }, [meeting]);
  const priorities = ["قصوى", "متوسطة", "ضعيفة"];
  const types = ["داخلي", "خارجي"];
  const times = ["12:00 AM", "01:00 AM"];
  return (
    <Card style={{ padding: "1em 0" }}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) =>
          submitCreate(values, setSubmitting)
        }
        validationSchema={validationSchema}
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
            setFieldValue,
          } = props;
          console.clear();
          console.log("values", values);
          return (
            <Form
              style={{
                width: "95%",
                padding: "inherit",
                display: "flex",
                margin: "auto",
              }}
            >
              <Grid container md={12}>
                <Grid item xs={12} md={6}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    عنوان الاجتماع <span style={{ color: "red" }}>*</span>
                  </MDTypography>
                  <MDInput
                    label={_label}
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.subject || touched.subject}
                    sx={{
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
                </Grid>
                <Grid item xs={12} md={6}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    أولوية الاجتماع <span style={{ color: "red" }}>*</span>
                  </MDTypography>
                  <FormControl
                    sx={({ breakpoints }) => ({
                      [breakpoints.down("md")]: { width: 215 },
                      [breakpoints.up("md")]: { width: 295 },
                    })}
                    style={{ fontSize: "15px" }}
                  >
                    <Select
                      labelId="priority"
                      id="priority"
                      value={values.priority}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.priority || touched.priority}
                      style={{
                        backgroundColor: "white",
                        height: 45,
                      }}
                    >
                      {priorities.map((p) => (
                        <MenuItem key={p} value={p}>
                          {p}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6} mt={2}>
                  <MDTypography style={{ fontSize: "15px" }}>
                    تاريخ الاجتماع <span style={{ color: "red" }}>*</span>
                  </MDTypography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        onChange={(value) => setFieldValue("date", value, true)}
                        value={values.date}
                        sx={{
                          backgroundColor: "white",
                          width: "75%",
                          "& .MuiFormHelperText-root": {
                            color: "red",
                          },
                        }}
                        renderInput={(params) => (
                          <MDInput
                            error={Boolean(touched.date && errors.date)}
                            helperText={touched.date && errors.date}
                            margin="normal"
                            name="date"
                            variant="standard"
                            fullWidth
                            InputProps={{
                              style: {
                                backgroundColor: "white",
                              },
                            }}
                            {...params}
                          />
                        )}
                        label="تاريخ الاجتماع"
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} md={6} mt={2}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    نوع الاجتماع <span style={{ color: "red" }}>*</span>
                  </MDTypography>
                  <FormControl
                    sx={({ breakpoints }) => ({
                      [breakpoints.down("md")]: { width: 215 },
                      [breakpoints.up("md")]: { width: 295 },
                    })}
                    style={{ fontSize: "15px" }}
                  >
                    <Select
                      labelId="type"
                      id="type"
                      value={values.type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.type || touched.type}
                      style={{
                        backgroundColor: "white",
                        height: 45,
                      }}
                    >
                      {types.map((p) => (
                        <MenuItem key={p} value={p}>
                          {p}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6} mt={2}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    وقت الاجتماع <span style={{ color: "red" }}>*</span>
                  </MDTypography>
                  <FormControl
                    sx={({ breakpoints }) => ({
                      [breakpoints.down("md")]: { width: 215 },
                      [breakpoints.up("md")]: { width: 295 },
                    })}
                    style={{ fontSize: "15px" }}
                  >
                    <Select
                      labelId="time"
                      id="time"
                      value={values.time}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.time || touched.time}
                      style={{
                        backgroundColor: "white",
                        height: 45,
                      }}
                    >
                      {times.map((p) => (
                        <MenuItem key={p} value={p}>
                          {p}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6} mt={2}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    نبذة عن الاجتماع <span style={{ color: "red" }}>*</span>
                  </MDTypography>
                  <MDInput
                    label={_label}
                    name="brief"
                    value={values.brief}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.brief || touched.brief}
                    sx={{
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
                </Grid>
                <Grid item xs={12} md={5} mt={2}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    مكان الاجتماع <span style={{ color: "red" }}>*</span>
                  </MDTypography>
                  <Grid item style={{ display: "flex" }}>
                    <FormControlLabel
                      control={<Checkbox checked={values.place} />}
                      name="place"
                      label="حضوري"
                      onChange={handleChange}
                    />
                    <FormControlLabel
                      control={<Checkbox checked={values.security} />}
                      name="security"
                      label="أمن"
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6} mt={2}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    مكان الاجتماع الحضوري{" "}
                    <span style={{ color: "red" }}>*</span>
                  </MDTypography>
                  <Grid item display="flex" justifyContent="space-around">
                    <MDButton
                      style={{
                        backgroundColor: "rgb(19, 113, 77)",
                        color: "white",
                      }}
                    >
                      ادخل اسم المكان
                    </MDButton>
                    <MDButton color="primary">ادخل من الخريطة</MDButton>
                  </Grid>
                </Grid>
                <Grid item md={12} display="flex" justifyContent="start" mt={6}>
                  <MDButton
                    style={{
                      backgroundColor: "rgb(19, 113, 77)",
                      color: "white",
                    }}
                  >
                    إرسال الاجتماع
                  </MDButton>
                  <MDButton color="primary" style={{ marginRight: "1em" }}>
                    موافقة مسبقاً
                  </MDButton>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Card>
  );
};

export default CreateMeeting;
