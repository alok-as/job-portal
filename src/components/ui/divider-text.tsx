import { cn } from "@/utils/tailwind";
import { type ReactNode } from "react";

export type DividerTextProps = {
	className?: string;
	children: ReactNode;
};

export const DividerText = ({ children, className }: DividerTextProps) => {
	return (
		<div
			className={cn(
				"relative text-center after:content after:content-[''] after:absolute after:inset-0 after:top-1/2 after:w-full after:h-px after:bg-[#e0e6f6]",
				className
			)}
		>
			<span className="relative bg-white px-4 z-10 text-js-primary-800 text-sm">
				{children}
			</span>
		</div>
	);
};
