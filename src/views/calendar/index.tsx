// @ts-nocheck
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import BigCalendar from "../shared/bgCalendar";
import DashboardLayouts from "../layouts/index";
import MDTypography from "../../components/MDTypography";
import moment from "moment";
interface IProps {}
const Calendar: React.FC<IProps> = ({}) => {
  const [events, setEvents] = useState([
    {
      bgColor: "#f5faf0",
      color: "#82c43c",
      title: "اسم الحدث هنا",
      desc: "تفاصيل صغيره عن الحدث هنا",
      start: moment().toDate(),
      end: moment().toDate(),
    },
    {
      bgColor: "#f5faf0",
      color: "#82c43c",
      title: "اسم الحدث هنا",
      desc: "تفاصيل صغيره عن الحدث هنا",
      start: moment().add(5, "days").toDate(),
      end: moment().add(5, "days").toDate(),
    },
    {
      bgColor: "#f5faf0",
      color: "#82c43c",
      title: "اسم الحدث هنا",
      desc: "تفاصيل صغيره عن الحدث هنا",
      start: moment().add(7, "days").toDate(),
      end: moment().add(7, "days").toDate(),
    },
  ]);
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [slot, setSlot] = useState();
  const [clicked, setClicked] = useState();
  const [openSlot, setOpenSlot] = useState();
  const [open, setOpen] = useState();
  const handleSlotSelected = (slotInfo) => {
    setSlot(slotInfo);
  };

  const handleClose = () => {
    setOpenSlot(false);
    setOpen(false);
  };

  const handleEventSelected = (event) => {
    setClicked(event);
    setOpen(true);
  };
  const setNewAppointment = () => {
    let start = slot.start;
    let end = slot.end;
    let event = { title, start, end, desc };
    let events = this.state.events.slice();
    events.push(event);
    setEvents(events);
  };
  const deleteEvent = () => {
    let updatedEvents = events.filter(
      (event) => event["start"] !== this.state.start
    );
    setEvents(updatedEvents);
  };
  const updateEvent = () => {
    const index = events.findIndex((event) => event === clicked);
    const updatedEvent = events.slice();
    updatedEvent[index].title = title;
    updatedEvent[index].desc = desc;
    updatedEvent[index].start = slot.start;
    updatedEvent[index].end = slot.end;
    setEvents(updatedEvent);
  };
  return (
    <DashboardLayouts height={"1rem"}>
      <Grid
        container
        md={12}
        xs={12}
        mt={2}
        sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
          [breakpoints.down("md")]: {},
          [breakpoints.up("md")]: {
            display: "flex",
            p: 3,
          },
        })}
      >
        <Grid item md={12} height={".1em"}>
          <MDTypography fontSize="14px">مرحباً بك مرة أخرى...</MDTypography>
        </Grid>
        <Grid item md={12} xs={12} mt={5}>
          <BigCalendar
            events={events}
            selectable={true}
            onSelectEvent={(event) => this.handleEventSelected(event)}
            onSelectSlot={(slotInfo) => this.handleSlotSelected(slotInfo)}
          />
        </Grid>
      </Grid>
    </DashboardLayouts>
  );
};
export default Calendar;
