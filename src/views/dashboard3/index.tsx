// @ts-nocheck
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import DashboardLayout from "./../layouts/index";
import StatisticCard from "../shared/statisticsCard";
import DailyCalender from "../shared/dailyCalendar";
import MDTypography from "./../../components/MDTypography/index";
import { DateHelper } from "./../../Helpers/DateHelper";
import { Link } from "react-router-dom";
import Meetings from "../shared/meetings";

interface IProps { }
export const Dashboard3: React.FC<IProps> = () => {
	const [date, setDate] = useState("");
	useEffect(() => {
		let day = DateHelper.getDay(new Date().getDay());
		let date = new Date().toLocaleDateString();
		setDate(`${day}، ${date}`);
	}, []);
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
				<Grid container md={8}>
					<Grid item md={12} height={".1em"}>
						<MDTypography fontSize="14px">مرحباً بك مرة أخرى...</MDTypography>
					</Grid>
					<StatisticCard
						num={0}
						bgLeftColor={"#FF8900"}
						svg={
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="29.5"
								height="32"
								viewBox="0 0 29.5 32"
							>
								<path
									id="order"
									d="M17.63,2.575V13.418h5.437V2.575a2.719,2.719,0,0,0-5.437,0ZM4.258,7.308A.937.937,0,0,1,5.584,5.982L6.1,6.5l1.66-1.66A2.9,2.9,0,1,0,8.8,6.442L6.761,8.485a.938.938,0,0,1-1.326,0ZM9.09,3.5l1.177-1.177a.937.937,0,1,1,1.326,1.326L10.254,4.991A4.779,4.779,0,1,1,9.09,3.5ZM.13,23.106a.938.938,0,1,0,.938.938A.938.938,0,0,0,.13,23.106Zm3.75,1.875a.938.938,0,0,1,0-1.875h9.063a.938.938,0,0,1,0,1.875ZM.13,19.356a.937.937,0,1,0,.938.937A.937.937,0,0,0,.13,19.356Zm3.75,1.875a.937.937,0,1,1,0-1.875h9.063a.937.937,0,1,1,0,1.875Zm13.75-5.938v13.75a.937.937,0,0,1-.937.937H-3.62a.937.937,0,0,1-.937-.937V2.481a4.507,4.507,0,0,1,4.5-4.5H20.349a4.6,4.6,0,0,1,4.594,4.594V14.356a.938.938,0,0,1-.938.938ZM16.651-.144a4.567,4.567,0,0,0-.9,2.719V28.106H-2.682V2.481A2.632,2.632,0,0,1-.057-.144ZM.13,15.606a.938.938,0,1,0,.938.937A.937.937,0,0,0,.13,15.606Zm3.75,1.875h9.063a.938.938,0,0,0,0-1.875H3.88a.938.938,0,0,0,0,1.875Zm0,0"
									transform="translate(4.557 2.019)"
									fill="#ff8900"
									fill-rule="evenodd"
								/>
							</svg>
						}
						name="طلبات البروتوكول"
						value={32}
						style={{ border: "1px solid #FF8900", borderRadius: "10px" }}
					/>
					<StatisticCard
						num={2}
						name="طلبات الاجتماعات"
						value={32}
						svg={
							<svg
								id="Group_26660"
								data-name="Group 26660"
								xmlns="http://www.w3.org/2000/svg"
								width="31.998"
								height="32"
								viewBox="0 0 31.998 32"
							>
								<path
									id="Path_142505"
									data-name="Path 142505"
									d="M31.975,23.038l0-.014L30.6,15.53a2.8,2.8,0,0,0-2.773-2.343H22.57v-1A6.565,6.565,0,0,0,18.806,6.25a3.75,3.75,0,1,0-5.585,0,6.571,6.571,0,0,0-3.77,5.938v1H4.2A2.8,2.8,0,0,0,1.423,15.53L.054,23.023l0,.014A2.851,2.851,0,0,0,2.609,26.3a6.637,6.637,0,0,0-.658,2.889v1.875A.938.938,0,0,0,2.888,32h11.25a.932.932,0,0,0,.931-.937V29.188a6.66,6.66,0,0,0-.644-2.881H17.6a6.665,6.665,0,0,0-.651,2.881v1.875a.938.938,0,0,0,.938.937h11.25a.932.932,0,0,0,.931-.937V29.188a6.632,6.632,0,0,0-.652-2.889A2.851,2.851,0,0,0,31.975,23.038ZM16.013,1.875A1.875,1.875,0,1,1,14.138,3.75,1.877,1.877,0,0,1,16.013,1.875ZM11.32,12.188a4.691,4.691,0,0,1,9.381,0v1H11.32v-1ZM13.2,30.125H3.82v-.938a4.691,4.691,0,1,1,9.381,0ZM6.638,20.688a1.875,1.875,0,1,1,1.875,1.875A1.877,1.877,0,0,1,6.638,20.688ZM28.2,30.125H18.82v-.938a4.691,4.691,0,1,1,9.381,0Zm-6.563-9.438a1.875,1.875,0,1,1,1.875,1.875A1.877,1.877,0,0,1,21.638,20.688Zm7.5,3.75H28.083A6.589,6.589,0,0,0,26.3,23.191a3.75,3.75,0,1,0-5.578,0,6.589,6.589,0,0,0-1.781,1.246H13.083A6.589,6.589,0,0,0,11.3,23.191a3.75,3.75,0,1,0-5.577,0,6.591,6.591,0,0,0-1.781,1.246H2.888A.983.983,0,0,1,1.9,23.352L3.268,15.86l0-.014a.935.935,0,0,1,.925-.783H27.831a.935.935,0,0,1,.925.783l0,.014,1.368,7.491A.983.983,0,0,1,29.138,24.438Z"
									transform="translate(-0.014 0)"
									fill="#73c3d5"
								/>
							</svg>
						}
						bgLeftColor={"#73C3D5"}
						style={{ border: "1px solid #0095FF", borderRadius: "10px" }}
					/>
					<Grid item md={12} />
					<Grid item md={12} />
				</Grid>
				<Grid container md={3} mr={8}>
					<DailyCalender date={date} />
				</Grid>
			</Grid>
			<Grid
				container
				spacing={2}
				style={{
					position: "relative",
					top: "4em",
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
		</DashboardLayout>
	);
};
