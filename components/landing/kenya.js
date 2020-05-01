import React, { useEffect, useState } from "react";
import { LINE_GRAPH } from "../../utils/vis/constants";
import Vis from "../vis";
import styled from "styled-components";
import { WorldStatsWrapper, Stat } from "./index";
import KenyaFlagGif from "../../assets/kenya_flag.gif";

const KenyaFlags = styled.div`
	flex: 1;
	height: 150px;
	background-image: url(${KenyaFlagGif});
	background-position: left;
	border-radius: 3px;
	margin: 10px 0;
	box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
		0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

function KenyaStats({ data }) {
	return (
		<React.Fragment>
			<KenyaFlags />
			<WorldStatsWrapper>
				<Stat
					title="total confirmed cases"
					color={"#e19e0d33"}
					value={data && data["total_cases"]}
				/>
				<Stat
					title="total recoveries"
					color={"#28ad0333"}
					value={data && data["total_recovered"]}
				/>
				<Stat
					title="total deaths"
					color={"#9b260433"}
					value={data && data["total_deaths"]}
				/>
			</WorldStatsWrapper>
		</React.Fragment>
	);
}

function Kenya() {
	const [data, setData] = useState(null);
	useEffect(() => {
		async function fetchData() {
			const res = await fetch(
				"https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php?country=kenya",
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
			const raw_data = await res.json();
			const data = Object.keys(raw_data).map(
				key => raw_data[key]
			);
			setData(data);
		}
		fetchData();

		return () => {
			setData(null);
		};
	}, []);
	return (
		<React.Fragment>
			<KenyaStats data={data && data.pop()} />
			<Vis data={data} />
		</React.Fragment>
	);
}

export default Kenya;
