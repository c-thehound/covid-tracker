import React, { useState } from "react";
import Header from "../components/header";
import styled from "styled-components";
import ElData from "../components/eldata";
import fetch from "isomorphic-unfetch";
import Layout from "../components/layout";

function Dashboard(props) {
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

Dashboard.getInitialProps = async function() {
	const res = await fetch("https://www.trackcorona.live/api/countries/");
	const data = await res.json();
	return {
		data: data.data
	};
};

export default Dashboard;
