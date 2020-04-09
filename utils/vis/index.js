// Author: Castin Masika
import * as d3 from "d3";
import moment from "moment";
import { generateClassName } from "../strings";
import { getUniqueArray } from "../objects";

import { PIE_CHART, BAR_GRAPH, LINE_GRAPH } from "./constants";

// Draw functions
import drawPieChart from "./pie";
import drawLineGraph from "./line";
import drawBarChart from "./bar";

function draw(data, type) {
	/*We prepare the canvas to draw here
	 *-Determine the correct node to use
	 *-Decide which type of graph to draw
	 *-Make necessary UI fixes
	 *-TODO: The API am using seems to return data only from 2020 Mar 17th. Is these supposed to happen?
	 * */
	var class_name = data.country.toLowerCase(); // className for the current working node ; cwn :D

	var data = getUniqueArray(data.stat_by_country); // Get The real data

	/*Am adding the date difference to the selected objects here*/
	var dates = data.map(o => o.record_date); // All the dates into an array
	var patientZeroDate = dates.reduce(function(a, b) {
		return a < b ? a : b;
	});

	data.forEach(function(o) {
		o.dayFromZero = o.record_date.diff(patientZeroDate, "days");
	});
	/* Now we have data with date differences ! */

	var maxy = Math.max.apply(
		Math,
		data.map(function(o) {
			return o.total_cases;
		})
	); // Maximum Y Value

	var maxx = moment().diff(patientZeroDate, "days"); // Max X value

	d3.select(`.viz.${class_name} > *`).remove(); // Clear anything inside the container first
	d3.select(`.viz.${class_name}`).attr("id", `svg-viz-${class_name}`); // Assign id to element ; svg-viz

	var margins = {
		top: 50,
		left: 50,
		right: 50,
		bottom: 50
	}; // Container Margins

	const width = document.getElementById(`svg-viz-${class_name}`)
		.offsetWidth; // Container width
	const height = document.getElementById(`svg-viz-${class_name}`)
		.offsetHeight; // Container height

	var svg = d3
		.select(`.viz.${class_name}`)
		.append("svg")
		.attr("height", height + margins.bottom + margins.top) // Set Height
		.attr("width", width + margins.left + margins.right) // Set Width
		.append("g"); // Append an svg element inside the container

	if (type === PIE_CHART) {
		svg.attr(
			"transform",
			`translate(${width / 2},${height / 2 + 50})`
		);
	} else {
		svg.attr(
			"transform",
			`translate(${margins.left + 20},${margins.bottom - 20})`
		); // If its a pie chart move it to the center
	}

	var xScale = d3
		.scaleLinear()
		.domain([0, maxx]) // Input
		.range([1, width - margins.right * 2]); // output

	//YScale
	var yScale = d3
		.scaleLinear()
		.domain([maxy, 0]) //input
		.range([0, height]); // output

	switch (type) {
		case PIE_CHART:
			return drawPieChart(svg, data, height / 2);
		case LINE_GRAPH:
			return drawLineGraph(
				svg,
				data,
				xScale,
				yScale,
				height,
				width,
				margins,
				maxy,
				maxx
			);
		case BAR_GRAPH:
			return drawBarChart(
				svg,
				data,
				xScale,
				yScale,
				height,
				width
			);
		default:
			throw new Error("You must supply a chart type");
	} // Here is where we make the decision on which chart to draw
}

export default draw;
