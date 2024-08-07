"use client";
import { Checkbox } from "./checkbox";

export type CheckboxGroupProps = {
	title: string;
	options: { id: string; name: string; _count: { jobs: number } }[];
};

export const CheckboxGroup = ({ title, options }: CheckboxGroupProps) => {
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
							checked={false}
							onChange={() => {}}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};
