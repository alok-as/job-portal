import { create } from "zustand";
import { persist } from "zustand/middleware";

import { type JobWithDetails } from "@/types/types";

type TJobsLayoutStore = {
	layout: "grid" | "list";
	setLayout: (layout: "grid" | "list") => void;
};

export const useJobsLayoutStore = create<TJobsLayoutStore>()(
	persist(
		(set) => ({
			layout: "grid",
			setLayout: (layout: "grid" | "list") => set({ layout }),
		}),
		{
			name: "jobs-storage",
		}
	)
);

type TJobsStore = {
	jobs: JobWithDetails[] | null;
	setJobs: (jobs: JobWithDetails[]) => void;
	resetJobs: boolean;
	setResetJobs: (value: boolean) => void;
};

export const useJobsStore = create<TJobsStore>()((set) => ({
	jobs: null,
	setJobs: (jobs: JobWithDetails[]) => set({ jobs }),
	resetJobs: false,
	setResetJobs: (resetJobs: boolean) => set({ resetJobs }),
}));
