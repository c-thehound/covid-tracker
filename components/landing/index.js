import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Vis from "../vis";
import { getDays } from "../../utils/stats";
import moment from "moment";
import { LINE_GRAPH, PATIENT_ZERO_DATE } from "../../utils/vis/constants";
import Kenya from "./kenya";
import WorldStatLoader from "../loaders/worldstat";

const DateWrapper = styled.div`
	height: auto;
	border-radius: 3px;
	background-color: #fff;
	text-align: center;
	padding: 25px;
	margin-bottom: 20px;
	margin-top: 10px;
	min-height: 165px;
	box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
		0 10px 10px -5px rgba(0, 0, 0, 0.04);
	& p {
		text-transform: uppercase;
		font-weight: bold;
		font-family: "Raleway";
		font-size: 14px;
		color: rgb(40, 44, 52);
		margin-bottom: 10px;
		& span {
			color: rgb(40, 44, 52);
			margin-left: 10px;
			font-size: 32px;
		}
	}
	& h2,
	h1 {
		font-family: "Raleway";
		color: rgb(40, 44, 52);
	}
	& h1 {
		@media (max-width: 768px) {
			font-size: 20px !important;
		}
	}
	& h2 {
		@media (max-width: 768px) {
			font-size: 16px !important;
		}
	}
`;

const WorldStatsWrapper = styled.ul`
	display: flex;
	margin: -10px;
	padding-bottom: 10px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
	& li {
		flex: 1;
		list-style: none;
		display: inline-block;
		padding: 20px;
		border-radius: 3px;
		color: rgb(40, 44, 52);
		min-height: 130px;
		max-height: 130px;
		@media (max-width: 768px) {
			padding: 10px;
			margin: 0px 10px 10px 10px !important;
		}
		& h6 {
			text-transform: uppercase;
			font-family: "Raleway";
			padding: 5px;
			margin-bottom: 5px;
			@media (max-width: 768px) {
				font-size: 12px !important;
			}
		}
		& h1 {
			font-size: 54px;
			font-family: "Raleway";
		}
	}
`;

const Stat = ({ title, value, color }) => (
	<li
		style={{
			backgroundColor: color,
			margin: 10,
			boxShadow:
				"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
		}}
		className="wow fadeIn"
	>
		<h6 style={{ borderBottom: `1px solid ${color}` }}>{title}</h6>
		{value ? <h1>{value}</h1> : <WorldStatLoader bgColor={color} />}
	</li>
);

function WorldStats({ deaths, confirmed, recovered }) {
	const [data, setData] = useState(null);
	useEffect(() => {
		(async function fetchData() {
			const res = await fetch(
				"https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
				{
					method: "GET",
					headers: {
						"x-rapidapi-host":
							"coronavirus-monitor.p.rapidapi.com",
						"x-rapidapi-key":
							"dd5ef1c520msh7d1da965b4d4b62p11fb77jsn22359027c4fa"
					}
				}
			);
			const data = await res.json();
			setData(data);
		})();

		return () => {
			setData(null);
		};
	}, []);
	return (
		<WorldStatsWrapper>
			<Stat
				title="total confirmed cases"
				color={"#e19e0d33"}
				value={data && data["total_cases"]}
			/>
			<Stat
				title="total recoveries"
				color={"#28ad0333"}
				value={data && data["total_recovered"]}
			/>
			<Stat
				title="total deaths"
				color={"#9b260433"}
				value={data && data["total_deaths"]}
			/>
		</WorldStatsWrapper>
	);
}

function Landing() {
	return (
		<React.Fragment>
			<div className="content">
				<WorldStats />
				<DateWrapper>
					<h1>Coronavirus disease (COVID-19)</h1>
					<p>
						day
						<span>{`${moment().diff(
							PATIENT_ZERO_DATE,
							"days"
						)}`}</span>
					</p>
					<h2>
						{moment().format(
							"dddd, MMMM Do YYYY"
						)}
					</h2>
				</DateWrapper>
				<Kenya />
			</div>
		</React.Fragment>
	);
}

export default Landing;
