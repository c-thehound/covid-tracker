function truncateObject(object, objects_to_keep) {
	let mutable_object = object;
	Object.keys(object).forEach(key => {
		if (!objects_to_keep.includes(key)) {
			delete mutable_object[key];
		}
	});

	return mutable_object;
}

function getUniqueArray(array) {
	const case_records = [];
	let new_array = [];
	array.forEach((obj, idx) => {
		if (!case_records.includes(obj["record_date"]._i)) {
			case_records.push(obj["record_date"]._i);
			new_array.push(obj);
		} // Use record_date to get data per day
	});
	return new_array;
}

export { truncateObject, getUniqueArray };
