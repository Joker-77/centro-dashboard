// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import DashboardLayout from "../../layouts";
import DailyCalender from '../dailyCalendar'
import MDTypography from "../../../components/MDTypography";
import Meetings from "../meetings";
import { DateHelper } from "../../../Helpers/DateHelper";
import { ConferenceCard } from "./ConferenceCard";
import user3 from '../../../assets/images/user3.jpg'
import { Conference } from "./Conference";


interface IProps { }

export const ConferencesPage: React.FC<IProps> = () => {
	const [date, setDate] = useState("");
	const [clicked, setClicked] = useState(false)
	useEffect(() => {
		let day = DateHelper.getDay(new Date().getDay());
		let date = new Date().toLocaleDateString();
		setDate(`${day}، ${date}`);
	}, []);
	const handleClick = () => {
		setClicked(!clicked)
	}
	return (
		<DashboardLayout>
			{!clicked ? (
				<>
					<Grid
						container
						spacing={2}
						style={{
							position: "relative",
							top: "2em",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Grid container md={9} spacing={2} >
							<Grid item md={12} height={".1em"}>
								<MDTypography fontSize="14px">مرحباً بك مره أخرى...</MDTypography>
							</Grid>
							<Grid
								item
								md={6}
							>
								<ConferenceCard
									imageUrl={user3}
									title={'مؤتمر المناخ 2022'}
									text={'مصر'}
									goDate={'نوفمبر 14, 2021'}
									returnDate={"نوفمبر 17, 2021"}
									tripOfficial={"عبدالله الاحمدي"}
									onClick={handleClick}
								/>
							</Grid>
							<Grid
								item
								md={6}
							>
								<ConferenceCard
									imageUrl={user3}
									title={'مؤتمر المناخ 2022'}
									text={'مصر'}
									goDate={'نوفمبر 14, 2021'}
									returnDate={"نوفمبر 17, 2021"}
									tripOfficial={"عبدالله الاحمدي"}
									onClick={handleClick}
								/>
							</Grid>
						</Grid>
						<Grid container md={3}>
							<DailyCalender date={date} />
						</Grid>
					</Grid>
					<Grid
						container
						style={{
							position: "relative",
							top: "4em",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Grid
							container
							style={{
								display: "flex",
								justifyContent: "space-between",
								height: "250px",
							}}
						>
							<Grid container md={8} />
							<Grid container md={3}>
								<Meetings />
							</Grid>
						</Grid>
					</Grid>
				</>
			) : (
				<>
					<Conference onClick={handleClick} />
				</>
			)}
		</DashboardLayout>
	);
};
