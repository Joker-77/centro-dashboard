// @ts-nocheck
import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDTypography from "../../components/MDTypography/index";

interface IProps {
	num: number;
	title: string;
	type: string;
	dateRange: string;
	subTitle: string;
	subject: string;
	onclick: () => void;
}

export const RequestCard: React.FC<IProps> = ({
	num,
	title,
	type,
	dateRange,
	subTitle,
	subject,
	color,
	onclick
}) => {
	return (
		<Grid
			item
			md={4}
			style={
				num === 2
					? { display: "flex", justifyContent: "end" }
					: num === 1
						? { display: "flex", justifyContent: "center" }
						: {}
			}
		>
			<Card
				sx={{ maxWidth: 240, height: "10em", cursor: 'pointer' }}
				style={{ padding: "1em", backgroundColor: "beige" }}
				onClick={onclick}
			>
				<Grid container md={12}>
					<Grid item mt={1} md={12}>
						<MDTypography style={{ color: "#4C677B" }} fontSize="14px">
							{type}
						</MDTypography>
					</Grid>
					<Grid item mt={1} md={8}>
						<MDTypography style={{ color: color }} fontSize="13px">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="10"
								height="10"
								viewBox="0 0 10 10"
								style={{ margin: "0 .3em" }}
							>
								<circle
									id="Oval_Copy"
									data-name="Oval Copy"
									cx="5"
									cy="5"
									r="5"
									fill={color}
								/>
							</svg>
							{title}
						</MDTypography>
					</Grid>
					<Grid item mt={1} md={4}>
						<MDTypography fontSize="12px" color="error">
							{dateRange}
						</MDTypography>
					</Grid>
					<Grid item mt={1} md={10}>
						<MDTypography fontSize="14px">{subTitle}</MDTypography>
					</Grid>
					<Grid item mt={1} md={12}>
						<MDTypography fontSize="10px">{subject}</MDTypography>
					</Grid>
				</Grid>
			</Card>
		</Grid>
	);
};

