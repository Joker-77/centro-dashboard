// @ts-nocheck
import React, { useState, useMemo, useRef } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MDBox from "./../../components/MDBox/index";
import MDTypography from "./../../components/MDTypography/index";
import MDInput from "./../../components/MDInput/index";
import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { MuiPhone } from "./muiPhone";
import Avatar from "@mui/material/Avatar";
import user1 from "./../../assets/images/user1.jpg";
import Badge from "@mui/material/Badge";
import EditIcon from "@mui/icons-material/Edit";
import Permissions from "./permissions";
import MDButton from "./../../components/MDButton/index";
interface IProps {
  user: any;
}

const CreateUser: React.FC<IProps> = ({ user }) => {
  const [file, setFile] = useState<any>();
  const [selectedFile, setSelectedFile] = useState(null);
  const uploadInputRef = useRef(null);
  const _label = "اكتب هنا..";
  const validationSchema = yup.object({
    name: yup.string("اكتب هنا...").required("حقل الاسم مطلوب"),
    phone: yup.string("اكتب هنا...").required("حقل رقم الهاتف مطلوب"),
    email: yup
      .string("اكتب هنا..")
      .email("ادخل ايميل صالح")
      .required("حقل الايميل مطلوب"),
    role: yup.string(),
    country: yup.string("اكتب هنا..."),
    memberSide: yup.string("اكتب هنا..."),
    number: yup.number(),
    brief: yup.string("اكتب هنا..."),
  });
  const initialValues = useMemo(() => {
    return {};
  }, [user]);
  const handleCapture = (e) => {
    setSelectedFile(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  const submitCreate = (values, setSubmitting) => {
    console.log(values);
  };
  return (
    <Grid container spacing={2} my={{ sx: 1, md: 2 }}>
      <Grid item xs={8}>
        <MDBox
          color="inherit"
          mb={{ xs: 1, md: 0 }}
          sx={{ height: "25%" }}
          //sx={(theme) => navbarRow(theme, { isMini })}
        >
          <MDTypography>إضافة عضو جديد</MDTypography>
        </MDBox>
      </Grid>
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
                <Grid item xs={12} md={4}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    اسم العضو <span style={{ color: "red" }}>*</span>
                  </MDTypography>
                  <MDInput
                    label={_label}
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.name || touched.name}
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
                <Grid item xs={12} md={4}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    رقم الهاتف <span style={{ color: "red" }}>*</span>
                  </MDTypography>
                  <MuiPhone
                    style={{
                      direction: "ltr",
                      justifyContent: "end",
                    }}
                    name="phone"
                    value={values.phone}
                    onChange={(val) => {
                      handleChange(val);
                    }}
                    onBlur={handleBlur}
                    helperText={errors.phone || touched.phone}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    البريد الالكتروني <span style={{ color: "red" }}>*</span>
                  </MDTypography>
                  <MDInput
                    label={_label}
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.email || touched.email}
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
                <Grid item xs={12} md={4}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    منصب العضو
                  </MDTypography>
                  <MDInput
                    label={_label}
                    name="role"
                    value={values.role}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.role || touched.role}
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
                <Grid item xs={12} md={4}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    دولة العضو
                  </MDTypography>
                  <MDInput
                    label={_label}
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.country || touched.country}
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
                <Grid item xs={12} md={4}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    جهة العضو
                  </MDTypography>
                  <MDInput
                    label={_label}
                    name="memberSide"
                    value={values.memberSide}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.memberSide || touched.memberSide}
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
                <Grid item xs={12} md={4}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    رقم العضو
                  </MDTypography>
                  <MDInput
                    label={_label}
                    name="number"
                    value={values.number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.number || touched.number}
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
                <Grid item xs={12} md={4}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    نبذة عن العضو
                  </MDTypography>
                  <MDInput
                    label={_label}
                    name="brief"
                    value={values.brief}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.brief && touched.brief && errors.brief}
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
                <Grid
                  item
                  xs={12}
                  md={4}
                  style={{
                    display: "flex",
                    alignItems: "end",
                  }}
                >
                  <Badge
                    style={{
                      cursor: "pointer",
                      margin: "0 1em",
                    }}
                    badgeContent={<EditIcon />}
                    color="primary"
                    onClick={() =>
                      uploadInputRef.current && uploadInputRef.current.click()
                    }
                  >
                    <Avatar alt="العضو" src={!!file ? file : user1} />
                  </Badge>
                  <MDTypography
                    style={{
                      alignSelf: "center",
                    }}
                    sx={{
                      mt: 5,
                    }}
                    variant="caption"
                  >
                    صورة العضو الشخصية
                  </MDTypography>
                  <input
                    ref={uploadInputRef}
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleCapture}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <MDTypography id="perm" style={{ fontSize: "15px" }}>
                    صلاحيات العضو
                  </MDTypography>
                  <Permissions />
                </Grid>
                <Grid item xs={12} md={12} style={{ display: "flex" }}>
                  <MDButton type="submit" color="primary">
                    أضف العضو الآن
                  </MDButton>
                  <MDButton color="error" variant="outlined" sx={{ mx: 1 }}>
                    إيقاف الصلاحيات
                  </MDButton>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Grid>
  );
};

export default CreateUser;
