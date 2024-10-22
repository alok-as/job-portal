import { Suspense } from "react";

import { ResetFilters } from "./reset-filters";
import { IndustryFilters } from "@/components/features/home/jobs/filters/industry-filters";
import { LevelFilters } from "@/components/features/home/jobs/filters/level-filters";
import { JobTypeFilters } from "@/components/features/home/jobs/filters/job-type-filters";
import { RemoteFilters } from "@/components/features/home/jobs/filters/remote-filters";

export const JobFilters = () => (
	<div className="sticky top-10 z-20 max-h-[80vh] overflow-y-auto scrollbar">
		<ResetFilters />
		<div className="flex flex-col gap-8">
			<Suspense fallback={<p>Loading Industries...</p>}>
				<IndustryFilters />
			</Suspense>
			<Suspense fallback={<p>Loading Levels...</p>}>
				<LevelFilters />
			</Suspense>
			<Suspense fallback={<p>Loading Job Types...</p>}>
				<JobTypeFilters />
			</Suspense>
			<Suspense fallback={<p>Loading Remotes...</p>}>
				<RemoteFilters />
			</Suspense>
		</div>
	</div>
);
