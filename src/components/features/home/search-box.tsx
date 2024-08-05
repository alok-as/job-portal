"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/tailwind";

import { type Industry } from "@prisma/client";

export type SearchBoxProps = {
	className?: string;
	industries: Industry[];
};

export const SearchBox = ({ className, industries }: SearchBoxProps) => {
	return (
		<form
			className={cn(
				"bg-white flex gap-4 shadow-[0_18px_40px_rgba(25,15,9,.1)] rounded-lg p-3 w-full",
				className
			)}
		>
			<select
				name="industry"
				style={{ backgroundPosition: "left 10px center;" }}
				className="outline-none border-none basis-40 text-js-grey-100 text-sm bg-[url('/industry.svg')] bg-no-repeat pl-8"
			>
				<option value="0">Industry</option>
				{industries.map((industry) => (
					<option key={industry.id}>{industry.name}</option>
				))}
			</select>

			<select
				name="location"
				className="outline-none border-none bg-none text-js-grey-100 text-sm basis-40"
			>
				<option value="0">Location</option>
				{industries.map((industry) => (
					<option key={industry.id}>{industry.name}</option>
				))}
			</select>

			<input
				type="text"
				style={{ backgroundPosition: "left 10px center;" }}
				className="outline-none border-none text-sm flex-1 bg-[url('/keyword.svg')] bg-no-repeat pl-8"
				placeholder="Your Keyword..."
			/>
			<Button>Search</Button>
		</form>
	);
};
