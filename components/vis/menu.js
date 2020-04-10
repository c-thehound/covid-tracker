import React from "react";
import styled from "styled-components";

// Icons
import DownloadIcon from "../../assets/download-icon.png";
import PieChartIcon from "../../assets/pie-chart-icon.png";
import BarChartIcon from "../../assets/bar-chart-icon.png";
import LineChartIcon from "../../assets/line-chart-icon.png";

// Chart types
import { PIE_CHART, LINE_GRAPH, BAR_GRAPH } from "../../utils/vis/constants";

const MenuWrapper = styled.ul`
	padding: 5px 0px;
	border-radius: 3px;
	text-align: right;
	display: flex;
	@media (max-width: 768px) {
		flex-direction: column-reverse;
	}
	& .chart-header {
		float: left;
		font-family: Raleway;
		text-transform: capitalize;
		font-weight: bold;
		padding-top: 10px;
		color: rgb(40, 44, 52);
		text-align: left;
		& span {
			text-transform: uppercase;
			font-size: 10px;
			flex: 1;
			margin: 0 20px;
			@media (max-width: 768px) {
				font-size: 10px;
			}
			&:first-child {
				margin-left: 40px;
				@media (max-width: 768px) {
					margin-left: 30px;
				}
			}
			&::before {
				content: "";
				position: absolute;
				width: 20px;
				height: 20px;
				margin-left: -25px;
				border-radius: 3px;
				@media (max-width: 768px) {
					margin-left: -25px;
				}
			}
			&.cases::before {
				background-color: #e19e0d99;
			}
			&.recovered::before {
				background-color: #28ad0399;
			}
			&.deaths::before {
				background-color: #9b260499;
			}
		}
	}
	& li {
		list-style: none;
		display: inline-block;
		padding: 5px 0;
		border-radius: 3px;
		&.container {
			flex: 1;
			&.actions {
				& ul {
					display: flex;
					& li {
						margin: 0 5px;
						flex: 1;
						&.dl {
							flex: 3;
						}
						&:last-child {
							margin-right: 0;
						}
					}
				}
			}
		}
		& button {
			float: right;
			display: flex;
			background: transparent;
			padding: 5px;
			border: 0;
			background-color: #e9e9e9;
			border-radius: 3px;
			font-family: "Raleway";
			cursor: pointer;
			outline: none;
			color: rgb(40, 44, 52);
			@media (max-width: 768px) {
				width: 100%;
			}
			&.active {
				background-color: #f3f3f3;
				box-shadow: 1px 1px 2px rgb(40, 44, 52);
			}
			& div {
				width: 20px;
				height: 15px;
				background-size: contain;
				background-repeat: no-repeat;
				margin-left: 5px;
				@media (max-width: 768px) {
					margin: auto;
				}
				&.download {
					background-image: url(${DownloadIcon});
				}
				&.pie {
					background-image: url(${PieChartIcon});
				}
				&.bar {
					background-image: url(${BarChartIcon});
				}
				&.line {
					background-image: url(${LineChartIcon});
				}
			}
		}
	}
`;

function Menu({ setChart, chart, country }) {
	return (
		<MenuWrapper>
			{country && (
				<li className=" container chart-header">
					{country}
					<span className="cases">cases</span>
					<span className="recovered">
						recovered
					</span>
					<span className="deaths">deaths</span>
				</li>
			)}
			<li className="container actions">
				<ul>
					<li>
						<button
							className={`${chart ===
								LINE_GRAPH &&
								"active"}`}
							onClick={e =>
								setChart(
									LINE_GRAPH
								)
							}
						>
							<div className="icon line"></div>
						</button>
					</li>
					{/*
					<li>
						<button
							className={`${chart ===
								BAR_GRAPH &&
								"active"}`}
							onClick={e =>
								setChart(
									BAR_GRAPH
								)
							}
						>
							<div className="icon bar"></div>
						</button>
					</li>
					<li>
						<button
							className={`${chart ===
								PIE_CHART &&
								"active"}`}
							onClick={e =>
								setChart(
									PIE_CHART
								)
							}
						>
							<div className="icon pie"></div>
						</button>
					</li>*/}
					<li className="dl">
						<button>
							Download Chart
							<div className="icon download"></div>
						</button>
					</li>
				</ul>
			</li>
		</MenuWrapper>
	);
}

export default Menu;
