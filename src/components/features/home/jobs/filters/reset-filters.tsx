"use client";
import { useJobsStore } from "@/store/use-jobs-store";
import { getJobs } from "@/services/client/jobs";

export const ResetFilters = () => {
	const { setJobs, setResetJobs } = useJobsStore((state) => ({
		setJobs: state.setJobs,
		setResetJobs: state.setResetJobs,
	}));

	const getFilteredJobs = async () => {
		const url = new URL(window.location.href);
		url.search = "";
		window.history.pushState({}, "", url.toString());

		setResetJobs(true);

		const jobs = await getJobs(url.search);
		setJobs(jobs);
	};

	return (
		<div className="flex items-center justify-between mb-7 border-b border-[#e0e6f7] pb-2">
			<h5 className="text-js-primary-800 font-semibold text-xl">
				Advance Filter
			</h5>
			<button onClick={getFilteredJobs} className="text-sm text-js-grey-500">
				Reset
			</button>
		</div>
	);
};
