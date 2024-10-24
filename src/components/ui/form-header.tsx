import { cn } from "@/utils/tailwind";

export type FormHeaderProps = {
	name: string;
	title: string;
	subtitle: string;
	className?: string;
};

export const FormHeader = ({
	name,
	title,
	subtitle,
	className,
}: FormHeaderProps) => {
	return (
		<div className={cn("flex flex-col", className)}>
			<span className="text-xs font-medium text-js-primary-400">{name}</span>
			<h2 className="text-2xl md:text-3xl lg:text-4xl  mt-3 mb-1 text-js-primary-800 font-bold">
				{title}
			</h2>
			<p className="font-medium text-sm md:text-base text-js-grey-600 mb-8">
				{subtitle}
			</p>
		</div>
	);
};
