import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/tailwind";

export const buttonVariants = cva(
	"text-sm transition duration-200 disabled:bg-js-grey-600",
	{
		variants: {
			variant: {
				primary:
					"py-3 px-6 text-white bg-js-primary-400 rounded-lg hover:bg-js-primary-800 hover:-translate-y-1",
			},
		},
		defaultVariants: {
			variant: "primary",
		},
	}
);

export type ButtonProps = ComponentProps<"button"> &
	VariantProps<typeof buttonVariants>;

export const Button = ({ className, variant, ...props }: ButtonProps) => (
	<button
		{...props}
		className={cn(buttonVariants({ variant }), className)}
	></button>
);
