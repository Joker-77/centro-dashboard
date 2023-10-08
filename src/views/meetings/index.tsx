// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import DashboardLayout from "./../layouts/index";
import DailyCalender from "../shared/dailyCalendar";
import MDTypography from "./../../components/MDTypography/index";
import { DateHelper } from "./../../Helpers/DateHelper";
import Meetings from "../shared/meetings";
import { RequestCard } from "./requestCard";

interface IProps { }

export const MeetingsRequests: React.FC<IProps> = () => {
	const [date, setDate] = useState("");
	const [clicked, setClicked] = useState(false)
	useEffect(() => {
		let day = DateHelper.getDay(new Date().getDay());
		let date = new Date().toLocaleDateString();
		setDate(`${day}، ${date}`);
	}, []);
	const handleClick = () => {
		setClicked(true)
	}
	return (
		<DashboardLayout>
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
				<Grid container md={8} spacing={2}>
					<Grid item md={12} height={".1em"} mb={5}>
						<MDTypography fontSize="14px">الطلبات المعلقة</MDTypography>
					</Grid>
					<Grid container spacing={2}>
						{!clicked ? (
							<>
								<RequestCard
									num={0}
									type="غير محدد"
									title="اجتماع"
									dateRange={"2/12-10/12"}
									subTitle="اجتماع لجنة الطاقة"
									subject="اسم الموضوع أو نوع الموضوع الخاص بالحدث"
									color="#0095FF"
									onclick={handleClick}
								/>
								<RequestCard
									num={1}
									type="غير محدد"
									title="اجتماع"
									dateRange={"2/12-10/12"}
									subTitle="اجتماع لجنة الطاقة"
									subject="اسم الموضوع أو نوع الموضوع الخاص بالحدث"
									color="#0095FF"
									onclick={handleClick}
								/>
								<RequestCard
									num={2}
									type="غير محدد"
									title="اجتماع"
									dateRange={"2/12-10/12"}
									subTitle="اجتماع لجنة الطاقة"
									subject="اسم الموضوع أو نوع الموضوع الخاص بالحدث"
									color="#0095FF"
									onclick={handleClick}
								/>
								<RequestCard
									num={2}
									type="غير محدد"
									title="اجتماع"
									dateRange={"2/12-10/12"}
									subTitle="اجتماع لجنة الطاقة"
									subject="اسم الموضوع أو نوع الموضوع الخاص بالحدث"
									color="#0095FF"
									onclick={handleClick}
								/>
								<RequestCard
									num={2}
									type="غير محدد"
									title="اجتماع"
									dateRange={"2/12-10/12"}
									subTitle="اجتماع لجنة الطاقة"
									subject="اسم الموضوع أو نوع الموضوع الخاص بالحدث"
									color="#0095FF"
									onclick={handleClick}
								/>
								<RequestCard
									num={2}
									type="غير محدد"
									title="اجتماع"
									dateRange={"2/12-10/12"}
									subTitle="اجتماع لجنة الطاقة"
									subject="اسم الموضوع أو نوع الموضوع الخاص بالحدث"
									color="#0095FF"
									onclick={handleClick}
								/>
							</>
						) : (
							<>

							</>
						)}

					</Grid>
				</Grid>
				<Grid container md={3} mr={8}>
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
					<Grid container md={3} mr={8}>
						<Meetings />
					</Grid>
				</Grid>
			</Grid>
		</DashboardLayout>
	);
};
