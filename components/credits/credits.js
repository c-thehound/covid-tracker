import React from "react";
import styled from "styled-components";
import TwitterIcon from "../../assets/twitter.png";
import GitHubIcon from "../../assets/Octocat.png";

const Credits = styled.div`
	bottom: 10px;
	left: 10px;
	font-size: 12px;
	color: #f3f3f3;
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
			Made with love ❤️ by Castin
			<br />
			<div>
				<p>
					<span>
						<a
							className="twitter"
							href="https://twitter.com/mackah_c"
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
