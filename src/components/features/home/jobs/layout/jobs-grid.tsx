"use client";
import { JobCard } from "@/components/ui/job-card";

import { cn } from "@/utils/tailwind";
import { useJobsLayoutStore, useJobsStore } from "@/store/use-jobs-store";
import type { JobWithDetails } from "@/types/types";

export type JobsGridProps = {
	initialJobs: JobWithDetails[];
};

export const JobsGrid = ({ initialJobs }: JobsGridProps) => {
	const jobs = useJobsStore((state) => state.jobs);
	const layout = useJobsLayoutStore((state) => state.layout);

	return (
		<div
			className={cn(
				"grid gap-4",
				layout === "list" ? "grid-cols-1" : "grid-cols-3"
			)}
		>
			{(jobs ?? initialJobs).map((job) => (
				<JobCard key={job.id} {...job} />
			))}
		</div>
	);
};
