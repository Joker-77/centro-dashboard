// @ts-nocheck
import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import MDButton from "../../components/MDButton/index";
import MDTypography from "../../components/MDTypography/index";

interface IProps {}

const steps = ["إدخال المعلومات الأساسية", "", ""];

const CreateUserStepper: React.FC<IProps> = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  return;
};

export default createUserStepper;
