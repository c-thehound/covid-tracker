import React from "react";
import styled from "styled-components";

const DataVisWrapper = styled.div`
	flex: 3;
	min-height: 400px;
	background-color: #fff;
	border-radius: 3px;
	margin: 0 0 0 10px;
	padding: 5px;
`;

function DataVis({ country }) {
	return (
		<DataVisWrapper className="col">
			<h3>{country !== null && country.location}</h3>
			<p>Datacis</p>
		</DataVisWrapper>
	);
}

export default DataVis;
