import { type JobWithDetails } from "@/types/types";

export const getJobs = async (query?: string) => {
	try {
		const url = query ? `/api/job?${query}` : "/api/job";
		const response = await fetch(url, {
			method: "GET",
		});
		const data = await response.json();
		return data.data as JobWithDetails[];
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		}

		return [];
	}
};
