// @ts-nocheck
import React, { useState, useMemo, useRef, createRef } from "react";
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
import "../../../assets/main.scss";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { DateHelper } from "../../../helpers/dateHelper";
interface IProps {
  meeting: any;
}
const CreateMeeting: React.FC<IProps> = ({ meeting }) => {
  // Places
  const [attendence, setAttendence] = useState<boolean>(true);
  // Secure Meeting
  const [value, setValue] = React.useState("webix");
  const handleChangePlace = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  // files
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  // files ==> refs
  const [files, setFiles] = useState<string[]>(["file1", "file2", "file3"]);
  const inputs = useRef<[]>(files.map(() => createRef()));
  const handleAddFile = (e, index) => {
    inputs?.current[index].click();
  };
  const handleDeleteFile = (e, index) => {
    let _files = selectedFiles.slice();
    let _names = fileNames.slice();
    _names.splice(index, 1);
    _files.splice(index, 1);
    setFileNames(_names);
    setSelectedFiles(_files);
  };
  const handleChangeFile = (e, index) => {
    let _files = selectedFiles.slice();
    let _names = fileNames.slice();
    if (selectedFiles == null || selectedFiles.length === 0) {
      _files = new Array(files.length);
    }
    if (fileNames == null || fileNames.length === 0) {
      _names = new Array(files.length);
    }
    _files.splice(index, 0, e.target.files[0]);
    _names.splice(index, 0, e.target.files[0].name);
    setFileNames(_names);
    setSelectedFiles(_files);
    console.log(_files);
  };
  // member groups
  const [membersGroups, setMembersGroup] = useState<string[]>([
    "group1",
    "group2",
    "group2",
  ]);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
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
  const createFileInput = () => {
    let _files = files.slice();
    _files.push(`file${_files.length}`);
    setFiles(_files);
  };
  const createGroup = () => {
    let _groups = membersGroups.slice();
    _groups.push(`file${_groups.length}`);
    setMembersGroup(_groups);
  };
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
                      name="priority"
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
                        name="date"
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
                      name="type"
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
                      name="time"
                      value={values.time}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.time || touched.time}
                      style={{
                        backgroundColor: "white",
                        height: 45,
                      }}
                    >
                      {DateHelper.getQuarterHourTimes().map((p) => (
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
                      control={<Checkbox checked={attendence} />}
                      name="place"
                      label="حضوري"
                      onChange={() => setAttendence(true)}
                    />
                    <FormControlLabel
                      control={<Checkbox checked={!attendence} />}
                      name="place"
                      label="أمن"
                      onChange={() => setAttendence(false)}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6} mt={2}>
                  {attendence ? (
                    <>
                      <MDTypography style={{ fontSize: "15px" }} mb={2}>
                        مكان الاجتماع الحضوري
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
                    </>
                  ) : (
                    <>
                      <MDTypography style={{ fontSize: "15px" }} mb={2}>
                        مكان الاجتماع
                        <span style={{ color: "red" }}>*</span>
                      </MDTypography>
                      <Grid item display="flex" justifyContent="space-around">
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          onChange={handleChangePlace}
                        >
                          <FormControlLabel
                            value="webix"
                            control={<Radio />}
                            label="ويبيكس"
                          />
                          <FormControlLabel
                            value="secure"
                            control={<Radio />}
                            label="اتصال آمن"
                          />
                          <FormControlLabel
                            value="other"
                            control={<Radio />}
                            label="آخر"
                          />
                        </RadioGroup>
                      </Grid>
                    </>
                  )}
                </Grid>
                <Grid item xs={12} md={10} mt={2}>
                  <MDTypography style={{ fontSize: "15px" }}>
                    ملفات الاجتماع <span style={{ color: "red" }}>*</span>
                  </MDTypography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={2}
                  mt={2}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <MDButton
                    color="primary"
                    size="small"
                    p={0}
                    onClick={createFileInput}
                    style={{
                      minWidth: "3em",
                      padding: "0",
                      marginRight: "1em",
                    }}
                  >
                    <AddIcon style={{ color: "white" }} size="large" />
                  </MDButton>
                </Grid>
                {files.map((file: string, index: number) => {
                  return (
                    <Grid item xs={12} md={4} key={index}>
                      <FormControl variant="standard">
                        <input
                          type="file"
                          onChange={(e) => handleChangeFile(e, index)}
                          ref={(input) => (inputs.current[index] = input)}
                          style={{ display: "none" }}
                        />
                        <TextField
                          placeholder="اسم الملف"
                          id={`file-${index}`}
                          sx={{ m: 1 }}
                          value={
                            fileNames.length > 0 &&
                            fileNames[index] !== undefined
                              ? fileNames[index]
                              : ""
                          }
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={(e) => handleAddFile(e, index)}
                                  edge="end"
                                >
                                  <EditIcon color="primary" />
                                </IconButton>
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={(e) => handleDeleteFile(e, index)}
                                  edge="end"
                                >
                                  <DeleteIcon sx={{ color: "red" }} />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </FormControl>
                    </Grid>
                  );
                })}
                <Grid item xs={12} md={10} mt={2}>
                  <MDTypography style={{ fontSize: "15px" }} mb={2}>
                    أعضاء الاجتماع <span style={{ color: "red" }}>*</span>
                  </MDTypography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={2}
                  mt={2}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <MDButton
                    color="primary"
                    size="small"
                    p={0}
                    onClick={createGroup}
                    style={{
                      minWidth: "3em",
                      padding: "0",
                      marginRight: "1em",
                    }}
                  >
                    <AddIcon style={{ color: "white" }} size="large" />
                  </MDButton>
                </Grid>
                {membersGroups.map((group: string, index: number) => {
                  return (
                    <Grid
                      item
                      key={index}
                      xs={12}
                      md={12}
                      mt={index > 0 ? 1 : 1}
                    >
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2a-content"
                          id="panel2a-header"
                        >
                          <MDTypography fontSize="12px">
                            مجموعة أعضاء الإدارة
                          </MDTypography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <MDTypography></MDTypography>
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                  );
                })}
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
