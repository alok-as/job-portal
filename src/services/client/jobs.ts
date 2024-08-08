import { type JobWithDetails } from "@/types/types";

export const getJobs = async (query: string) => {
	try {
		const response = await fetch(`/api/job?${query}`, {
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
