// @ts-nocheck
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import DashboardLayouts from "../layouts/index";
import Grid from "@mui/material/Grid";
import "moment/locale/ar-sa";
import "moment/locale/ar";
import EventComponent from "./calendarEvent/event";
import "../../assets/calendar.css";
require("react-big-calendar/lib/css/react-big-calendar.css");

interface IProps {
  events: [];
}
const BgCalendar: React.FC<IProps> = ({ events, ...props }) => {
  const localizer = momentLocalizer(moment);
  const messages = {
    week: "أسبوع",
    work_week: "أسبوع العمل",
    day: "يوم",
    month: "شهر",
    previous: "سابق",
    next: "التالي",
    today: "اليوم",
    agenda: "جدول أعمال",
    showMore: (total) => `+${total} إضافي`,
  };
  return (
    <DashboardLayouts height={"600%"}>
      <Calendar
        culture={"ar-sa"}
        style={{ width: "200%" }}
        localizer={localizer}
        events={events}
        timeslots={2}
        defaultDate={new Date()}
        messages={messages}
        components={{
          event: EventComponent,
        }}
        // selectable={true}
        // onSelectEvent={(event) => this.handleEventSelected(event)}
        // onSelectSlot={(slotInfo) => this.handleSlotSelected(slotInfo)}
      />
    </DashboardLayouts>
  );
};

export default BgCalendar;
