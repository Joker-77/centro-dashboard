// @ts-nocheck
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SignInForm from "./signInForm";
import SignUpForm from "./signUpForm";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 5 }}>
      <Box>
        <Tabs
          sx={{
            borderBottom: 1,
            borderRadius: 0,
            borderColor: "lightgrey",
            backgroundColor: "white",
            color: "#13714D",
            p: 0,
            "& .MuiTabs-flexContainer": {
              paddingBottom: "10px",
            },
            "& .MuiTabs-indicator": {
              display: "flex",
              justifyContent: "center",
              borderBottom: "2px solid #FF8900",
              transition: "all 500ms ease",
              "& > span": {
                maxWidth: 40,
                width: "100%",
              },
            },
          }}
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="grey"
          aria-label="darkgreen tabs example"
        >
          <Tab
            {...a11yProps(0)}
            sx={{ borderRight: "1px solid grey" }}
            label="تسجيل الدخول"
          />
          <Tab
            {...a11yProps(0)}
            sx={{ borderLeft: "1px solid grey" }}
            label="إنشاء حساب جديد"
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SignInForm dispatch={props.dispatch} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUpForm dispatch={props.dispatch} />
      </TabPanel>
    </Box>
  );
}
