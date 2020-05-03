import React, { useEffect, useState } from "react";
import { LINE_GRAPH } from "../../utils/vis/constants";
import Vis from "../vis";

function ItemVis({ country, type, setChart }) {
	const [data, setData] = useState(null);
	useEffect(() => {
		async function fetchData() {
			const res = await fetch(
				`https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php?country=${country}`,
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
			setData(data);
		}
		fetchData();

		return () => {
			setData(null);
		};
	}, []);
	return <Vis data={data} />;
}

export default ItemVis;
