import React, { useState } from "react";
import Header from "../components/header";
import styled from "styled-components";
import ElData from "../components/eldata";
import Layout from "../components/layout";

function Countries(props) {
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

Countries.getInitialProps = async function() {
	const res = await fetch(
		"https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
		{
			method: "GET",
			headers: {
				"x-rapidapi-host":
					"coronavirus-monitor.p.rapidapi.com",
				"x-rapidapi-key":
					"dd5ef1c520msh7d1da965b4d4b62p11fb77jsn22359027c4fa"
			}
		}
	);
	const data = await res.json();
	return {
		data: data.countries_stat
	};
};

export default Countries;
