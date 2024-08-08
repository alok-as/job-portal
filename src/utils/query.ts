export const generateSearchParams = (paramsObj: {
	[key: string]: string | string[];
}) => {
	const params = new URLSearchParams();

	for (const [key, value] of Object.entries(paramsObj)) {
		if (Array.isArray(value)) {
			value.forEach((v) => params.append(key, v));
		} else {
			params.append(key, value);
		}
	}

	return params;
};
