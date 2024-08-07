import { create } from "zustand";
import { persist } from "zustand/middleware";

type TJobsStore = {
	layout: "grid" | "list";
	setLayout: (layout: "grid" | "list") => void;
};

export const useJobsStore = create<TJobsStore>()(
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
