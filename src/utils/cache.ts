export const generateJobsCacheKey = (params: URLSearchParams) => {
	const query = params.toString();
	return query.length ? `jobs-${query}` : "jobs";
};
