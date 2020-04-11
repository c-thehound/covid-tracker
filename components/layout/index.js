import React, { useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import LandingBG from "../../assets/bgcovid.jpg";
import fetch from "isomorphic-unfetch";
import Footer from "../footer";
import Header from "../header";
import Tips from "../tips";

const AppLayout = styled.div`
	top: 0;
	width: 100vw;
	min-height: 100vh;
	overflow-y: scroll;
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 10px;
	background-color: #f3f3f3;
	& .overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		#background-color: #1e1f2199;
	}
	& .content.main {
		width: 70%;
		min-height: 100vh;
		align-self: center;
		position: relative;
		z-index: 1;
		@media (max-width: 768px) {
			width: 97%;
		}
	}
`;

function Layout(props) {
	useEffect(() => {
		if (typeof window !== undefined) {
			window.wow = require("wow.js");
			new wow().init();
		}
	}, []);
	return (
		<AppLayout>
			<Head>
				<title>Coronavirus(COVID-19)</title>
				<meta
					property="og:site_name"
					content="Coronavirus(COVID-19)"
				/>
				<meta
					property="og:title"
					content="Coronavirus(COVID-19)"
				/>
				<meta
					property="og:url"
					content="https://coronavirus-teal.now.sh"
				/>
				<meta
					property="og:image"
					content="/coronav.jpg"
				/>
				<meta
					property="og:description"
					content="Tracker for the coronavirus pandemic"
				/>
				<meta property="og:type" content="website" />
				<meta
					name="description"
					content="Tracker for the coronavirus pandemic"
				/>

				<meta
					name="twitter:title"
					content="Coronavirus(COVID-19)"
				/>
				<meta
					name="twitter:description"
					content="Tracker for the coronavirus pandemic"
				/>
				<meta
					name="twitter:image"
					content="/coronav.jpg"
				/>
				<meta
					name="twitter:card"
					content="/coronav.jpg"
				/>

				<link
					href="https://fonts.googleapis.com/css?family=Fredoka+One|Pacifico|Raleway&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
				/>
			</Head>
			<Tips />
			<div className="overlay"></div>
			<div className="content main">
				<Header />
				{props.children}
				<Footer />
			</div>
			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					overflow-x: hidden;
					font-family: -apple-system,
						BlinkMacSystemFont, Segoe UI,
						Roboto, Oxygen, Ubuntu,
						Cantarell, Fira Sans, Droid Sans,
						Helvetica Neue, sans-serif;
				}

				* {
					transition: all 300ms ease-in;
					box-sizing: border-box;
					padding: 0;
					margin: 0;
				}
			`}</style>
		</AppLayout>
	);
}

export default Layout;
