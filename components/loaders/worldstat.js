import React from "react";
import ContentLoader from "react-content-loader";

function WorldStatLoader({ bgColor }) {
	return (
		<ContentLoader
			speed={2}
			height={"100%"}
			width={"100%"}
			backgroundOpacity={0.1}
			foregroundOpacity={0.1}
			foregroundColor={bgColor}
			viewBox={60}
		>
			<rect
				x="0"
				y="0"
				rx="3"
				ry="3"
				width="100%"
				height="20px"
			/>
			<rect
				x="0"
				y="18"
				rx="3"
				ry="3"
				width="100%"
				height="20px"
			/>
			<rect
				x="0"
				y="38"
				rx="3"
				ry="3"
				width="100%"
				height="20px"
			/>
		</ContentLoader>
	);
}

export default WorldStatLoader;
