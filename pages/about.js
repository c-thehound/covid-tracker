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
`;

function About(props) {
	return (
		<Layout>
			<React.Fragment>
				<AboutWrapper>
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
				</AboutWrapper>
			</React.Fragment>
		</Layout>
	);
}

export default About;
