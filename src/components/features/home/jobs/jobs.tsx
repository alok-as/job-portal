import { unstable_cache } from "next/cache";
import JobsLayout from "@/components/features/home/jobs/layout/jobs-layout";

import { getAllJobs } from "@/services/server/job";
import { generateJobsCacheKey } from "@/utils/cache";

export const Jobs = async ({ params }: { params: URLSearchParams }) => {
	const getJobs = unstable_cache(getAllJobs, [generateJobsCacheKey(params)], {
		revalidate: 3600,
		tags: ["jobs"],
	});

	const jobs = await getJobs(params);

	return (
		<section id="jobs" className="mt-8">
			<div className="container flex gap-8">
				<JobsLayout jobs={jobs} />
			</div>
		</section>
	);
};
