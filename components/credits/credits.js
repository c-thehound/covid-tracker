import React from "react";
import styled from "styled-components";

const Credits = styled.div`
	bottom: 10px;
	left: 10px;
	font-size: 12px;
	color: #f3f3f3;
	font-family: "Raleway";
	margin-bottom: 3px;
	& span {
		font-weight: bold;
		font-size: 13px;
		& a {
			color: #f3f3f3;
			text-decoration: none;
		}
	}
`;

export default function() {
	return (
		<Credits>
			by <span>Castin Masika</span>
			<br />
			<div>
				<p>
					Phone : <span>+(254)745820775</span>
				</p>
				<p>
					Email :{" "}
					<span>browncastin@gmail.com</span>
				</p>
				<p>
					Twitter :{" "}
					<span>
						<a href="https://twitter.com/mackah_c">
							@mackah_c
						</a>
					</span>
				</p>
			</div>
		</Credits>
	);
}
