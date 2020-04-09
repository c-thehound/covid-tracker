function generateClassName(string) {
	return string
		.split(" ") // remove spaces
		.join("-")
		.split("'") // remove apostrophes
		.join("")
		.split(",") // remove commas
		.join("-")
		.toLowerCase();
}

export { generateClassName };
