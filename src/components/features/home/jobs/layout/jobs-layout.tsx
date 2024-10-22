import { JobsToolbar } from "@/components/features/home/jobs/layout/jobs-toolbar";
import { JobFilters } from "@/components/features/home/jobs/filters/job-filters";
import { JobsGrid } from "@/components/features/home/jobs/layout/jobs-grid";

import type { JobWithDetails } from "@/types/types";

const JobsLayout = ({ jobs }: { jobs: JobWithDetails[] }) => {
	return (
		<>
			<aside className="hidden lg:block basis-3/12 relative">
				<JobFilters />
			</aside>
			<div className="flex-1">
				<div>
					<JobsToolbar />
					<JobsGrid initialJobs={jobs} />
				</div>
			</div>
		</>
	);
};

export default JobsLayout;
