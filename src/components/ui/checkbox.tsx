import { cn } from "@/utils/tailwind";

export type CheckboxProps = {
	label: string;
	value: string;
	count?: number;
	checked: boolean;
	onChange: (value: string, checked: boolean) => void;
};

export const Checkbox = ({
	label,
	value,
	count = 0,
	checked,
	onChange,
}: CheckboxProps) => (
	<div className="flex items-center justify-between">
		<button
			className="flex items-center gap-2 cursor-pointer"
			onClick={(e) => {
				console.log("running");
				e.preventDefault();
				e.stopPropagation();
				onChange(value, !checked);
			}}
		>
			<span
				className={cn(
					"flex relative items-center gap-2 border border-[#e0e6f7] w-6 h-6 rounded-md",
					checked ? "bg-js-primary-400" : "bg-white"
				)}
			>
				{checked && (
					<svg
						width={18}
						height={18}
						viewBox="0 0 24 24"
						fill="none"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					>
						<polyline points="20 6 9 17 4 12" />
					</svg>
				)}
			</span>
			<span className="text-sm font-medium text-js-grey-100">{label}</span>
		</button>

		{count !== undefined && (
			<small className="v text-js-primary-400 bg-[#e0e6f7] text-xs rounded-lg py-1 px-2">
				{count}
			</small>
		)}
	</div>
);
