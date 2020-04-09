import React from "react";
import styled from "styled-components";
import MyCredits from "../credits/credits";

const FooterWrapper = styled.div`
	bottom: 0;
	left: 0;
	right: 0;
	height: auto;
	z-index: 2;
	background-color: rgb(40, 44, 52);
	margin: 70px 0px 10px 0px;
	padding: 10px;
	border-radius: 3px;
`;

function Footer() {
	return (
		<FooterWrapper>
			<MyCredits />
		</FooterWrapper>
	);
}

export default Footer;
