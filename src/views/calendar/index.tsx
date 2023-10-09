// @ts-nocheck
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import BigCalendar from "../shared/bgCalendar";
import moment from "moment";
interface IProps { }
const Calendar: React.FC<IProps> = ({ }) => {
	const [events, setEvents] = useState([
		{
			bgColor: "#f5faf0",
			color: "#82c43c",
			title: "اسم الحدث هنا",
			desc: "تفاصيل صغيره عن الحدث هنا",
			start: "2023-10-01T00:00:00.000Z",
			end: "2023-10-01T00:00:00.000Z",
		},
		{
			bgColor: "#f1f9ff",
			color: "#1e75ff",
			title: "اسم الحدث هنا",
			desc: "تفاصيل صغيره عن الحدث هنا",
			start: "2023-10-05T00:00:00.000Z",
			end: "2023-10-05T00:00:00.000Z",
		},
		{
			bgColor: "#f5faf0",
			color: "#82c43c",
			title: "اسم الحدث هنا",
			desc: "تفاصيل صغيره عن الحدث هنا",
			start: "2023-10-15T00:00:00.000Z",
			end: "2023-10-15T00:00:00.000Z",
		},
		{
			bgColor: "#fdf0f3",
			color: "#e54360",
			title: "اسم الحدث هنا",
			desc: "تفاصيل صغيره عن الحدث هنا",
			start: "2023-10-27T00:00:00.000Z",
			end: "2023-10-27T00:00:00.000Z",
		},
		{
			bgColor: "#f1f9ff",
			color: "#50b5ff",
			title: "اسم الحدث هنا",
			desc: "تفاصيل صغيره عن الحدث هنا",
			start: "2023-10-22T00:00:00.000Z",
			end: "2023-10-22T00:00:00.000Z",
		},
		{
			bgColor: "#fff7f1",
			color: "#ff974a",
			title: "اسم الحدث هنا",
			desc: "تفاصيل صغيره عن الحدث هنا",
			start: new Date(),
			end: new Date(),
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
		<Grid container md={10}>
			<BigCalendar
				events={events}
				selectable={true}
				onSelectEvent={(event) => this.handleEventSelected(event)}
				onSelectSlot={(slotInfo) => this.handleSlotSelected(slotInfo)}
			/>
		</Grid>
	);
};
export default Calendar;
