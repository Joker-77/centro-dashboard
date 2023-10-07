import * as React from "react";
import Grid from "@mui/material/Grid";
import BigCalendar from "../shared/bgCalendar";
interface IProps {}
const calendar: React.FC<IProps> = ({}) => {
  return (
    <Grid container md={12}>
      <BigCalendar events={[]} />
    </Grid>
  );
};
export default calendar;
