import { JobsGrid } from "@/components/features/home/jobs/layout/jobs-grid";
import { getAllJobs } from "@/services/server/job";

export const Listing = async () => {
	const jobs = await getAllJobs();
	return <JobsGrid jobs={jobs} />;
};
