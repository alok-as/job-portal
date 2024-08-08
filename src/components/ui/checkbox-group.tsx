"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Checkbox } from "@/components/ui/checkbox";
import { useJobsStore } from "@/store/use-jobs-store";
import { getJobs } from "@/services/client/jobs";

export type CheckboxGroupProps = {
	name: string;
	title: string;
	options: { id: string; name: string; _count: { jobs: number } }[];
};

export const CheckboxGroup = ({ title, name, options }: CheckboxGroupProps) => {
	const searchParams = useSearchParams();
	const [filters, setFilters] = useState(searchParams.getAll(name));

	const { setJobs, resetJobs, setResetJobs } = useJobsStore((state) => ({
		setJobs: state.setJobs,
		resetJobs: state.resetJobs,
		setResetJobs: state.setResetJobs,
	}));

	const getFilteredJobs = async (query: string) => {
		const jobs = await getJobs(query);
		setJobs(jobs);
	};

	const onChangeFilter = (filterId: string, checked: boolean) => {
		const params = new URLSearchParams(searchParams.toString());

		setFilters((filters) => {
			let newFilters = [...filters];

			if (checked) {
				newFilters.push(filterId);
			} else {
				newFilters = filters.filter((filter) => filter !== filterId);
			}

			params.delete(name);
			newFilters.forEach((filter) => params.append(name, filter));

			const url = new URL(window.location.href);
			url.search = params.toString();
			window.history.pushState({}, "", url.toString());

			getFilteredJobs(params.toString());
			return newFilters;
		});
	};

	useEffect(() => {
		if (resetJobs) {
			setFilters([]);
			setResetJobs(false);
		}
	}, [resetJobs]);

	return (
		<div className="flex flex-col pb-6 border-b border-[#e0e6f7] last:border-transparent">
			<h5 className="mb-4 text-js-primary-800 font-semibold text-xl">
				{title}
			</h5>
			<ul className="flex flex-col gap-4">
				{options.map((option) => (
					<li key={option.id}>
						<Checkbox
							label={option.name}
							count={option._count.jobs}
							value={option.id}
							checked={filters.includes(option.id)}
							onChange={onChangeFilter}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};
