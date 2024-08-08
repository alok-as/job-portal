"use client";
import { AlignJustify, LayoutGrid } from "lucide-react";

import { useJobsLayoutStore } from "@/store/use-jobs-store";
import { cn } from "@/utils/tailwind";

export const JobsToolbar = () => {
	const { setLayout, layout } = useJobsLayoutStore((state) => ({
		setLayout: state.setLayout,
		layout: state.layout,
	}));

	return (
		<div className="mb-8 flex gap-2  items-center justify-end pb-2 border-b border-[#e0e6f7]">
			<button
				type="button"
				className={cn(
					"border border-[#B4C0E0] p-1 rounded-md",
					layout === "list" && "bg-js-primary-400"
				)}
				onClick={() => setLayout("list")}
			>
				<AlignJustify
					size={18}
					className={cn("text-[#B4C0E0]", layout === "list" && "text-white")}
				/>
			</button>
			<button
				type="button"
				className={cn(
					"border border-[#B4C0E0] p-1 rounded-md",
					layout === "grid" && "bg-js-primary-400"
				)}
				onClick={() => setLayout("grid")}
			>
				<LayoutGrid
					size={18}
					className={cn("text-[#B4C0E0]", layout === "grid" && "text-white")}
				/>
			</button>
		</div>
	);
};
