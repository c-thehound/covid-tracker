import React from "react";
import styled from "styled-components";
import Navigation from "../navigation";
import DataVis from "../datavis";
import Overview from "../overview";
import Search from "../search";

const GeneralWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

function ElData({ data, setCountry, activeCountry }) {
	return (
		<GeneralWrapper>
			{/*<Navigation setCountry={setCountry} data={data} />*/}
			<Search data={data} />
			{/*<DataVis country={activeCountry} />*/}
			{/*<Overview activeCountry={activeCountry} />*/}
		</GeneralWrapper>
	);
}

export default ElData;
