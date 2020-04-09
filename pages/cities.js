import React, { useState } from "react";
import Header from "../components/header";
import styled from "styled-components";
import ElData from "../components/eldata";
import fetch from "isomorphic-unfetch";
import Layout from "../components/layout";

function Cities(props) {
	const [activeCountry, setActiveCountry] = useState(null);
	const [home, setHome] = useState(true);
	return (
		<Layout>
			<React.Fragment>
				<ElData
					{...props}
					setCountry={setActiveCountry}
					activeCountry={activeCountry}
				/>
			</React.Fragment>
		</Layout>
	);
}

Cities.getInitialProps = async function() {
	const res = await fetch("https://www.trackcorona.live/api/cities/");
	const data = await res.json();
	return {
		data: data.data
	};
};

export default Cities;
