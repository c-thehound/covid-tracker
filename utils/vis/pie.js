import * as d3 from "d3";
import { truncateObject } from "../objects";

function drawPieChart(svg, data, radius) {
	data = truncateObject(data, ["dead", "confirmed", "recovered"]);
	var color = d3
		.scaleOrdinal()
		.domain(data)
		.range(["#e19e0d", "#9b2604", "#28ad03"]); // Set the color scale

	var pie = d3.pie().value(function(d) {
		return d.value;
	});

	var dataReady = pie(d3.entries(data));

	svg.selectAll("sector")
		.data(dataReady)
		.enter()
		.append("path")
		.attr(
			"d",
			d3
				.arc()
				.innerRadius(0)
				.outerRadius(radius)
		)
		.attr("fill", function(d) {
			return color(d.data.key);
		})
		.attr("stroke", "#fff")
		.style("stroke-width", "2px")
		.style("opacity", 0.7);

	/* Lets draw the lines first */
	var lineArc = d3
		.arc()
		.innerRadius(radius)
		.outerRadius(radius + 40);
	svg.append("g").attr("class", "lines");

	var lines = d3
		.select(".lines")
		.selectAll("line")
		.data(dataReady);

	lines.enter().append("path");

	/* Lets Draw the text labels */
	svg.append("g").attr("class", "labels");
	var text = d3
		.select(".labels")
		.selectAll("text")
		.data(dataReady);

	var labelArc = d3
		.arc()
		.innerRadius(radius)
		.outerRadius(radius + 50);

	text.enter()
		.append("text")
		.attr("dy", ".35em")
		.attr("transform", d => `translate(${labelArc.centroid(d)})`)
		.text(function(d) {
			console.log(d);
			return d.value;
		});
}

export default drawPieChart;
