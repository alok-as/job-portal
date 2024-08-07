"use client";
import JobCard from "@/components/ui/job-card";
import { useJobsStore } from "@/store/use-jobs-store";

import type { JobWithDetails } from "@/types/types";
import { cn } from "@/utils/tailwind";

export type JobsGridProps = {
	jobs: JobWithDetails[];
};

export const JobsGrid = ({ jobs }: JobsGridProps) => {
	const layout = useJobsStore((state) => state.layout);

	return (
		<div
			className={cn(
				"grid gap-4",
				layout === "list" ? "grid-cols-1" : "grid-cols-3"
			)}
		>
			{jobs.map((job) => (
				<JobCard key={job.id} {...job} />
			))}
		</div>
	);
};
