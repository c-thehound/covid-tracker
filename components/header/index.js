import React from "react";
import styled, { keyframes } from "styled-components";
import CoronaIcon from "../../assets/coronaicon.png";
import { useRouter } from "next/router";

const HeaderWrapper = styled.div`
	width: 100%;
	height: 50px;
	#background-color: rgb(40, 44, 52);
	background-color: transparent;
	margin: -5px;
	margin-bottom: 10px;
	padding: 5px;
	border-radius: 3px;
	& .title {
		font-family: "Raleway" !important;
		color: #fff;
		& a {
			& .corona-icon {
				width: 50px;
				height: 50px;
				background-image: url(${CoronaIcon});
			}
		}
	}
`;

const rotateWhileScaling = keyframes`
	0% {
		transform: rotate(0deg);
	}
	25% {
		transform: rotate(90deg);
	}
	50% {
		transform: rotate(180deg);
	}
	75% {
		transform: rotate(240deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

const HeaderMenu = styled.ul`
	margin: -5px;
	& li {
		list-style: none;
		display: inline-block;
		padding: 10px;
		background-color: rgb(40, 44, 52);
		margin: 5px;
		border-radius: 3px;
		position: relative;
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
		&.global {
			margin-left
			50px;
		}
		& div.icon {
			animation: ${rotateWhileScaling} 1s infinite linear;
			width: 40px;
			height: 40px;
			position: absolute;
			left: -50px;
			top: 0;
			background-image: url(${CoronaIcon});
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
			display: inline-block;
		}
		&.active {
			border-bottom: 2px solid #06171a;
		}
		& a {
			text-transform: capitalize;
			color: #f3f3f3;
			font-weight: bold;
			text-decoration: none;
			font-family: Raleway;
			@media (max-width: 768px) {
				font-size: 14px;
			}
		}
	}
`;

function Link({ to, children, c }) {
	const router = useRouter();
	const [active, setActive] = React.useState(false);
	React.useEffect(() => {
		let pathname = router.pathname.split("/");
		if (pathname[1] === to) {
			setActive(true);
		}
	}, []);
	return (
		<li className={active ? `active ${c || ""}` : `${c || ""}`}>
			{children}
			<a href={`/${to !== "global" ? to : ""}`}>{to}</a>
		</li>
	);
}

function Header() {
	const router = useRouter();
	return (
		<HeaderWrapper>
			<HeaderMenu>
				<Link to="global" c="global">
					<div className="icon" />
				</Link>
				<Link to="countries" />
				<Link to="about" />
			</HeaderMenu>
		</HeaderWrapper>
	);
}

export default Header;
