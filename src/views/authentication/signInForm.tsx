// @ts-nocheck
import * as React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import MDButton from "./../../components/MDButton/index";
import MDInput from "./../../components/MDInput/index";
import MDTypography from "./../../components/MDTypography/index";
import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface Props {}
const SignInForm: React.FC<Props> = () => {
  const validationSchema = yup.object({
    email: yup
      .string("اكتب هنا..")
      .email("ادخل ايميل صالح")
      .required("حقل الايميل مطلوب"),
    password: yup.string("اكتب هنا..").required("حقل رمز المرور مطلوب"),
  });
  const initialValues = React.useMemo(() => {
    return {};
  }, []);
  const submitLogin = () => {};
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={submitLogin}
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
          } = props;
          return (
            <Form
              style={{
                width: "95%",
                padding: "inherit",
                display: "flex",
                margin: "auto",
              }}
            >
              <Grid container spacing={2} my={{ sx: 1, md: 2 }}>
                <Grid item xs={4} md={12}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    البريد الالكتروني <span style={{ color: "red" }}>*</span>
                  </MDTypography>
                  <MDInput
                    label={"البريد..."}
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.email && touched.email && errors.email}
                    sx={{
                      width: "100%",
                      "& .MuiFormHelperText-root": {
                        color: "red",
                      },
                      "& .MuiOutlinedInput-input": {
                        backgroundColor: "#E5E5E5",
                      },
                    }}
                    InputProps={{
                      style: {
                        backgroundColor: "white",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={4} md={12}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    رمز المرور <span style={{ color: "red" }}>*</span>
                  </MDTypography>
                  <MDInput
                    label={"رمز المرور..."}
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.password && touched.password && errors.password
                    }
                    sx={{
                      width: "100%",
                      "& .MuiFormHelperText-root": {
                        color: "red",
                      },
                      "& .MuiOutlinedInput-input": {
                        backgroundColor: "#E5E5E5",
                      },
                    }}
                    InputProps={{
                      style: {
                        backgroundColor: "white",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={4} md={6} sx={{ pt: 0 }}>
                  <FormControlLabel
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "10px",
                      },
                    }}
                    control={
                      <Checkbox
                        style={{
                          transform: "scale(.9)",
                        }}
                        defaultChecked
                      />
                    }
                    label="تذكرني"
                  />
                </Grid>
                <Grid
                  style={{ display: "flex", alignItems: "center" }}
                  item
                  xs={4}
                  md={6}
                >
                  <Link>
                    <MDTypography
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      هل نسيت كلمة المرور؟
                    </MDTypography>
                  </Link>
                </Grid>
                <Grid item md={12}>
                  <MDButton sx={{ width: "100%" }} color="primary">
                    تسجيل الدخول
                  </MDButton>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SignInForm;
