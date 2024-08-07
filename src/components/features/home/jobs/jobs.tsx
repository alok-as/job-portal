import { Suspense } from "react";

import { IndustryFilters } from "@/components/features/home/jobs/filters/industry-filters";
import { LevelFilters } from "@/components/features/home/jobs/filters/level-filters";
import { JobTypeFilters } from "@/components/features/home/jobs/filters/job-type-filters";
import { RemoteFilters } from "@/components/features/home/jobs/filters/remote-filters";

import { Listing } from "@/components/features/home/jobs/listing/listing";
import { JobsLayout } from "./layout/jobs-layout";
import Link from "next/link";

export const Jobs = () => (
	<section id="jobs" className="mt-8">
		<div className="container flex gap-8">
			<aside className="basis-3/12">
				<div className="flex items-center justify-between mb-7 border-b border-[#e0e6f7] pb-2">
					<h5 className="text-js-primary-800 font-semibold text-xl">
						Advance Filter
					</h5>
					<Link href="/" className="text-sm text-js-grey-500">
						Reset
					</Link>
				</div>
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
			</aside>
			<div className="flex-1">
				<div>
					<JobsLayout />
					<Suspense fallback={<p>Loading...</p>}>
						<Listing />
					</Suspense>
				</div>
			</div>
		</div>
	</section>
);
