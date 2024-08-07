import { JobsGrid } from "@/components/features/home/jobs/layout/jobs-grid";
import { JobsLayout } from "@/components/features/home/jobs/layout/jobs-layout";
import { getAllJobs } from "@/services/server/job";

export const Listing = async () => {
	const jobs = await getAllJobs();

	return (
		<div>
			<JobsLayout />
			<JobsGrid jobs={jobs} />
		</div>
	);
};
