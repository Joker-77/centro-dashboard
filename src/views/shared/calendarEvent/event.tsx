// @ts-nocheck
import React from "react";
import Grid from "@mui/material/Grid";
import MDTypography from "../../../components/MDTypography/index";
import logo from "../../../assets/images/user1.jpg";
import Avatar from "@mui/material/Avatar";
const EventComponent: React.FC<any> = ({ event, ...props }) => {
	return (
		<Grid
			container
			md={12}
			style={{
				borderRight: `5px solid ${event.color}`,
				padding: ".5em",
				backgroundColor: event.bgColor,
			}}
		>
			<Grid md={12}>
				<Avatar alt="logo" src={logo} sx={{ width: 24, height: 24 }} />
			</Grid>
			<Grid md={12}>
				<MDTypography variant={'body2'} style={{ textAlign: "start", color: event.color }} fontSize="9px">
					{event.title}
				</MDTypography>
			</Grid>
			<Grid md={12}>
				<MDTypography variant={'body2'} style={{
					textAlign: "start",
					color: event.color,
					whiteSpace: 'normal',
					overflowWrap: 'break-word'
				}} fontSize="9px">
					{event.desc}
				</MDTypography>
			</Grid>
		</Grid>
	);
};
export default EventComponent;
