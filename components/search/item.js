import React, { useState, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";
import Vis from "./itemVis";
import { LINE_GRAPH, PIE_CHART, BAR_GRAPH } from "../../utils/vis/constants";

const Analytics = styled.div`
	border-bottom: 1px dashed #c0c0c0;
	padding-left: 10px;
	@media (max-width: 768px) {
		margin: -10px;
	}
	&::before {
		content: "";
		position: absolute;
		width: 100%;
		left: 0;
		border-bottom: 1px dashed #c0c0c0;
		margin-top: 5px;
	}
`;

function DataItem({ item, id }) {
	const [expanded, setExpanded] = useState(false);
	useEffect(() => {}, []);
	if (item && item.country_name) {
		return (
			<li
				className={`data-item ${expanded &&
					"open"} wow fadeInUpBig`}
			>
				<div className="container">
					<div className="expand">
						<button
							style={{ left: "0" }}
							onClick={e =>
								setExpanded(
									!expanded
								)
							}
						>
							+
						</button>
						<button
							style={{
								right: "0"
							}}
							onClick={e =>
								setExpanded(
									!expanded
								)
							}
						>
							+
						</button>
					</div>
					<div className="detail">
						<h2
							style={{
								color: "#0a3433"
							}}
						>
							{item.country_name}
						</h2>
						<ul className="overview">
							<li>
								<h6
									style={{
										borderBottom:
											"1px solid #e19e0d"
									}}
								>
									cases
								</h6>
								<h2>
									{item.cases &&
										item.cases}
								</h2>
							</li>
							<li>
								<h6
									style={{
										borderBottom:
											"1px solid #28ad03"
									}}
								>
									recoveries
								</h6>
								<h2>
									{item.total_recovered &&
										item.total_recovered}
								</h2>
							</li>
							<li>
								<h6
									style={{
										borderBottom:
											"1px solid #9b2604"
									}}
								>
									deaths
								</h6>
								<h2>
									{item.deaths &&
										item.deaths}
								</h2>
							</li>
						</ul>
						<p className="updated">
							Last updated
							<span>
								{moment(
									item.updated
								).format(
									"dddd, MMMM Do YYYY LT"
								)}
							</span>
						</p>
					</div>
					{expanded && (
						<Analytics>
							<Vis
								country={
									item.country_name
								}
							/>
						</Analytics>
					)}
				</div>
			</li>
		);
	}
	return null;
}

export default DataItem;
