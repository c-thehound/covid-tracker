import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DataItem from "./item";

const SearchContainer = styled.div`
	flex: 1;
	background-color: transparent;
`;

const SearchInput = styled.div`
	& input {
		width: 100%;
		padding: 10px;
		font-size: 16px;
		border-radius: 3px;
		font-family: Raleway;
		border: 0;
		outline: none;
	}
`;

const DataContainer = styled.ul`
	& li.data-item {
		list-style: none;
		width: 100%;
		padding: 10px;
		background-color: #fff;
		border-radius: 3px;
		margin: 5px 0;
		position: relative;
		height: auto;
		font-family: Raleway;
		& .container {
			height: 100%;
			position: relative;
		}
		& .expand {
			position: absolute;
			left: 5px;
			height: 1px;
			width: 100%;
			border: 0.005em dashed #c0c0c0;
			& button {
				border: 0;
				height: 15px;
				background-color: #fff;
				font-family: "Raleway";
				font-size: 22px;
				cursor: pointer;
				color: #c0c0c0;
				outline: none;
				position: absolute;
				margin-top: -12px;
			}
			&.open {
				height: 100px;
			}
		}
		& .detail {
			margin-left: 15px;
			& .overview {
				display: flex;
				& li {
					list-style: none;
					padding: 10px;
					& h6 {
						text-transform: uppercase;
						color: #0a343333;
					}
					flex: 1;
				}
			}
		}
	}
	& .updated {
		font-size: 12px;
		text-align: right;
		margin-right: 10px;
		& span {
			margin-left: 5px;
			color: #c0c0c0;
		}
	}
`;

function DataFilter({ data }) {
	const [expanded, setExpanded] = useState(false);
	return (
		<DataContainer>
			{data.length > 0 &&
				data.map((item, idx) => (
					<DataItem
						key={idx}
						id={idx}
						item={item}
					/>
				))}
		</DataContainer>
	);
}

function Search({ data }) {
	const [searchString, setSearchString] = useState(null);
	const filterData = function() {
		if (!!searchString) {
			return data.filter(value =>
				value.country_name
					.toLowerCase()
					.includes(searchString.toLowerCase())
			);
		}
		return data;
	};
	return (
		<SearchContainer>
			<SearchInput>
				<input
					type="text"
					placeholder="Find your country"
					onChange={e =>
						setSearchString(e.target.value)
					}
				/>
			</SearchInput>
			<DataFilter data={filterData()} />
		</SearchContainer>
	);
}

export default Search;
