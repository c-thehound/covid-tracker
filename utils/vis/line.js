import * as d3 from "d3";

function drawLineGraph(
	svg,
	data,
	xScale,
	yScale,
	height,
	width,
	margins,
	maxy,
	maxx,
	class_name,
	windowWidth
) {
	const dotRadius = 3.5;
	const tooltipWidth = 150;
	const tooltipHeight = 70;

	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(
			d3.axisBottom(xScale).tickFormat(function(d) {
				if (windowWidth < 768) {
					return `${d + 1}`;
				}
				return `Day ${d + 1}`;
			})
		); // Draw x axis

	svg.append("g")
		.attr("class", "y axis")
		.call(
			d3
				.axisLeft(yScale)
				.ticks(22)
				.tickFormat(function(d) {
					return `${d.toLocaleString()}`;
				})
		) // Draw y axis
		.append("g")
		.attr("class", "ylabel")
		.style(
			"transform",
			`rotateZ(-90deg) translateX(-180px) translateY(${
				maxy < 1000 ? "-40px" : "-55px"
			})`
		)
		.append("text")
		.text("Number of people."); // Add the label

	/* Make grid lines */
	function makeXGridLines() {
		return d3.axisBottom(xScale).ticks(44);
	}
	function makeYGridLines() {
		return d3.axisLeft(yScale).ticks(44);
	}
	/* End gridlines */

	/* Draw grid lines*/
	// We draw grid lines first because we can't use z-index here
	svg.append("g")
		.attr("class", "grid x")
		.attr("transform", `translate(0,${height})`)
		.call(
			makeXGridLines()
				.tickSize(-height)
				.tickFormat("")
		); // Draw x gridlines

	svg.append("g")
		.attr("class", "grid y")
		.call(
			makeYGridLines()
				.tickSize(-(width - margins.top * 2))
				.tickFormat("")
		); // Draw y gridlines
	/* End draw gridlines*/

	/* CASES */
	var cases = d3
		.line()
		.curve(d3.curveMonotoneX)
		.x(function(d, i) {
			return xScale(d.dayFromZero); // set the x values for the line generator
		})
		.y(function(d) {
			return yScale(d.total_cases); // set the y values for the line generator
		}); // Cases curve

	svg.append("g")
		.attr("class", "dots cases")
		.selectAll("dot")
		.data(data)
		.enter()
		.append("circle")
		.attr("class", "dot case")
		.attr("cx", function(d) {
			return xScale(d.dayFromZero);
		})
		.attr("cy", function(d) {
			return yScale(d.total_cases);
		})
		.attr("r", dotRadius); // Add dots for the case line
	/* END CASES*/

	/* DEATHS */
	var deaths = d3
		.line()
		.curve(d3.curveMonotoneX)
		.x(function(d, i) {
			return xScale(d.dayFromZero); // set the x values for the line generator
		})
		.y(function(d) {
			return yScale(d.total_deaths); // set the y values for the line generator
		}); // Death curve

	svg.append("g")
		.attr("class", "dots deaths")
		.selectAll("dot")
		.data(data)
		.enter()
		.append("circle")
		.attr("class", "dot death")
		.attr("cx", function(d) {
			return xScale(d.dayFromZero);
		})
		.attr("cy", function(d) {
			return yScale(d.total_deaths);
		})
		.attr("r", dotRadius); // Add dots for the death line
	/* END DEATHS*/

	/* RECOVERED */
	var recovered = d3
		.line()
		.curve(d3.curveMonotoneX)
		.x(function(d, i) {
			return xScale(d.dayFromZero); // set the x values for the line generator
		})
		.y(function(d) {
			return yScale(d.total_recovered); // set the y values for the line generator
		}); // Recovery curve

	svg.append("g")
		.attr("class", "dots recoveries")
		.selectAll("dot")
		.data(data)
		.enter()
		.append("circle")
		.attr("class", "dot recovered")
		.attr("cx", function(d) {
			return xScale(d.dayFromZero);
		})
		.attr("cy", function(d) {
			return yScale(d.total_recovered);
		})
		.attr("r", dotRadius); // Add dots for the recovered line
	/* END RECOVERED*/

	svg.append("path")
		.data([data]) // Bind the data
		.attr("class", "line cases")
		.attr("d", cases); // Generate Cases Curve

	svg.append("path")
		.data([data]) // Bind the data
		.attr("class", "line deaths")
		.attr("d", deaths); // Generate Deaths curve

	svg.append("path")
		.data([data]) // Bind the data
		.attr("class", "line recoveries")
		.attr("d", recovered); // Generate Recoveries curve

	/* Tooltips */
	var tooltip = d3
		.select(".viz")
		.append("div")
		.attr("class", `tooltip ${class_name}`)
		.style("visibility", "hidden");

	function drawTooltip(x, y, data) {
		tooltip.html(
			`
					<p class='tooltip-info'>${data.country_name}<br>
					<span class='cases'>cases : <b>${data.total_cases}</b></span><br>
					<span class='recoveries'>recoveries : <b>${data.total_recovered}</b></span><br>
					<span class='deaths'>deaths : <b>${data.total_deaths}</b></span>
					</p>
							`
		)
			.transition()
			.duration(50)
			.style("visibility", "visible")
			.style("top", `${y - 250}px`)
			.style("left", `${x + 56}px`);
	} // Display the tooltip at the provided co-ordinates

	svg.select(".grid.x")
		.selectAll(".tick")
		.on("mouseover", function(d) {
			let x = xScale(d - 1); // The x co-ordinate
			let yValue = data.filter(
				item => item.dayFromZero === d
			)[0];
			let y = yValue && yScale(yValue.total_cases);
			if (x && y) {
				drawTooltip(x, event.pageY, yValue);
			}
		});
}

export default drawLineGraph;
