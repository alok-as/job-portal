"use client";
import { FormEvent } from "react";
import { useRouter } from "next-nprogress-bar";
import { useSearchParams } from "next/navigation";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/tailwind";

import { type Industry } from "@prisma/client";

export type SearchBoxProps = {
	className?: string;
	industries: Industry[];
};

export const SearchBox = ({ className, industries }: SearchBoxProps) => {
	const router = useRouter();
	const params = useSearchParams();

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const fields = Object.fromEntries(formData.entries());

		const params = new URLSearchParams();
		fields.industry && params.append("industry", fields.industry as string);
		fields.search && params.append("search", fields.search as string);
		const query = params.toString();

		router.push(`/?${query}`);
		router.refresh();
	};

	return (
		<form
			className={cn(
				"bg-white flex flex-col md:flex-row gap-4 shadow-[0_18px_40px_rgba(25,15,9,.1)] rounded-lg p-3",
				className
			)}
			onSubmit={onSubmit}
		>
			<select
				name="industry"
				style={{ backgroundPosition: "left 10px center" }}
				className="outline-none border-none  text-js-grey-100 text-sm bg-[url('/industry.svg')] bg-no-repeat pl-10"
				defaultValue={params.get("industry") ?? ""}
			>
				<option value="">Industry</option>
				{industries.map((industry) => (
					<option key={industry.id} value={industry.slug ?? industry.id}>
						{industry.name}
					</option>
				))}
			</select>

			<select
				name="location"
				style={{ backgroundPosition: "left 10px center" }}
				className="outline-none border-none bg-[url('/industry.svg')] bg-no-repeat pl-10 text-js-grey-100 text-sm "
				defaultValue={params.get("location") ?? ""}
			>
				<option value="">Location</option>
				{industries.map((industry) => (
					<option key={industry.id}>{industry.name}</option>
				))}
			</select>

			<input
				name="search"
				type="text"
				defaultValue={params.get("search") ?? ""}
				style={{ backgroundPosition: "left 10px center" }}
				className="outline-none border-none text-sm  bg-[url('/keyword.svg')] bg-no-repeat pl-8"
				placeholder="Title, Company, Description..."
			/>

			<Button icon={<Search size={16} />}>Search</Button>
		</form>
	);
};
