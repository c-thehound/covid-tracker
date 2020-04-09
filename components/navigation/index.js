import React, { useState } from "react";
import styled from "styled-components";

const NavigationWrapper = styled.div`
	border-radius: 3px;
	flex: 1;
	height: auto;
	& ul {
		overflow: scroll;
		overflow-x: hidden;
		max-height: 450px;
		height: auto;
		&::-webkit-scrollbar {
			width: 0;
		}
	}
`;

const Button = styled.button`
	width: 100%;
	border: 0;
	padding: 10px;
	border-radius: 3px;
	cursor: pointer;
	outline: none;
	margin-bottom: 5px;
	font-family: "Raleway";
	text-align: left;
`;

const AllCountries = styled(Button)`
	background-color: blue;
`;

const SearchCountry = styled.input`
	padding: 10px;
	border-radius: 3px;
	width: 100%;
	border: 0;
	margin-bottom: 5px;
	font-family: "Raleway";
	outline: none;
`;

function Navigation({ data, setCountry }) {
	const [filterValue, setFilterValue] = useState(null);
	const filterCountries = function() {
		if (!!filterValue) {
			return data.filter(value =>
				value.location
					.toLowerCase()
					.includes(filterValue.toLowerCase())
			);
		}
		return data;
	};
	return (
		<NavigationWrapper className="col">
			<AllCountries onClick={e => setCountry(null)}>
				Worldwide
			</AllCountries>
			<SearchCountry
				type="text"
				placeholder="Enter your country"
				onChange={e => setFilterValue(e.target.value)}
			/>
			<ul>
				{data.length > 0 &&
					filterCountries().map(
						(country, idx) => {
							return (
								<Button
									onClick={e =>
										setCountry(
											country
										)
									}
									key={
										idx
									}
								>
									{
										country.location
									}
								</Button>
							);
						}
					)}
			</ul>
		</NavigationWrapper>
	);
}

export default Navigation;
