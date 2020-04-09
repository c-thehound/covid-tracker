import * as d3 from "d3";

function drawBarChart(svg, data, xScale, yScale, height, width) {
	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(d3.axisBottom(xScale)); // Draw x axis

	svg.append("g")
		.attr("class", "y axis")
		.call(d3.axisLeft(yScale)); // Draw y axis

	svg.append("g").attr("class", "chart-bars"); // Add the bar group

	svg.select(".chart-bars")
		.selectAll("bar")
		.data(data)
		.enter()
		.append("rect")
		.attr("x", function(d) {
			return xScale(d.record_date) - width / data.length / 2;
		})
		.attr("y", d => yScale(d.total_cases))
		.attr("height", d => height - yScale(d.total_cases))
		.attr("width", d => width / data.length - 25);
}

export default drawBarChart;
