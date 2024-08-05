import type { ComponentProps } from "react";
import Link from "next/link";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/tailwind";

export const headerItemVariants = cva("transition duration-200", {
	variants: {
		type: {
			primary: "hover:-translate-y-1",
			secondary: "",
		},
	},
	defaultVariants: {
		type: "secondary",
	},
});

export const headerLinkVariants = cva("text-sm transition duration-200", {
	variants: {
		type: {
			primary:
				"py-3 px-6 text-white bg-js-primary-400 rounded-lg hover:bg-js-primary-800",
			secondary:
				"text-js-primary-800 border-b-2 border-b-transparent pb-1 hover:border-b-js-primary-400 hover:text-js-primary-400 font-medium",
		},
	},
	defaultVariants: {
		type: "secondary",
	},
});

export type HeaderLinkProps = ComponentProps<"a"> &
	VariantProps<typeof headerLinkVariants>;

export const HeaderLink = ({
	type,
	href,
	className,
	children,
	...props
}: HeaderLinkProps) => (
	<li className={cn(headerItemVariants({ type }))}>
		<Link
			{...props}
			className={cn(headerLinkVariants({ type }), className)}
			href={href ?? "/"}
		>
			{children}
		</Link>
	</li>
);
