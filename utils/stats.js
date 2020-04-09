function getTotal(data, category) {
	let ret = 0;
	data.forEach(location => {
		ret += location[category];
	});

	return ret;
}

function getDays() {
	const one_day = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
	const first_case = new Date(2019, 11, 17);
	const today = new Date();

	return Math.round(Math.abs((first_case - today) / one_day));
}

export { getTotal, getDays };
