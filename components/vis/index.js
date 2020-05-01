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
import { VisLoader, MenuLoader } from "../loaders/vis";
import downloader from "save-svg-as-png";

const VisualizationWrapper = styled.div`
	flex: 1;
	background-color: #fff;
	border-radius: 3px;
	min-height: 500px;
	box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
	& text{
		font-family:Raleway;
	}
	& .svg{
		@media(max-width:768px){
				width:100%;
				& .graph-container{
						transform:translate(32px,23px);
				}
		}
	}
	@media(max-width:768px){
		min-height:300px;
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
	& .grid {
		position: relative;
		z-index: -1;
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
	}
	& .x.axis {
		& .tick {
			& text {
				@media(max-width:768px){
				transform: rotateZ(0deg) translateX(0px) !important;
				}
			}
		}
	}
	& .y.axis {
		& .ylabel {
			@media(max-width:768px){
				display:none;
			}
		}
	}
	& text {
			@media(max-width:768px){
				font-size:8px;
			}
	}
	& .line {
		@media(max-width:768px){
				stroke-width:1px;
		}
	}
`;

export default function({ data }) {
	const [chart, setChart] = useState(LINE_GRAPH);
	const [transformedData, setTransformedData] = useState(null);

	useEffect(() => {
		if (!!data && !transformedData) {
			let copy = data;
			copy.forEach(function(d) {
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
			if (!!window) {
				draw(transformedData, chart);
			}
		} // Draw only when we have usable data
	}, [chart, data, transformedData]);

	const downloadGraph = function() {
		if (transformedData) {
			const node = `SVG-${generateClassName(
				transformedData.country
			)}`;
			var el = document.getElementById(node);
			downloader.saveSvgAsPng(
				el,
				`${transformedData.country}.png`,
				{
					height:
						window.innerWidth < 768
							? 420
							: 720,
					width:
						window.innerWidth < 768
							? 360
							: 980,
					backgroundColor: "#fff",
					fonts: [
						{
							text: "Raleway",
							url:
								"https://fonts.googleapis.com/css?family=Raleway&display=swap",
							format: "woff2"
						}
					]
				}
			);
		}
	};
	return (
		<React.Fragment>
			{data ? (
				<Menu
					setChart={setChart}
					country={data && data.pop()}
					chart={chart}
					download={downloadGraph}
				/>
			) : (
				<MenuLoader />
			)}
			{transformedData ? (
				<VisualizationWrapper
					className={`viz ${generateClassName(
						transformedData[0].country_name
					)} wow fadeIn`}
				/>
			) : (
				<VisLoader bgColor="#fff" />
			)}
		</React.Fragment>
	);
}
