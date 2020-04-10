import React from "react";
import styled from "styled-components";
import CoronaIcon from "../../assets/icon1.png";
import { useRouter } from "next/router";

const HeaderWrapper = styled.div`
	width: 100%;
	height: 50px;
	background-color: rgb(40, 44, 52);
	margin-bottom: 20px;
	padding: 5px;
	border-radius: 3px;
	& .title {
		font-family: "Raleway" !important;
		color: #fff;
		& a {
			color: #fff;
			& .corona-icon {
				width: 50px;
				height: 50px;
				background-image: url(${CoronaIcon});
			}
		}
	}
`;

const HeaderMenu = styled.ul`
	& li {
		list-style: none;
		display: inline-block;
		padding: 10px;
		&.active {
			border-bottom: 2px solid #06171a;
		}
		& a {
			text-transform: capitalize;
			color: #fff;
			font-weight: bold;
			text-decoration: none;
			font-family: Raleway;
			@media (max-width: 768px) {
				font-size: 14px;
			}
		}
	}
`;

function Link({ to }) {
	const router = useRouter();
	const [active, setActive] = React.useState(false);
	React.useEffect(() => {
		let pathname = router.pathname.split("/");
		if (pathname[1] === to) {
			setActive(true);
		}
	}, []);
	return (
		<li className={active ? "active" : ""}>
			<a href={`/${to !== "global" ? to : ""}`}>{to}</a>
		</li>
	);
}

function Header() {
	const router = useRouter();
	return (
		<HeaderWrapper>
			<HeaderMenu>
				<Link to="global" />
				<Link to="countries" />
				<Link to="about" />
			</HeaderMenu>
		</HeaderWrapper>
	);
}

export default Header;
