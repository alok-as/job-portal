"use client";
import { useJobsStore } from "@/store/use-jobs-store";
import { cn } from "@/utils/tailwind";
import { AlignJustify, LayoutGrid } from "lucide-react";

export const JobsLayout = () => {
	const { setLayout, layout } = useJobsStore((state) => ({
		setLayout: state.setLayout,
		layout: state.layout,
	}));

	return (
		<div className="mb-8 flex gap-2  items-center justify-end pb-1 border-b border-[#e0e6f7]">
			<button
				type="button"
				className={cn(
					"border border-[#B4C0E0] p-2 rounded-md",
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
					"border border-[#B4C0E0] p-2 rounded-md",
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
