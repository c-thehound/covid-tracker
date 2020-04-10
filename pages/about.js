import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
const AboutWrapper = styled.div`
	& h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: Raleway;
		text-decoration: underline;
		margin-bottom: 10px;
	}
	& p {
		font-family: Raleway;
		margin-bottom: 10px;
	}
	& ul,
	ol {
		padding-left: 10px;
		padding-bottom: 10px;
		& li {
			list-style: none;
			font-family: Raleway;
			font-size: 13px;
			font-weight: 500;
			border-left: 1px solid #9b260433;
			margin: 3px 0;
			padding: 3px;
			max-width: 300px;
			background-color: #ffffff99;
		}
	}
`;

function About(props) {
	return (
		<Layout>
			<React.Fragment>
				<AboutWrapper className="wow fadeInUp">
					<h1>Coronavirus disease (COVID-19)</h1>
					<p>
						Coronavirus disease (COVID-19)
						is an infectious disease caused
						by a newly discovered virus.
					</p>
					<p>
						The disease causes respiratory
						illness (like the flu) with
						symptoms such as a cough, fever,
						and in more severe cases,
						difficulty breathing. You can
						protect yourself by washing your
						hands frequently, avoiding
						touching your face, and avoiding
						close contact (1 meter or 3
						feet) with people who are
						unwell.
					</p>
					<h3>How it spreads</h3>
					<p>
						Coronavirus disease spreads
						primarily through contact with
						an infected person when they
						cough or sneeze. It also spreads
						when a person touches a surface
						or object that has the virus on
						it, then touches their eyes,
						nose, or mouth.
					</p>
					<h3>Symptoms</h3>
					<p>The most common symptoms : </p>
					<ul>
						<li>Dry cough</li>
						<li>Fever</li>
						<li>Tiredness</li>
						<li>
							Difficulty breathing
							(severe cases)
						</li>
					</ul>
					<p>Some people may have : </p>
					<ul>
						<li>Aches and pains</li>
						<li>Nasal congestion</li>
						<li>Running nose</li>
						<li>Sore throat</li>
						<li>Diarrhea</li>
					</ul>
					<p>
						These symptoms are usually mild
						and beging gradually. Some
						people become infected but don't
						develop any symptoms and don't
						feel unwell
					</p>
					<h3>Prevention</h3>
					<h1
						style={{
							textDecoration: "none",
							textTransform:
								"uppercase",
							fontWeight: "bold",
							fontFamily: "Raleway",
							backgroundColor:
								"#9b2604",
							color: "#f3f3f3",
							padding: 10,
							borderRadius: 3
						}}
					>
						{" "}
						STAY HOME, SAVE LIVES !
					</h1>
					<ol>
						<li>
							Stay home as much as you
							can
						</li>
						<li>Keep a safe distance</li>
						<li>Wash hands often</li>
						<li>Cover your cough</li>
						<li>Sick ? Call ahead!</li>
					</ol>
					<p>
						For Kenyans call 719 or dial
						*719#{" "}
					</p>
				</AboutWrapper>
			</React.Fragment>
		</Layout>
	);
}

export default About;
