// @ts-nocheck
import * as React from "react";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import MDButton from "./../../components/MDButton/index";
import MDInput from "./../../components/MDInput/index";
import MDTypography from "./../../components/MDTypography/index";
import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import UserService from "./../../services/UserService";
import { toast } from "react-toastify";
interface Props {}
const SignUpForm: React.FC<Props> = () => {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    username: yup.string("اكتب هنا..").required("حقل المستخدم مطلوب"),
    name: yup.string("اكتب هنا..").required("حقل الاسم مطلوب"),
    phone: yup.string("اكتب هنا..").required("حقل رقم الهاتف مطلوب"),
    email: yup
      .string("اكتب هنا..")
      .email("ادخل ايميل صالح")
      .required("حقل الايميل مطلوب"),
    password: yup.string("اكتب هنا..").required("حقل رمز المرور مطلوب"),
    passwordConfirmation: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "رمز المرور وتأكيد رمز المرور لايتطابقان"
      ),
  });
  const initialValues = React.useMemo(() => {
    return {};
  }, []);
  const submitRegister = (values, setSubmitting) => {
    const formData = new FormData();
    formData.append("Username", values.username);
    formData.append("Email", values.email);
    formData.append("Password", values.password);
    formData.append("PhoneNumber", values.phone);
    formData.append("FullName", values.name);
    formData.append("Roles", "Administrator");
    console.log(values);
    UserService.createUser(formData)
      .then((resp) => {
        toast.success(resp);
        setSubmitting(false);
      })
      .catch((e) => {
        console.error(e);
        setSubmitting(false);
      });
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) =>
          submitRegister(values, setSubmitting)
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
          } = props;
          return (
            <Form
              onSubmit={handleSubmit}
              style={{
                width: "95%",
                padding: "inherit",
                display: "flex",
                margin: "auto",
              }}
            >
              <Grid container spacing={2} my={{ sx: 1, md: 2 }}>
                <Grid item xs={12} md={12}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    الاسم بالكامل <span style={{ color: "red" }}>*</span>
                  </MDTypography>
                  <MDInput
                    size="small"
                    label={"الاسم..."}
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.name && touched.name && errors.name}
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
                <Grid item xs={12} md={12}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    اسم المستخدم <span style={{ color: "red" }}>*</span>
                  </MDTypography>
                  <MDInput
                    size="small"
                    label={"اسم المستخدم..."}
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.username && touched.username && errors.username
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
                <Grid item xs={12} md={12}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    البريد الالكتروني <span style={{ color: "red" }}>*</span>
                  </MDTypography>
                  <MDInput
                    size="small"
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
                <Grid item xs={12} md={12}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    رقم الهاتف <span style={{ color: "red" }}>*</span>
                  </MDTypography>
                  <MDInput
                    size="small"
                    label={"رقم الهاتف..."}
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.phone && touched.phone && errors.phone}
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
                <Grid item xs={12} md={12}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    رمز المرور <span style={{ color: "red" }}>*</span>
                  </MDTypography>
                  <MDInput
                    size="small"
                    label={"رمز المرور..."}
                    name="password"
                    type="password"
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
                <Grid item xs={12} md={12}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    تأكيد رمز المرور <span style={{ color: "red" }}>*</span>
                  </MDTypography>
                  <MDInput
                    size="small"
                    label={"رمز المرور..."}
                    name="passwordConfirmation"
                    type="password"
                    value={values.passwordConfirmation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.passwordConfirmation &&
                      touched.passwordConfirmation &&
                      errors.passwordConfirmation
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
                <Grid item md={12}>
                  <MDButton
                    type="submit"
                    sx={{ width: "100%" }}
                    color="primary"
                    disabled={isSubmitting}
                  >
                    إنشاء حساب الآن
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

export default SignUpForm;
