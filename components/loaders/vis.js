import React from "react";
import ContentLoader from "react-content-loader";
import Loader from "react-loaders";

function MenuLoader() {
	return (
		<ContentLoader
			speed={2}
			height="20px"
			width="100px"
			foregroundColor="#fff"
			backgroundOpacity={0.3}
		>
			<rect
				x="0"
				y="0"
				rx="3"
				ry="3"
				height="20px"
				width="200px"
			/>
		</ContentLoader>
	);
}

function VisLoader({ color }) {
	return (
		<ContentLoader
			speed={2}
			height={"100%"}
			width={"100%"}
			foregroundColor="#fff"
			backgroundOpacity={0.3}
		>
			<rect
				x="0"
				y="0"
				rx="3"
				ry="3"
				height="200"
				width="100%"
			/>
		</ContentLoader>
	);
}

export { VisLoader, MenuLoader };
