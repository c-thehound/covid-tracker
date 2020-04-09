import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import tips from "./tips";

const TipsContainer = styled.div`
	position: fixed;
	top: 20px;
	left: 0;
	width: 200px;
	height: auto;
	padding: 5px;
	display: none;
	& .topic {
		font-family: Raleway;
		font-size: 12px;
		color: #fff;
		background-color: #1e1e1e;
		padding: 5px;
		border-radius: 3px;
		margin-bottom: 10px;
		font-weight: bold;
	}
	& .tip {
		background-color: #fff;
		border-radius: 3px;
		padding: 5px;
		margin-bottom: 10px;
		& h4 {
			font-family: "Raleway";
			color: #c0c0c0;
			text-transform: uppercase;
			font-size: 10px;
		}
		& p {
			font-family: "Raleway";
			font-size: 12px;
		}
	}
`;

function TipCard({ tip }) {
	return (
		<div className="tip">
			<h4>{tip.title}</h4>
			<p>{tip.detail}</p>
		</div>
	);
}

function Tips() {
	const [show, setShow] = useState(false);
	const router = useRouter();
	useEffect(() => {
		let route = router.pathname.split("/")[1];
		if (route === "countries" || route === "cities") {
			setShow(true);
		}
	}, []);
	if (show) {
		return (
			<TipsContainer>
				<p className="topic">TIPS</p>
				{tips.length > 0 &&
					tips.map((tip, idx) => (
						<TipCard tip={tip} key={idx} />
					))}
			</TipsContainer>
		);
	}
	return null;
}

export default Tips;
