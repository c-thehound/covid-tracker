import React, { useEffect, useState } from "react";
import draw from "../../utils/vis";
import styled from "styled-components";
import {
	PIE_CHART,
	LINE_GRAPH,
	BAR_GRAPH,
	PATIENT_ZERO_DATE
} from "../../utils/vis/constants";
import { generateClassName } from "../../utils/strings";
import { truncateObject } from "../../utils/objects";
import Menu from "./menu";
import moment from "moment";
import Cursor from "../../assets/plus.png";

const VisualizationWrapper = styled.div`
	flex: 1;
	background-color: #fff;
	border-radius: 3px;
	min-height: 500px;
	@media(max-width:768px){
		min-height:350px;
	}
	font-family: Raleway;
	//cursor: url(${Cursor}), auto;
	& .tooltip {
		position: absolute;
		width: 100px;
		height: 70px;
		background-color: #fff;
		border-radius: 3px;
		border: 2px solid #f3f3f3;
		z-index:2;
		padding:5px;
		& .tooltip-info{
				font-size:12px;
				font-weight:bold;
				& span{
						font-size:10px;
						font-weight:300;
						text-transform:uppercase;
						&.cases{
								color:#e19e0d99;
						}
						&.recoveries{
						color:#28ad0399;
						}
						&.deaths{
								color:#9b260499;
						}
						& b{
								font-weight:bold;
								color:#000;
						}
				}
		}
		&:before{
				content:'';
				position:absolute;
				bottom:-13px;
				left:45%;
				width:15px;
				height:15px;
				clip-path: polygon(0% 87%, 50% 0%, 50% 0%, 100% 87%);
				transform-origin:center;
				transform:rotateZ(60deg);
				background-color:#c0c0c0;
				margin:auto;
				z-index:1;
		}
	}
	& .dots {
		& .dot {
			transition: all 100ms ease-in-out;
			cursor: pointer;
			&:hover {
				r: 7;
			}
		}
		&.cases {
			& .dot {
				fill: #e19e0d99;
			}
		}
		&.recoveries {
			& .dot {
				fill: #28ad0399;
			}
		}
		&.deaths {
			& .dot {
				fill: #9b260499;
			}
		}
	}
	& .grid {
		position: relative;
		z-index: -1;
		&.y {
			& .tick:last-child {
				& line {
					stroke: rgb(40, 44, 52);
				}
			}
		}
		&.x {
			& .tick {
			&:hover{
				& line {
				transition:none;
						stroke: rgb(40, 44, 52);
						stroke-opacity: 1;
				}
			}
			}
		}
		& .domain {
			display: none;
		}
		& .tick {
			&.over {
			}
			& line {
				stroke: #e9e9e9;
				stroke-opacity: 0.7;
				stroke-rendering: crispEdges;
			}
		}
	}
	& .x.axis {
		& .tick {
			& text {
				transform: rotateZ(-60deg) translateX(-18px);
			}
		}
	}
	& .y.axis {
		& .ylabel {
			fill: rgb(40, 44, 52);
			font-size: 12px;
		}
	}
	& text {
		font-family: Raleway;
		color: rgb(40, 44, 52);
	}
	& path.domain {
		stroke: rgb(40, 44, 52);
	}
	& .line {
		fill: none;
		stroke-width: 2px;
		&.cases {
			stroke: #e19e0d99;
		}
		&.deaths {
			stroke: #9b260499;
		}
		&.recoveries {
			stroke: #28ad0399;
		}
	}
`;

export default function({ data }) {
	const [chart, setChart] = useState(LINE_GRAPH);
	const [transformedData, setTransformedData] = useState(null);

	useEffect(() => {
		if (!!data && !transformedData) {
			let copy = data;
			copy.stat_by_country.forEach(function(d) {
				d.record_date = moment(
					d.record_date.split(" ")[0]
				); // Am splitting because I only want the date part
				d.total_cases =
					parseInt(
						d.total_cases.replace(/,/g, "")
					) || 0;
				d.total_deaths = parseInt(d.total_deaths) || 0;
				d.total_recovered =
					parseInt(d.total_recovered) || 0;
				d.new_cases = parseInt(d.new_cases) || 0;

				/* Am using the day number i.e day 1,day 2,day 3 e.t.c for the xScale.
				 * So next I'll transform all dates to match with the "day"
				 * Code moved to the utils/vis/index.js for perfomance reasons
				 */
			});
			setTransformedData(copy);
		} // Let's make the data useful!

		if (transformedData !== null) {
			draw(transformedData, chart);
		} // Draw only when we have usable data
	}, [chart, data, transformedData]);
	return (
		<React.Fragment>
			<Menu
				setChart={setChart}
				country={data && data.country}
				chart={chart}
			/>
			<VisualizationWrapper
				className={`viz ${transformedData &&
					generateClassName(
						transformedData.country
					)}`}
			/>
		</React.Fragment>
	);
}
