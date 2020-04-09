import React from "react";
import styled from "styled-components";

const OverviewWrapper = styled.div`
	flex: 1;
	background-color: #ffffff99;
	min-height: 200px;
	padding: 5px;
	border-radius: 5px;
	font-family: "Raleway";
`;

const InfoLabel = styled.div`
	width: 100%;
	& span {
		transform: uppercase;
		font-size: 14px;
		font-family: "Raleway";
	}
	& div.value {
		font-weight: bold;
		font-size: 42px;
		font-family: "Raleway";
	}
`;
function Overview({ activeCountry }) {
	return (
		<OverviewWrapper className="col">
			<p>
				{activeCountry === null
					? "World-Wide"
					: activeCountry.location}
			</p>
			{activeCountry !== null && (
				<React.Fragment>
					<InfoLabel>
						<span>Confirmed</span>
						<div className="value">
							{activeCountry.confirmed.toLocaleString()}
						</div>
					</InfoLabel>
					<InfoLabel>
						<span>Dead</span>
						<div className="value">
							{activeCountry.dead.toLocaleString()}
						</div>
					</InfoLabel>
					<InfoLabel>
						<span>Recovered</span>
						<div className="value">
							{activeCountry.recovered.toLocaleString()}
						</div>
					</InfoLabel>
				</React.Fragment>
			)}
		</OverviewWrapper>
	);
}

export default Overview;
