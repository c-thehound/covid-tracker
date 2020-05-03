import React from "react";
import styled from "styled-components";
import TwitterIcon from "../../assets/twitter.png";
import GitHubIcon from "../../assets/Octocat.png";

const Credits = styled.div`
	bottom: 10px;
	left: 10px;
	font-size: 12px;
	color: rgb(40, 44, 52);
	font-family: "Raleway";
	margin-bottom: 3px;
	& span {
		font-weight: 400;
		font-size: 13px;
		margin: 0 5px;
		& a {
			color: #f3f3f3;
			text-decoration: none;
			background-image: url(${TwitterIcon});
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
			display: inline-block;
			margin: auto;
			width: 20px;
			height: 20px;
			background-color: #fff;
			padding: 5px;
			border-radius: 3px;
			border: 1px solid rgba(40, 44, 55, 0.3);
			&.twitter {
				background-image: url(${TwitterIcon});
			}
			&.git {
				background-image: url(${GitHubIcon});
			}
		}
	}
`;

export default function() {
	return (
		<Credits>
			Made with ❤️ by Castin
			<br />
			<div>
				<p style={{ marginTop: 10 }}>
					<span>
						<a
							className="twitter"
							href="https://twitter.com/mackah_c"
							style={{
								marginRight: 5
							}}
						></a>
						<a
							className="git"
							href="https://github.com/c-thehound"
						></a>
					</span>
				</p>
			</div>
		</Credits>
	);
}
