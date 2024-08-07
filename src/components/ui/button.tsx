import type { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/tailwind";

export const buttonVariants = cva(
	"transition duration-200 disabled:bg-js-grey-600 flex items-center gap-2",
	{
		variants: {
			variant: {
				primary:
					"text-white bg-js-primary-400 rounded-lg hover:bg-js-primary-800 hover:-translate-y-1",
				secondary:
					"text-js-primary-400 bg-[#e0e6f7] capitalize hover:bg-js-primary-400 hover:text-white rounded-md",
			},
			size: {
				sm: "text-xs p-3",
				md: "text-sm py-3 px-6 ",
				lg: "",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	}
);

export type ButtonProps = ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		icon?: ReactNode;
	};

export const Button = ({
	className,
	variant,
	size,
	icon,
	children,
	...props
}: ButtonProps) => (
	<button
		{...props}
		className={cn(buttonVariants({ variant, size }), className)}
	>
		{icon}
		{children}
	</button>
);
