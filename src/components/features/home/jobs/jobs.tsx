import JobsLayout from "./layout/jobs-layout";
import { getAllJobs } from "@/services/server/job";

export const Jobs = async ({ params }: { params: URLSearchParams }) => {
	const jobs = await getAllJobs(params);

	return (
		<section id="jobs" className="mt-8">
			<div className="container flex gap-8">
				<JobsLayout jobs={jobs} />
			</div>
		</section>
	);
};
